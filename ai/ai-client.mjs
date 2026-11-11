export function endpoint(config, pageProtocol = globalThis.location?.protocol) {
  let url;
  try { url = new URL(config.base.trim()); } catch { throw Error('请填写完整服务地址 / Enter a full service URL / 完全なURLを入力してください'); }
  if (url.username || url.password || url.search || url.hash) throw Error('地址不能包含账号、密钥、查询参数或锚点 / No credentials, query or fragment in URL');
  const loopback = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && loopback && pageProtocol !== 'https:')) throw Error('请使用 HTTPS；本机 HTTP 仅限从本机 HTTP 页面连接 / Use HTTPS');
  if (!['compatible', 'ollama'].includes(config.protocol)) throw Error('不支持的协议 / Unsupported protocol');
  const path = url.pathname.replace(/\/+$/, '');
  const suffix = config.protocol === 'ollama' ? '/api/chat' : '/chat/completions';
  url.pathname = path.endsWith(suffix) ? path : path + suffix;
  return url.href;
}

export async function requestAI(config, messages, { signal, fetcher = fetch, pageProtocol } = {}) {
  const url = endpoint(config, pageProtocol);
  if (!config.model?.trim() || config.model.length > 200) throw Error('请填写有效模型名称 / Enter a model ID');
  if (!messages.length || messages.some(m => typeof m.content !== 'string' || m.content.length > 30000)) throw Error('内容为空或超过 30000 字符 / Invalid content length');
  const headers = { 'Content-Type': 'application/json' };
  if (config.key?.trim()) headers.Authorization = `Bearer ${config.key.trim()}`;
  const response = await fetcher(url, {
    method: 'POST', headers, credentials: 'omit', redirect: 'error', referrerPolicy: 'no-referrer', signal,
    body: JSON.stringify({ model: config.model.trim(), messages, stream: false }),
  });
  if (!response.ok) {
    const reason = {401:'密钥无效 / Invalid key',403:'没有权限 / Access denied',404:'地址或模型不存在 / Endpoint or model not found',429:'额度不足或请求过多 / Quota or rate limit'}[response.status];
    throw Error(reason || `服务返回 HTTP ${response.status} / Service error`);
  }
  const reader = response.body?.getReader();
  let raw = '';
  if (reader) {
    const decoder = new TextDecoder(); let size = 0;
    while (true) { const {value,done} = await reader.read(); if(done) break; size += value.byteLength; if(size > 2000000){await reader.cancel(); throw Error('回答过长 / Response too large');} raw += decoder.decode(value,{stream:true}); }
    raw += decoder.decode();
  } else raw = await response.text();
  let data; try { data = JSON.parse(raw); } catch { throw Error('服务未返回有效 JSON / Invalid JSON response'); }
  const content = config.protocol === 'ollama' ? data.message?.content : data.choices?.[0]?.message?.content;
  if (typeof content !== 'string' || !content.trim()) throw Error('模型未返回文字，请检查协议和模型 / No text returned');
  return content;
}

import {endpoint, requestAI} from './ai-client.mjs';
const COPY = {
 zh: ['我的 API','关闭','连接自己的 AI','服务协议','兼容 Chat Completions','Ollama 原生','服务基础地址（兼容接口通常以 /v1 结尾）','模型名称','API 密钥（无鉴权服务可留空）','仅在这台浏览器记住地址和模型，不保存密钥','保存设置','清除设置与密钥','测试连接（会发送一条测试消息）','要发送的内容','发送并生成回答','停止','复制回答','尚未发送','密钥只存在当前页面内存，刷新即清除。发送时，内容和密钥直达你填写的服务；可能产生费用。请使用可信服务及限额密钥。','服务需允许本站跨域请求（CORS）。HTTPS 页面请使用 HTTPS 服务；不能直连时，使用自己管理的兼容网关。','等待服务回答…','已保存；尚未测试连接。','设置已清除。','已取消或超时。','连接失败：检查地址、网络和服务端 CORS 设置。','回答已复制。','复制失败，请手动选择回答。','已收到测试回复，连接可用。','请先填写内容。','发送到：'],
 en: ['My API','Close','Connect your AI','Protocol','Chat Completions compatible','Ollama native','Base URL (compatible APIs often end in /v1)','Model ID','API key (optional for unauthenticated services)','Remember address and model in this browser, never the key','Save settings','Clear settings and key','Test connection (sends a test message)','Content to send','Send and generate','Stop','Copy answer','Nothing sent yet','Your key stays in page memory and clears on reload. Content and key go directly to your chosen service. Requests may cost money; use a trusted service and a limited key.','Your service must allow this site via CORS. HTTPS pages require an HTTPS service. Otherwise use a compatible gateway you control.','Waiting for the service…','Saved; connection not tested.','Settings cleared.','Cancelled or timed out.','Connection failed: check URL, network and server CORS.','Answer copied.','Select and copy the answer manually.','Test reply received; connection works.','Enter content first.','Sending to: '],
 ja: ['自分の API','閉じる','自分の AI に接続','プロトコル','Chat Completions 互換','Ollama ネイティブ','ベースURL（互換APIは通常 /v1 で終わります）','モデル名','APIキー（認証不要の場合は空欄）','このブラウザにURLとモデルのみ保存。キーは保存しません','設定を保存','設定とキーを消去','接続テスト（テスト文を送信）','送信する内容','送信して回答を生成','停止','回答をコピー','まだ送信していません','キーはページのメモリ内だけに保持され、再読み込みで消えます。内容とキーは指定サービスへ直接送信され、料金が発生する場合があります。','サービス側でこのサイトへのCORS許可が必要です。HTTPSページにはHTTPSサービスを使用してください。必要なら自分で管理する互換ゲートウェイを利用してください。','回答を待っています…','保存しました。接続は未テストです。','消去しました。','中止またはタイムアウト。','接続失敗：URL、ネットワーク、CORS設定を確認してください。','コピーしました。','回答を選択してコピーしてください。','テスト回答を受信しました。','内容を入力してください。','送信先：'],
};
class OwnAI extends HTMLElement {
 connectedCallback(){
  if(this.shadowRoot) return;
  this.langCode=document.documentElement.lang.startsWith('ja')?'ja':document.documentElement.lang.startsWith('en')?'en':'zh'; this.attachShadow({mode:'open'});
  this.shadowRoot.innerHTML=`<style>
  :host{font:15px/1.6 system-ui,sans-serif;color:#182332}button,input,select,textarea{font:inherit;box-sizing:border-box}button{cursor:pointer;border:1px solid #bac7d7;border-radius:9px;padding:8px 13px;background:#fff;color:#182332}button:hover{background:#eaf3ff}button:disabled{opacity:.5;cursor:wait}button:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible{outline:3px solid #4194cf;outline-offset:2px}.launch{position:fixed;right:18px;bottom:18px;z-index:50;background:#163b5c;color:#fff;box-shadow:0 4px 20px #0003}.launch:hover{background:#24557e}dialog{color:#182332;background:#f7f9fc;border:1px solid #a9bfd2;border-radius:18px;width:min(720px,calc(100vw - 24px));max-height:88dvh;padding:24px;box-sizing:border-box}dialog::backdrop{background:#071423b8}.head,.actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center}.head{justify-content:space-between}h2{margin:0;font-size:23px}label{display:grid;gap:5px;margin:12px 0}input,select,textarea{width:100%;padding:10px;border:1px solid #aab9c9;border-radius:7px;background:white;color:#182332}textarea{min-height:140px;resize:vertical}.check{display:flex;align-items:start}.check input{width:auto;margin-top:6px}p{margin:10px 0}.hint{font-size:13px;color:#4a5b6d}.primary{background:#163b5c;color:#fff}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#fff;padding:16px;border:1px solid #d6e0e9;border-radius:10px;max-height:45vh;overflow:auto;font:inherit}#destination{overflow-wrap:anywhere}#status{min-height:24px;font-weight:600}@media(max-width:500px){dialog{padding:16px}.actions button{flex:1 1 44%}}
  </style><button class="launch" data-t="0"></button><dialog aria-labelledby="own-ai-title"><div class="head"><h2 id="own-ai-title" data-t="2"></h2><button id="close" data-t="1"></button></div>
  <p class="hint" data-t="18"></p><label><span data-t="3"></span><select id="protocol"><option value="compatible" data-t="4"></option><option value="ollama" data-t="5"></option></select></label>
  <label><span data-t="6"></span><input id="base" type="url" placeholder="https://your-service.example/v1" autocomplete="off" spellcheck="false"></label>
  <label><span data-t="7"></span><input id="model" maxlength="200" placeholder="your-model-id" autocomplete="off"></label>
  <label><span data-t="8"></span><input id="key" type="password" autocomplete="off" spellcheck="false"></label>
  <label class="check"><input id="remember" type="checkbox"><span data-t="9"></span></label>
  <div class="actions"><button id="save" data-t="10"></button><button id="clear" data-t="11"></button><button id="test" data-t="12"></button></div>
  <p class="hint" data-t="19"></p><label><span data-t="13"></span><textarea id="prompt" maxlength="30000"></textarea></label><p class="hint" id="destination"></p>
  <div class="actions"><button class="primary" id="send" data-t="14"></button><button id="stop" data-t="15" disabled></button><button id="copy" data-t="16"></button></div><p id="status" role="status" aria-live="polite"></p><pre id="answer" tabindex="0"></pre></dialog>`;
  this.$=id=>this.shadowRoot.getElementById(id); this.dialog=this.shadowRoot.querySelector('dialog');
  try{const c=JSON.parse(localStorage.getItem('own-ai-settings-v1')||'null');if(c){for(const k of ['base','model','protocol'])if(typeof c[k]==='string')this.$(k).value=c[k];this.$('remember').checked=true;}}catch{}
  this.translate();
  this.openListener=e=>{this.langCode=COPY[e.detail?.locale]?e.detail.locale:this.langCode;this.translate();if(typeof e.detail?.prompt==='string')this.$('prompt').value=e.detail.prompt.slice(0,30000);if(!this.dialog.open)this.dialog.showModal();this.destination();};
  window.addEventListener('own-ai-open',this.openListener);
  this.shadowRoot.querySelector('.launch').onclick=()=>this.openListener({});
  this.$('close').onclick=()=>this.dialog.close();this.dialog.addEventListener('close',()=>this.controller?.abort());
  for(const id of ['base','protocol'])this.$(id).addEventListener('input',()=>{this.controller?.abort();this.$('key').value='';this.$('status').textContent=this.t(21);this.destination();});
  this.$('save').onclick=()=>{try{const c=this.config();endpoint(c);if(!c.model)throw Error(this.t(7));if(this.$('remember').checked)localStorage.setItem('own-ai-settings-v1',JSON.stringify({base:c.base,model:c.model,protocol:c.protocol}));else localStorage.removeItem('own-ai-settings-v1');this.$('status').textContent=this.t(21);}catch(e){this.$('status').textContent=e.message;}};
  this.$('clear').onclick=()=>{this.controller?.abort();for(const id of ['base','model','key','prompt','answer'])this.$(id).value!==undefined?this.$(id).value='':this.$(id).textContent='';this.$('remember').checked=false;try{localStorage.removeItem('own-ai-settings-v1');}catch{}this.$('status').textContent=this.t(22);this.destination();};
  this.$('test').onclick=()=>this.run(true);this.$('send').onclick=()=>this.run(false);this.$('stop').onclick=()=>this.controller?.abort();
  this.$('copy').onclick=async()=>{try{await navigator.clipboard.writeText(this.$('answer').textContent);this.$('status').textContent=this.t(25);}catch{this.$('status').textContent=this.t(26);}};
  this.localeListener=e=>{if(COPY[e.detail]){this.langCode=e.detail;this.translate();}};window.addEventListener('own-ai-locale',this.localeListener);
 }
 disconnectedCallback(){this.controller?.abort();window.removeEventListener('own-ai-open',this.openListener);window.removeEventListener('own-ai-locale',this.localeListener);}
 t(i){return COPY[this.langCode][i];}
 translate(){this.shadowRoot.querySelectorAll('[data-t]').forEach(el=>el.textContent=this.t(Number(el.dataset.t)));this.$('status').textContent=this.t(17);this.destination();}
 config(){return Object.fromEntries(['base','model','key','protocol'].map(k=>[k,this.$(k).value.trim()]));}
 destination(){try{this.$('destination').textContent=this.t(29)+endpoint(this.config());}catch{this.$('destination').textContent='';}}
 async run(test){
  if(this.controller)return;
  const prompt=test?'Reply with OK.':this.$('prompt').value.trim();if(!prompt){this.$('status').textContent=this.t(28);return;}
  this.controller=new AbortController();const timer=setTimeout(()=>this.controller?.abort(),60000);
  for(const id of ['send','test','save','base','model','protocol','key'])this.$(id).disabled=true;this.$('stop').disabled=false;this.$('answer').textContent='';this.$('status').textContent=this.t(20);
  try{const answer=await requestAI(this.config(),[{role:'user',content:prompt}],{signal:this.controller.signal});if(!this.controller.signal.aborted){this.$('answer').textContent=answer;this.$('status').textContent=test?this.t(27):'';}}
  catch(e){this.$('status').textContent=this.controller.signal.aborted?this.t(23):e instanceof TypeError?this.t(24):e.message;}
  finally{clearTimeout(timer);this.controller=null;for(const id of ['send','test','save','base','model','protocol','key'])this.$(id).disabled=false;this.$('stop').disabled=true;}
 }
}
if(!customElements.get('own-ai'))customElements.define('own-ai',OwnAI);

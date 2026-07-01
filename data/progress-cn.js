window.CONTENT_DATABASES = window.CONTENT_DATABASES || {};
window.CONTENT_DATABASES.progressCn = {
  label: "中文：我太想进步了",
  language: "zh-CN",
  topic: "眼力见、人情世故、进步型社交判断",
  cases: [
    {
      context: "职场",
      situation: "老板说“这个不急”",
      question: "老板说“这个不急，你有空再弄”。你应该怎么理解？",
      keywords: ["不急", "老板", "有空", "任务", "职场"],
      answer: "先别把“不急”理解成“可以无限拖”。更稳的是确认优先级和交付时间，比如“我今天先把 A 做完，明早给您这个版本可以吗？”",
      options: [
        { text: "真的不急，先放几天。", score: 1, note: "容易把客气话当成无需求。" },
        { text: "确认优先级，并给一个完成时间。", score: 3, note: "正确。既接住任务，也避免误读对方的缓和语气。" },
        { text: "马上停掉所有事去做。", score: 2, note: "积极但可能打乱真正优先事项。" }
      ]
    },
    {
      context: "饭局",
      situation: "别人说“随便点”",
      question: "请客的人说“随便点，别客气”。你应该怎么点菜？",
      keywords: ["饭局", "随便", "点菜", "请客", "领导"],
      answer: "“随便点”通常是礼貌姿态，不是预算无限。点大众菜和中等价位，再把补充权交回请客的人。",
      options: [
        { text: "点最贵的，证明自己真不客气。", score: 1, note: "这会错读礼貌姿态。" },
        { text: "点安全大众菜，再让请客的人补充。", score: 3, note: "正确。保住气氛，也不抢主导权。" },
        { text: "只点青菜，显得自己懂事。", score: 2, note: "过度小心也会让场面变尴尬。" }
      ]
    },
    {
      context: "群聊",
      situation: "没人回复",
      question: "你在群里提了一个方案，十分钟没人回。下一句怎么发更稳？",
      keywords: ["群聊", "没人回复", "沉默", "方案", "再问"],
      answer: "没人回复不一定是拒绝，可能是大家不想先表态。可以降低压力并推进：“我先按这个版本暂定，有意见再改。”",
      options: [
        { text: "“你们怎么都不说话？”", score: 1, note: "会把沉默变成压力。" },
        { text: "“我先暂定这个版本，大家有意见再改。”", score: 3, note: "正确。给台阶，也推进事情。" },
        { text: "立刻撤回消息。", score: 2, note: "撤回可能反而更显眼。" }
      ]
    }
  ]
};

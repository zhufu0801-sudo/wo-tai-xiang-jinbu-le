window.SITE_DATA = {
  i18n: {
    zh: {},
    ja: {}
  },
  ranks: {
    zh: {
      xianwaiRanked: [
        { title: "听弦宗师", copy: "你能分清善意提醒、责任边界和场面台阶。" },
        { title: "话外音侦察员", copy: "你多数时候能听懂暗示，但还需要稳定输出。" },
        { title: "半熟人情观察员", copy: "你有感觉，但容易被字面意思带跑。" },
        { title: "字面意思守门员", copy: "你很真诚，但需要多看语气、关系和制度背景。" }
      ],
      workplaceRanked: [
        { title: "正处级场面人", copy: "能读局、能给台阶、能保边界。" },
        { title: "副科长观察员", copy: "大多数场面能稳住，但复杂关系还要练。" },
        { title: "科员实习生", copy: "能看懂一部分暗示，容易在压力下直球。" },
        { title: "办事大厅新人", copy: "先别急着反驳，多看规则、责任和谁在帮你。" }
      ]
    },
    ja: {
      xianwaiRanked: [
        { title: "言外マスター", copy: "遠回しな注意と本音の境界をかなり読めています。" },
        { title: "空気読み上級者", copy: "多くの場面で相手の余白を残せます。" },
        { title: "半熟ウォッチャー", copy: "気づきはありますが、文字通りに寄る時があります。" },
        { title: "直球新人", copy: "まずは表情、関係性、責任の所在を一緒に見ましょう。" }
      ],
      workplaceRanked: [
        { title: "部長クラス", copy: "場の空気、責任範囲、次の一手が見えています。" },
        { title: "課長代理", copy: "かなり読めています。曖昧な指示の処理を磨きましょう。" },
        { title: "若手社員", copy: "基本は押さえていますが、確認の仕方を練習しましょう。" },
        { title: "新入社員", copy: "焦らず、相手の立場と場の流れを観察しましょう。" }
      ]
    }
  },
  xianwai: {
    zh: {
      cases: [
        {
          category: "窗口办事",
          subcategory: "善意提醒",
          source: "抖音高赞评论整理",
          question: "窗口人员反复说“这个材料必须有委托书才能办哦”。你最应该听懂什么？",
          explanation: "评论区高赞案例里，很多窗口话外音不是为难人，而是在提醒你换一种合规说法或补一个形式材料。",
          options: [
            { text: "他就是故意卡我，继续争。", score: 1, note: "这样会把善意提醒变成冲突。" },
            { text: "先确认规则，再按规则补材料或换合规路径。", score: 3, note: "正确。听懂制度边界，也保护双方。" },
            { text: "让他通融，反正大家都知道情况。", score: 2, note: "可能有监控和录音，窗口人员不能替你担风险。" }
          ]
        },
        {
          category: "银行",
          subcategory: "继承取款",
          source: "抖音高赞评论整理",
          question: "家人去世后去银行取钱，工作人员提示“按规定要公证”。有人提醒你“换一家，上来就说取钱”。这类提醒的核心是什么？",
          explanation: "评论区高赞讨论集中在：有些业务说法会触发复杂流程，工作人员也受录音和制度限制。",
          options: [
            { text: "工作人员都在刁难我。", score: 1, note: "忽略了制度和留痕压力。" },
            { text: "理解不同说法会触发不同流程，风险自己承担。", score: 3, note: "正确。走便捷路径也要自己承担边界。" },
            { text: "让提醒你的人替你承担责任。", score: 1, note: "这正是评论里反复说不要做的事。" }
          ]
        },
        {
          category: "服务业",
          subcategory: "客户丢件",
          source: "抖音高赞评论整理",
          question: "客服说：“如果是你没收到，我们补寄；如果是你弄丢，需要走流程并付费。”客户坚持说自己收到了但丢了，还要求免费补。问题出在哪？",
          explanation: "这是评论区很典型的“听不懂人话”：对方已经把更省事的路径摆出来，但客户坚持走更麻烦路径。",
          options: [
            { text: "客服业务能力差。", score: 1, note: "客服其实已经给了两条路径。" },
            { text: "客户没听懂对方提供的台阶。", score: 3, note: "正确。弦外之意是：请选能快速解决的合规说法。" },
            { text: "双方都别说话，直接投诉。", score: 1, note: "投诉不能解决误读。" }
          ]
        },
        {
          category: "交通执法",
          subcategory: "可选程序",
          source: "抖音高赞评论整理",
          question: "交警多次说“有异议可以去抽血”。这句话的弦外之意可能是什么？",
          explanation: "评论区提到类似案例：如果数值临界，抽血复核可能影响结果。重点是听懂对方给出的合法选项。",
          options: [
            { text: "他只是例行废话，不用理。", score: 1, note: "可能错过合法复核机会。" },
            { text: "这是一个可选择程序，先判断是否对自己有利。", score: 3, note: "正确。听懂选项背后的机会。" },
            { text: "马上承认，不要麻烦别人。", score: 2, note: "态度好不等于放弃正当权利。" }
          ]
        },
        {
          category: "物业",
          subcategory: "规则边界",
          source: "抖音高赞评论整理",
          question: "物业说“按规定飘窗、门、排水都不能改”。业主说“别人家都改了”。这时该读懂什么？",
          explanation: "评论里物业案例说明：执行者不一定是为难你，他们只是在自己的责任范围内说话。",
          options: [
            { text: "提高音量，让物业去管别人。", score: 1, note: "这会把问题变成对抗。" },
            { text: "理解对方只能按规则答复，另查正式申诉或审批路径。", score: 3, note: "正确。别把执行者当成规则制定者。" },
            { text: "偷偷改，反正别人也改了。", score: 1, note: "风险会回到自己身上。" }
          ]
        },
        {
          category: "饭局",
          subcategory: "客不带客",
          source: "抖音高赞评论整理",
          question: "你请朋友吃饭，朋友没提前说就带来三四个人。最准确的判断是？",
          explanation: "第二个视频评论区高赞观点是“敢客带客的，就没拿你当回事”。这是饭局边界题。",
          options: [
            { text: "说明他人缘好，应该热情招待所有人。", score: 1, note: "忽略了请客预算和主客边界。" },
            { text: "这是越界，之后要明确人数和预算边界。", score: 3, note: "正确。客不带客是基本场面规则。" },
            { text: "当场翻脸赶走所有人。", score: 2, note: "边界要立，但当场处理也要保留体面。" }
          ]
        },
        {
          category: "做客",
          subcategory: "送客暗示",
          source: "抖音高赞评论整理",
          question: "主人突然要出门，说“你在家看电视等我”。你该怎么判断？",
          explanation: "评论区很多人说自己小时候真会留下。这个题的关键是关系远近：不熟时可能是送客的委婉说法，亲戚熟人则可能真让你等。",
          options: [
            { text: "任何情况都留下。", score: 1, note: "不熟的人家里这样做很容易尴尬。" },
            { text: "看关系远近；不熟就顺势告辞，熟亲戚可确认后留下。", score: 3, note: "正确。弦外之意取决于关系。" },
            { text: "立刻指责主人赶客。", score: 1, note: "即使是送客，也要留台阶。" }
          ]
        },
        {
          category: "饭局",
          subcategory: "临时邀请",
          source: "抖音高赞评论整理",
          question: "朋友说“菜点好了，我请客，你快来”。你能不能去？",
          explanation: "评论区对“临时饭局要不要去”分歧很大，重点是判断是否真有位置、是否只是凑数、是否会破坏原局。",
          options: [
            { text: "只要说请客就马上去。", score: 1, note: "可能是临时凑数，也可能让饭局尴尬。" },
            { text: "先问清楚人数、场合和是否方便加人。", score: 3, note: "正确。先确认你是不是被真诚邀请。" },
            { text: "所有临时邀请都拒绝。", score: 2, note: "太绝对，熟人临时约也可能没问题。" }
          ]
        }
      ]
    },
    ja: {
      cases: [
        {
          category: "窓口",
          subcategory: "やさしい注意",
          source: "コメント事例を日本語化",
          question: "窓口で「委任状が必要です」と何度も言われました。言外の意味は？",
          explanation: "相手は意地悪ではなく、制度上できる言い方や必要書類を示している場合があります。",
          options: [
            { text: "相手がわざと邪魔している。", score: 1, note: "制度上の制約を見落としています。" },
            { text: "必要な形式を整えれば進む、と理解する。", score: 3, note: "正解。相手の責任範囲も守れます。" },
            { text: "強く頼めば通してくれる。", score: 1, note: "録音や規則がある場面では危険です。" }
          ]
        },
        {
          category: "来客",
          subcategory: "帰ってほしいサイン",
          source: "コメント事例を日本語化",
          question: "相手が出かける時に「テレビでも見て待ってて」と言いました。どうする？",
          explanation: "関係性が浅いなら、実は帰るタイミングを作ってくれている可能性があります。",
          options: [
            { text: "必ずそのまま待つ。", score: 1, note: "関係が浅いと空気を読めていないかもしれません。" },
            { text: "関係性を見て、浅ければ自然に帰る。", score: 3, note: "正解。相手に逃げ道を残します。" },
            { text: "なぜ追い出すのか聞く。", score: 1, note: "相手の建前を壊します。" }
          ]
        },
        {
          category: "食事",
          subcategory: "客が客を連れてくる",
          source: "コメント事例を日本語化",
          question: "食事に誘った友人が、事前連絡なしで別の友人を連れてきました。どう読む？",
          explanation: "招待した側の予算と主導権を無視している可能性があります。",
          options: [
            { text: "にぎやかになって良いことだけ。", score: 1, note: "招待側の負担を見落としています。" },
            { text: "境界を越えているので、次回から人数を明確にする。", score: 3, note: "正解。場を壊さず次の線引きをします。" },
            { text: "その場で全員を責める。", score: 2, note: "境界は必要ですが、その場の体面もあります。" }
          ]
        }
      ]
    }
  },
  workplace: {
    zh: {
      cases: [
        { category: "官场", subcategory: "政府机关", question: "领导说“这个材料你再斟酌一下”。你该怎么做？", explanation: "官场表达常用模糊词保留空间，“斟酌”通常意味着方向、措辞或风险点需要改。", options: [{ text: "原样交上去。", score: 1, note: "没有听懂修改信号。" }, { text: "请领导点出风险点，并先改敏感措辞。", score: 3, note: "正确。先处理风险和口径。" }, { text: "问领导是不是不满意我。", score: 1, note: "把事变成人身情绪了。" }] },
        { category: "职场", subcategory: "上下级关系", question: "上司说“你先下班吧”，但团队还在赶项目。你怎么做？", explanation: "职场里要看团队状态，别只听字面。", options: [{ text: "立刻走。", score: 1, note: "可能忽略团队空气。" }, { text: "确认自己是否还有能收尾的部分。", score: 3, note: "正确。既不硬赖，也不失礼。" }, { text: "留下装忙到半夜。", score: 2, note: "用力过猛。" }] },
        { category: "酒场", subcategory: "居酒屋聚餐", question: "前辈说“今天随便喝，别拘束”。你怎么喝？", explanation: "别拘束不是失控许可。", options: [{ text: "喝到断片。", score: 1, note: "完全误读。" }, { text: "跟节奏，小杯敬酒，保留清醒。", score: 3, note: "正确。能融入也能收住。" }, { text: "完全不碰杯。", score: 2, note: "可以不喝，但要有替代表达。" }] },
        { category: "商场", subcategory: "客户关系", question: "客户说“我再考虑一下”。下一句最稳的是？", explanation: "这可能是拒绝，也可能是顾虑没被解决。", options: [{ text: "继续强推优惠。", score: 1, note: "会增加压力。" }, { text: "问“您主要还在比较哪一点？”", score: 3, note: "正确。把模糊拒绝转成问题。" }, { text: "直接放弃。", score: 2, note: "可能太早。" }] },
        { category: "情场", subcategory: "暧昧约会", question: "对方说“最近有点忙，之后再约”。你怎么判断？", explanation: "看对方是否主动补具体时间。", options: [{ text: "立刻追问哪天。", score: 1, note: "压力过大。" }, { text: "轻松回应，观察是否主动给时间。", score: 3, note: "正确。" }, { text: "马上拉黑。", score: 2, note: "太快下结论。" }] },
        { category: "考场", subcategory: "面试", question: "面试官说“你还有什么想补充的吗？”你怎么答？", explanation: "这是补救和强化匹配度的机会。", options: [{ text: "说没有。", score: 1, note: "浪费机会。" }, { text: "用一句话补强岗位匹配。", score: 3, note: "正确。" }, { text: "开始讲十分钟人生故事。", score: 1, note: "失焦。" }] },
        { category: "会场", subcategory: "会议发言", question: "主持人说“时间关系，我们简单一点”。你怎么发言？", explanation: "这是明确收束信号。", options: [{ text: "照原稿念完。", score: 1, note: "没读到时间压力。" }, { text: "只讲结论和请求。", score: 3, note: "正确。" }, { text: "不说了直接坐下。", score: 2, note: "过度收缩。" }] },
        { category: "战场", subcategory: "竞争策略", question: "竞品突然降价，你的团队要求马上跟降。你怎么判断？", explanation: "竞争不是只看动作，还要看成本和目的。", options: [{ text: "马上跟降。", score: 1, note: "可能被带节奏。" }, { text: "先判断对方库存、现金流和目标客户。", score: 3, note: "正确。先读局。" }, { text: "完全不理。", score: 2, note: "可能错过风险。" }] },
        { category: "秀场", subcategory: "娱乐圈", question: "制作人说“你很有特色”。新人该怎么听？", explanation: "可能是肯定，也可能是委婉表示不适配。", options: [{ text: "已经稳了。", score: 1, note: "过度乐观。" }, { text: "追问适合哪类角色或方向。", score: 3, note: "正确。把模糊评价转为定位。" }, { text: "当场否定自己。", score: 2, note: "太消极。" }] },
        { category: "赌场", subcategory: "风险决策", question: "朋友说“这把稳赚”。你该怎么做？", explanation: "越是绝对话术，越要看风险。", options: [{ text: "全押。", score: 1, note: "风险失控。" }, { text: "问亏损上限和退出条件。", score: 3, note: "正确。" }, { text: "不问原因直接骂他。", score: 2, note: "可以拒绝，但不用失礼。" }] },
        { category: "市场", subcategory: "商品交易", question: "卖家说“别人都这个价”。你怎么回？", explanation: "这是锚定话术。", options: [{ text: "立刻接受。", score: 1, note: "被锚定。" }, { text: "拿同类价格和条件比较。", score: 3, note: "正确。" }, { text: "直接说他骗人。", score: 1, note: "容易谈崩。" }] },
        { category: "饭局场", subcategory: "座位买单", question: "长辈说“你们年轻人坐随便点”。你怎么坐？", explanation: "座位常常仍有秩序。", options: [{ text: "直接坐主位。", score: 1, note: "不稳。" }, { text: "等主客坐定，自己坐边位。", score: 3, note: "正确。" }, { text: "站着不坐。", score: 2, note: "太紧张。" }] },
        { category: "家庭场", subcategory: "亲戚关系", question: "亲戚说“你现在混得不错吧”。你怎么回？", explanation: "既可能寒暄，也可能引出比较或借钱。", options: [{ text: "详细报收入。", score: 1, note: "暴露太多。" }, { text: "谦虚带过，转问对方近况。", score: 3, note: "正确。" }, { text: "直接说不关你事。", score: 1, note: "太硬。" }] },
        { category: "校园场", subcategory: "前后辈", question: "学长说“这活你练练手”。你怎么判断？", explanation: "可能是机会，也可能是甩活。", options: [{ text: "全接。", score: 1, note: "边界不清。" }, { text: "问截止时间、成果标准和署名。", score: 3, note: "正确。" }, { text: "直接拒绝所有事。", score: 2, note: "可能错过机会。" }] },
        { category: "网络场", subcategory: "社交媒体", question: "别人评论“你开心就好”。你怎么读？", explanation: "常常是结束争论的冷处理。", options: [{ text: "他完全支持我。", score: 1, note: "忽略语气。" }, { text: "停止争辩，必要时私下澄清。", score: 3, note: "正确。" }, { text: "继续输出长文。", score: 1, note: "会升级。" }] },
        { category: "社交场", subcategory: "派对联谊", question: "对方说“我去拿点喝的”。很久没回来。你怎么做？", explanation: "可能是礼貌脱身。", options: [{ text: "一直等。", score: 1, note: "太被动。" }, { text: "自然转向其他人，不追问。", score: 3, note: "正确。" }, { text: "全场找人质问。", score: 1, note: "尴尬。" }] },
        { category: "婚礼场", subcategory: "红包祝辞", question: "新人说“人来就好”。红包怎么处理？", explanation: "客套话不等于不用礼数。", options: [{ text: "真的空手去。", score: 1, note: "误读。" }, { text: "按关系和当地习惯准备。", score: 3, note: "正确。" }, { text: "带超大红包压别人。", score: 2, note: "也可能失衡。" }] },
        { category: "葬礼场", subcategory: "丧葬礼仪", question: "家属说“简单一点就好”。你怎么慰问？", explanation: "低调、少问细节、表达陪伴。", options: [{ text: "追问病因细节。", score: 1, note: "失礼。" }, { text: "简短慰问，按习俗致意。", score: 3, note: "正确。" }, { text: "说很多大道理。", score: 1, note: "会增加负担。" }] },
        { category: "服务业场", subcategory: "接客文化", question: "顾客说“我就问问”。销售怎么跟？", explanation: "可能是怕被强推。", options: [{ text: "立刻连环介绍。", score: 1, note: "压力太大。" }, { text: "给空间，同时提供一个轻量入口。", score: 3, note: "正确。" }, { text: "完全不理。", score: 2, note: "服务不足。" }] },
        { category: "工地场", subcategory: "师徒关系", question: "师傅说“这个你自己看着办”。新人怎么做？", explanation: "工地安全不能靠猜。", options: [{ text: "随便做。", score: 1, note: "危险。" }, { text: "先复述方案，请师傅确认安全点。", score: 3, note: "正确。" }, { text: "什么都不做。", score: 2, note: "没有推进。" }] }
      ]
    },
    ja: {
      cases: [
        { category: "会社", subcategory: "上司・部下", question: "上司が「今日はもう帰っていいよ」と言いました。どうする？", explanation: "周囲と自分の残作業を確認するのが安全です。", options: [{ text: "すぐ帰る。", score: 1, note: "文字通りすぎます。" }, { text: "手伝うことがないか確認する。", score: 3, note: "正解。" }, { text: "上司にも帰れと言う。", score: 2, note: "関係性次第です。" }] },
        { category: "飲み会", subcategory: "先輩との酒席", question: "先輩が「遠慮しないで」と言いました。どう飲む？", explanation: "遠慮しないは暴走していい意味ではありません。", options: [{ text: "限界まで飲む。", score: 1, note: "危険です。" }, { text: "場に合わせて少量で返す。", score: 3, note: "正解。" }, { text: "無言で断る。", score: 2, note: "代替表現が必要です。" }] },
        { category: "先輩・後輩", subcategory: "学校", question: "先輩が「練習になるよ」と仕事を渡しました。どう判断する？", explanation: "機会か押し付けか、条件確認が必要です。", options: [{ text: "全部引き受ける。", score: 1, note: "境界が曖昧です。" }, { text: "締切と成果物を確認する。", score: 3, note: "正解。" }, { text: "全部拒否する。", score: 2, note: "機会を逃すかもしれません。" }] },
        { category: "恋愛", subcategory: "誘い", question: "相手が「最近忙しい」と言いました。どう読む？", explanation: "本当に忙しい場合も、距離を置きたい場合もあります。", options: [{ text: "すぐ日程を迫る。", score: 1, note: "圧が強いです。" }, { text: "軽く受けて、相手が代案を出すか見る。", score: 3, note: "正解。" }, { text: "即ブロック。", score: 2, note: "早すぎます。" }] },
        { category: "親戚付き合い", subcategory: "家庭", question: "親戚が「最近順調？」と聞きました。どう返す？", explanation: "比較や頼み事につながる場合もあります。", options: [{ text: "収入まで詳しく話す。", score: 1, note: "情報を出しすぎです。" }, { text: "ほどよく濁して相手に話題を返す。", score: 3, note: "正解。" }, { text: "関係ないと言う。", score: 1, note: "強すぎます。" }] },
        { category: "建設現場", subcategory: "安全確認", question: "親方が「見てやっといて」と言いました。新人は？", explanation: "現場安全は推測で動かないこと。", options: [{ text: "自己判断で進める。", score: 1, note: "危険です。" }, { text: "手順を復唱して確認する。", score: 3, note: "正解。" }, { text: "何もしない。", score: 2, note: "止まりすぎです。" }] },
        { category: "役所・行政", subcategory: "窓口", question: "職員が「この書類が必要です」と繰り返します。どうする？", explanation: "意地悪ではなく制度の境界を示しています。", options: [{ text: "強く抗議する。", score: 1, note: "進みません。" }, { text: "必要形式を確認し、補えるか聞く。", score: 3, note: "正解。" }, { text: "諦める。", score: 2, note: "まだ道があります。" }] },
        { category: "SNS", subcategory: "コメント", question: "相手が「好きにすれば」と返信しました。どうする？", explanation: "議論を終えたいサインかもしれません。", options: [{ text: "支持されたと思う。", score: 1, note: "冷たさを見落としています。" }, { text: "一旦止めて、必要なら別で確認する。", score: 3, note: "正解。" }, { text: "さらに長文で返す。", score: 1, note: "悪化しやすいです。" }] }
      ]
    }
  },
  toasts: {
    zh: {
      items: [
        { occasion: "商务宴请", tone: "稳重", title: "合作开场", text: "这杯酒敬各位，敬信任，也敬接下来一起把事情做成。愿今天谈的是合作，明天见的是成果。", tip: "适合第一轮，语气稳，不夸张。" },
        { occasion: "朋友聚会", tone: "轻松", title: "朋友相聚", text: "这杯敬难得相聚，愿大家忙有所得，闲有所乐，见面还是老样子。", tip: "适合朋友局，不端着。" },
        { occasion: "职场聚餐", tone: "得体", title: "团队感谢", text: "这杯敬团队，敬大家平时互相补位、互相成全。愿我们事能办漂亮，人也都顺心。", tip: "适合部门聚餐。" },
        { occasion: "婚礼", tone: "祝福", title: "新人祝福", text: "这杯敬新人，愿两位往后有商有量，有笑有光，把平凡日子过成彼此的好日子。", tip: "适合婚礼敬酒。" },
        { occasion: "长辈家宴", tone: "尊敬", title: "敬长辈", text: "这杯敬长辈，祝您身体康健、心情舒畅。我们晚辈也会把日子过好，让您少操心、多放心。", tip: "适合家庭场。" },
        { occasion: "同学聚会", tone: "怀旧", title: "同窗情", text: "这杯敬当年，也敬现在。愿大家走了很远，心里还留着能一起说笑的位置。", tip: "适合同学会。" }
      ]
    },
    ja: {
      items: [
        { occasion: "会社宴会", tone: "丁寧", title: "チームへ", text: "本日は皆さまに感謝して、乾杯させていただきます。これからも力を合わせて、良い結果につなげていきましょう。", tip: "会社の一次会に使いやすい表現です。" },
        { occasion: "友人", tone: "カジュアル", title: "再会", text: "久しぶりに集まれたことに乾杯。忙しい毎日の中でも、こうして笑える時間を大事にしましょう。", tip: "友人同士向けです。" },
        { occasion: "結婚式", tone: "祝福", title: "新郎新婦へ", text: "お二人の新しい門出に乾杯。これからの日々が、温かく、明るく、笑顔の多いものになりますように。", tip: "披露宴で無難に使えます。" },
        { occasion: "家族", tone: "敬意", title: "家族へ", text: "家族みんなの健康と、今日こうして集まれたことに感謝して、乾杯。", tip: "親戚付き合いでも使いやすいです。" }
      ]
    }
  }
};

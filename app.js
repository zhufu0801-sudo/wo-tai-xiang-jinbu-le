const DATA = window.SITE_DATA;

const state = {
  route: "home",
  language: "zh",
  currentItem: null,
  score: 0,
  answered: 0,
  rankedQueue: [],
  rankedTotal: 0,
  pendingFinalScore: false
};

const homeView = document.querySelector("#homeView");
const appView = document.querySelector("#appView");
const viewEyebrow = document.querySelector("#viewEyebrow");
const viewTitle = document.querySelector("#viewTitle");
const languageSelect = document.querySelector("#languageSelect");
const categorySelect = document.querySelector("#categorySelect");
const subcategorySelect = document.querySelector("#subcategorySelect");
const randomButton = document.querySelector("#randomButton");
const contentCard = document.querySelector("#contentCard");
const resultCard = document.querySelector("#resultCard");
const filters = document.querySelector("#filters");

const routeMeta = {
  xianwai: { title: "弦外之音", eyebrow: "听懂善意提醒和话外音", mode: "practice", source: "xianwai" },
  xianwaiRanked: { title: "弦外之音排位模式", eyebrow: "随机题组 / 全部答完后评级", mode: "ranked", source: "xianwai" },
  workplace: { title: "职场模拟器", eyebrow: "大分类 / 小分类 / 场景题", mode: "practice", source: "workplace" },
  workplaceRanked: { title: "职场模拟器排位模式", eyebrow: "随机题组 / 全部答完后职级评级", mode: "ranked", source: "workplace" },
  toast: { title: "敬酒词", eyebrow: "随机祝福语 / 场所筛选", mode: "toast", source: "toasts" }
};

function dataSource() {
  const meta = routeMeta[state.route];
  return DATA[meta.source][state.language];
}

function setRoute(route) {
  state.route = route;
  resetRankedState();
  homeView.classList.toggle("is-hidden", route !== "home");
  appView.classList.toggle("is-hidden", route === "home");

  if (route === "home") return;

  const meta = routeMeta[route];
  viewTitle.textContent = meta.title;
  viewEyebrow.textContent = meta.eyebrow;
  randomButton.textContent = meta.mode === "toast" ? "随机敬酒词" : meta.mode === "ranked" ? "开始排位" : "随机一题";
  filters.classList.remove("is-hidden");
  setupFilters();
  renderCurrent();
}

function resetRankedState() {
  state.score = 0;
  state.answered = 0;
  state.rankedQueue = [];
  state.rankedTotal = 0;
  state.pendingFinalScore = false;
}

function unique(values) {
  return [...new Set(values)];
}

function fillSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
}

function currentItems() {
  const source = dataSource();
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;

  if (routeMeta[state.route].mode === "toast") {
    return source.items.filter((item) => category === "全部" || item.occasion === category);
  }

  return source.cases.filter((item) => {
    const categoryOk = category === "全部" || item.category === category;
    const subcategoryOk = subcategory === "全部" || item.subcategory === subcategory;
    return categoryOk && subcategoryOk;
  });
}

function setupFilters() {
  const source = dataSource();
  const isToast = routeMeta[state.route].mode === "toast";

  if (isToast) {
    fillSelect(categorySelect, ["全部", ...unique(source.items.map((item) => item.occasion))]);
    fillSelect(subcategorySelect, ["全部"]);
    subcategorySelect.disabled = true;
    return;
  }

  fillSelect(categorySelect, ["全部", ...unique(source.cases.map((item) => item.category))]);
  refreshSubcategories();
}

function refreshSubcategories() {
  const source = dataSource();
  const category = categorySelect.value;
  const pool = category === "全部" ? source.cases : source.cases.filter((item) => item.category === category);
  fillSelect(subcategorySelect, ["全部", ...unique(pool.map((item) => item.subcategory))]);
  subcategorySelect.disabled = false;
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function renderCurrent() {
  resultCard.classList.add("is-hidden");
  const meta = routeMeta[state.route];

  if (meta.mode === "toast") {
    renderToast();
  } else if (meta.mode === "ranked") {
    renderRankedIntro();
  } else {
    renderQuestion(pickRandom(currentItems()));
  }
}

function renderQuestion(item) {
  state.currentItem = item;
  resultCard.classList.add("is-hidden");
  contentCard.innerHTML = `
    <div class="meta-row">
      <span class="pill">${item.category}</span>
      <span class="pill">${item.subcategory}</span>
      <span class="pill">${item.source || "原创题库"}</span>
      ${routeMeta[state.route].mode === "ranked" ? `<span class="pill">第 ${state.answered + 1} / ${state.rankedTotal} 题</span>` : ""}
    </div>
    <p class="question">${item.question}</p>
    <div class="answer-list">
      ${item.options.map((option, index) => `
        <button class="answer-button" type="button" data-index="${index}">
          <span class="answer-key">${String.fromCharCode(65 + index)}.</span>
          <span>${option.text}</span>
        </button>
      `).join("")}
    </div>
  `;

  contentCard.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.index)));
  });
}

function chooseAnswer(index) {
  const item = state.currentItem;
  const option = item.options[index];
  const buttons = [...contentCard.querySelectorAll(".answer-button")];
  const bestIndex = item.options.findIndex((entry) => entry.score === 3);

  buttons.forEach((button) => {
    button.disabled = true;
    button.classList.remove("is-picked", "is-best");
  });

  buttons[index].classList.add("is-picked");
  buttons[bestIndex]?.classList.add("is-best");
  state.score += option.score;
  state.answered += 1;

  resultCard.classList.remove("is-hidden");
  resultCard.innerHTML = `
    <p><strong>正确答案：${String.fromCharCode(65 + bestIndex)}</strong></p>
    <p>${option.note}</p>
    <p>${item.explanation}</p>
  `;

  if (routeMeta[state.route].mode === "ranked") {
    addRankedNextStep();
  }
}

function addRankedNextStep() {
  const next = state.rankedQueue.shift();
  const actionButton = document.createElement("button");
  actionButton.className = "ghost-button";
  actionButton.type = "button";

  if (next) {
    actionButton.textContent = `下一题（已完成 ${state.answered} / ${state.rankedTotal}）`;
    actionButton.addEventListener("click", () => renderQuestion(next));
  } else {
    state.pendingFinalScore = true;
    actionButton.textContent = "查看最终评分";
    actionButton.addEventListener("click", showRankResult);
  }

  resultCard.append(actionButton);
}

function renderRankedIntro() {
  const total = routeMeta[state.route].source === "workplace" ? 8 : 6;
  contentCard.innerHTML = `
    <h3>排位规则</h3>
    <p>系统会从当前筛选范围中随机抽取 ${total} 道题。答题过程中只显示单题解析，不显示总评分；全部答完后点击“查看最终评分”得到称号。</p>
    <ul class="note-list">
      <li>中文职场模拟器按中国公务员职级风格评级。</li>
      <li>日文职场模拟器按日本职场称号评级。</li>
      <li>弦外之音排位先用临时称号，之后可以继续换名字。</li>
    </ul>
  `;
  resultCard.classList.add("is-hidden");
}

function startRanked() {
  const pool = [...currentItems()];
  const total = routeMeta[state.route].source === "workplace" ? 8 : 6;
  resetRankedState();
  state.rankedTotal = Math.min(total, pool.length);
  state.rankedQueue = pool.sort(() => Math.random() - 0.5).slice(0, state.rankedTotal);

  if (!state.rankedQueue.length) {
    contentCard.innerHTML = "<p>当前筛选范围没有题目，请换一个分类。</p>";
    return;
  }

  renderQuestion(state.rankedQueue.shift());
}

function showRankResult() {
  const route = state.route;
  const max = state.rankedTotal * 3;
  const ratio = max ? state.score / max : 0;
  const ranks = DATA.ranks[state.language][route];
  const rank = ratio >= 0.9 ? ranks[0] : ratio >= 0.75 ? ranks[1] : ratio >= 0.55 ? ranks[2] : ranks[3];
  state.pendingFinalScore = false;

  resultCard.classList.remove("is-hidden");
  resultCard.innerHTML = `
    <p>排位完成：${state.score} / ${max}</p>
    <p class="rank-title">${rank.title}</p>
    <p>${rank.copy}</p>
    <button class="ghost-button" type="button" id="restartRankedButton">再来一局</button>
  `;
  document.querySelector("#restartRankedButton").addEventListener("click", startRanked);
}

function renderToast() {
  const item = pickRandom(currentItems());
  contentCard.innerHTML = `
    <div class="meta-row">
      <span class="pill">${item.occasion}</span>
      <span class="pill">${item.tone}</span>
    </div>
    <h3>${item.title}</h3>
    <p class="toast-line">${item.text}</p>
    <ul class="note-list">
      <li>${item.tip}</li>
    </ul>
  `;
}

document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

document.querySelector("#homeButton").addEventListener("click", () => setRoute("home"));
document.querySelector("#backButton").addEventListener("click", () => setRoute("home"));

languageSelect.addEventListener("change", () => {
  state.language = languageSelect.value;
  if (state.route !== "home") {
    resetRankedState();
    setupFilters();
    renderCurrent();
  }
});

categorySelect.addEventListener("change", () => {
  resetRankedState();
  if (routeMeta[state.route].mode !== "toast") refreshSubcategories();
  renderCurrent();
});

subcategorySelect.addEventListener("change", () => {
  resetRankedState();
  renderCurrent();
});

randomButton.addEventListener("click", () => {
  if (routeMeta[state.route].mode === "ranked") startRanked();
  else renderCurrent();
});

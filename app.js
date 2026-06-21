// ── HELPERS ──
function daysAgo(dateStr) {
  const d = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (d === 0) return "Сегодня";
  if (d === 1) return "Вчера";
  return d + " дн. назад";
}

function daysLeft(dateStr) {
  const d = Math.ceil((new Date(dateStr) - Date.now()) / 86400000);
  if (d < 0) return "Истёк";
  if (d === 0) return "Сегодня";
  if (d <= 7) return "Осталось " + d + " дн.";
  return "до " + new Date(dateStr).toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

function badgeClass(type) {
  return { hackathon: "badge-hackathon", fellowship: "badge-fellowship", conference: "badge-conference", grant: "badge-grant" }[type] || "badge-hackathon";
}

function iconColor(color) {
  return color || "purple";
}

// ── RENDER VACANCIES ──
function renderVacancies(filter = "all") {
  const container = document.getElementById("vacancies-list");
  if (!container) return;

  let items = CONTENT.vacancies;
  if (filter === "remote") items = items.filter(v => v.remote);
  if (filter === "un") items = items.filter(v => v.tags.includes("ООН"));
  if (filter === "health") items = items.filter(v => v.tags.includes("Здравоохранение"));
  if (filter === "it") items = items.filter(v => v.tags.some(t => ["IT","ML","ИИ","BI","SQL","Python"].includes(t)));

  if (items.length === 0) {
    container.innerHTML = '<div class="empty">Вакансий по этому фильтру пока нет</div>';
    return;
  }

  container.innerHTML = items.map(v => `
    <a class="job-card" href="${v.url}" target="_blank" rel="noopener">
      <div class="job-icon ${iconColor(v.color)}">
        <i class="ti ${v.icon}" aria-hidden="true"></i>
      </div>
      <div class="job-body">
        <div class="job-title">${v.title}</div>
        <div class="job-company">${v.company} · ${v.location}</div>
        <div class="job-tags">
          ${v.isNew ? '<span class="tag new">Новая</span>' : ""}
          ${v.remote ? '<span class="tag remote">Удалённо</span>' : ""}
          ${v.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="job-date">${daysAgo(v.date)}</div>
    </a>
  `).join("");
}

// ── RENDER CONTESTS ──
function renderContests(filter = "all") {
  const container = document.getElementById("contests-list");
  if (!container) return;

  let items = CONTENT.contests;
  if (filter !== "all") items = items.filter(c => c.type === filter);

  if (items.length === 0) {
    container.innerHTML = '<div class="empty">По этому фильтру ничего нет</div>';
    return;
  }

  container.innerHTML = items.map(c => `
    <a class="contest-card" href="${c.url}" target="_blank" rel="noopener">
      <span class="contest-type-badge ${badgeClass(c.type)}">${c.typeLabel}</span>
      <div class="contest-title">${c.title}</div>
      <div class="contest-desc">${c.description}</div>
      <div class="contest-footer">
        <span class="contest-prize"><i class="ti ti-gift" aria-hidden="true"></i> ${c.prize}</span>
        <span class="deadline-badge"><i class="ti ti-calendar" aria-hidden="true"></i> ${daysLeft(c.deadline)}</span>
      </div>
    </a>
  `).join("");
}

// ── RENDER NEWS ──
function renderNews() {
  const container = document.getElementById("news-list");
  if (!container) return;

  container.innerHTML = CONTENT.news.map((n, i) => `
    <a class="news-item" href="${n.url}" target="_blank" rel="noopener">
      <div class="news-num">0${i + 1}</div>
      <div>
        <div class="news-title">${n.title}</div>
        <div class="news-meta">${n.source} · ${daysAgo(n.date)}</div>
      </div>
    </a>
  `).join("");
}

// ── RENDER STATS ──
function renderStats() {
  const activeJobs = CONTENT.vacancies.length;
  const activeContests = CONTENT.contests.filter(c => new Date(c.deadline) > Date.now()).length;
  document.getElementById("stat-jobs").textContent = activeJobs;
  document.getElementById("stat-contests").textContent = activeContests;
}

// ── SEARCH ──
function setupSearch() {
  const input = document.getElementById("search-input");
  const btn = document.getElementById("search-btn");
  if (!input) return;

  function doSearch() {
    const q = input.value.trim().toLowerCase();
    if (!q) { renderVacancies(); renderContests(); renderNews(); return; }

    const jobs = CONTENT.vacancies.filter(v =>
      v.title.toLowerCase().includes(q) ||
      v.company.toLowerCase().includes(q) ||
      v.tags.some(t => t.toLowerCase().includes(q))
    );

    const contests = CONTENT.contests.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    );

    const news = CONTENT.news.filter(n => n.title.toLowerCase().includes(q));

    const jobContainer = document.getElementById("vacancies-list");
    const contestContainer = document.getElementById("contests-list");
    const newsContainer = document.getElementById("news-list");

    if (jobContainer) jobContainer.innerHTML = jobs.length
      ? jobs.map(v => `<a class="job-card" href="${v.url}" target="_blank" rel="noopener">
          <div class="job-icon ${iconColor(v.color)}"><i class="ti ${v.icon}" aria-hidden="true"></i></div>
          <div class="job-body">
            <div class="job-title">${v.title}</div>
            <div class="job-company">${v.company} · ${v.location}</div>
            <div class="job-tags">${v.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
          </div>
          <div class="job-date">${daysAgo(v.date)}</div>
        </a>`).join("")
      : '<div class="empty">Вакансии не найдены</div>';

    if (contestContainer) contestContainer.innerHTML = contests.length
      ? contests.map(c => `<a class="contest-card" href="${c.url}" target="_blank" rel="noopener">
          <span class="contest-type-badge ${badgeClass(c.type)}">${c.typeLabel}</span>
          <div class="contest-title">${c.title}</div>
          <div class="contest-desc">${c.description}</div>
          <div class="contest-footer">
            <span class="contest-prize">${c.prize}</span>
            <span class="deadline-badge">${daysLeft(c.deadline)}</span>
          </div>
        </a>`).join("")
      : '<div class="empty">Конкурсы не найдены</div>';

    if (newsContainer) newsContainer.innerHTML = news.length
      ? news.map((n, i) => `<a class="news-item" href="${n.url}" target="_blank" rel="noopener">
          <div class="news-num">0${i+1}</div>
          <div>
            <div class="news-title">${n.title}</div>
            <div class="news-meta">${n.source} · ${daysAgo(n.date)}</div>
          </div>
        </a>`).join("")
      : '<div class="empty">Новости не найдены</div>';
  }

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(); });
}

// ── FILTERS ──
function setupFilters() {
  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      const group = btn.dataset.group;
      const filter = btn.dataset.filter;
      document.querySelectorAll(`[data-group="${group}"]`).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      if (group === "jobs") renderVacancies(filter);
      if (group === "contests") renderContests(filter);
    });
  });
}

// ── LANG SWITCH (placeholder) ──
function setupLang() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderVacancies();
  renderContests();
  renderNews();
  setupSearch();
  setupFilters();
  setupLang();
});

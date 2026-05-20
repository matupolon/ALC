(() => {
  const page = window.ALC_CONTENT;

  if (!page) {
    return;
  }

  const searchInput = document.querySelector("[data-search-input]");
  const categoryFilter = document.querySelector("[data-category-filter]");
  const grid = document.querySelector("[data-content-grid]");
  const emptyState = document.querySelector("[data-empty-state]");
  const resultMeta = document.querySelector("[data-result-meta]");

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && value) {
      element.textContent = value;
    }
  };

  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[char];
  });

  const normalize = (value) => String(value ?? "").toLowerCase().trim();
  const categories = page.categories?.length
    ? page.categories
    : ["Semua", ...new Set(page.items.map((item) => item.category).filter(Boolean))];

  const state = {
    keyword: "",
    category: categories[0] || "Semua",
  };

  setText("[data-content-eyebrow]", page.eyebrow);
  setText("[data-content-title]", page.title);
  setText("[data-content-description]", page.description);

  if (categoryFilter) {
    categoryFilter.innerHTML = categories
      .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
      .join("");
  }

  const getSearchText = (item) => [
    item.title,
    item.company,
    item.organizer,
    item.category,
    item.level,
    item.summary,
    ...(item.tags || []),
  ].join(" ");

  const getVisibleItems = () => page.items.filter((item) => {
    const matchesKeyword = normalize(getSearchText(item)).includes(state.keyword);
    const matchesCategory = state.category === "Semua" || item.category === state.category;
    return matchesKeyword && matchesCategory;
  });

  const renderMetaList = (item) => {
    const meta = [
      item.category,
      item.level,
      item.period,
      item.deadline ? `Deadline: ${item.deadline}` : "",
      item.updated ? `Update: ${item.updated}` : "",
    ].filter(Boolean);

    if (!meta.length) {
      return "";
    }

    return `<ul class="meta-list">${meta.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}</ul>`;
  };

  const renderTags = (tags = []) => {
    if (!tags.length) {
      return "";
    }

    return tags
      .slice(0, 3)
      .map((tag, index) => `<span class="tag ${index === 1 ? "tag-blue" : ""}">${escapeHtml(tag)}</span>`)
      .join("");
  };

  const renderLink = (item) => {
    const label = item.ctaLabel || "Buka detail";

    if (!item.url || item.url === "#") {
      return `<span class="card-link is-disabled" aria-disabled="true">${escapeHtml(label)} belum tersedia</span>`;
    }

    const isExternal = /^https?:\/\//i.test(item.url);
    const attributes = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a class="card-link" href="${escapeHtml(item.url)}"${attributes}>${escapeHtml(label)}</a>`;
  };

  const renderCard = (item) => `
    <article class="content-card">
      <div class="tag-row">${renderTags(item.tags)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      ${renderMetaList(item)}
      ${renderLink(item)}
    </article>
  `;

  const render = () => {
    const visibleItems = getVisibleItems();

    if (grid) {
      grid.innerHTML = visibleItems.map(renderCard).join("");
    }

    if (emptyState) {
      emptyState.hidden = visibleItems.length > 0;
    }

    if (resultMeta) {
      resultMeta.textContent = `${visibleItems.length} dari ${page.items.length} konten ditampilkan`;
    }
  };

  searchInput?.addEventListener("input", (event) => {
    state.keyword = normalize(event.target.value);
    render();
  });

  categoryFilter?.addEventListener("change", (event) => {
    state.category = event.target.value;
    render();
  });

  render();
})();

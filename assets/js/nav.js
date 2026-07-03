let modulesCache = null;

function getModulesPath() {
  const customPath = document.documentElement.dataset.modulesPath;

  if (customPath) {
    return new URL(customPath, window.location.href).href;
  }

  const isModulePage = /\/pages\//.test(window.location.pathname.replace(/\\/g, "/"));
  const fallback = isModulePage ? "../data/modules.json" : "data/modules.json";
  return new URL(fallback, window.location.href).href;
}

async function fetchModules() {
  if (modulesCache) {
    return modulesCache;
  }

  const response = await fetch(getModulesPath(), { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to load modules: ${response.status}`);
  }

  const data = await response.json();
  modulesCache = Array.isArray(data) ? data : data.modules || [];
  return modulesCache;
}

function normalizePath(path) {
  if (!path) {
    return "";
  }

  const url = new URL(path, window.location.origin);
  return url.pathname.replace(/\/+$/, "") || "/";
}

function getModuleHref(module) {
  return module.file || module.href || module.url || module.path || module.slug || "#";
}

function getModuleLabel(module, index) {
  return module.navTitle || module.shortTitle || module.title || `Module ${index + 1}`;
}

function renderModuleGrid(modules) {
  const grid = document.querySelector("#module-grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  modules.forEach((module, index) => {
    const card = document.createElement("article");
    card.className = "module-card";
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    card.setAttribute("onclick", `location.href='${getModuleHref(module)}'`);

    const badgeClass = module.level || "easy";
    const moduleNumber = document.createElement("div");
    moduleNumber.className = "module-num";
    moduleNumber.textContent = module.id ? module.id.toUpperCase() : `M${index + 1}`;

    const title = document.createElement("h3");
    title.className = "module-title";
    title.textContent = `${module.icon || "•"} ${getModuleLabel(module, index)}`;

    const subtitle = document.createElement("p");
    subtitle.className = "module-desc";
    subtitle.textContent = module.subtitle || "";

    const badge = document.createElement("span");
    badge.className = `level-badge ${badgeClass}`;
    badge.textContent = badgeClass;

    card.append(moduleNumber, title, subtitle, badge);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = getModuleHref(module);
      }
    });

    grid.appendChild(card);
  });
}

function setActiveNavLink(container) {
  const currentPath = normalizePath(window.location.pathname);
  const links = container.querySelectorAll("a");

  links.forEach((link) => {
    const isActive = normalizePath(link.getAttribute("href")) === currentPath;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function ensureNavToggle(navLinks) {
  const navbar = navLinks.closest(".navbar");

  if (!navbar) {
    return;
  }

  let toggle = navbar.querySelector("[data-nav-toggle]");

  if (!toggle) {
    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "btn-outline nav-toggle";
    toggle.setAttribute("data-nav-toggle", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", navLinks.id || "nav-links");
    toggle.textContent = "Menu";
    navbar.appendChild(toggle);
  }

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

export async function initNav(currentId) {
  const navLinks = document.querySelector("#nav-links");

  try {
    const modules = await fetchModules();

    if (navLinks) {
      navLinks.innerHTML = "";

      modules.forEach((module, index) => {
        const link = document.createElement("a");
        link.className = "nav-link";
        link.href = getModuleHref(module);
        link.textContent = getModuleLabel(module, index);
        navLinks.appendChild(link);
      });

      setActiveNavLink(navLinks);
      ensureNavToggle(navLinks);
    }

    renderModuleGrid(modules);

    if (currentId) {
      await initModuleNav(currentId);
    }
  } catch (error) {
    console.error(error);
  }
}

export function initSidebarSpy() {
  const sidebarLinks = Array.from(document.querySelectorAll(".sidebar-link[href^='#']"));
  const headings = Array.from(document.querySelectorAll("main h2[id], main h3[id]"));

  if (!sidebarLinks.length || !headings.length) {
    return;
  }

  const sidebarMap = new Map(
    sidebarLinks.map((link) => [decodeURIComponent(link.getAttribute("href")), link])
  );

  const setActive = (id) => {
    sidebarLinks.forEach((link) => {
      const isActive = decodeURIComponent(link.getAttribute("href")) === `#${id}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      const activeLink = sidebarMap.get(`#${visible.target.id}`);
      if (activeLink) {
        setActive(visible.target.id);
      }
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0.1, 0.35, 0.6, 1],
    }
  );

  headings.forEach((heading) => observer.observe(heading));
}

export async function initModuleNav(currentId) {
  const navContainer = document.querySelector("#module-nav");

  if (!navContainer) {
    return;
  }

  try {
    const modules = await fetchModules();
    const currentIndex = modules.findIndex((module) => {
      return String(module.id || module.slug || module.moduleId) === String(currentId);
    });

    if (currentIndex === -1) {
      return;
    }

    const prevModule = modules[currentIndex - 1] || null;
    const nextModule = modules[currentIndex + 1] || null;
    let prevLink = navContainer.querySelector(".nav-prev");
    let nextLink = navContainer.querySelector(".nav-next");

    if (!prevLink) {
      prevLink = document.createElement("a");
      prevLink.className = "nav-prev";
      navContainer.appendChild(prevLink);
    }

    if (!nextLink) {
      nextLink = document.createElement("a");
      nextLink.className = "nav-next";
      navContainer.appendChild(nextLink);
    }

    if (prevModule) {
      prevLink.href = getModuleHref(prevModule);
      prevLink.textContent = `← ${getModuleLabel(prevModule, currentIndex - 1)}`;
    } else {
      prevLink.removeAttribute("href");
      prevLink.textContent = "← ไม่มีบทก่อนหน้า";
    }

    if (nextModule) {
      nextLink.href = getModuleHref(nextModule);
      nextLink.textContent = `${getModuleLabel(nextModule, currentIndex + 1)} →`;
    } else {
      nextLink.removeAttribute("href");
      nextLink.textContent = "ไม่มีบทถัดไป →";
    }
  } catch (error) {
    console.error(error);
  }
}

window.initNav = initNav;
window.initSidebarSpy = initSidebarSpy;
window.initModuleNav = initModuleNav;

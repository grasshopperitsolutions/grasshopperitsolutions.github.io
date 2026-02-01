const SOURCES = [
  // Ciencia y Tecnología
  {
    id: "minciencias",
    url: "https://minciencias.gov.co/convocatorias",
    name: "Minciencias",
    category: "Ciencia y Tecnología",
  },
  {
    id: "atenea",
    url: "https://agenciaatenea.gov.co/convocatorias",
    name: "ATENEA Bogotá",
    category: "Ciencia y Tecnología",
  },
  {
    id: "parques-nacionales",
    url: "https://www.parquesnacionales.gov.co/programa-de-estimulo-al-conocimiento/convocatorias-abiertas-categoria-investigacion/",
    name: "Parques Nacionales",
    category: "Ciencia y Tecnología",
  },

  // Educación y Becas
  {
    id: "icetex",
    url: "https://web.icetex.gov.co/becas",
    name: "ICETEX",
    category: "Educación y Becas",
  },
  {
    id: "sena",
    url: "https://www.sena.edu.co/es-co/formacion/Paginas/Estudie-en-el-SENA.aspx",
    name: "SENA",
    category: "Educación y Becas",
  },
  {
    id: "fundacion-sura",
    url: "https://www.fundacionsura.com/iniciativas/beca-nicanor-restrepo-santamaria/",
    name: "Fundación SURA",
    category: "Educación y Becas",
  },
  {
    id: "mineducacion",
    url: "https://www.mineducacion.gov.co/portal/micrositios-institucionales/Cooperacion-Internacional/",
    name: "MinEducación",
    category: "Educación y Becas",
  },

  // Cooperación y Emprendimiento
  {
    id: "apc",
    url: "https://www.apccolombia.gov.co/modalidades-de-cooperacion/convocatorias",
    name: "APC Colombia",
    category: "Cooperación y Emprendimiento",
  },
  {
    id: "innpulsa",
    url: "https://www.innpulsacolombia.com/convocatorias",
    name: "INNpulsa",
    category: "Cooperación y Emprendimiento",
  },
  {
    id: "cidei",
    url: "https://cidei.net/convocatorias-para-proyectos-idi/",
    name: "CIDEI",
    category: "Cooperación y Emprendimiento",
  },

  // Empleo Público
  {
    id: "cnsC",
    url: "https://www.cnsc.gov.co",
    name: "CNSC",
    category: "Empleo Público",
  },
  {
    id: "dnp",
    url: "https://www.dnp.gov.co",
    name: "DNP",
    category: "Empleo Público",
  },
  {
    id: "sena-empleo",
    url: "https://ape.sena.edu.co/spe-web/spe/cartelera",
    name: "SENA Empleo",
    category: "Empleo Público",
  },

  // Vivienda y Social
  {
    id: "minvivienda",
    url: "https://www.minvivienda.gov.co/sala-de-prensa",
    name: "MinVivienda",
    category: "Vivienda y Social",
  },
  {
    id: "minigualdad",
    url: "https://www.minigualdadyequidad.gov.co/convocatorias",
    name: "MinIgualdad",
    category: "Vivienda y Social",
  },

  // Gobiernos Locales
  {
    id: "bogota",
    url: "https://bogota.gov.co/mi-ciudad/desarrollo-economico",
    name: "Bogotá",
    category: "Gobiernos Locales",
  },
  {
    id: "medellin",
    url: "https://www.medellin.gov.co",
    name: "Medellín",
    category: "Gobiernos Locales",
  },
  {
    id: "cali",
    url: "https://intranet.cali.gov.co/convocatorias-internas-2025/",
    name: "Cali",
    category: "Gobiernos Locales",
  },
  {
    id: "cartagena",
    url: "https://www.cartagena.gov.co/Transparencia/Convocatorias",
    name: "Cartagena",
    category: "Gobiernos Locales",
  },
  {
    id: "antioquia",
    url: "https://www.antioquiatic.edu.co",
    name: "Antioquia",
    category: "Gobiernos Locales",
  },
  {
    id: "magdalena",
    url: "https://www.gobernaciondelmagdalena.gov.co/convocatorias/",
    name: "Magdalena",
    category: "Gobiernos Locales",
  },

  // Universidades
  {
    id: "ude-medellin",
    url: "https://investigacion.udemedellin.edu.co/apoyo-al-investigador/convocatorias/",
    name: "U. de Medellín",
    category: "Universidades",
  },
  {
    id: "u-caldas",
    url: "https://www.ucaldas.edu.co/portal/convocatorias/",
    name: "U. de Caldas",
    category: "Universidades",
  },
  {
    id: "sector-universitario",
    url: "https://www.universidad.edu.co/bolsa-de-empleo-en-el-sector-universitario/",
    name: "Sector Universitario",
    category: "Universidades",
  },
];

let allConvocatorias = [];

// Función para inicializar las listas de fuentes de forma segura
function initializeSources() {
  const list = document.getElementById("sourceList");
  const footerList = document.getElementById("footerSourceList");

  // Limpiar listas antes de poblar para evitar duplicados en re-render
  if (list) list.innerHTML = "";
  if (footerList) footerList.innerHTML = "";

  // Agrupar fuentes por categoría
  const categories = {};
  SOURCES.forEach((s) => {
    if (!categories[s.category]) {
      categories[s.category] = [];
    }
    categories[s.category].push(s);
  });

  // Mostrar fuentes en el sidebar con categorías
  if (list) {
    Object.keys(categories).forEach((category) => {
      const categoryHeader = document.createElement("div");
      categoryHeader.className =
        "text-[8px] font-bold text-stone-400 uppercase tracking-wider mt-4 mb-2 border-t border-stone-200 pt-4";
      categoryHeader.innerText = category;
      list.appendChild(categoryHeader);

      categories[category].forEach((s) => {
        const tag = document.createElement("span");
        tag.className =
          "bg-stone-100 border border-stone-200 px-3 py-1.5 rounded-lg text-[10px] font-bold text-stone-500 uppercase tracking-tighter hover:bg-stone-200 transition-colors cursor-pointer";
        tag.innerText = s.name;
        tag.title = `${s.name} - ${s.category}`;
        list.appendChild(tag);
      });
    });
  }

  // Mostrar fuentes en el footer con categorías
  if (footerList) {
    Object.keys(categories).forEach((category) => {
      const categoryHeader = document.createElement("li");
      categoryHeader.className =
        "text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-4 mb-2 border-t border-stone-800 pt-4";
      categoryHeader.innerText = category;
      footerList.appendChild(categoryHeader);

      categories[category].forEach((s) => {
        const footerItem = document.createElement("li");
        footerItem.innerHTML = `<a href="${s.url}" target="_blank" class="hover:text-white transition-colors text-sm block py-1">${s.name}</a>`;
        footerList.appendChild(footerItem);
      });
    });
  }
}

window.onload = () => {
  initializeSources();
};

function showSection(id) {
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.add("hidden-section"));
  const activeSection = document.getElementById(id);
  if (activeSection) activeSection.classList.remove("hidden-section");

  document.querySelectorAll(".nav-link").forEach((l) => {
    l.classList.remove("active");
    if (l.innerText.toLowerCase() === (id === "nosotros" ? "nosotros" : id)) {
      l.classList.add("active");
    }
  });

  // Re-inicializar fuentes si entramos a convocatorias por si el DOM se alteró
  if (id === "convocatorias") {
    initializeSources();
  }

  window.scrollTo(0, 0);
}

async function startHarvest() {
  showSection("convocatorias");
  const btn = document.querySelector("nav .btn-harvest");
  const loading = document.getElementById("loading");
  const resultsGrid = document.getElementById("resultsGrid");
  const emptyState = document.getElementById("emptyState");
  const log = document.getElementById("progressLog");

  if (!loading || !resultsGrid || !emptyState || !log) return;

  btn.disabled = true;
  loading.classList.remove("hidden");
  resultsGrid.innerHTML = "";
  emptyState.classList.add("hidden");
  allConvocatorias = [];
  log.innerHTML = "";

  try {
    const requests = SOURCES.map((source) => fetchFromPerplexity(source));
    // get only first TEST source for demo purposes
    const results = await Promise.resolve(requests[0]);
    // const results = await Promise.allSettled(requests);

    results.forEach((result, index) => {
      const sourceName = SOURCES[index].name;
      if (result.status === "fulfilled" && result.value) {
        allConvocatorias = [...allConvocatorias, ...result.value];
        log.innerHTML += `<div class="text-stone-600">✓ ${sourceName}</div>`;
      } else {
        log.innerHTML += `<div class="text-red-300">✗ ${sourceName}</div>`;
      }
    });

    renderResults(allConvocatorias);
  } catch (error) {
    console.error("Harvesting failed:", error);
  } finally {
    loading.classList.add("hidden");
    btn.disabled = false;
    if (allConvocatorias.length === 0) emptyState.classList.remove("hidden");
  }
}

async function fetchFromPerplexity(source) {
  const prompt = `Extrae convocatorias vigentes de ${source.name} (${source.url}). JSON: { "convocatorias": [ { "t": "titulo", "d": "descripcion", "f": "fecha_cierre", "s": "abierta/cerrada", "u": "url" } ] }`;

  const options = {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${PPLX_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar-pro",
      messages: [{ role: "user", content: prompt }],
    }),
  };

  try {
    const response = await fetch(
      "https://perplexity-api-proxy.vercel.app/api/chat",
      options,
    );
    // const response = await fetch(
    // "https://api.perplexity.ai/chat/completions",
    // options,
    // );
    const data = await response.json();
    const content = data.choices[0].message.content;
    const jsonStr = content.match(/\{[\s\S]*\}/);
    if (!jsonStr) return null;
    const json = JSON.parse(jsonStr[0]);
    return (json.convocatorias || []).map((c) => ({
      titulo: c.t,
      descripcion: c.d,
      fecha_cierre: c.f,
      estado: c.s,
      url: c.u,
      fuente: source.name,
    }));
  } catch (e) {
    return null;
  }
}

function renderResults(data) {
  const grid = document.getElementById("resultsGrid");
  const countEl = document.getElementById("totalCount");

  if (!grid || !countEl) return;

  grid.innerHTML = "";
  countEl.innerText = data.length < 10 ? `0${data.length}` : data.length;

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "nest-chamber p-10 flex flex-col md:flex-row gap-8 items-start";
    const statusClass = `status-${(item.estado || "abierta").toLowerCase()}`;

    // Buscar la categoría de la fuente
    const source = SOURCES.find((s) => s.name === item.fuente);
    const categoryBadge = source
      ? `<span class="inline-block bg-stone-100 text-[8px] px-2 py-1 rounded-full font-bold text-stone-500 uppercase tracking-tighter">${source.category}</span>`
      : "";

    card.innerHTML = `
                <div class="md:w-1/4 space-y-4 border-r border-stone-100 pr-6 w-full">
                    <div class="flex items-center gap-2">
                        <span class="status-pill ${statusClass}">${item.estado || "abierta"}</span>
                        ${categoryBadge}
                    </div>
                    <div class="space-y-1">
                        <span class="text-[10px] font-black uppercase text-stone-300 block">Fuente</span>
                        <span class="text-sm font-bold text-earth-clay">${item.fuente}</span>
                    </div>
                </div>
                <div class="flex-1 space-y-4">
                    <h3 class="serif text-3xl font-bold text-stone-900 leading-tight">${item.titulo}</h3>
                    <p class="text-stone-500 leading-relaxed text-sm">${item.descripcion || "Sin descripción detallada."}</p>
                    <div class="pt-6 flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-400 serif italic">${item.fecha_cierre || "TBD"}</span>
                        <a href="${item.url || "#"}" target="_blank" class="text-earth-dark font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                            VER DETALLES <i class="fas fa-arrow-right text-xs"></i>
                        </a>
                    </div>
                </div>
            `;
    grid.appendChild(card);
  });
}

function applyFilters() {
  const queryEl = document.getElementById("searchInput");
  const statusEl = document.getElementById("statusFilter");
  const categoryEl = document.getElementById("categoryFilter");

  if (!queryEl || !statusEl || !categoryEl) return;

  const query = queryEl.value.toLowerCase();
  const status = statusEl.value;
  const category = categoryEl.value;

  const filtered = allConvocatorias.filter((c) => {
    // Buscar la fuente en SOURCES para obtener la categoría
    const source = SOURCES.find((s) => s.name === c.fuente);
    const sourceCategory = source ? source.category : "";

    const matchesQuery =
      (c.titulo || "").toLowerCase().includes(query) ||
      (c.fuente || "").toLowerCase().includes(query);

    const matchesStatus =
      status === "todos" || (c.estado || "").toLowerCase() === status;

    const matchesCategory = category === "todas" || sourceCategory === category;

    return matchesQuery && matchesStatus && matchesCategory;
  });
  renderResults(filtered);
}

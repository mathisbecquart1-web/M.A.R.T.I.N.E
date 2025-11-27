const coproprietaires = [
  { lot: 1, nom: 'Mme LEGRAND', section: 'A', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 2, nom: 'M. LAMBLIN', section: 'A', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 3, nom: 'Mme SARRAZIN', section: 'A', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 4, nom: 'Mme SOLOU', section: 'A', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 5, nom: 'M. COSTA', section: 'A', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 6, nom: 'M. DEBROISE', section: 'A', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 7, nom: 'M. DUPOND', section: 'B', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 8, nom: 'Mme BROUYERE', section: 'B', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 9, nom: 'Mme GRUNWALD', section: 'B', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 10, nom: 'M. VILLARD', section: 'B', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 11, nom: 'Mme PETIT', section: 'B', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 12, nom: 'Mme NAGEL', section: 'B', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 13, nom: 'Mme FLAMENT', section: 'C', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 14, nom: 'Mme CARMONA', section: 'C', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 15, nom: 'Mme CORTI', section: 'C', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 16, nom: 'Mme BONNIN', section: 'C', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 17, nom: 'M. JANVIER', section: 'C', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 18, nom: 'M. GAILLARD', section: 'C', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 19, nom: 'Mme BENJAKS', section: 'D', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 20, nom: 'M. GAILLARD', section: 'D', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 21, nom: 'Mme HOCHART', section: 'D', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 22, nom: 'M. VIVIER', section: 'D', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 23, nom: 'Mme DERAM', section: 'D', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 24, nom: 'M. GAZEAU', section: 'D', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 },
  { lot: 25, nom: 'M. PASTOR', section: 'D', nature: 'Cabanon + parcelle d’eau privative', tantiemes: 400, place: 400 }
];

const tabDefinitions = [
  { id: 'lieu', titre: 'Lieu & accès', points: [
    'Île aux Bahamas, cabanons sur pilotis avec plage et ponton',
    'Navettes bateau programmées · station d’accueil sécurisée',
    'Accueil bagagerie, conciergerie et maintenance sur place',
    'Bornes électriques et zones techniques dédiées'
  ]},
  { id: 'communs', titre: 'Parties communes', points: [
    'Ponton, plage, terrains de beach-volley et golf en usage collectif',
    'Port réservé aux résidents : 1 place par cabanon, badges sécurisés',
    'Espace privatif d’une partie d’eau pour certains lots (voir tableau copro)',
    'Propreté partagée, incendie encadré, aucun feu libre'
  ]},
  { id: 'regles', titre: 'Règles de vie', points: [
    'Silence après 00h, respect de la faune locale',
    'Animaux autorisés s’ils ne troublent pas la tranquillité',
    'Terrains sportifs : créneaux partagés affichés sur place',
    'Aucune logique de réservation ni statut disponible/indisponible des lots'
  ]},
  { id: 'docs', titre: 'Documents & AG', points: [
    'Règlement de copropriété et EDD (niveau 5/6)',
    'PV complet de l’AG du 12 mars 2025',
    'Composition du bureau et liste des tantièmes par lot',
    'Exports PDF/CSV accessibles hors connexion'
  ]},
  { id: 'services-copro', titre: 'Services copropriétaires', points: [
    'Conciergerie propriétaires (maintenance, ménage, équipements)',
    'Suivi des travaux, incidents et tableaux d’affichage partagés',
    'Clés numériques, badges port, kit d’accueil copropriétaire'
  ]},
  { id: 'formations-tab', titre: 'Formations', points: [
    'Sensibilisation préservation de la faune',
    'Premiers secours sur site',
    'Parcelles d’eau privatives : bonnes pratiques',
    'Lecture guidée du règlement'
  ]}
];

const services = [
  { icon: '🏝️', titre: 'Accès plage & ponton', texte: 'Pass prioritaire pour les résidents, surveillance et éclairage doux nocturne.' },
  { icon: '⛵', titre: 'Port privatif', texte: 'Place dédiée par cabanon, badges sécurisés, assistance amarrage.' },
  { icon: '🏐', titre: 'Sports & loisirs', texte: 'Terrains en créneaux partagés (tableau affiché), sans principe de réservation.' },
  { icon: '🧹', titre: 'Propreté & maintenance', texte: 'Équipe de ménage tournante, suivi des interventions et planification visible.' },
  { icon: '🦜', titre: 'Respect de la faune', texte: 'Silence après minuit, éclairage basse intensité, indicateurs “quiétude”.' },
  { icon: '🛰️', titre: 'Connectivité', texte: 'Wifi maillé, sauvegarde locale des demandes et des documents pour usage hors connexion.' },
  { icon: '🛟', titre: 'Sécurité', texte: 'Vidéosurveillance discrète, numéros d’urgence et défibrillateur signalés.' },
  { icon: '🤝', titre: 'Communauté', texte: 'Espace d’annonces internes, entraide et partage d’équipements entre copropriétaires.' }
];

const faq = [
  { q: 'Comment accéder à la résidence ?', a: 'Par navette bateau dédiée (port privatif) ou par l’aéroport voisin avec transfert organisé par la conciergerie.' },
  { q: 'Puis-je venir avec des animaux ?', a: 'Oui, s’ils ne troublent pas la tranquillité. Les promenades sont conseillées en dehors des zones calmes après 20h.' },
  { q: 'Comment s’organisent les terrains de sport ?', a: 'Créneaux affichés sur tableau partagé dans l’onglet Sports & Loisirs, sans réservation ni statut de lot.' },
  { q: 'Les demandes copro sont-elles publiques ?', a: 'Non. Seuls les administrateurs connectés (TALASSA / TALASSAVIVEZLEREVE) peuvent consulter et éditer les demandes.' },
  { q: 'Où trouver les documents officiels ?', a: 'Dans la section Documents et via le bouton de téléchargement du règlement et du PV.' },
  { q: 'Existe-t-il des formations ?', a: 'Oui : sensibilisation faune, premiers secours, brief sur les parcelles d’eau privatives.' }
];

const reqKey = 'thalassa_requests_v3';
const draftKey = 'thalassa_draft_v3';
const lotNames = coproprietaires.map(c => `Lot ${c.lot} — ${c.nom} (Section ${c.section} · ${c.nature})`);
let isAdmin = false;

function highlightNav() {
  const current = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === current);
  });
}

function populateLotOptions() {
  const sel = document.getElementById('lotSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">Sélectionner un lot</option>' + lotNames.map(l => `<option value="${l}">${l}</option>`).join('');
}

function populateSectionFilter() {
  const select = document.getElementById('sectionFilter');
  if (!select) return;
  const sections = ['Tous', ...new Set(coproprietaires.map(c => c.section))];
  select.innerHTML = sections.map(s => `<option value="${s}">${s === 'Tous' ? 'Toutes les sections' : 'Section ' + s}</option>`).join('');
  select.addEventListener('change', renderOwners);
}

function renderOwners() {
  const table = document.getElementById('ownersTable');
  const filterSelect = document.getElementById('sectionFilter');
  if (!table || !filterSelect) return;
  const filter = filterSelect.value;
  const rows = coproprietaires.filter(c => filter === 'Tous' || c.section === filter);
  const totalGen = rows.reduce((a, c) => a + c.tantiemes, 0);
  const totalPlace = rows.reduce((a, c) => a + c.place, 0);
  table.innerHTML = `
    <tr>
      <th>Lot</th><th>Propriétaire</th><th>Section</th><th>Nature</th><th>Tantièmes généraux</th><th>Tantièmes place</th>
    </tr>
    ${rows.map(c => `
      <tr>
        <td>Lot ${c.lot}</td>
        <td>${c.nom}</td>
        <td>${c.section}</td>
        <td>${c.nature}</td>
        <td>${c.tantiemes}</td>
        <td>${c.place}</td>
      </tr>`).join('')}
    <tr class="table-foot">
      <td colspan="4">Totaux (${filter === 'Tous' ? 'ensemble' : 'Section ' + filter})</td>
      <td>${totalGen}</td>
      <td>${totalPlace}</td>
    </tr>
  `;
}

function downloadCoproCsv() {
  const header = 'Lot;Propriétaire;Section;Nature;Tantièmes généraux;Tantièmes place';
  const lines = coproprietaires.map(c => `${c.lot};${c.nom};${c.section};${c.nature};${c.tantiemes};${c.place}`);
  const content = [header, ...lines, 'Total;;;' + totalTantiemes() + ';' + totalPlaces()].join('\n');
  const blob = new Blob([content], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Coproprietaires_Thalassa.csv';
  a.click();
  URL.revokeObjectURL(url);
  toast('Tableau copropriétaires exporté.');
}

function totalTantiemes() { return coproprietaires.reduce((a, c) => a + c.tantiemes, 0); }
function totalPlaces() { return coproprietaires.reduce((a, c) => a + c.place, 0); }

function loadRequests() { return JSON.parse(localStorage.getItem(reqKey) || '[]'); }
function saveRequests(reqs) { localStorage.setItem(reqKey, JSON.stringify(reqs)); }

function submitRequest(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  const requests = loadRequests();
  requests.push({ ...data, statut: 'Nouvelle', id: crypto.randomUUID(), date: new Date().toISOString() });
  saveRequests(requests);
  localStorage.removeItem(draftKey);
  form.reset();
  updateDraftStatus('Demande enregistrée et envoyée au gestionnaire.');
  toast('Demande envoyée. Elle est visible par l\'administrateur uniquement.');
  renderRequests();
  updateKpis();
}

function renderRequests() {
  if (!isAdmin) return;
  const table = document.getElementById('requestsTable');
  if (!table) return;
  const reqs = loadRequests();
  if (!reqs.length) {
    table.innerHTML = '<tr><td class="meta">Aucune demande pour le moment.</td></tr>';
    return;
  }
  table.innerHTML = `
    <tr>
      <th>Nom</th><th>Email</th><th>Téléphone</th><th>Lot</th><th>Message</th><th>Statut</th>
    </tr>
  ` + reqs.map(r => `
    <tr>
      <td><input value="${r.name || ''}" data-id="${r.id}" data-field="name" /></td>
      <td><input value="${r.email || ''}" data-id="${r.id}" data-field="email" /></td>
      <td><input value="${r.phone || ''}" data-id="${r.id}" data-field="phone" /></td>
      <td><input value="${r.lot || ''}" data-id="${r.id}" data-field="lot" /></td>
      <td><textarea data-id="${r.id}" data-field="message">${r.message || ''}</textarea></td>
      <td>
        <select data-id="${r.id}" data-field="statut">
          ${['Nouvelle','En cours','Clôturée'].map(s => `<option ${s===r.statut?'selected':''}>${s}</option>`).join('')}
        </select>
      </td>
    </tr>
  `).join('');
  table.querySelectorAll('input, textarea, select').forEach(el => el.addEventListener('change', editRequest));
}

function updateKpis() {
  const row = document.getElementById('kpiRow');
  if (!row) return;
  const reqs = loadRequests();
  const uniqueSections = new Set(coproprietaires.map(c => c.section));
  row.innerHTML = `
    <div class="kpi"><div class="label">Cabanons</div><div class="value">${coproprietaires.length}</div></div>
    <div class="kpi"><div class="label">Sections</div><div class="value">${uniqueSections.size}</div></div>
    <div class="kpi"><div class="label">Tantièmes généraux</div><div class="value">${totalTantiemes()}</div></div>
    <div class="kpi"><div class="label">Demandes reçues</div><div class="value">${reqs.length}</div></div>
  `;
}

function renderTabs() {
  const nav = document.getElementById('tabsNav');
  const panels = document.getElementById('tabsPanels');
  if (!nav || !panels) return;
  nav.innerHTML = tabDefinitions.map((t, i) => `<button class="tab ${i===0?'active':''}" data-tab="${t.id}">${t.titre}</button>`).join('');
  panels.innerHTML = tabDefinitions.map((t, i) => `
    <div class="tab-panel ${i===0?'active':''}" data-tab="${t.id}">
      ${t.points.map(p => `<div class="meta">• ${p}</div>`).join('')}
    </div>
  `).join('');
  nav.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => setTab(btn.dataset.tab)));
}

function setTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.dataset.tab === tabId));
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = services.map(s => `
    <div class="card-sm">
      <div class="flag">${s.icon} ${s.titre}</div>
      <div class="meta">${s.texte}</div>
    </div>
  `).join('');
}

function renderFaq() {
  const wrap = document.getElementById('faqAccordion');
  if (!wrap) return;
  wrap.innerHTML = faq.map((f, i) => `
    <div class="accordion-item ${i===0?'open':''}">
      <div class="accordion-header">${f.q}<span>${i===0?'-':'+'}</span></div>
      <div class="accordion-content">${f.a}</div>
    </div>
  `).join('');
  wrap.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      item.querySelector('span').textContent = open ? '-' : '+';
    });
  });
}

function editRequest(e) {
  const { id, field } = e.target.dataset;
  const reqs = loadRequests();
  const idx = reqs.findIndex(r => r.id === id);
  if (idx === -1) return;
  reqs[idx][field] = e.target.value;
  saveRequests(reqs);
}

function downloadReglement() {
  const coproLines = coproprietaires.map(c => `Lot ${c.lot} — ${c.nom} — ${c.section} — ${c.nature} — ${c.tantiemes} / ${c.place}`);
  const content = [
    'RÈGLEMENT DE COPROPRIÉTÉ — RÉSIDENCE THALASSA',
    'Parties communes : ponton, plage, terrains sportifs, port (1 place par cabanon).',
    'Vie de l’île : silence après 00h, respect de la faune, animaux autorisés s’ils ne troublent pas.',
    '',
    'NATURE DES LOTS',
    'Chaque cabanon dispose d’un droit de jouissance sur un espace maritime privatif.',
    'Sport : créneaux partagés, aucun statut disponible/indisponible des lots.',
    '',
    'FORMATIONS',
    '- Sensibilisation faune locale',
    '- Premiers secours',
    '- Brief parcelles d’eau privatives',
    '',
    'TABLEAU COPROPRIÉTAIRES',
    ...coproLines,
    `Total tantièmes généraux : ${totalTantiemes()}`,
    `Total tantièmes place : ${totalPlaces()}`,
    '',
    'AG 12 mars 2025 : 10 000 / 10 000 tantièmes. Naturisme parties communes rejeté (3 résolutions). Naturisme sur parcelle d’eau privative adopté (Article 24). Bureau : Dupond / Flament / Petit.',
    'Dates clés : présentation orale le 28 novembre (copro physiquement, composition, règlement niveau 5/6, EDD, lieu).'
  ].join('\n');
  const blob = new Blob([content], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Reglement_Residence_Thalassa.pdf';
  a.click();
  URL.revokeObjectURL(url);
  toast('Règlement PDF téléchargé.');
}

function saveDraft() {
  const form = document.getElementById('requestForm');
  if (!form) return;
  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem(draftKey, JSON.stringify({ data, date: new Date().toISOString() }));
  updateDraftStatus('Brouillon sauvegardé.');
}

function restoreDraft() {
  const form = document.getElementById('requestForm');
  if (!form) return;
  const saved = JSON.parse(localStorage.getItem(draftKey) || 'null');
  if (!saved) return;
  Object.entries(saved.data).forEach(([k, v]) => { if (form[k]) form[k].value = v; });
  updateDraftStatus(`Brouillon restauré (${new Date(saved.date).toLocaleTimeString()}).`);
}

function resetDraft() {
  const form = document.getElementById('requestForm');
  if (!form) return;
  form.reset();
  localStorage.removeItem(draftKey);
  updateDraftStatus('Brouillon réinitialisé.');
}

function updateDraftStatus(text) {
  const status = document.getElementById('draftStatus');
  if (status) status.textContent = text;
}

function toast(message) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = message;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

function openAdmin() {
  const adminPanel = document.getElementById('adminPanel');
  if (!adminPanel) {
    alert('La console administrateur est disponible sur la page Demandes.');
    return;
  }
  const login = prompt('Identifiant administrateur');
  const pwd = login ? prompt('Mot de passe') : '';
  if (login === 'TALASSA' && pwd === 'TALASSAVIVEZLEREVE') {
    isAdmin = true;
    adminPanel.classList.remove('hidden');
    renderRequests();
    toast('Connexion réussie.');
  } else {
    alert('Identifiants incorrects. Accès refusé.');
  }
}

function logout() {
  const adminPanel = document.getElementById('adminPanel');
  if (adminPanel) adminPanel.classList.add('hidden');
  isAdmin = false;
  toast('Vous êtes déconnecté.');
}

function initRequests() {
  const form = document.getElementById('requestForm');
  if (!form) return;
  form.addEventListener('submit', submitRequest);
  form.addEventListener('input', saveDraft);
  setInterval(saveDraft, 30000);
  populateLotOptions();
  restoreDraft();
}

function init() {
  highlightNav();
  populateSectionFilter();
  renderOwners();
  renderTabs();
  renderServices();
  renderFaq();
  updateKpis();
  initRequests();
}

document.addEventListener('DOMContentLoaded', init);

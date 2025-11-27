function setActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const target = link.getAttribute('href');
    if (target === path || (path === '' && target === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const summary = item.querySelector('summary');
    summary && summary.addEventListener('click', () => {
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) other.removeAttribute('open');
      });
    });
  });
}

function initDemandes() {
  const form = document.querySelector('#demande-form');
  const list = document.querySelector('#demande-list');
  if (!form || !list) return;

  const storageKey = 'thalassa-demandes';
  const rows = JSON.parse(localStorage.getItem(storageKey) || '[]');

  const render = () => {
    list.innerHTML = '';
    if (!rows.length) {
      list.innerHTML = '<p class="muted small">Aucune demande pour le moment.</p>';
      return;
    }
    rows.forEach((row, index) => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<strong>${row.nom}</strong> — ${row.type}<br><span class="muted small">${row.message}</span>`;
      const btn = document.createElement('button');
      btn.className = 'button secondary small';
      btn.textContent = 'Marquer comme traité';
      btn.addEventListener('click', () => {
        rows.splice(index, 1);
        localStorage.setItem(storageKey, JSON.stringify(rows));
        render();
      });
      div.appendChild(btn);
      list.appendChild(div);
    });
  };

  render();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = form.nom.value.trim();
    const type = form.type.value;
    const message = form.message.value.trim();
    if (!nom || !message) return;
    rows.push({ nom, type, message });
    localStorage.setItem(storageKey, JSON.stringify(rows));
    form.reset();
    render();
  });
}

function init() {
  setActiveNav();
  initFaq();
  initDemandes();
}

document.addEventListener('DOMContentLoaded', init);

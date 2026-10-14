/* =========================================================
   Euro Heaters México – Lógica de la interfaz
   - Catálogo por familias con búsqueda y filtros (#/c/<familia>)
   - Vista de detalle por producto (#/p/<id>, /cotizar, /specs)
   - Galería, selector de configuración, pestañas y formulario demo
   Datos en data.js. No requiere backend ni librerías.
   ========================================================= */
(function () {
  'use strict';

  var D = window.EH, C = D.company, PRODUCTS = D.products;
  var CATS = [{ id: 'all', label: 'Todos' }].concat(D.cats);
  var catById = {}; D.cats.forEach(function (c) { catById[c.id] = c; });
  function byId(id) { return PRODUCTS.filter(function (x) { return x.id === id; })[0]; }

  /* ---------------- Ilustraciones (HTML + CSS) ---------------- */
  function visual(kind, o, thumb) {
    o = o || {};
    var html = '', cap = '', aria = '';
    if (kind === 'temp') {
      var z = o.zones || 4, mods = '', pv = ['238', '241', '240', '236', '239', '242'];
      for (var i = 0; i < z; i++) {
        mods += '<div class="mod"><div class="lcd"><div class="pv">' + pv[i] + '</div><div class="sv">240</div></div>' +
          '<div class="mod__row"><span>Z' + (i + 1) + '</span><i class="led"></i></div>' +
          '<div class="mod__keys"><i class="key"></i><i class="key"></i><i class="key"></i><i class="key"></i></div><div class="mod__sw"></div></div>';
      }
      if (o.extra) mods += '<div class="mod mod--plus">+</div>';
      mods += '<div class="mod mod--amp"><div class="lcd"><div class="pv">' + (z * 3.1).toFixed(1) + '</div><div class="sv">A</div></div><div class="mod__row"><span>AMP</span></div><div class="mod__sw"></div></div>';
      html = '<div class="rack"><div class="rack__ear"><i></i><i></i></div><div class="rack__cab">' + mods + '</div><div class="rack__ear"><i></i><i></i></div></div>';
      cap = 'RACK 19" · ' + (o.extra ? 'A MEDIDA' : z + (z === 1 ? ' ZONA' : ' ZONAS'));
      aria = 'Gabinete rack de 19 pulgadas con ' + z + ' pirómetros digitales y amperímetro';
    } else if (kind === 'modular') {
      var n = o.tiles || 12, tv = ['235', '238', '240', '241', '236', '239', '242', '237', '240', '238', '252', '239'], tiles = '', slots = '';
      for (var t = 0; t < n; t++) {
        tiles += '<div class="ztile"><span>Z' + (t + 1) + '<i class="led' + (tv[t] === '252' ? ' led--warn' : '') + '"></i></span><b>' + tv[t] + '</b></div>';
      }
      for (var s = 0; s < 8; s++) slots += '<div><i class="led' + (s === 3 ? ' led--warn' : '') + '"></i></div>';
      html = '<div class="cab dev"><div class="screen"><div class="screen__head"><span>ZONAS</span><span>' + n + ' · OK</span></div><div class="screen__grid">' + tiles + '</div></div>' +
        '<div class="slots">' + slots + '</div><div class="vents"><i></i><i></i><i></i></div></div>';
      cap = n === 2 ? 'TARJETA · 2 ZONAS' : 'MODULAR · TOUCH';
      aria = 'Gabinete modular con pantalla táctil que muestra ' + n + ' zonas de temperatura';
    } else if (kind === 'timer') {
      var volt = o.volt || '24 V DC', gates = [[4, 30], [22, 34], [44, 30], [62, 32]], g = '';
      gates.forEach(function (x, k) { g += '<div class="gate"><span>G' + (k + 1) + '</span><div><i style="left:' + x[0] + '%;width:' + x[1] + '%"></i></div></div>'; });
      html = '<div class="seq dev"><div class="seq__left"><div class="lcd"><span class="lbl">MODO</span><span class="mode">A</span><span class="lbl">SALIDA</span><span class="volt">' + volt + '</span></div>' +
        '<div class="seq__keys"><i class="key"></i><i class="key"></i><i class="key"></i></div></div>' +
        '<div class="seq__right">' + g + '<div class="axis"><span>0 s</span><span>apertura / cierre</span><span>t</span></div></div></div>';
      cap = 'SECUENCIA · ' + volt;
      aria = 'Controlador de secuencia con diagrama de apertura de 4 compuertas';
    } else {
      html = '<div class="press"><div class="press__ctrl dev"><div class="lcd"><span class="val">1250</span><span class="unit">PSI</span></div>' +
        '<div class="press__leds"><span><i class="led led--off"></i>HI</span><span><i class="led"></i>OK</span><span><i class="led led--off"></i>LO</span></div>' +
        '<div class="press__keys"><i class="key"></i><i class="key"></i><i class="key"></i><i class="key"></i></div></div>' +
        '<div class="cable"></div><div class="sensor"><div class="sensor__conn"></div><div class="sensor__head"></div><div class="sensor__hex"></div><div class="sensor__stem"></div><div class="sensor__tip"></div></div></div>';
      cap = 'PRESIÓN DE FUSIÓN';
      aria = 'Controlador de presión conectado a un transductor de presión de fusión';
    }
    return '<div class="viz' + (thumb ? ' viz--thumb' : '') + '" role="img" aria-label="' + aria + '"><span class="viz__cap" aria-hidden="true">' + cap + '</span><div class="viz__body">' + html + '</div></div>';
  }

  function vizOpts(p, o) {
    return {
      zones: p.viz === 'temp' ? (o === 'custom' ? 6 : Number(o)) : 4,
      extra: p.viz === 'temp' && o === 'custom',
      tiles: p.viz === 'modular' ? ({ touch: 12, multi: 8, card: 2 }[o] || 12) : 12,
      volt: p.viz === 'timer' && o === '220' ? '220 V AC' : '24 V DC'
    };
  }

  /* Imagen de producto: ilustración (controladores) o foto real sobre el mismo fondo */
  function mediaItems(p) { return (p.viz ? ['viz'] : []).concat(p.photos || []); }
  function photo(src, p, cap, thumb) {
    return '<div class="viz viz--photo' + (thumb ? ' viz--thumb' : '') + '">' +
      (cap ? '<span class="viz__cap" aria-hidden="true">' + esc(cap) + '</span>' : '') +
      '<img src="' + src + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async"></div>';
  }
  function media(p, opt, i, thumb) {
    var item = mediaItems(p)[i || 0];
    if (item === 'viz') return visual(p.viz, vizOpts(p, opt), thumb);
    return photo(item, p, thumb ? '' : catById[p.cat].label.toUpperCase(), thumb);
  }

  /* ---------------- Utilidades ---------------- */
  var $ = function (sel, el) { return (el || document).querySelector(sel); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  var ICON_CHECK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';
  var ICON_ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ICON_PDF = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>';
  var ICON_DOC = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6"/></svg>';
  var ICON_PIN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';

  /* ---------------- Catálogo ---------------- */
  var state = { cat: 'all', q: '' };

  function inCat(p, c) { return c === 'all' || p.cats.indexOf(c) !== -1; }

  function renderChips() {
    $('#chips').innerHTML = CATS.map(function (c) {
      var count = PRODUCTS.filter(function (p) { return inCat(p, c.id); }).length;
      return '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="' + (state.cat === c.id) + '">' + c.label + '<small>' + count + '</small></button>';
    }).join('');
  }

  function renderCards() {
    var q = norm(state.q.trim());
    var list = PRODUCTS.filter(function (p) {
      if (!inCat(p, state.cat)) return false;
      if (!q) return true;
      return norm(p.name + ' ' + p.short + ' ' + p.search + ' ' + p.chips.join(' ')).indexOf(q) !== -1;
    });
    $('#cards').innerHTML = list.map(function (p) {
      return '<article class="card">' +
        '<a class="card__media" href="#/p/' + p.id + '" tabindex="-1" aria-hidden="true">' + media(p, p.defOpt, 0) + '</a>' +
        '<div class="card__body"><div class="tags"><span class="tag">' + catById[p.cat].label + '</span>' + (p.badge ? '<span class="tag tag--green">' + esc(p.badge) + '</span>' : '') + '</div>' +
        '<h3><a href="#/p/' + p.id + '">' + esc(p.name) + '</a></h3><p>' + esc(p.short) + '</p>' +
        '<div class="specchips">' + p.chips.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>' +
        '<div class="card__actions"><a class="btn btn--navy btn--sm" href="#/p/' + p.id + '">Ver detalle</a>' +
        '<a class="btn btn--quote btn--sm" href="#/p/' + p.id + '/cotizar">Cotizar</a></div></div></article>';
    }).join('');
    $('#empty').hidden = list.length > 0;
    $('#result-count').textContent = list.length + (list.length === 1 ? ' producto' : ' productos');
  }

  /* ---------------- Detalle ---------------- */
  var detail = { id: null, opt: null, tab: 'specs', img: 0, sent: false };

  function renderTable(t) {
    return '<div class="mtable"><h3>' + esc(t.title) + '</h3><div class="mtable__scroll" tabindex="0" role="region" aria-label="' + esc(t.title) + '"><table><thead><tr>' +
      t.cols.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      t.rows.map(function (r) { return '<tr>' + r.map(function (v, i) { return i === 0 ? '<th scope="row">' + esc(v) + '</th>' : '<td>' + esc(v) + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>' + (t.note ? '<p class="mtable__note">' + esc(t.note) + '</p>' : '') + '</div>';
  }

  function tiles(list) {
    return '<div class="panel-grid">' + list.map(function (a) { return '<div class="tile"><h3>' + esc(a[0]) + '</h3><p>' + esc(a[1]) + '</p></div>'; }).join('') + '</div>';
  }

  function renderDetail() {
    var p = byId(detail.id);
    if (!p) return false;
    var hasOpts = !!p.opts;
    var optName = hasOpts ? p.opts.filter(function (o) { return o[0] === detail.opt; })[0][1] : '';
    var items = mediaItems(p);
    if (detail.img >= items.length) detail.img = 0;

    var tabs = [['specs', 'Especificaciones']];
    if (p.table) tabs.push(['models', 'Modelos y medidas']);
    tabs.push(['apps', 'Aplicaciones'], ['service', p.docs ? 'Descargas y garantía' : 'Servicio y garantía']);
    if (!tabs.some(function (t) { return t[0] === detail.tab; })) detail.tab = 'specs';

    var panel;
    if (detail.tab === 'specs') {
      var rows = typeof p.specs === 'function' ? p.specs(detail.opt, optName) : p.specs;
      panel = '<dl class="specs">' + rows.map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('') + '</dl>';
    } else if (detail.tab === 'models') {
      panel = renderTable(p.table);
    } else if (detail.tab === 'apps') {
      panel = tiles(p.apps);
    } else {
      panel = (p.docs ? '<div class="docs">' + p.docs.map(function (d) {
        return '<a class="doc" href="' + d[1] + '" target="_blank" rel="noopener">' + ICON_DOC + '<span><strong>' + esc(d[0]) + '</strong><small>PDF · ficha oficial EuroHeaters</small></span>' + ICON_PDF + '</a>';
      }).join('') + '</div>' : '') +
        tiles([['Garantía', p.warranty || 'Garantía por escrito en todos nuestros productos.'], ['Visitas técnicas sin costo', 'Personal calificado en campo para asesorarte en tu planta.'], ['Compatibilidad', 'Productos compatibles con otras marcas del mercado.'], ['Fabricación a medida', 'Configuraciones especiales bajo pedido.']]);
    }

    var form = detail.sent
      ? '<div class="success" role="status"><span class="success__icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg></span>' +
        '<h3>Solicitud recibida</h3><p>Un asesor técnico revisará tu solicitud' + (hasOpts ? ' (' + esc(optName) + ')' : '') + ' y te contactará a la brevedad. Si es urgente, llámanos al <a href="' + C.phoneHref + '">' + C.phone + '</a>.</p>' +
        '<button type="button" class="btn btn--outline btn--sm" data-action="reset">Enviar otra solicitud</button></div>'
      : '<form class="form" id="quote-form" novalidate>' +
        '<div class="field"><label for="q-nombre">Nombre</label><input id="q-nombre" name="nombre" type="text" autocomplete="name" required></div>' +
        '<div class="field"><label for="q-empresa">Empresa</label><input id="q-empresa" name="empresa" type="text" autocomplete="organization"></div>' +
        '<div class="field"><label for="q-correo">Correo</label><input id="q-correo" name="correo" type="email" autocomplete="email" required></div>' +
        '<div class="field"><label for="q-tel">Teléfono</label><input id="q-tel" name="telefono" type="tel" autocomplete="tel"></div>' +
        '<div class="field field--full"><label for="q-msg">Medidas, cantidad o detalles del proceso <small>(opcional)</small></label><textarea id="q-msg" name="mensaje" rows="4"></textarea></div>' +
        '<div class="form__foot"><span>Respondemos en horario laboral · ' + C.hours + '</span><button type="submit" class="btn btn--primary">Enviar solicitud</button></div></form>';

    var related = PRODUCTS.filter(function (x) { return x.id !== p.id && x.cat === p.cat; })
      .concat(PRODUCTS.filter(function (x) { return x.id !== p.id && x.cat !== p.cat && x.cats.indexOf(p.cat) !== -1; }))
      .slice(0, 3).map(function (r) {
        return '<a href="#/p/' + r.id + '"><span class="thumb">' + media(r, r.defOpt, 0, true) + '</span>' +
          '<span class="meta"><small>' + catById[r.cat].label + '</small><strong>' + esc(r.name) + '</strong><span>Ver detalle →</span></span></a>';
      }).join('');

    var gallery = '<div class="frame" id="pd-visual">' + media(p, detail.opt, detail.img) + '</div>' +
      (items.length > 1 ? '<div class="gallery" role="group" aria-label="Imágenes del producto">' + items.map(function (it, i) {
        return '<button type="button" class="gallery__btn" data-img="' + i + '" aria-pressed="' + (i === detail.img) + '" aria-label="Ver imagen ' + (i + 1) + ' de ' + items.length + '">' + media(p, detail.opt, i, true) + '</button>';
      }).join('') + '</div>' : '');

    var docBtn = p.docs
      ? '<a href="' + p.docs[0][1] + '" target="_blank" rel="noopener" class="btn btn--outline">' + ICON_PDF + 'Ficha técnica (PDF)</a>'
      : '<a href="#/p/' + p.id + '/specs" class="btn btn--outline">' + ICON_DOC + 'Ver especificaciones</a>';

    $('#view-detail').innerHTML =
      '<section class="container">' +
        '<div class="crumbs-row"><a class="back" href="#/c/' + p.cat + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Volver al catálogo</a>' +
        '<nav class="crumbs" aria-label="Ruta de navegación"><a href="#/">Inicio</a><span aria-hidden="true">/</span><a href="#/c/' + p.cat + '">' + catById[p.cat].label + '</a><span aria-hidden="true">/</span><span aria-current="page">' + esc(p.name) + '</span></nav></div>' +
        '<div class="pd">' +
          '<div class="pd__media">' + gallery +
            '<div class="kpis">' + p.kpis.map(function (k) { return '<div><strong>' + esc(k[0]) + '</strong><span>' + esc(k[1]) + '</span></div>'; }).join('') + '</div></div>' +
          '<div class="pd__info">' +
            '<div class="tags"><span class="tag tag--lg">' + catById[p.cat].label + '</span>' + (p.badge ? '<span class="tag tag--green tag--lg">' + esc(p.badge) + '</span>' : '') + '</div>' +
            '<h1>' + esc(p.name) + '</h1><p class="pd__desc">' + esc(p.desc) + '</p>' +
            (hasOpts ? '<div class="options"><div class="options__label" id="opt-label">' + p.optLabel + '</div>' +
              '<div class="options__list" role="group" aria-labelledby="opt-label">' + p.opts.map(function (o) { return '<button type="button" class="opt" data-opt="' + o[0] + '" aria-pressed="' + (o[0] === detail.opt) + '">' + o[1] + '</button>'; }).join('') + '</div>' +
              '<div class="options__help"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.01"/></svg><span>' + esc(p.optHelp(detail.opt)) + '</span></div></div>'
              : '<div class="specchips specchips--lg">' + p.chips.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>') +
            '<div class="actions"><a href="#/p/' + p.id + '/cotizar" class="btn btn--primary">Solicitar cotización ' + ICON_ARROW + '</a>' + docBtn + '</div>' +
            '<p class="pd__call">¿Prefieres hablar con un asesor? <a href="' + C.phoneHref + '">' + C.phone + '</a> · <a href="mailto:' + C.email + '?subject=' + encodeURIComponent('Cotización: ' + p.name) + '">' + C.email + '</a></p>' +
            '<ul class="checks"><li>' + ICON_CHECK + 'Garantía por escrito</li><li>' + ICON_CHECK + 'Visita técnica sin costo</li><li>' + ICON_CHECK + 'Fabricación a medida</li></ul>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="band"><div class="container section"><div class="eyebrow eyebrow--warm">Ventajas</div><h2>' + esc(p.headline || 'Diseñada para el trabajo diario de tu planta.') + '</h2>' +
        '<div class="features">' + p.features.map(function (f, i) { return '<div class="feature"><span>0' + (i + 1) + '</span><h3>' + esc(f[0]) + '</h3><p>' + esc(f[1]) + '</p></div>'; }).join('') + '</div></div></section>' +
      '<section class="container section" id="specs">' +
        '<div class="tabs-head"><div><div class="eyebrow">Ficha técnica</div><h2>Información técnica</h2></div>' +
        '<div class="tablist" role="tablist" aria-label="Información del producto">' + tabs.map(function (t) { var on = detail.tab === t[0]; return '<button type="button" class="tab" role="tab" id="tab-' + t[0] + '" aria-controls="tabpanel" data-tab="' + t[0] + '" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '">' + t[1] + '</button>'; }).join('') + '</div></div>' +
        '<div role="tabpanel" id="tabpanel" aria-labelledby="tab-' + detail.tab + '">' + panel + '</div>' +
      '</section>' +
      '<section class="quote" id="cotizar"><div class="container section quote__inner">' +
        '<div class="quote__text"><div class="eyebrow eyebrow--accent">Cotización</div><h2>Solicita tu cotización</h2>' +
          '<p>Te enviamos una propuesta con precio y tiempo de entrega. Si no tienes todas las medidas, un asesor te ayuda a definirlas.</p>' +
          '<div class="selection"><small>Tu selección</small><strong>' + esc(p.name) + '</strong>' + (hasOpts ? '<span>' + p.optLabel + ': ' + esc(optName) + '</span>' : '<span>' + catById[p.cat].label + '</span>') + '</div></div>' +
        '<div class="form-card">' + form + '</div>' +
      '</div></section>' +
      (related ? '<section class="container section related-wrap"><h2>También te puede interesar</h2><div class="related">' + related + '</div></section>' : '');
    return true;
  }

  /* ---------------- Inicio: sedes y footer ---------------- */
  function renderHomeExtras() {
    $('#offices').innerHTML = D.offices.map(function (o, i) {
      return '<li class="office' + (i === 0 ? ' office--main' : '') + '"><span class="office__pin">' + ICON_PIN + '</span><div>' +
        '<strong>' + esc(o.city) + '</strong>' + (o.tag ? '<em>' + esc(o.tag) + '</em>' : '') +
        o.lines.map(function (l) { return '<span>' + esc(l) + '</span>'; }).join('') +
        (o.phone ? '<a href="tel:' + o.phone.replace(/[^\d]/g, '') + '">Tel. ' + esc(o.phone) + '</a>' : '') + '</div></li>';
    }).join('');
    $('#world').innerHTML = D.world.map(function (w) {
      return '<li class="place"><img src="' + w.img + '" alt="" loading="lazy"><span><strong>' + esc(w.country) + '</strong>' + esc(w.city) + '</span></li>';
    }).join('');
    $('#distributors').textContent = D.distributors;
    $('#footer-links').insertAdjacentHTML('beforeend', D.cats.map(function (c) {
      return '<a href="#/c/' + c.id + '">' + c.label + ' <small>(' + PRODUCTS.filter(function (p) { return inCat(p, c.id); }).length + ')</small></a>';
    }).join(''));
  }

  /* ---------------- Router ---------------- */
  function setActiveNav(view) {
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('data-nav') === view);
    });
  }

  function showView(view) {
    $('#view-home').hidden = view !== 'home';
    $('#view-detail').hidden = view !== 'detail';
    setActiveNav(view === 'detail' ? 'catalog' : 'home');
  }

  function route() {
    var hash = location.hash || '#/';
    closeMenu();
    var m = hash.match(/^#\/p\/([a-z0-9-]+)(?:\/(cotizar|specs))?$/);
    if (m) {
      var p = byId(m[1]);
      if (!p) { location.hash = '#/'; return; }
      if (detail.id !== p.id) { detail = { id: p.id, opt: p.defOpt, tab: 'specs', img: 0, sent: false }; }
      if (m[2] === 'specs') detail.tab = 'specs';
      renderDetail();
      showView('detail');
      document.title = p.name + ' | EuroHeaters México';
      if (m[2]) scrollToId(m[2]); else window.scrollTo(0, 0);
      return;
    }
    document.title = 'Resistencias, sensores y controladores para colada caliente | EuroHeaters México';
    var c = hash.match(/^#\/c\/([a-z]+)$/);
    if (c && catById[c[1]]) {
      state.cat = c[1]; state.q = ''; $('#search').value = '';
      renderChips(); renderCards(); showView('home'); setActiveNav('catalog'); scrollToId('catalogo');
      return;
    }
    if (hash === '#/' || hash === '#') { showView('home'); window.scrollTo(0, 0); return; }
    var id = hash.slice(1);
    var target = document.getElementById(id);
    if (target && !$('#view-detail').contains(target)) showView('home');
    if (id === 'catalogo') setActiveNav('catalog');
    scrollToId(id);
  }

  function scrollToId(id) {
    requestAnimationFrame(function () {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: 'start' });
    });
  }

  /* ---------------- Menú móvil ---------------- */
  var burger = $('#burger'), mnav = $('#mobile-nav');
  function closeMenu() { mnav.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = !mnav.classList.contains('is-open');
    mnav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  mnav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });

  /* ---------------- Eventos ---------------- */
  $('#chips').addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]'); if (!b) return;
    state.cat = b.getAttribute('data-cat'); renderChips(); renderCards();
  });
  $('#search').addEventListener('input', function (e) { state.q = e.target.value; renderCards(); });
  $('#clear').addEventListener('click', function () { state.q = ''; state.cat = 'all'; $('#search').value = ''; renderChips(); renderCards(); });

  // Clic en un enlace al hash actual (p. ej. volver a #catalogo dos veces) también debe navegar
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
  });

  function rerender(focusSel) {
    var y = window.scrollY; renderDetail(); window.scrollTo(0, y);
    var el = focusSel && $(focusSel); if (el) el.focus();
  }

  $('#view-detail').addEventListener('click', function (e) {
    var opt = e.target.closest('[data-opt]');
    if (opt) {
      detail.opt = opt.getAttribute('data-opt');
      if (mediaItems(byId(detail.id))[0] === 'viz') detail.img = 0; // muestra la ilustración que refleja la opción
      return rerender('#view-detail [data-opt="' + detail.opt + '"]');
    }
    var img = e.target.closest('[data-img]');
    if (img) { detail.img = Number(img.getAttribute('data-img')); return rerender('#view-detail [data-img="' + detail.img + '"]'); }
    var tab = e.target.closest('[data-tab]');
    if (tab) { detail.tab = tab.getAttribute('data-tab'); return rerender('#view-detail [data-tab="' + detail.tab + '"]'); }
    if (e.target.closest('[data-action="reset"]')) { detail.sent = false; rerender(); }
  });

  // Pestañas: flechas izquierda/derecha cambian de pestaña (patrón WAI-ARIA)
  $('#view-detail').addEventListener('keydown', function (e) {
    var tab = e.target.closest('[role="tab"]');
    if (!tab || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
    var all = Array.prototype.slice.call(document.querySelectorAll('#view-detail [role="tab"]'));
    var next = all[(all.indexOf(tab) + (e.key === 'ArrowRight' ? 1 : all.length - 1)) % all.length];
    e.preventDefault(); next.click();
  });

  $('#view-detail').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    if (!f.checkValidity()) { f.reportValidity(); return; }
    // Demo: aquí se enviaría la solicitud al backend / servicio de correo.
    detail.sent = true;
    rerender();
  });

  /* ---------------- Inicio ---------------- */
  $('#hero-visual').innerHTML = visual('temp', { zones: 6 });
  renderHomeExtras();
  renderChips();
  renderCards();
  window.addEventListener('hashchange', route);
  route();
})();

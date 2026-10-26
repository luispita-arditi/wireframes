/* ARDITI — protótipo (wireframes finais): header com mega menu, navegação, estados, formulários, filtros e animações */
(function () {
  const LOGO = '<svg viewBox="0 0 76 24" fill="#3C3C3B" xmlns="http://www.w3.org/2000/svg"><path d="M72.0897 15.4727C72.0897 16.0769 71.618 16.5523 71.0183 16.5523H69.2834V22.6187C69.2834 23.3317 68.6838 23.9158 67.9762 23.9158C67.2686 23.9158 66.689 23.3317 66.689 22.6187V16.5523H65.1899C64.5903 16.5523 64.1386 16.0769 64.1386 15.4727C64.1386 14.8685 64.5903 14.3931 65.1899 14.3931H66.689V11.3277C66.689 10.6147 67.2686 10.0346 67.9762 10.0346C68.6838 10.0346 69.2834 10.6187 69.2834 11.3277V14.3931H71.0183C71.618 14.3931 72.0897 14.8685 72.0897 15.4727ZM63.1592 22.6187C63.1592 23.3317 62.5595 23.9158 61.852 23.9158C61.1444 23.9158 60.5648 23.3317 60.5648 22.6187V15.517C60.5648 14.804 61.1444 14.1998 61.852 14.1998C62.5595 14.1998 63.1592 14.804 63.1592 15.517V22.6187ZM63.2871 10.5301C63.2871 11.3277 62.6435 11.9561 61.852 11.9561C61.0605 11.9561 60.4368 11.3317 60.4368 10.5301C60.4368 9.7285 61.0565 9.08398 61.852 9.08398C62.6475 9.08398 63.2871 9.73252 63.2871 10.5301ZM56.0915 19.0578C56.0915 17.6117 55.236 16.4475 53.7569 16.4475C52.2778 16.4475 51.4424 17.6117 51.4424 19.0578C51.4424 20.5039 52.2778 21.6681 53.7569 21.6681C55.236 21.6681 56.0915 20.5039 56.0915 19.0578ZM58.6619 22.5946C58.6619 23.3076 58.0823 23.9118 57.3747 23.9118C56.8191 23.9118 56.1755 23.4566 56.1755 22.5946C55.7677 23.3921 54.6964 23.9964 53.4971 23.9964C50.8627 23.9964 48.8479 21.7728 48.8479 19.0538C48.8479 16.3347 50.8627 14.1112 53.4971 14.1112C54.6964 14.1112 55.7677 14.8242 56.0875 15.4485V10.4616C56.0875 9.74864 56.6672 9.16455 57.3747 9.16455C58.0823 9.16455 58.6619 9.74864 58.6619 10.4616V22.5946ZM49.1837 15.2794C49.1837 15.9279 48.6681 16.4435 48.0285 16.4435C46.4654 16.4435 44.9024 17.1565 44.9024 18.9249V22.6147C44.9024 23.3277 44.3227 23.9118 43.6152 23.9118C42.9076 23.9118 42.308 23.3277 42.308 22.6147V15.513C42.308 14.8 42.9076 14.1958 43.6152 14.1958C44.3227 14.1958 44.8784 14.8 44.8784 15.513C45.7978 14.4334 46.6133 14.1112 48.0285 14.1112C48.6721 14.1112 49.1837 14.6308 49.1837 15.2753V15.2794ZM38.2624 19.0578C38.2624 17.6117 37.427 16.4475 35.9479 16.4475C34.4688 16.4475 33.6333 17.6117 33.6333 19.0578C33.6333 20.5039 34.3848 21.6681 35.8599 21.6681C37.335 21.6681 38.2584 20.5039 38.2584 19.0578H38.2624ZM40.8569 22.6389C40.8569 23.3519 40.3012 23.9118 39.5936 23.9118C38.8861 23.9118 38.3304 23.2874 38.3304 22.5946C38.0506 23.2189 36.8753 23.9964 35.6321 23.9964C33.0816 23.9964 31.0469 21.7728 31.0469 19.0538C31.0469 16.3347 33.2535 14.1112 35.9519 14.1112C38.6502 14.1112 40.8569 16.3347 40.8569 19.0538V22.6389ZM75.7874 10.5301C75.7874 11.3277 75.1438 11.9561 74.3523 11.9561C73.5608 11.9561 72.9372 11.3317 72.9372 10.5301C72.9372 9.7285 73.5568 9.08398 74.3523 9.08398C75.1478 9.08398 75.7874 9.73252 75.7874 10.5301ZM75.6595 22.6187C75.6595 23.3317 75.0599 23.9158 74.3523 23.9158C73.6447 23.9158 73.0651 23.3317 73.0651 22.6187V15.517C73.0651 14.804 73.6447 14.1998 74.3523 14.1998C75.0599 14.1998 75.6595 14.804 75.6595 15.517V22.6187Z"/><path d="M24.2211 12.5438C24.2211 13.3414 23.5775 13.9698 22.786 13.9698C21.9945 13.9698 21.3709 13.3454 21.3709 12.5438C21.3709 11.7422 21.9905 11.0977 22.786 11.0977C23.5815 11.0977 24.2211 11.7462 24.2211 12.5438ZM11.7208 12.5438C11.7208 13.3414 11.0772 13.9698 10.2857 13.9698C9.49417 13.9698 8.87055 13.3454 8.87055 12.5438C8.87055 11.7422 9.49017 11.0977 10.2857 11.0977C11.0812 11.0977 11.7208 11.7462 11.7208 12.5438ZM11.5929 22.5217C11.5929 23.2346 10.9933 23.8187 10.2857 23.8187C9.57812 23.8187 8.99848 23.2346 8.99848 22.5217V18.1188C3.86563 16.6365 0 13.6073 0 9.56294C0 3.72608 8.05505 0 16.346 0C24.6369 0 32.6919 3.72608 32.6919 9.56294C32.6919 13.4985 29.0262 16.4753 24.0972 17.998V22.5217C24.0972 23.2346 23.4976 23.8187 22.79 23.8187C22.0824 23.8187 21.5028 23.2346 21.5028 22.5217V18.6425C19.8438 18.9607 18.1009 19.1259 16.346 19.1259C14.735 19.1259 13.1319 18.9849 11.5929 18.715V22.5217ZM15.1307 16.6485V14.7835C15.1307 14.0705 15.7303 13.4663 16.4379 13.4663C17.1455 13.4663 17.7251 14.0705 17.7251 14.7835V16.6405C25.3604 16.2578 30.2614 12.7452 30.2614 9.55891C30.2614 6.18328 24.7688 2.44512 16.346 2.44512C7.92314 2.44512 2.43051 6.18731 2.43051 9.56294C2.43051 12.9386 7.39946 16.3142 15.1347 16.6526L15.1307 16.6485Z"/></svg>';

  /* ---- ícones ---- */
  const S = (d, fill) => `<svg viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="${fill ? 'none' : 'currentColor'}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const I = {
    down: S('<path d="M6 9l6 6 6-6"/>'), up: S('<path d="M6 15l6-6 6 6"/>'), left: S('<path d="M15 6l-6 6 6 6"/>'), right: S('<path d="M9 6l6 6-6 6"/>'),
    search: S('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'),
    arrow: S('<path d="M5 12h14M13 6l6 6-6 6"/>'), arrowl: S('<path d="M19 12H5M11 6l-6 6 6 6"/>'), arrowd: S('<path d="M12 5v14M6 13l6 6 6-6"/>'), arrowu: S('<path d="M12 19V5M6 11l6-6 6 6"/>'),
    ext: S('<path d="M8 16L17 7M9 7h8v8"/>'), dl: S('<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>'),
    plus: S('<path d="M12 5v14M5 12h14"/>'), minus: S('<path d="M5 12h14"/>'), x: S('<path d="M6 6l12 12M18 6L6 18"/>'),
    play: S('<path d="M8 5.5v13l10.5-6.5z"/>', 1), cal: S('<rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M4 10h16M8 3.5v4M16 3.5v4"/>'),
    clock: S('<circle cx="12" cy="12" r="8"/><path d="M12 8v4.5l3 2"/>'), pin: S('<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>'),
    mail: S('<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>'), phone: S('<path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2 2A16 16 0 014.5 6a2 2 0 012-2z"/>'),
    user: S('<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20a7 7 0 0114 0"/>'), file: S('<path d="M7 3.5h7l4 4V20a.5.5 0 01-.5.5h-10A.5.5 0 017 20z"/><path d="M14 3.5V8h4"/>'),
    filter: S('<path d="M4 6h16M7 12h10M10 18h4"/>'), check: S('<path d="M5 12.5l4.5 4.5L19 7.5"/>'), menu: S('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    globe: S('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.5 2.5 14.5 0 17M12 3.5c-2.5 2.5-2.5 14.5 0 17"/>'),
  };
  const soc = (t) => `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#3C3C3B"/><text x="16" y="20.5" text-anchor="middle" font-family="Montserrat,sans-serif" font-size="11" font-weight="700" fill="#fff">${t}</text></svg>`;
  const ABBR = { 'icon-ar': 'arrow', 'icon-al': 'arrowl', 'icon-cd': 'down', 'icon-cu': 'up', 'icon-cr': 'right', 'icon-cl': 'left', 'icon-pl': 'plus', 'icon-mi': 'minus', 'icon-ex': 'ext', 'icon-lk': 'ext', 'icon-gl': 'globe', 'icon-x': 'x', 'icon-dl': 'dl' };
  function icon(name, el) {
    const n = (name || '').toLowerCase().replace(/\s+\d+$/, '');
    if (ABBR[n]) return I[ABBR[n]];
    if (n === 'layer_1' && el) { const t = (el.parentElement && el.parentElement.textContent) || ''; return /@/.test(t) ? I.mail : /\d{3}/.test(t) ? I.phone : null; }
    if (/geo/.test(n)) return I.pin;
    if (/facebook/.test(n)) return soc('f'); if (/instagram/.test(n)) return soc('ig'); if (/linkedin/.test(n)) return soc('in'); if (/youtube/.test(n)) return soc('▶'); if (/flickr/.test(n)) return soc('••'); if (/(twitter|x-)/.test(n)) return soc('X');
    if (/search|pesquis|lupa/.test(n)) return I.search;
    if (/download|descarreg/.test(n)) return I.dl;
    if (/external|extern|diagonal|up-right|arrow-up-right|link/.test(n)) return I.ext;
    if (/arrow|seta/.test(n)) return /left|esq|back|prev/.test(n) ? I.arrowl : /down|baixo/.test(n) ? I.arrowd : /up|cima/.test(n) ? I.arrowu : I.arrow;
    if (/chevron|caret|angle/.test(n)) return /up/.test(n) ? I.up : /left|prev/.test(n) ? I.left : /right|next/.test(n) ? I.right : I.down;
    if (/plus|add|mais/.test(n)) return I.plus; if (/minus|menos/.test(n)) return I.minus; if (/close|fechar|icon-x/.test(n)) return I.x;
    if (/play|audio|áudio/.test(n)) return I.play; if (/calend|date|data/.test(n)) return I.cal; if (/clock|time|hora|dura/.test(n)) return I.clock;
    if (/pin|location|local|map/.test(n)) return I.pin; if (/mail|email|envelope/.test(n)) return I.mail; if (/phone|tel/.test(n)) return I.phone;
    if (/user|person|pessoa/.test(n)) return I.user; if (/pdf|file|doc|ficheiro/.test(n)) return I.file; if (/filter|filtro/.test(n)) return I.filter;
    if (/check|tick/.test(n)) return I.check; if (/menu|hamburger/.test(n)) return I.menu; if (/globe|lang|idioma/.test(n)) return I.globe;
    return null;
  }


  /* ---- mapa do protótipo (segue o mega menu do Figma) ---- */
  const IC = (k, fb) => (window.ICO && window.ICO[k]) || fb;
  const PAGES = window.PAGES || {};
  const here = document.body.dataset.page || 'index';
  const base = document.body.dataset.base || here;
  const MEGA = [
    ['A Agência', 'sobre-nos', [[null, [['Sobre Nós', 'sobre-nos'], ['Órgãos Sociais', 'orgaos-sociais'], ['Organograma', 'organograma']]], [null, [['Associados', 'associados'], ['Parceiros', 'parceiros'], ['Instalações', 'instalacoes']]]]],
    ['Investigação e Tecnologia', 'investigacao', [[null, [['MARE-Madeira', 'unidade-mare'], ['Madeira N-LINCS', 'unidade-nlincs', [['NeuroRehabLab', 'unidade-neurorehablab'], ['EELab', 'unidade-eelab']]], ['ITI', 'unidade-iti']]], [null, [['IDL', 'unidade-idl'], ['OOM', 'unidade-oom'], ['Laboratório de Prototipagem', 'unidade-prototipagem']]]]],
    ['Inovação', 'inovacao', [['I&D Aplicada', [['Mesa Interativa', 'mesa-interativa'], ['Jogos N-LINCS', 'jogos-nlincs'], ['SWE', 'swe'], ['Dive Reporter', 'dive-reporter']]], ['Programas de ligação Academia-Empresa', [['SIFIDE-RAM', 'sifide-ram'], ['iLab', 'ilab'], ['Tech+', 'tech-plus'], ['Smart Islands Hub', 'smart-islands-hub'], ['Programas concluídos', 'inovacao']]]]],
    ['Serviços', 'servicos', [[null, [['Plataforma Tecnológica Oceânica', 'plataforma-oceanica'], ['Madeira Coastal Insight Service', 'mcis'], ['ZLT Mar de Magalhães', null], ['Drones Aéreos', null]]], [null, [['Prototipagem', null], ['Ocean and Landbanking RAM', null], ['Venture Studio', null]]]]],
    ['Projetos', 'projetos', [[null, [['Em curso', 'projetos'], ['Finalizados', 'projetos']]]]],
    ['Serviço Educativo', 'servico-educativo', [[null, [['Oferta Educativa', 'oferta-educativa'], ['Ciência Aberta no Verão', 'ciencia-aberta'], ['Ciência Aberta no Natal', 'ciencia-aberta-natal'], ['Ciência Aberta na Páscoa', 'ciencia-aberta-natal']]]]],
    ['Notícias e Eventos', 'noticias', [[null, [['Notícias', 'noticias'], ['Agenda', 'agenda'], ['Newsletters', 'newsletters']]]]],
    ['Oportunidades', 'bolsas', [[null, [['Bolsas', 'bolsas'], ['Concursos', 'concursos'], ['Estágios', 'estagios']]], [null, [['Recrutamento', 'recrutamento'], ['Programas para empresas', null]]]]],
  ];
  const FOOT = [
    ['ARDITI', [['Contactos Administrativos', 'contactos'], ['Contactos Polos e Unidades de I&D', 'contactos-polos'], ['Manual de Acolhimento', 'manual-acolhimento'], ['Press-kit', 'press-kit'], ['Arquivo: Bastidores das Ciências', 'bastidores']]],
    ['Relatórios e Planos', [['Plano de Atividades', 'plano-atividades'], ['Relatórios Anuais', 'relatorios-anuais'], ['Relatórios e Contas', 'relatorios-contas'], ['Plano e Orçamento', 'plano-orcamento']]],
    ['Documentos Institucionais', [['Estatutos', 'estatutos'], ['Regulamentos Internos', 'regulamentos'], ['Código de Ética e Conduta', 'codigo-etica'], ['Igualdade e Não Discriminação', 'igualdade'], ['Plano de Prevenção de Riscos de Corrupção', 'prevencao-corrupcao'], ['Canal de Denúncias', 'denuncias'], ['Dados Fiscais', 'dados-fiscais']]],
    ['Privacidade e Proteção de Dados', [['Política de Privacidade', 'privacidade'], ['Política de Cookies', 'cookies'], ['Termos de Utilização', 'termos'], ['Encarregado de Proteção de Dados (DPO)', 'dpo']]],
  ];
  // grupo (menu) de cada página, para marcar a secção ativa
  const GROUP = {};
  MEGA.forEach(([g, entry, cols]) => { GROUP[entry] = g; cols.forEach(([, ls]) => ls.forEach((l) => { if (l[1]) GROUP[l[1]] = GROUP[l[1]] || g; (l[2] || []).forEach((s) => { GROUP[s[1]] = g; }); })); });
  Object.entries(PAGES).forEach(([s, m]) => { if (!GROUP[s]) { const g = MEGA.find((x) => x[0] === m.g); if (g) GROUP[s] = g[0]; } });
  ['sobre-nos', 'organograma-mobile'].forEach((s) => { GROUP[s] = 'A Agência'; });

  // texto exato → página
  const R = {
    'Início': 'index', 'A Agência': 'sobre-nos', 'Sobre Nós': 'sobre-nos', 'Sobre nós': 'sobre-nos', 'Órgãos Sociais': 'orgaos-sociais', 'Organograma': 'organograma', 'Associados': 'associados', 'Parceiros': 'parceiros', 'Instalações': 'instalacoes',
    'Investigação e Tecnologia': 'investigacao', 'Unidades e polos de investigação': 'investigacao', 'Ver mais Unidades': 'investigacao',
    'MARE-Madeira': 'unidade-mare', 'Madeira N-LINCS': 'unidade-nlincs', 'NeuroRehabLab': 'unidade-neurorehablab', 'EELab': 'unidade-eelab', 'ITI': 'unidade-iti', 'Instituto de Tecnologias Interativas (ITI)': 'unidade-iti',
    'IDL': 'unidade-idl', 'Instituto Dom Luiz (IDL)': 'unidade-idl', 'OOM': 'unidade-oom', 'Observatório Oceânico da Madeira (OOM)': 'unidade-oom', 'Observatório Oceânico da Madeira': 'unidade-oom', 'Laboratório de Prototipagem': 'unidade-prototipagem',
    'Inovação': 'inovacao', 'I&D Aplicada': 'inovacao', 'Programas concluídos': 'inovacao', 'Mesa Interativa': 'mesa-interativa', 'Jogos N-LINCS': 'jogos-nlincs', 'SWE': 'swe', 'Dive Reporter': 'dive-reporter', 'Sentinela Atlântica': 'sentinela-atlantica',
    'SIFIDE-RAM': 'sifide-ram', 'iLab': 'ilab', 'Tech+': 'tech-plus', 'Smart Islands Hub': 'smart-islands-hub', 'SMART ISLANDS HUB': 'smart-islands-hub', 'PhD Empresas': 'phd-empresas', 'Digital Shift': 'digital-shift', 'TFI': 'tfi',
    'Serviços': 'servicos', 'Plataforma Tecnológica Oceânica': 'plataforma-oceanica', 'Conhecer a plataforma': 'plataforma-oceanica', 'Madeira Coastal Insight Service': 'mcis', 'Ver MCIS': 'mcis', 'Ver todos os serviços': 'servicos', 'Ver  todos os serviços': 'servicos',
    'Projetos': 'projetos', 'A3MATLANTIC': 'projeto', 'Projeto A3MATLANTIC': 'projeto',
    'Serviço Educativo': 'servico-educativo', 'Oferta Educativa': 'oferta-educativa', 'Oferta Educativa 26/27': 'oferta-educativa', 'Ver todas as atividades': 'oferta-educativa',
    'Ciência Aberta': 'ciencia-aberta', 'Ciência Aberta no Verão': 'ciencia-aberta', 'Atividades de Verão': 'ciencia-aberta', 'Ciência Aberta no Natal': 'ciencia-aberta-natal', 'Oficina de Natal': 'ciencia-aberta-natal', 'Oficina de Páscoa': 'ciencia-aberta-natal',
    'Notícias e Eventos': 'noticias', 'Notícias': 'noticias', 'Ver mais notícias': 'noticias', 'Agenda': 'agenda', 'Ver eventos': 'agenda', 'Ver agenda': 'agenda', 'Newsletters': 'newsletters',
    'Oportunidades': 'bolsas', 'Bolsas': 'bolsas', 'Concursos': 'concursos', 'Estágios': 'estagios', 'Recrutamento': 'recrutamento', 'Gestor/a Financeiro/a de Projetos': 'recrutamento-detalhe', 'ARDITI-BIPD-2026': 'concurso',
    'Canal de Denúncias': 'denuncias', 'Contactos Administrativos': 'contactos', 'Polos e Unidades de I&D': 'contactos-polos', 'Contactos Polos e Unidades de I&D': 'contactos-polos', 'Manual de Acolhimento': 'manual-acolhimento', 'Press-kit': 'press-kit', 'Arquivo: Bastidores das Ciências': 'bastidores',
    'Plano de Atividades': 'plano-atividades', 'Relatórios Anuais': 'relatorios-anuais', 'Relatórios e Contas': 'relatorios-contas', 'Plano e Orçamento': 'plano-orcamento', 'Relatórios e Planos': 'plano-atividades',
    'Documentos Institucionais': 'estatutos', 'Estatutos': 'estatutos', 'Regulamentos Internos': 'regulamentos', 'Código de Ética': 'codigo-etica', 'Código de Ética e Conduta': 'codigo-etica', 'Igualdade': 'igualdade', 'Igualdade e Não Discriminação': 'igualdade',
    'Prevenção da Corrupção': 'prevencao-corrupcao', 'Plano de Prevenção de Riscos de Corrupção': 'prevencao-corrupcao', 'Dados Fiscais': 'dados-fiscais',
    'Privacidade e Proteção de Dados': 'privacidade', 'Política de Privacidade': 'privacidade', 'Política de Cookies': 'cookies', 'Termos de Utilização': 'termos', 'Proteção de Dados (DPO)': 'dpo', 'Encarregado de Proteção de Dados (DPO)': 'dpo',
  };
  // começa por… → página
  const STARTS = [['Da poluição à economia', 'atividade'], ['Ciência Aberta no Verão 2026', 'noticia'], ['Ciência Aberta no Verão:', 'noticia'], ['ARDITI-BIPD', 'concurso'], ['Concurso para Atribuição de Bolsas', 'concurso'], ['ARDITI-CP/', 'bolsa'], ['Bolsa de Investigação', 'bolsa'],
    ['Digital Shift:', 'evento'], ['MARtístico', 'evento-martistico'], ['Evento de lançamento do projeto InnoVamos', 'evento-innovamos'], ['Lançamento do projeto InnoVamos', 'evento-innovamos'], ['ARDITI_GESTOR', 'recrutamento-detalhe'], ['Campanha oceanográfica', 'noticia']];
  // ligações próprias de cada página (fluxos)
  const PR = {
    denuncias: { 'Fazer uma denúncia': 'denuncias-direitos', 'Acompanhar uma denúncia': 'denuncias-acompanhar' },
    'denuncias-direitos': { 'Fazer uma denúncia': 'denuncias-formulario', 'Voltar': 'denuncias', '1. Direitos e deveres': 'denuncias-direitos', '2. Formulário': 'denuncias-formulario' },
    'denuncias-formulario': { 'Submeter denúncia': 'denuncias-sucesso', '1. Direitos e deveres': 'denuncias-direitos' },
    'denuncias-sucesso': { 'Acompanhar a denúncia': 'denuncias-acompanhar', 'Voltar ao site': 'index' },
    concursos: { 'Concluídos': 'concursos-concluidos', 'Ver concurso': 'concurso' },
    'concursos-concluidos': { 'Abertos': 'concursos', 'Ver concurso': 'concurso' },
    bolsas: { 'Ver bolsa': 'bolsa' },
    recrutamento: { 'Ver detalhes': 'recrutamento-detalhe' },
    agenda: { 'Notícias': 'noticias', 'Newsletters': 'newsletters' },
  };
  // botões genéricos → procura o título do cartão; se não houver, vai para o detalhe por defeito da secção
  const GENERIC = /^(saber mais|ver detalhes?|ler not[ií]cia|ler mais|ver procedimento|ver mais|ver concurso|ver bolsa|ver atividade|ver projeto|ver evento|ver programa|ver p[aá]gina da unidade|ver unidade|ver servi[cç]o|ver solu[cç][aã]o|ver newsletter)\b/i;
  const DEF = { index: 'noticia', investigacao: 'unidade-neurorehablab', inovacao: 'mesa-interativa', servicos: 'plataforma-oceanica', projetos: 'projeto', 'servico-educativo': 'atividade', 'oferta-educativa': 'atividade', atividade: 'atividade', 'ciencia-aberta': 'atividade', noticias: 'noticia', noticia: 'noticia', agenda: 'evento', bolsas: 'bolsa', concursos: 'concurso', 'concursos-concluidos': 'concurso', recrutamento: 'recrutamento-detalhe', pesquisa: 'noticia' };
  const unitDef = /^unidade-/.test(base) ? 'projeto' : null;
  const go = (p) => { if (!p) return; let [pg, h] = p.split('#'); let q = ''; if (pg.includes('?')) { [pg, q] = pg.split('?'); q = '?' + q; } if (pg === here && !q) { if (h) jump(h); return; } document.body.classList.add('leave'); setTimeout(() => { location.href = pg + '.html' + q + (h ? '#' + encodeURIComponent(h) : ''); }, 260); };
  addEventListener('pageshow', () => document.body.classList.remove('leave'));
  const jump = (n) => { const t = document.querySelector(`.page [data-n="${n}"]`) || document.getElementById(n); if (t) scrollTo({ top: t.getBoundingClientRect().top + scrollY - 110, behavior: 'smooth' }); };
  // aviso curto (ações sem destino no protótipo)
  let toastT;
  const toast = (msg) => { let t = document.querySelector('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); } t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2600); };


  /* ---- header com mega menu (painel a toda a largura, por baixo do header) ---- */
  const curG = GROUP[here] || GROUP[base];
  const lk = (l) => l[1] ? `<a href="${l[1]}.html"${l[1] === here || l[1] === base ? ' class="on"' : ''}>${l[0]}</a>` : `<a class="off" title="Página ainda sem wireframe">${l[0]}</a>`;
  const panel = ([g, entry, cols]) => `<div class="mg-p" data-g="${g}"><div class="mg-in"><div class="mg-intro"><p class="mg-t">${g}</p><a class="mg-more" href="${entry}.html">Ver secção<i class="ic">${I.arrow}</i></a></div>${cols.map(([cap, ls]) => `<div class="mg-col">${cap ? `<p class="mg-cap">${cap}</p>` : ''}${ls.map((l) => l[2] ? `<div class="mg-grp">${lk(l)}<div class="mg-sub">${l[2].map(lk).join('')}</div></div>` : lk(l)).join('')}</div>`).join('')}</div></div>`;
  const header = `<header class="hdr"><div class="hdr-in"><a class="logo" href="index.html" aria-label="ARDITI">${LOGO}</a><nav class="nav"><ul>${MEGA.map((m) => `<li><button type="button" class="top${m[0] === curG ? ' cur' : ''}" data-g="${m[0]}">${m[0]}<i class="ic">${IC('chevron-down', I.down)}</i></button></li>`).join('')}</ul><a class="srch" href="pesquisa.html" aria-label="Pesquisar"><i class="ic">${IC('icon-search', I.search)}</i></a><button type="button" class="burger" aria-label="Menu"><i class="ic">${I.menu}</i></button></nav></div><div class="mega">${MEGA.map(panel).join('')}</div></header><div class="mega-veil"></div>`;
  const footer = `<footer class="ftr"><div class="ftr-in"><div class="ftr-main"><div class="ftr-l"><div class="ftr-brand"><a class="ftr-logo" href="index.html">${LOGO.replace('viewBox="0 0 76 24"', 'viewBox="0 0 76 24" width="126" height="40"')}<span>Agência Regional para o Desenvolvimento da Investigação, Tecnologia e Inovação</span></a><div class="ftr-ct"><div><i class="ic">${IC('icon-phone 1', I.phone)}</i><p class="s">+351 <b>291 721 220</b></p></div><div><i class="ic">${IC('icon-mail 1', I.mail)}</i><p class="s">arditi@arditi.pt</p></div><p class="s">Edif. Madeira Tecnopolo, Piso 2, Caminho da Penteada - 9020-105 Funchal, Portugal</p></div></div><div class="nl"><div><h2 class="h2">Mantenha-se a par das nossas novidades.</h2><p class="s" style="margin-top:8px">Subscreva a nossa newsletter</p></div><div class="chk"><label><input type="checkbox">Trimestral</label><label><input type="checkbox">Funding</label></div><form class="nl-f"><input type="email" placeholder="Email" required><button aria-label="Subscrever"><i class="ic">${I.arrow}</i></button></form></div></div><div class="ftr-cols">${FOOT.map((c) => `<div><p class="xs">${c[0]}</p>${c[1].map((l) => `<a href="${l[1]}.html"${l[1] === here || l[1] === base ? ' class="on"' : ''}>${l[0]}</a>`).join('')}</div>`).join('')}</div></div><div class="ftr-band"><div><p class="xs"><b>Operações Bio-Valor e Agroecoram cofinanciadas por:</b></p><div class="logos" style="margin-top:8px"><i></i><i></i><i></i><i></i><i></i></div></div><div><p class="xs"><b>Monitorizado por:</b></p><p class="s" style="margin-top:8px"><b>• UptimeRobot</b></p></div><div><p class="xs"><b>Segue as nossas redes:</b></p><div class="ftr-soc" style="margin-top:8px"><i class="ic">${IC('icon-social-facebook', soc('f'))}</i><i class="ic">${IC('icon-social-instagram', soc('ig'))}</i><i class="ic">${IC('icon-social-linkedin', soc('in'))}</i><i class="ic">${IC('icon-social-youtube', soc('▶'))}</i><i class="ic">${IC('icon-social-flickr', soc('••'))}</i></div></div></div><div class="ftr-copy"><hr><div><p class="xs">Copyright 2026 © <b>ARDITI - Agência Regional para o Desenvolvimento da Investigação, Tecnologia e Inovação</b></p><p class="s"><b>PT</b></p></div></div></div></footer>`;

  document.querySelectorAll('[data-include]').forEach((el) => el.remove());
  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);
  const hdr = document.querySelector('.hdr');
  addEventListener('scroll', () => hdr.classList.toggle('sc', scrollY > 10), { passive: true });
  document.querySelector('.nl-f').addEventListener('submit', (e) => { e.preventDefault(); e.target.querySelector('input').value = ''; toast('Subscrição registada (protótipo).'); });

  // abrir/fechar painéis: hover em desktop, clique também funciona (e Esc fecha)
  const mega = hdr.querySelector('.mega'); const veil = document.querySelector('.mega-veil');
  let mgT;
  const openG = (g) => { clearTimeout(mgT); hdr.querySelectorAll('.top').forEach((b) => b.classList.toggle('open', b.dataset.g === g)); mega.querySelectorAll('.mg-p').forEach((p) => p.classList.toggle('on', p.dataset.g === g)); hdr.classList.toggle('mg-on', !!g); veil.classList.toggle('on', !!g); };
  const closeSoon = () => { clearTimeout(mgT); mgT = setTimeout(() => openG(null), 180); };
  hdr.querySelectorAll('.top').forEach((b) => {
    b.addEventListener('mouseenter', () => openG(b.dataset.g));
    b.addEventListener('click', () => openG(b.classList.contains('open') ? null : b.dataset.g));
  });
  hdr.addEventListener('mouseleave', closeSoon); hdr.addEventListener('mouseenter', () => clearTimeout(mgT));
  hdr.querySelector('.srch').addEventListener('mouseenter', () => openG(null)); hdr.querySelector('.logo').addEventListener('mouseenter', () => openG(null));
  veil.addEventListener('click', () => openG(null));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') openG(null); });
  mega.addEventListener('click', (e) => { if (e.target.closest('a.off')) { e.preventDefault(); toast('Esta página ainda não tem wireframe.'); } });
  hdr.querySelector('.burger').addEventListener('click', () => hdr.classList.toggle('m-open'));

  /* ---- barra do protótipo: mapa de páginas, estados (variantes) e grelha ---- */
  const vars = Object.entries(PAGES).filter(([, m]) => m.b === base);
  const vHtml = vars.length > 1 ? `<span class="pb-sep"></span><span class="pb-l">Estados:</span>${vars.map(([s, m]) => `<a href="${s}.html" class="pb-v${s === here ? ' on' : ''}">${m.v || 'Principal'}</a>`).join('')}` : '';
  document.body.insertAdjacentHTML('beforeend', `<div class="proto-bar"><span class="pb-l">Protótipo · wireframes finais</span><a href="mapa.html">Mapa de páginas</a><button type="button" id="gbtn">Grelha (G)</button>${vHtml}</div>`);
  document.getElementById('gbtn').addEventListener('click', () => document.querySelector('.grid-ov').classList.toggle('on'));
  if (vars.length > 1) document.querySelector('.proto-bar').classList.add('has-v');


  /* ---- ícones nas páginas ---- */
  const BOX = '<svg viewBox="0 0 20 20"><rect x="1.5" y="1.5" width="17" height="17" rx="3" fill="#fff" stroke="currentColor" stroke-width="1.4"/><path class="tk" d="M5.5 10.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const RAD = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.5" fill="#fff" stroke="currentColor" stroke-width="1.4"/><circle class="tk" cx="10" cy="10" r="4.5" fill="currentColor"/></svg>';
  document.querySelectorAll('.page i.ic[data-i]').forEach((el) => {
    const n = el.dataset.i.toLowerCase();
    if (n === 'checkbox') { el.innerHTML = BOX; el.classList.add('cb'); return; }
    if (n === 'radio') { el.innerHTML = RAD; el.classList.add('rd'); return; }
    const ALI = { 'icon-search': 'icon-search', 'icon-cd': 'chevron-down', 'chevron-down': 'chevron-down', 'icon-chevron-down': 'chevron-down', 'icon-cr': 'chevron-right', 'chevron-right': 'chevron-right', 'icon-cl': 'chevron-left', 'chevron-left': 'chevron-left', 'download': 'download', 'geo-alt': 'geo-alt', 'person': 'person', 'icon-mail 1': 'icon-mail 1', 'icon-phone 1': 'icon-phone 1', 'link-45deg': 'link-45deg', 'icon-social-linkedin': 'icon-social-linkedin', 'icon-social-facebook': 'icon-social-facebook', 'icon-social-instagram': 'icon-social-instagram', 'icon-social-youtube': 'icon-social-youtube', 'icon-social-flickr': 'icon-social-flickr', 'check-lg': 'check-lg', 'easel2': 'easel2' };
    let key = ALI[n];
    if (!key && n === 'layer_1') { const t = (el.parentElement && el.parentElement.textContent) || ''; key = /@/.test(t) ? 'icon-mail 1' : /\d{3}/.test(t) ? 'icon-phone 1' : null; }
    if (key && window.ICO && window.ICO[key]) { el.innerHTML = window.ICO[key]; el.classList.add('ico'); return; }
    const s = icon(el.dataset.i, el);
    if (s) el.innerHTML = s;
    else if (/^icon/i.test(el.dataset.i)) el.classList.add('ph');
    else if (/^(vector|line|linha)/i.test(el.dataset.i)) {
      const w = parseFloat(getComputedStyle(el).width), h = parseFloat(getComputedStyle(el).height);
      if (h <= 2 && w > 2) el.classList.add('line-h'); else if (w <= 2 && h > 2) el.classList.add('line-v');
      else if (w >= 14 && w <= 24 && Math.abs(w - h) < 2) { el.innerHTML = BOX; el.classList.add('cb'); }
    }
  });

  /* ---- grelha de 12 colunas (overlay) ---- */
  const ov = document.createElement('div'); ov.className = 'grid-ov'; ov.innerHTML = '<i></i>'.repeat(12); document.body.appendChild(ov);
  addEventListener('keydown', (e) => { if ((e.key === 'g' || e.key === 'G') && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) ov.classList.toggle('on'); });

  /* ---- ligações ---- */
  const route = (t) => {
    const pr = PR[here] || PR[base];
    if (pr && pr[t] !== undefined) return pr[t];
    if (R[t] !== undefined) return R[t];
    for (const [k, v] of STARTS) if (t.startsWith(k)) return v;
    return undefined;
  };
  document.querySelectorAll('.page p, .page h1, .page h2, .page h3, .page h4').forEach((el) => {
    if (el.closest('[data-n="cabeçalho de página"]') && el.tagName === 'H1') return;
    const t = el.textContent.replace(/\s+/g, ' ').trim().replace(/\s*→$/, '');
    const r = route(t);
    const pr = PR[here] || PR[base] || {};
    if (r && (r !== here || pr[t])) { el.classList.add('lnk'); el.dataset.go = r; }
    else if (r === here && el.closest('.tabs')) el.classList.add('lnk-cur');
    else if (GENERIC.test(t)) { el.classList.add('lnk'); el.dataset.generic = '1'; }
    else if (/^(descarregar|download)/i.test(t) || /^ver (newsletter|mapa)$/i.test(t) || /^(visitar site|candidatar-se|inscrever|book a call|contactar|aceder à plataforma)/i.test(t)) { el.classList.add('lnk'); el.dataset.act = t; }
  });
  // botões (caixas) inteiros: o clique no botão conta como clique no texto
  document.addEventListener('click', (e) => {
    if (e.target.closest('.hdr,.proto-bar,.ftr,.dd-menu,.toast')) {
      const a = e.target.closest('a[href$=".html"]');
      if (a && !e.metaKey && !e.ctrlKey) { e.preventDefault(); go(a.getAttribute('href').replace('.html', '')); }
      return;
    }
    let el = e.target.closest('[data-go],[data-generic],[data-act]');
    if (!el) { const box = e.target.closest('.btnlike'); if (box) el = box.querySelector('[data-go],[data-generic],[data-act]'); }
    if (!el) return;
    if (el.dataset.go) return go(el.dataset.go);
    if (el.dataset.act) return act(el.dataset.act, el);
    // genérico: procura um título com rota no mesmo cartão
    let p = el.parentElement;
    for (let i = 0; i < 7 && p; i++, p = p.parentElement) {
      const hit = [...p.querySelectorAll('h2[data-go],h3[data-go],h4[data-go],p.l[data-go],p.m[data-go]')].find((x) => x !== el && !x.closest('.tabs'));
      if (hit) return go(hit.dataset.go);
    }
    const d = DEF[base] || unitDef || (/^(inovacao|mesa|jogos|swe|dive|sentinela|sifide|ilab|tech|smart|phd|digital|tfi)/.test(base) ? 'mesa-interativa' : null);
    if (d) go(d); else toast('Ligação sem destino neste protótipo.');
  });
  function act(t, el) {
    if (/descarregar|download/i.test(t)) return toast('Download do ficheiro (simulado no protótipo).');
    if (/ver mapa/i.test(t)) return window.open('https://www.google.com/maps/search/?api=1&query=Madeira+Tecnopolo+Funchal', '_blank');
    if (/inscrever|candidatar/i.test(t)) { const f = document.querySelector('.page [data-n*="formul" i],.page [data-n*="inscri" i]'); if (f && !el.closest('[data-n*="formul" i]')) return jump(f.dataset.n); return toast('Abre o formulário de candidatura/inscrição (externo).'); }
    if (/book a call|contactar/i.test(t)) return go('contactos');
    toast('Abre um site externo (simulado no protótipo).');
  }
  // caixas com aspeto de botão → cursor e hover em todo o botão
  document.querySelectorAll('.page [data-go], .page [data-generic], .page [data-act]').forEach((t) => {
    const b = t.parentElement; if (!b || b.classList.contains('page')) return;
    const cs = getComputedStyle(b);
    if (b.children.length <= 3 && b.offsetHeight <= 64 && (cs.borderTopStyle !== 'none' || (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'rgb(255, 255, 255)')) && b.textContent.trim().length < 48) b.classList.add('btnlike');
    else if (b.children.length <= 3 && b.textContent.trim().length < 48 && b.querySelector('i.ic')) b.classList.add('btnlike', 'btn-txt');
  });


  /* ---- ajustes de layout do protótipo ---- */
  const isRow = (el) => { const cs = getComputedStyle(el); return cs.display === 'flex' && cs.flexDirection === 'row'; };
  const SPECW = {}; [...document.querySelectorAll('style')].forEach((st) => { for (const m of st.textContent.matchAll(/\.(k\w+)\{([^}]*)\}/g)) { const w = m[2].match(/(?:^|;)width:([\d.]+)px/); if (w) SPECW[m[1]] = parseFloat(w[1]); } });
  // 0) linhas "hug" do Figma: a largura é a soma das larguras dos blocos (como no Figma);
  //    se não couber no contentor, passa a ter scroll horizontal (carrossel)
  document.querySelectorAll('.page div').forEach((row) => {
    if (!isRow(row) || getComputedStyle(row).flexWrap === 'wrap' || row.classList.contains('hscroll')) return;
    const k = [...row.children]; if (k.length < 2) return;
    const bases = k.map((c) => { const fb = getComputedStyle(c).flexBasis; if (fb.endsWith('px')) return parseFloat(fb); const w = [...c.classList].map((x) => SPECW[x]).find(Boolean); return w || NaN; });
    if (bases.some(isNaN)) return;
    const cs = getComputedStyle(row); const gap = parseFloat(cs.columnGap) || 0;
    const total = bases.reduce((a, b) => a + b, 0) + gap * (k.length - 1) + (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
    const avail = row.parentElement.clientWidth - (parseFloat(getComputedStyle(row.parentElement).paddingLeft) || 0) - (parseFloat(getComputedStyle(row.parentElement).paddingRight) || 0);
    if (row.getBoundingClientRect().width < total - 1) { row.style.width = Math.min(total, avail) + 'px'; row.style.maxWidth = '100%'; }
    if (total > avail + 2 && bases.every((b) => b >= 120)) {
      const cards = k.every((c) => getComputedStyle(c).borderTopStyle !== 'none');
      if (cards) { // cards que no Figma saem do contentor → grelha de 3 colunas
        row.style.flexWrap = 'wrap'; row.style.rowGap = gap + 'px'; row.style.width = ''; row.style.alignSelf = 'stretch';
        const per = Math.max(1, Math.round((avail + gap) / (Math.max(...bases) + gap)));
        k.forEach((c) => { c.style.flex = `0 0 calc((100% - ${(per - 1) * gap}px) / ${per})`; c.style.width = 'auto'; c.style.minWidth = '0'; });
      } else if (k.every((c) => c.offsetHeight < 140 && !c.querySelector('.ic.ph'))) { row.style.flexWrap = 'wrap'; row.style.rowGap = Math.max(gap, 24) + 'px'; row.style.width = ''; row.style.alignSelf = 'stretch'; const per = Math.max(1, Math.floor((avail + gap) / (Math.max(...bases) + gap))); k.forEach((c) => { c.style.flex = `0 0 calc((100% - ${(per - 1) * gap}px) / ${per})`; c.style.minWidth = '0'; }); } else row.classList.add('hscroll-in');
    }
  });
  // 1) botões e pills: texto numa só linha
  document.querySelectorAll('.page div').forEach((el) => {
    const cs = getComputedStyle(el); const r = parseFloat(cs.borderTopLeftRadius) || 0;
    if (el.offsetHeight && el.offsetHeight <= 66 && (r >= 8 || cs.borderTopStyle !== 'none') && el.querySelectorAll('p').length <= 2 && el.querySelector('p') && el.textContent.trim().length < 40) {
      el.querySelectorAll('p').forEach((p) => p.classList.add('nowrap')); el.classList.add('nowrap');
    }
  });
  // 1b) blocos com altura fixa no Figma onde o texto já não cabe: a altura passa a mínima
  document.querySelectorAll('.page div').forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.overflow !== 'visible' || el.closest('.hscroll,.hscroll-in')) return;
    if (el.scrollHeight > el.clientHeight + 2 && el.clientHeight > 0 && [...el.querySelectorAll('p,h3,h4')].some((t) => t.getBoundingClientRect().bottom > el.getBoundingClientRect().bottom + 1)) {
      el.style.minHeight = el.clientHeight + 'px'; el.style.height = 'auto';
    }
  });
  // 2) linhas de cards iguais (ex.: notícias relacionadas) → 3 blocos com a mesma largura
  document.querySelectorAll('.page div').forEach((row) => {
    if (!isRow(row) || getComputedStyle(row).flexWrap === 'wrap') return;
    const k = [...row.children];
    if (k.length < 2 || !k.every((x) => x.tagName === 'DIV' && x.className && x.className === k[0].className)) return;
    if (!k.every((x) => x.offsetHeight > 150)) return;
    if (k.every((x) => getComputedStyle(x).flexBasis === 'auto')) k.forEach((x) => { x.style.flex = '1 1 0'; x.style.minWidth = '0'; });
  });
  // 3) cards: descrição só aparece no mouse over (logo + nome sempre visíveis)
  document.querySelectorAll('.page div').forEach((card) => {
    const cs = getComputedStyle(card);
    if ((parseFloat(cs.borderTopLeftRadius) || 0) < 12 || card.offsetHeight < 380 || cs.borderTopStyle === 'none') return;
    if (!card.querySelector('h3,h4') || !/saber mais/i.test(card.textContent)) return;
    const ps = [...card.querySelectorAll('p.s,p.m')].filter((p) => p.textContent.trim().length > 60 && !p.closest('.nowrap'));
    if (!ps.length) return;
    card.classList.add('card-h'); ps.forEach((p) => p.classList.add('hov'));
  });
  // 4) galerias de fotografias com scroll horizontal
  document.querySelectorAll('.page [data-n="fotografias"], .page [data-n*="galeria" i]').forEach((sec) => {
    let row = sec.querySelector('.hscroll');
    if (!row) { row = [...sec.querySelectorAll('div')].find((d) => isRow(d) && d.children.length >= 2); if (!row) return; row.classList.add('hscroll'); }
    sec.style.paddingLeft = '0'; sec.style.paddingRight = '0';
    [...row.children].forEach((c) => { if (getComputedStyle(c).flexBasis === 'auto' && !c.style.width) c.style.width = '461px'; });
    const nav = document.createElement('div'); nav.className = 'gal-nav';
    nav.innerHTML = `<button type="button" aria-label="Anterior"><i class="ic">${I.arrowl}</i></button><button type="button" aria-label="Seguinte"><i class="ic">${I.arrow}</i></button>`;
    sec.appendChild(nav);
    const [pb, nb] = nav.querySelectorAll('button');
    pb.onclick = () => row.scrollBy({ left: -row.clientWidth * 0.6, behavior: 'smooth' });
    nb.onclick = () => row.scrollBy({ left: row.clientWidth * 0.6, behavior: 'smooth' });
    let sx = 0, sl = 0, down = false;
    row.addEventListener('pointerdown', (e) => { down = true; sx = e.clientX; sl = row.scrollLeft; row.classList.add('drag'); });
    addEventListener('pointerup', () => { down = false; row.classList.remove('drag'); });
    row.addEventListener('pointermove', (e) => { if (down) row.scrollLeft = sl - (e.clientX - sx); });
  });
  // 5) menu lateral: acompanha o scroll e cada item leva à secção
  const h2s = [...document.querySelectorAll('.page h2')];
  document.querySelectorAll('.page div').forEach((nav) => {
    if (getComputedStyle(nav).position !== 'absolute' || nav.closest('.snav-wrap')) return;
    const items = [...nav.querySelectorAll('p')].filter((p) => h2s.some((h) => h.textContent.trim() === p.textContent.trim()));
    if (items.length < 3) return;
    nav.classList.add('snav-wrap');
    const targets = items.map((p) => h2s.find((h) => h.textContent.trim() === p.textContent.trim()));
    const last = targets[targets.length - 1].closest('.rv,.hero') || targets[targets.length - 1];
    const top = nav.getBoundingClientRect().top + scrollY;
    nav.style.height = Math.max(nav.offsetHeight, last.getBoundingClientRect().bottom + scrollY - top) + 'px';
    nav.style.alignItems = 'flex-start';
    [...nav.children].forEach((c) => c.classList.add('snav-stick'));
    items.forEach((p, i) => {
      p.classList.add('snav-item'); p.querySelectorAll('b').forEach((b) => b.replaceWith(...b.childNodes));
      p.addEventListener('click', (e) => { e.stopPropagation(); scrollTo({ top: targets[i].getBoundingClientRect().top + scrollY - 140, behavior: 'smooth' }); });
    });
    const upd = () => { let a = 0; targets.forEach((t, i) => { if (t.getBoundingClientRect().top < 260) a = i; }); items.forEach((p, i) => p.classList.toggle('on', i === a)); };
    addEventListener('scroll', upd, { passive: true }); upd();
  });



  /* ================= interações ================= */
  const txt = (el) => el.textContent.replace(/\s+/g, ' ').trim();
  const isGrey = (p) => { const c = getComputedStyle(p).color.match(/\d+/g).map(Number); return c[0] > 140 && Math.abs(c[0] - c[2]) < 20; };
  const sectionOf = (el) => el.closest('.rv,.hero') || el.closest('.page');

  /* ---- listas de itens de uma secção (para filtros e pesquisa) ---- */
  function itemsIn(sec, skip) {
    const mode = (c) => { const k = [...c.children].filter((x) => x.tagName === 'DIV' && x.offsetHeight > 40); const m = {}; k.forEach((x) => { m[x.className] = (m[x.className] || 0) + 1; }); let best = null, n = 0; for (const [cl, v] of Object.entries(m)) if (v > n) { best = cl; n = v; } return [best, n]; };
    const tally = {};
    sec.querySelectorAll('div').forEach((c) => {
      if (skip && (c.contains(skip) || skip.contains(c))) return;
      const [cl, n] = mode(c); if (!cl || n < 2 || txt(c).length < 40) return;
      if ([...c.children].some((x) => x.classList.contains('fld') || x.classList.contains('fld-sel'))) return;
      (tally[cl] = tally[cl] || []).push(c);
    });
    let best = null, bestN = 0;
    for (const [cl, cs] of Object.entries(tally)) { const outer = cs.filter((c) => !cs.some((o) => o !== c && o.contains(c))); const n = outer.reduce((a, c) => a + mode(c)[1], 0); if (n > bestN) { best = [cl, outer]; bestN = n; } }
    if (!best) return [];
    return best[1].flatMap((c) => [...c.children].filter((x) => x.tagName === 'DIV' && x.className === best[0]));
  }
  function applyFilter(sec, keys, q, skip) {
    const items = itemsIn(sec, skip); if (!items.length) return false;
    const want = (it) => { const t = txt(it).toLowerCase(); return keys.every((k) => !k || t.includes(k.toLowerCase())) && (!q || t.includes(q.toLowerCase())); };
    const n = items.filter(want).length;
    let empty = sec.querySelector('.f-empty');
    if (!n && keys.some(Boolean) && !q) { items.forEach((it) => it.classList.remove('f-out')); toast('Filtro aplicado (sem dados de exemplo para esta opção).'); if (empty) empty.remove(); return true; }
    items.forEach((it) => it.classList.toggle('f-out', !want(it)));
    [...new Set(items.map((it) => it.parentElement))].forEach((c) => { const grp = c.parentElement; const allOut = [...c.children].every((x) => x.classList.contains('f-out') || x.tagName !== 'DIV'); if (grp && grp !== sec && grp.children.length <= 3) grp.classList.toggle('f-out', allOut); });
    if (!n) { if (!empty) { empty = document.createElement('p'); empty.className = 'm f-empty'; items[0].parentElement.after(empty); } empty.textContent = 'Sem resultados para esta pesquisa.'; }
    else if (empty) empty.remove();
    // contagem "N resultados/atividades/…"
    sec.querySelectorAll('p').forEach((p) => { const m = txt(p).match(/^(\d+|XX) (\S.*)$/); if (m && /resultados|atividades|concursos|bolsas|equipamentos|projetos|notícias|eventos|anúncios|documentos/.test(m[2])) { if (!p.dataset.orig) p.dataset.orig = txt(p); p.textContent = (keys.some(Boolean) || q ? n : p.dataset.orig.split(' ')[0]) + ' ' + m[2]; } });
    return true;
  }

  /* ---- campos de formulário: caixas do wireframe → inputs reais ---- */
  const OPTS = {
    'ano': ['2026', '2025', '2024', '2023', '2022'], 'mês': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    'tipo': ['Investigação', 'Pós-doutoramento', 'Doutoramento', 'Iniciação científica'], 'tipo de bolsa': ['Bolsa de Investigação (BI)', 'Bolsa de Iniciação Científica (BIC)', 'Pós-doutoramento'],
    'área científica': ['Ciências do Mar', 'Engenharia', 'Ciências da Saúde', 'Ciências Sociais', 'Todos os domínios'], 'categoria': ['Investigação', 'Inovação', 'Institucional', 'Educação'],
    'unidade de investigação': ['MARE-Madeira', 'Madeira N-LINCS', 'ITI', 'IDL', 'OOM', 'Laboratório de Prototipagem'], 'mare-madeira': ['MARE-Madeira', 'Madeira N-LINCS', 'ITI', 'IDL', 'OOM'], 'programa': ['Interreg MAC 2021-2027', 'Interreg Atlântica Área 2021-2027', 'FCT', 'Horizonte Europa'],
    'ciclo de ensino': ['1.º Ciclo', '2.º Ciclo', '3.º Ciclo', 'Secundário'], 'tema': ['Biologia marinha', 'Lixo marinho', 'Eletrónica', 'Inteligência Artificial', 'Química'], 'idade': ['3+ anos', '6+ anos', '8+ anos', '12+ anos'],
    'todos': ['Todos', 'Costa', 'Mar profundo'], 'relevância': ['Relevância', 'Mais recentes', 'Mais antigos'], 'escolha uma opção': ['Assédio ou discriminação', 'Fraude ou corrupção', 'Conflito de interesses', 'Proteção de dados', 'Outro'],
    'selecionar': ['1.º Ciclo', '2.º Ciclo', '3.º Ciclo', 'Secundário', 'Ensino profissional'],
  };
  const page = document.querySelector('.page');
  page.querySelectorAll('div').forEach((box) => {
    if (box.closest('.fld,.hscroll') || box.dataset.fld) return;
    const cs = getComputedStyle(box);
    if (cs.borderTopStyle === 'none' || cs.borderTopWidth === '0px') return;
    const h = box.offsetHeight, w = box.offsetWidth; if (w < 120) return;
    const ps = box.querySelectorAll('p'); const icons = box.querySelectorAll('i.ic');
    if (box.querySelector('div div')) return;
    const chev = [...icons].find((i) => /icon-cd|chevron-down/i.test(i.dataset.i || ''));
    const srch = [...icons].find((i) => /search/i.test(i.dataset.i || ''));
    // select / dropdown
    if (chev && h <= 60 && ps.length >= 1 && ps.length <= 2) {
      const lab = txt(ps[ps.length - 1]); const key = lab.toLowerCase().replace(/:$/, '');
      const opts = OPTS[key] || OPTS[txt(ps[0]).toLowerCase().replace(/ ?:$/, '')] || ['Opção 1', 'Opção 2', 'Opção 3'];
      box.dataset.fld = 'select'; box.classList.add('fld-sel'); box.tabIndex = 0;
      const menu = document.createElement('div'); menu.className = 'dd-menu';
      const allLabel = lab;
      menu.innerHTML = [allLabel].concat(opts.filter((o) => o !== allLabel)).map((o, i) => `<button type="button"${i === 0 ? ' class="on"' : ''}>${o}</button>`).join('');
      box.appendChild(menu);
      box.addEventListener('click', (e) => {
        const b = e.target.closest('.dd-menu button');
        if (b) {
          e.stopPropagation(); menu.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
          ps[ps.length - 1].textContent = b.textContent; box.classList.remove('open'); box.classList.toggle('fld-set', b !== menu.firstChild);
          const sec = sectionOf(box);
          if (/relevância/i.test(allLabel)) return toast('Resultados ordenados por: ' + b.textContent);
          if (/^todos$/i.test(allLabel)) { equipFilter(sec, b.textContent); return; }
          const keys = [...sec.querySelectorAll('.fld-sel.fld-set')].map((s) => txt(s.querySelector('p:last-of-type')));
          if (!applyFilter(sec, keys, '', box.parentElement)) toast('Filtro: ' + b.textContent);
          return;
        }
        document.querySelectorAll('.fld-sel.open').forEach((x) => x !== box && x.classList.remove('open'));
        box.classList.toggle('open');
      });
      return;
    }
    // caixa de texto (input / textarea)
    const onlyPh = ps.length <= 1 && (!ps.length || isGrey(ps[0]) || /^(\[|ex\.|dd\/|nome@|email@)/i.test(txt(ps[0])));
    if (!onlyPh || ps.length > 1) return;
    const bg = cs.backgroundColor; if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'rgb(255, 255, 255)') return;
    const ph = ps.length ? txt(ps[0]) : '';
    if (h >= 36 && h <= 60) {
      const inp = document.createElement('input'); inp.placeholder = ph; inp.className = 'fld-in ' + (ps[0] ? ps[0].className : 's');
      if (/@/.test(ph)) inp.type = 'email'; if (/dd\/mm/.test(ph)) { inp.type = 'text'; inp.onfocus = () => { inp.type = 'date'; }; }
      if (ps[0]) ps[0].replaceWith(inp); else box.appendChild(inp);
      box.dataset.fld = srch ? 'search' : 'input'; box.classList.add('fld');
      if (srch) inp.addEventListener('input', () => applyFilter(sectionOf(box), [...sectionOf(box).querySelectorAll('.fld-sel.fld-set')].map((s) => txt(s.querySelector('p:last-of-type'))), inp.value.trim(), box.parentElement));
      if (here === 'pesquisa') inp.addEventListener('keydown', (e) => { if (e.key === 'Enter' && inp.value.trim()) { const q = inp.value.trim(); document.querySelectorAll('.page h1, .page h2, .page p').forEach((p) => { if (/^Pesquisa por “/.test(txt(p))) p.textContent = `Pesquisa por “${q}”`; if (/resultados para “/.test(txt(p))) p.textContent = txt(p).replace(/“.*”/, `“${q}”`); }); toast('Pesquisa simulada: os resultados são de exemplo.'); } });
    } else if (h > 60 && w > 300 && !icons.length) {
      const ta = document.createElement('textarea'); ta.placeholder = ph; ta.className = 'fld-in s';
      if (ps[0]) ps[0].replaceWith(ta); else box.appendChild(ta);
      box.dataset.fld = 'textarea'; box.classList.add('fld', 'fld-ta');
      const counter = [...(box.parentElement ? box.parentElement.querySelectorAll('p') : [])].find((p) => /m[aá]x\. ?[\d .]+ ?car/i.test(txt(p)));
      if (counter) { const max = parseInt(txt(counter).replace(/\D/g, ''), 10) || 8000; ta.maxLength = max; const orig = txt(counter); ta.addEventListener('input', () => { counter.textContent = `${ta.value.length} / ${max} caracteres`; }); counter.dataset.orig = orig; }
    }
  });
  addEventListener('click', (e) => { if (!e.target.closest('.fld-sel')) document.querySelectorAll('.fld-sel.open').forEach((x) => x.classList.remove('open')); });
  // ao clicar na etiqueta do campo, foca o campo
  page.querySelectorAll('.fld').forEach((f) => { f.addEventListener('click', () => { const i = f.querySelector('input,textarea'); if (i) i.focus(); }); });

  /* ---- checkboxes e radios ---- */
  const rowOf = (ic) => { let r = ic.parentElement; return r && r.children.length <= 3 ? r : ic; };
  page.querySelectorAll('i.ic.cb, i.ic.rd').forEach((ic) => {
    const row = rowOf(ic); row.classList.add('opt-row');
    row.addEventListener('click', (e) => {
      e.stopPropagation();
      if (ic.classList.contains('rd')) {
        const grp = row.parentElement; grp.querySelectorAll(':scope > .opt-row i.ic.rd, :scope > * > .opt-row i.ic.rd').forEach((x) => x.classList.remove('on')); ic.classList.add('on');
      } else ic.classList.toggle('on');
      if (here === 'pesquisa') searchFilter(ic, row);
    });
  });
  // pesquisa: "Todos" começa ativo; filtrar por tipo de conteúdo
  function searchFilter(ic, row) {
    const boxes = [...page.querySelectorAll('i.ic.cb')]; const all = boxes[0];
    if (ic === all) { boxes.forEach((b) => b.classList.toggle('on', b === all)); }
    else { all.classList.toggle('on', !boxes.slice(1).some((b) => b.classList.contains('on'))); }
    const sel = boxes.slice(1).filter((b) => b.classList.contains('on')).map((b) => txt(rowOf(b)).replace(/\d+$/, '').trim());
    const sing = (s) => ({ 'Notícias': 'Notícia', 'Eventos': 'Evento', 'Projetos': 'Projeto', 'Oportunidades': 'Oportunidade', 'Documentos': 'Documento', 'Serviços': 'Serviço', 'Unidades & Polos': 'Página', 'Páginas': 'Página' }[s] || s);
    const res = page.querySelector('[data-n="resultados de pesquisa"]') || page;
    const items = itemsIn(res, ic.closest('.opt-row').parentElement);
    let n = 0;
    items.forEach((it) => { const ok = !sel.length || sel.some((s) => txt(it).includes(sing(s))) || /talvez procure/i.test(txt(it)); it.classList.toggle('f-out', !ok); if (ok) n++; });
    res.querySelectorAll('p').forEach((p) => { if (/^A mostrar/.test(txt(p))) p.textContent = sel.length ? `A mostrar ${n} resultado${n === 1 ? '' : 's'} (${sel.join(', ')})` : 'A mostrar 1–10 de 48'; });
  }
  if (here === 'pesquisa') { const b = page.querySelector('i.ic.cb'); if (b) b.classList.add('on'); }

  /* ---- acordeões (+ / −) ---- */
  page.querySelectorAll('i.ic[data-i="icon-pl"], i.ic[data-i="icon-mi"]').forEach((ic) => {
    const head = ic.parentElement; const item = head.parentElement; if (!item) return;
    let body = head.nextElementSibling;
    const open = ic.dataset.i === 'icon-mi';
    if (!body) { body = document.createElement('div'); body.className = 'acc-gen'; body.innerHTML = `<p class="m" style="color:#5f5f5f">[Conteúdo do ponto «${txt(head)}» — a preencher.]</p>`; head.after(body); }
    body.classList.add('acc-b'); head.classList.add('acc-h'); item.classList.add('acc');
    const set = (o) => { item.classList.toggle('acc-open', o); ic.innerHTML = o ? I.minus : I.plus; body.style.maxHeight = o ? body.scrollHeight + 40 + 'px' : '0px'; };
    set(open);
    head.addEventListener('click', () => set(!item.classList.contains('acc-open')));
  });
  // organograma mobile: cada departamento abre em acordeão
  if (here === 'organograma-mobile') {
    page.querySelectorAll('i.ic[data-i="icon-chevron-down"]').forEach((ic, k) => {
      const head = ic.parentElement; const item = head.parentElement;
      let body = head.nextElementSibling;
      if (!body) { body = document.createElement('div'); body.className = 'acc-gen'; body.innerHTML = ['Direção', 'Divisão A', 'Divisão B'].map((x) => `<p class="s" style="padding:6px 0;color:#5f5f5f">${x}</p>`).join(''); head.after(body); }
      body.classList.add('acc-b'); item.classList.add('acc'); head.classList.add('acc-h');
      const set = (o) => { item.classList.toggle('acc-open', o); ic.style.transform = o ? 'rotate(180deg)' : ''; body.style.maxHeight = o ? body.scrollHeight + 40 + 'px' : '0px'; };
      set(false); head.addEventListener('click', () => set(!item.classList.contains('acc-open')));
    });
  }

  /* ---- separadores (tabs): marcar o ativo e hover ---- */
  page.querySelectorAll('.tabs p').forEach((p) => { if (p.querySelector('b')) p.classList.add('tab-on'); });
  // Concursos (abertos): no Figma o sub-separador ativo ficou em «Concluídos»; aqui marca-se «Abertos»
  if (here === 'concursos') {
    const pa = [...page.querySelectorAll('p')].find((p) => txt(p) === 'Abertos'), pc = [...page.querySelectorAll('p')].find((p) => txt(p) === 'Concluídos');
    if (pa && pc) { const ua = pa.nextElementSibling, uc = pc.nextElementSibling; pa.innerHTML = '<b>Abertos</b>'; pc.textContent = 'Concluídos'; if (ua && uc) { const c = ua.className; ua.className = uc.className; uc.className = c; } }
  }

  /* ---- upload de ficheiros ---- */
  page.querySelectorAll('i.ic[data-i="upload"]').forEach((ic) => {
    const zone = ic.closest('div[data-n="upload"]') || ic.parentElement; zone.classList.add('upl');
    const f = document.createElement('input'); f.type = 'file'; f.multiple = true; f.hidden = true; zone.appendChild(f);
    const out = document.createElement('p'); out.className = 's upl-out'; zone.appendChild(out);
    const show = (files) => { out.textContent = files.length ? [...files].map((x) => x.name).join(' · ') : ''; };
    zone.addEventListener('click', () => f.click()); f.addEventListener('change', () => show(f.files));
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag'); }); zone.addEventListener('dragleave', () => zone.classList.remove('drag'));
    zone.addEventListener('drop', (e) => { e.preventDefault(); zone.classList.remove('drag'); show(e.dataTransfer.files); });
  });

  /* ---- Canal de Denúncias ---- */
  if (here === 'denuncias-acompanhar') {
    const res = page.querySelector('[data-n="resultado (exemplo)"]') || [...page.querySelectorAll('div')].find((d) => /^ARD-2026-7X4K/.test(txt(d)) && d.offsetHeight > 200);
    if (res) {
      res.classList.add('reveal-wait');
      const btn = [...page.querySelectorAll('p')].find((p) => txt(p) === 'Consultar');
      const inp = page.querySelector('.fld input');
      const doIt = () => { if (inp && !inp.value.trim()) inp.value = 'ARD-2026-7X4K'; res.classList.remove('reveal-wait'); res.classList.add('reveal-in'); };
      if (btn) { (btn.closest('.btnlike') || btn).addEventListener('click', doIt); btn.style.cursor = 'pointer'; (btn.closest('.btnlike') || btn.parentElement).classList.add('btnlike'); }
      if (inp) inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') doIt(); });
    }
  }
  if (here === 'denuncias-sucesso') {
    page.querySelectorAll('p').forEach((p) => {
      if (txt(p) === 'Copiar código') { p.classList.add('lnk'); p.addEventListener('click', () => { navigator.clipboard && navigator.clipboard.writeText('ARD-2026-7X4K').catch(() => {}); toast('Código copiado: ARD-2026-7X4K'); }); }
    });
  }
  if (here === 'denuncias-formulario') {
    const sub = [...page.querySelectorAll('p')].find((p) => txt(p) === 'Submeter denúncia');
    if (sub) { delete sub.dataset.go; sub.classList.add('lnk'); (sub.closest('.btnlike') || sub).addEventListener('click', (e) => {
      e.stopPropagation(); const decl = [...page.querySelectorAll('i.ic.cb')]; const okDecl = decl.length && decl.every((d) => d.classList.contains('on'));
      if (!okDecl) { toast('Confirme as duas declarações antes de submeter.'); const s = page.querySelector('[data-n*="Declara"]') || decl[0]; if (s) scrollTo({ top: s.getBoundingClientRect().top + scrollY - 160, behavior: 'smooth' }); decl.forEach((d) => { if (!d.classList.contains('on')) d.classList.add('shake'); setTimeout(() => d.classList.remove('shake'), 600); }); return; }
      go('denuncias-sucesso'); }); }
  }

  /* ---- Serviço Educativo: tags clicáveis, agendar, esgotado ---- */
  const SE = /^(servico-educativo|oferta-educativa|atividade|ciencia-aberta)/.test(base);
  if (SE) {
    const TAGS = /^(palestra|teórico-prática|teorico-pratica|exposição|workshop|lixo marinho|legislação internacional|eletrónica|sistemas autónomos|biologia marinha|inovação|inteligência artificial|química|física|biologia|ciências|tecnologia)$/i;
    page.querySelectorAll('p').forEach((p) => {
      const t = txt(p);
      if (TAGS.test(t) && p.offsetHeight < 30 && !p.closest('.fld-sel,.dd-menu')) { p.classList.add('lnk', 'tag-lnk'); delete p.dataset.go; p.addEventListener('click', (e) => { e.stopPropagation(); go('oferta-educativa?f=' + encodeURIComponent(t)); }); }
      if (/^(agendar atividade|marcar atividade)$/i.test(t)) { delete p.dataset.generic; p.classList.add('lnk'); p.dataset.agendar = '1'; }
      if (/^(esgotad[ao]|fully booked|sem vagas|lotad[ao])$/i.test(t)) { const card = p.closest('.rv-i') || p.parentElement.parentElement.parentElement; card && card.querySelectorAll('p').forEach((x) => { if (/agendar|inscrever/i.test(txt(x))) { (x.closest('.btnlike') || x).classList.add('is-off'); x.dataset.off = '1'; } }); }
    });
    document.addEventListener('click', (e) => {
      const a = e.target.closest('[data-agendar], .btnlike'); if (!a) return;
      const p = a.dataset.agendar ? a : a.querySelector('[data-agendar]'); if (!p) return;
      e.stopImmediatePropagation(); if (p.dataset.off) return toast('Atividade esgotada: o agendamento está indisponível.');
      if (here === 'atividade') jump('Pedir esta atividade'); else go('atividade#Pedir esta atividade');
    }, true);
    const f = new URLSearchParams(location.search).get('f');
    if (f && base === 'oferta-educativa') {
      const sec = page.querySelector('[data-n="listagem"]') || page;
      setTimeout(() => { applyFilter(sec, [f], ''); const chip = document.createElement('div'); chip.className = 'f-chip'; chip.innerHTML = `Filtro: <b>${f}</b> <button type="button" aria-label="Limpar">×</button>`; (sec.querySelector('h2,h3,p') || sec).before(chip); chip.querySelector('button').onclick = () => { chip.remove(); applyFilter(sec, [], ''); history.replaceState(null, '', 'oferta-educativa.html'); }; }, 50);
    }
  }
  if (location.hash) setTimeout(() => jump(decodeURIComponent(location.hash.slice(1))), 700);

  /* ---- Plataforma: filtro de equipamentos (Todos / Costa / Mar profundo) ---- */
  function equipFilter(sec, v) {
    const hasH4 = (x) => x.querySelector && x.querySelector('h4');
    const cards = [...sec.querySelectorAll('h4')].map((h) => { let c = h; while (c.parentElement && c.parentElement !== sec && [...c.parentElement.children].filter(hasH4).length < 2) c = c.parentElement; return c; });
    cards.forEach((c, i) => { const tag = i % 2 ? 'Mar profundo' : 'Costa'; c.classList.toggle('f-out', v !== 'Todos' && v !== tag); });
    const n = cards.filter((c) => !c.classList.contains('f-out')).length;
    sec.querySelectorAll('p').forEach((p) => { if (/equipamentos$/.test(txt(p)) && /^(\d+|XX) /.test(txt(p))) p.textContent = (v === 'Todos' ? 'XX' : n) + ' equipamentos'; });
    [...sec.querySelectorAll('h2')].slice(1).forEach((h) => { const g = h.parentElement; const cs = cards.filter((c) => g.contains(c)); if (cs.length) g.classList.toggle('f-out', cs.every((c) => c.classList.contains('f-out'))); });
  }


  /* ================= movimento e comportamentos das notas do Figma ================= */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 0) hero: blocos "fill" do Figma não podem ser esmagados pelos blocos de largura fixa */
  page.querySelectorAll('.hero, .hero div').forEach((row) => {
    if (!isRow(row)) return; const k = [...row.children]; if (k.length < 2) return;
    const cs = k.map((c) => getComputedStyle(c));
    k.forEach((c, i) => { const b = parseFloat(cs[i].flexBasis); if (cs[i].flexBasis.endsWith('px') && b > 0 && b <= 40 && parseFloat(cs[i].flexGrow) > 0) c.style.flexGrow = '0'; });
    if (cs.some((c) => c.flexBasis === '0px' && parseFloat(c.flexGrow) === 1)) k.forEach((c, i) => { if (cs[i].flexBasis.endsWith('px') && cs[i].flexBasis !== '0px' && parseFloat(cs[i].flexGrow) > 1) c.style.flexGrow = '0'; });
  });

  /* 1) Unidades: imagens do hero sobrepõem-se e vão rodando (como no site da Figma); a 1.ª em 3x4 */
  if (/^unidade-/.test(base)) {
    const hero = page.querySelector('.hero[data-n="intro"]');
    if (hero) {
      const isPh = (d) => d.tagName === 'DIV' && /fotografia|imagem/i.test(txt(d)) && d.offsetHeight > 200 && !d.querySelector('h1');
      const abs = [...hero.querySelectorAll(':scope > div')].filter((d) => getComputedStyle(d).position === 'absolute' && isPh(d));
      const main = [...hero.querySelectorAll('div')].find((d) => isPh(d) && getComputedStyle(d).position !== 'absolute' && d.querySelector('p') && !d.querySelector('div div'));
      if (main && abs.length) {
        const holder = main.parentElement; const W = parseFloat(getComputedStyle(main).flexBasis) || main.offsetWidth || 420; holder.style.flex = '1 1 0'; holder.style.minWidth = W + 'px';
        const stack = document.createElement('div'); stack.className = 'stack'; stack.style.width = W + 'px'; stack.style.height = Math.round(W * 4 / 3) + 'px';
        holder.insertBefore(stack, main);
        const cards = [main].concat(abs);
        cards.forEach((c, i) => { c.removeAttribute('style'); c.className = 'stk ' + c.className.split(' ').filter((x) => !/^k/.test(x)).join(' '); c.style.background = ['#e7e7e7', '#dcdcdc', '#d2d2d2', '#c9c9c9'][i % 4]; c.querySelector('p') && (c.querySelector('p').textContent = i ? `Fotografia ${i + 1}` : 'Fotografia de destaque (3x4)'); stack.appendChild(c); });
        const place = () => { const ks = [...stack.children]; ks.forEach((c, i) => { c.style.zIndex = 10 - i; c.style.transform = `translate(${-i * 38}px, ${-i * 18}px) rotate(${i ? (i % 2 ? 4 : -3) : 0}deg) scale(${1 - i * 0.06})`; c.style.opacity = i > 3 ? 0 : 1; }); };
        cards.forEach((c, i) => { c.style.transform = 'translateY(60px) rotate(8deg)'; c.style.opacity = 0; c.style.transitionDelay = (cards.length - i) * 120 + 'ms'; });
        requestAnimationFrame(() => setTimeout(() => { place(); setTimeout(() => cards.forEach((c) => { c.style.transitionDelay = '0ms'; }), 900); }, 250));
        if (!reduce) setInterval(() => { const first = stack.firstElementChild; first.classList.add('out'); setTimeout(() => { first.classList.remove('out'); stack.appendChild(first); place(); }, 650); }, 3200);
      }
    }
  }

  /* 2) Investigação — entrada: cartões com logo e nome; descrição aparece no mouse over (N-LINCS mostra sempre os grupos) */
  if (base === 'investigacao') {
    page.querySelectorAll('[data-n="unidades"] h3').forEach((h) => {
      let card = h; for (let i = 0; i < 5 && card.parentElement; i++) { card = card.parentElement; if (card.offsetHeight > 220) break; }
      card.classList.add('u-card');
      card.querySelectorAll('p.s').forEach((p) => { if (txt(p).length > 60) p.classList.add('u-desc'); });
      card.addEventListener('click', (e) => { if (!e.target.closest('[data-go]')) { const r = route(txt(h)); if (r) go(r); } });
    });
  }

  /* 3) Associados: todo o componente é clicável */
  if (base === 'associados') page.querySelectorAll('.rv h4').forEach((h) => { const c = h.parentElement && h.parentElement.parentElement; if (c) { c.classList.add('click-card'); c.addEventListener('click', () => toast('Abre o site do associado (externo).')); } });

  /* 4) Plataforma: casos de uso entram de lado com o scroll */
  page.querySelectorAll('[data-n="casos de uso"]').forEach((sec) => {
    sec.querySelectorAll('h3').forEach((h, i) => { let c = h; for (let k = 0; k < 3 && c.parentElement && c.parentElement !== sec; k++) c = c.parentElement; c.classList.remove('rv-i'); c.classList.add('rv-side', i % 2 ? 'from-r' : 'from-l'); });
  });

  /* 5) Agenda: scroll infinito com lazy loading */
  if (base === 'agenda') {
    const list = page.querySelector('[data-n="listagem"]');
    const months = list && [...list.querySelectorAll('div')].find((d) => d.children.length >= 2 && [...d.children].every((x) => x.querySelector && x.querySelector('p.h1')));
    if (months) {
      page.querySelectorAll('p').forEach((p) => { if (/^(anterior|seguinte|carregar mais)$/i.test(txt(p))) { const r = p.closest('.rv'); if (r && r !== list) r.style.display = 'none'; } });
      const tpl = [...months.children]; const M = ['AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO', 'JANEIRO'];
      let loads = 0, busy = false;
      const sentinel = document.createElement('div'); sentinel.className = 'inf-load'; sentinel.innerHTML = '<span></span><span></span><span></span>'; months.after(sentinel);
      const more = () => {
        if (busy) return; if (loads >= 3) { sentinel.className = 'inf-end'; sentinel.textContent = 'Não há mais eventos agendados.'; return; }
        busy = true; sentinel.classList.add('on');
        setTimeout(() => {
          tpl.forEach((b, i) => { const c = b.cloneNode(true); const h = c.querySelector('p.h1'); if (h) h.innerHTML = h.innerHTML.replace(/^[A-ZÇÃÉÊÍÓÚ]+/i, M[(loads * tpl.length + i) % M.length]); c.classList.add('rv-i'); c.style.transitionDelay = i * 90 + 'ms'; months.appendChild(c); requestAnimationFrame(() => requestAnimationFrame(() => c.classList.add('in'))); });
          loads++; busy = false; sentinel.classList.remove('on');
          if (sentinel.getBoundingClientRect().top < innerHeight) more();
        }, 750);
      };
      new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) more(); }), { rootMargin: '0px 0px 200px 0px' }).observe(sentinel);
    }
  }

  /* 6) Mesa Interativa: vídeo/imagem de fundo ocupa todo o hero, incluindo o menu, com overlay */
  if (base === 'mesa-interativa') {
    document.body.classList.add('hero-video');
    const cab = page.querySelector('.hero[data-n="cabeçalho de página"]'); const intro = page.querySelector('.hero[data-n="intro"]');
    const wrap = document.createElement('div'); wrap.className = 'vhero';
    wrap.innerHTML = '<div class="vbg"><i></i><i></i><i></i></div><div class="vov"></div><button type="button" class="vbtn" aria-label="Pausar vídeo">❚❚</button><p class="vlab xs">Vídeo de fundo (ou imagem) · overlay escuro</p>';
    if (cab && intro) { cab.before(wrap); wrap.appendChild(cab); wrap.appendChild(intro); }
    const b = wrap.querySelector('.vbtn'); b.onclick = () => { wrap.classList.toggle('paused'); b.textContent = wrap.classList.contains('paused') ? '▶' : '❚❚'; };
    const hdrH = () => { hdr.classList.toggle('over', scrollY < wrap.offsetHeight - hdr.offsetHeight); };
    addEventListener('scroll', hdrH, { passive: true }); hdrH();
  }

  /* 7) Âncoras (hooks) dentro da página: listas horizontais de títulos de secção */
  const h2map = new Map([...page.querySelectorAll('h2')].map((h) => [txt(h), h]));
  page.querySelectorAll('div').forEach((row) => {
    if (row.closest('.snav-wrap,.tabs') || row.dataset.hooks) return;
    const ps = [...row.children].map((c) => c.tagName === 'P' ? c : c.querySelector && c.children.length <= 2 && c.querySelector('p')).filter(Boolean);
    const hits = ps.filter((p) => h2map.has(txt(p)) && h2map.get(txt(p)) !== p);
    if (hits.length >= 3 && hits.length >= ps.length - 1) {
      row.dataset.hooks = '1';
      hits.forEach((p) => { p.classList.add('lnk'); p.addEventListener('click', (e) => { e.stopPropagation(); const t = h2map.get(txt(p)); scrollTo({ top: t.getBoundingClientRect().top + scrollY - 130, behavior: 'smooth' }); }); });
    }
  });

  /* 8) blocos vazios que no Figma ficaram depois do CTA (sem texto) não aparecem */
  { const cta = page.querySelector('[data-n="CTA Block"]'); let n = cta && cta.nextElementSibling; while (n) { if (!txt(n)) n.style.display = 'none'; n = n.nextElementSibling; } }

  /* 9) números em círculo (passos, paginação): no Figma são círculos; aqui não podem ser esmagados */
  page.querySelectorAll('div').forEach((d) => {
    if (d.children.length !== 1 || d.querySelector('div,i')) return;
    const t = txt(d); if (!/^(\d{1,2}|…|\.\.\.)$/.test(t)) return;
    const cs = getComputedStyle(d); const hasBox = cs.borderTopStyle !== 'none' || (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'rgb(255, 255, 255)');
    if (!hasBox) return;
    const h = Math.round(d.getBoundingClientRect().height); if (h < 18 || h > 72) return;
    Object.assign(d.style, { width: h + 'px', minWidth: h + 'px', height: h + 'px', flex: '0 0 auto', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' });
    d.classList.add('num-c'); const p = d.querySelector('p'); if (p) { p.style.width = 'auto'; p.style.flex = '0 0 auto'; p.style.textAlign = 'center'; }
    if (/^\d+$/.test(t) && d.parentElement && [...d.parentElement.children].filter((x) => /^\d+$/.test(txt(x))).length >= 2) { d.classList.add('pg-num'); d.addEventListener('click', () => { d.parentElement.querySelectorAll('.pg-num').forEach((x) => { const on = x === d; x.style.background = on ? '#3c3c3b' : '#fff'; x.style.borderColor = on ? '#3c3c3b' : '#d6d6d6'; x.querySelectorAll('p,b').forEach((p) => { p.style.color = on ? '#fff' : '#3c3c3b'; }); }); scrollTo({ top: 0, behavior: 'smooth' }); }); }
  });

  /* 10) cartões (logo + nome): todos com descrição, que só aparece no mouse over */
  const DESC = window.DESC || {};
  const shortTxt = (s) => s.length > 170 ? s.slice(0, 165).replace(/\s+\S*$/, '') + '…' : s;
  page.querySelectorAll('div').forEach((card) => {
    if (card.closest('.hero,.cardx,.stack') || card.dataset.cardx) return;
    const cs = getComputedStyle(card);
    if (card.offsetHeight < 200 || card.offsetWidth < 180 || card.offsetWidth > 760) return;
    if (cs.borderTopStyle === 'none' && (cs.backgroundColor === 'rgba(0, 0, 0, 0)' || cs.backgroundColor === 'rgb(255, 255, 255)')) return;
    const titles = card.querySelectorAll('h3,h4'); if (titles.length !== 1) return;
    if (![...card.querySelectorAll('p')].some((p) => /^logo/i.test(txt(p)) || /^(saber mais|ver |ler mais)/i.test(txt(p)))) return;
    if ([...card.querySelectorAll('div')].some((d) => d !== card && d.offsetHeight >= 200 && d.querySelector('h3,h4') && getComputedStyle(d).borderTopStyle !== 'none')) return;
    card.dataset.cardx = '1'; card.classList.add('cardx', 'card-h');
    const title = titles[0];
    let desc = [...card.querySelectorAll('p.s,p.m')].filter((p) => txt(p).length > 60 && !p.closest('.nowrap'));
    if (!desc.length) {
      const slug = route(txt(title)); const d = (slug && DESC[slug]) || '[Descrição breve — conteúdo em falta]';
      const p = document.createElement('p'); p.className = 's'; p.style.alignSelf = 'stretch'; p.style.color = '#5f5f5f'; p.textContent = shortTxt(d);
      let host = title.parentElement; if (host === card) title.after(p); else host.appendChild(p);
      desc = [p];
    }
    desc.forEach((p) => { p.classList.add('hov'); p.classList.remove('u-desc'); });
    card.classList.remove('u-card');
    card.addEventListener('click', (e) => { if (e.target.closest('[data-go],[data-generic],[data-act],.btnlike')) return; const r = route(txt(title)); if (r) go(r); });
  });

  /* 11) Projetos: sem filtro ativo à partida (o chip aparece quando se escolhe uma opção) */
  if (base === 'projetos') {
    const clear = [...page.querySelectorAll('p')].find((p) => txt(p) === 'Limpar filtros');
    const row = clear && clear.parentElement; const chip = clear && clear.previousElementSibling;
    if (row && chip) {
      chip.style.display = 'none'; clear.style.display = 'none'; clear.classList.add('lnk');
      const sel = [...page.querySelectorAll('.fld-sel')].find((s) => /MARE-Madeira/.test(txt(s.querySelector('p'))));
      if (sel) { const lp = sel.querySelector('p'); lp.textContent = 'Unidade de investigação'; sel.querySelector('.dd-menu button').textContent = 'Unidade de investigação'; }
      page.addEventListener('click', (e) => {
        const b = e.target.closest('.dd-menu button'); if (!b) return;
        setTimeout(() => { const set = [...page.querySelectorAll('.fld-sel.fld-set')]; chip.style.display = set.length ? '' : 'none'; clear.style.display = set.length ? '' : 'none'; if (set.length) chip.querySelector('p').textContent = set.map((s) => txt(s.querySelector('p'))).join(' · '); }, 0);
      });
      const reset = () => { page.querySelectorAll('.fld-sel.fld-set').forEach((s) => { const first = s.querySelector('.dd-menu button'); s.querySelector('p').textContent = first.textContent; s.classList.remove('fld-set'); s.querySelectorAll('.dd-menu button').forEach((x, i) => x.classList.toggle('on', i === 0)); }); chip.style.display = 'none'; clear.style.display = 'none'; applyFilter(sectionOf(row), [], ''); };
      clear.addEventListener('click', reset); chip.addEventListener('click', reset); chip.style.cursor = 'pointer';
    }
  }

  /* 12) formato do evento (presencial / online / híbrido): ícone comum */
  if (window.ICO && window.ICO.easel2) page.querySelectorAll('p').forEach((p) => {
    if (!/^(presencial|online|h[ií]br[ií]do|presencial e online.*)$/i.test(txt(p)) || p.querySelector('.fmt')) return;
    const i = document.createElement('i'); i.className = 'ic ico fmt'; i.innerHTML = window.ICO.easel2; (p.querySelector('b') || p).prepend(i);
  });
  /* 13) Canal de Denúncias: visto de sucesso */
  if (here === 'denuncias-sucesso' && window.ICO) { page.querySelectorAll('i.ic[data-i^="Path (Stroke)"]').forEach((i) => { i.innerHTML = window.ICO['check-lg']; i.classList.add('ico', 'ok-ic'); i.style.width = '56px'; i.style.height = '56px'; }); page.querySelectorAll('h1,p').forEach((p) => { if (txt(p) === '✓') p.innerHTML = `<i class="ic ico ok-ic">${window.ICO['check-lg']}</i>`; }); }

  /* ---- animações: fade ao aparecer ---- */
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.page .rv').forEach((s) => {
    io.observe(s);
    // grelhas e listas: entrada escalonada dos cartões
    s.querySelectorAll('div').forEach((c) => {
      const k = [...c.children].filter((x) => x.tagName === 'DIV');
      if (k.length >= 2 && k.length === c.children.length && k.every((x) => x.className === k[0].className) && k[0].offsetHeight > 60) {
        k.forEach((x, i) => { if (x.closest('.rv-i') || x.classList.contains('rv-side') || x.closest('.stack')) return; x.classList.add('rv-i'); x.style.transitionDelay = Math.min(i, 8) * 70 + 'ms'; io.observe(x); });
      }
    });
  });
  document.querySelectorAll('.ftr-main,.ftr-band').forEach((s) => { s.classList.add('rv'); io.observe(s); });

  document.querySelectorAll('.page .rv-side').forEach((x) => io.observe(x));
})();

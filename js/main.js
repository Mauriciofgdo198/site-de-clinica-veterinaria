(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (q, c = document) => c.querySelector(q);

  $('#lista-servicos').innerHTML = SERVICES.map(s =>
    `<li><a class="servico" href="#contato"><span class="servico__icone">${s.icone}</span><span class="servico__nome">${s.nome}</span></a></li>`).join('');

  const header = $('.header');
  const onScroll = () => {
    header.classList.toggle('header--fundo', scrollY > 40);
    if (!reduce) document.documentElement.style.setProperty('--py', Math.min(scrollY, 900));
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const btn = $('.menu-btn'), menu = $('#menu-mobile');
  const toggle = (open) => {
    btn.setAttribute('aria-expanded', open); menu.hidden = !open;
    document.body.classList.toggle('travado', open);
  };
  btn.addEventListener('click', () => toggle(btn.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', e => { if (e.target.closest('a')) toggle(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });

  const newsletter = $('#newsletter-form');
  newsletter?.addEventListener('submit', e => {
    e.preventDefault();
    $('#newsletter-status').textContent = 'E-mail validado. Conecte uma lista de newsletter para concluir a inscrição.';
  });

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visivel'); io.unobserve(e.target); }
  }), { threshold: .25 });
  document.querySelectorAll('[data-reveal]').forEach(el => reduce ? el.classList.add('visivel') : io.observe(el));
})();

'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    // Navbar scroll
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target) }
      })
    }, { threshold: 0.08 })
    reveals.forEach(r => ro.observe(r))

    // Smooth anchor scroll
    const links = document.querySelectorAll('a[href^="#"]')
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
      }
    }
    links.forEach(a => a.addEventListener('click', handleClick))

    return () => {
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      links.forEach(a => a.removeEventListener('click', handleClick))
    }
  }, [])

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  const faqs = [
    { q: 'Vocês trabalham com reserva?', a: 'Sim, aceitamos reservas pelo WhatsApp ou pelo botão "Reservar Mesa". Recomendamos reservar com antecedência, especialmente nos fins de semana.' },
    { q: 'Qual o tempo médio de espera?', a: 'Com reserva, praticamente não há espera. Sem reserva, o tempo médio é de 20 minutos nos horários de pico — sexta, sábado e domingo à noite.' },
    { q: 'Possuem opções vegetarianas?', a: 'Sim! Oferecemos seleção especial de pratos vegetarianos incluindo temaki, combinados e pratos quentes — sempre com a mesma qualidade e atenção ao detalhe.' },
    { q: 'Qual o horário de funcionamento?', a: 'Funcionamos de terça a domingo, das 12h às 15h (almoço) e das 18h às 23h (jantar). Segunda-feira fechado.' },
  ]

  return (
    <>
      {/* STICKY */}
      <a href="https://wa.me/5511999999999?text=Quero%20reservar%20uma%20mesa!" className="sticky-res" target="_blank" rel="noopener">
        Reservar Mesa
      </a>

      {/* MOBILE MENU */}
      <div className={`mob-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobileOpen(false)}>✕ fechar</button>
        <a href="#hero"        onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#cardapio"    onClick={() => setMobileOpen(false)}>Cardápio</a>
        <a href="#experiencia" onClick={() => setMobileOpen(false)}>Experiência</a>
        <a href="#faq"         onClick={() => setMobileOpen(false)}>Contato</a>
      </div>

      {/* NAVBAR */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-main">Tokyo Fresh</span>
          <span className="nav-logo-sub">東京 フレッシュ</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#faq">Contato</a></li>
          <li><a href="https://wa.me/5511999999999" className="btn-nav-r" target="_blank" rel="noopener">Reservar Mesa</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-blob" />
        <div className="hero-arc" />
        <div className="hero-hline" />
        <div className="hero-kanji">東京　新鮮　日本料理</div>
        <div className="hero-inner">
          <div>
            <div className="eyebrow reveal">
              <span className="eyebrow-ln" />
              <span className="eyebrow-tx">Culinária Japonesa Premium</span>
            </div>
            <h1 className="hero-title reveal" style={{ transitionDelay: '.1s' }}>
              Uma Experiência<br />
              <em>Autêntica</em> da<br />
              Culinária Japonesa
            </h1>
            <p className="hero-sub reveal" style={{ transitionDelay: '.2s' }}>
              Peixes frescos, cortes precisos e uma experiência gastronômica que vai além do sabor.
            </p>
            <div className="hero-proof reveal" style={{ transitionDelay: '.3s' }}>
              <span className="stars">★★★★★</span>
              <span className="score">4.9</span>
              <div className="proof-div" />
              <span className="score-lb">Avaliação dos clientes</span>
            </div>
            <div className="hero-btns reveal" style={{ transitionDelay: '.4s' }}>
              <a href="https://wa.me/5511999999999?text=Quero%20reservar%20uma%20mesa!" className="btn-red" target="_blank" rel="noopener">Reservar Mesa</a>
              <a href="#cardapio" className="btn-ghost">Ver Cardápio →</a>
            </div>
          </div>
          <div className="hero-visual reveal" style={{ transitionDelay: '.25s' }}>
            <div className="sushi-wrap">
              <div className="sushi-glow" />
              <img src="/hero.png" alt="Sushi Premium Tokyo Fresh" className="sushi-img" />
              <div className="sushi-seal">
                <span className="seal-jp">毎日</span>
                <span className="seal-rule" />
                <span className="seal-tx">Peixes<br />Frescos<br />Diariamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section id="destaques">
        <div className="dest-wm">料</div>
        <div className="dest-inner">
          <div>
            <div className="sec-eyebrow reveal"><span className="sec-ln" /><span>Chef&apos;s Selection</span></div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>Destaques<br />do <em>Chef</em></h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.2s' }}>Uma seleção que expressa a filosofia da nossa cozinha — precisão, frescor e tradição.</p>
          </div>
          <div className="dest-list">
            {[
              { num: '01', name: 'Combinado Premium', desc: 'Seleção especial com 20 peças de cortes nobres — nigiri e maki da estação', price: 'R$79', img: '/combinado.png' },
              { num: '02', name: 'Temaki Especial', desc: 'Alga crocante artesanal com recheio fresco, servida na hora do preparo', price: 'R$22', img: '/temaki.png' },
              { num: '03', name: 'Hot Roll', desc: 'Crocante por fora, macio e saboroso por dentro — um favorito da casa', price: 'R$18', img: '/hotroll.png' },
            ].map((item, i) => (
              <div className="dest-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div>
                  <div className="dest-num">{item.num}</div>
                  <div className="dest-name">{item.name}</div>
                  <div className="dest-desc">{item.desc}</div>
                </div>
                <div className="dest-right">
                  <div className="dest-img"><img src={item.img} alt={item.name} /></div>
                  <div className="dest-price">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio">
        <div className="menu-inner">
          <div>
            <div className="sec-eyebrow reveal"><span className="sec-ln" /><span>Menu</span></div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>Cardápio<br /><em>Completo</em></h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.2s' }}>Cada prato preparado com ingredientes cuidadosamente selecionados.</p>
          </div>
          <div className="menu-grid">
            <div className="reveal">
              <div className="mcat-title">Combinados</div>
              {[['Combinado 20 peças','','R$45'],['Combinado 40 peças','','R$79'],['Combinado 80 peças','','R$140']].map(([n,d,p],i)=>(
                <div className="mitem" key={i}><div><span className="mitem-n">{n}</span>{d&&<span className="mitem-d">{d}</span>}</div><span className="mitem-p">{p}</span></div>
              ))}
            </div>
            <div className="reveal" style={{ transitionDelay: '.1s' }}>
              <div className="mcat-title">Sushi &amp; Sashimi</div>
              {[['Seleção Variada','Nigiri e maki da estação','sob consulta'],['Peixes Frescos do Dia','Sashimi selecionado diariamente','sob consulta']].map(([n,d,p],i)=>(
                <div className="mitem" key={i}><div><span className="mitem-n">{n}</span><span className="mitem-d">{d}</span></div><span className="mitem-p">{p}</span></div>
              ))}
            </div>
            <div className="reveal" style={{ transitionDelay: '.15s' }}>
              <div className="mcat-title">Entradas</div>
              {[['Gyoza','Pastéis japoneses grelhados','R$20'],['Shimeji','Cogumelos salteados na manteiga','R$22']].map(([n,d,p],i)=>(
                <div className="mitem" key={i}><div><span className="mitem-n">{n}</span><span className="mitem-d">{d}</span></div><span className="mitem-p">{p}</span></div>
              ))}
            </div>
            <div className="reveal" style={{ transitionDelay: '.2s' }}>
              <div className="mcat-title">Pratos Quentes</div>
              {[['Yakisoba','Macarrão salteado com legumes','R$30'],['Lámen','Caldo artesanal de 12 horas','R$35']].map(([n,d,p],i)=>(
                <div className="mitem" key={i}><div><span className="mitem-n">{n}</span><span className="mitem-d">{d}</span></div><span className="mitem-p">{p}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais">
        <div className="difs-in">
          <div className="difs-hd">
            <div className="sec-eyebrow reveal" style={{ justifyContent: 'center' }}><span className="sec-ln" /><span>Nossa Filosofia</span><span className="sec-ln" /></div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>O que nos <em>diferencia</em></h2>
          </div>
          <div className="difs-grid">
            {[
              ['01','Ingredientes Selecionados Diariamente','Peixes e ingredientes frescos escolhidos todas as manhãs, garantindo a máxima qualidade em cada prato.'],
              ['02','Técnicas Tradicionais Japonesas','Métodos centenários de preparo respeitando a essência e a precisão da culinária japonesa autêntica.'],
              ['03','Ambiente Sofisticado','Um espaço desenhado para proporcionar tranquilidade e elegância, tornando cada visita memorável.'],
              ['04','Experiência Gastronômica Completa','Da entrada à sobremesa, cada detalhe pensado para criar uma jornada sensorial inesquecível.'],
            ].map(([num,title,text],i)=>(
              <div className="dif-item reveal" key={i} style={{ transitionDelay: `${i*0.1}s` }}>
                <div className="dif-num">{num}</div>
                <div className="dif-title">{title}</div>
                <p className="dif-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia">
        <div className="exp-bg" />
        <div className="exp-inner">
          <span className="exp-jp reveal">体験 — 感覚</span>
          <h2 className="exp-title reveal" style={{ transitionDelay: '.1s' }}>
            Mais do que uma refeição,<br />
            uma <strong>experiência sensorial</strong><br />
            inspirada na tradição japonesa.
          </h2>
          <div className="exp-rule reveal" style={{ transitionDelay: '.2s' }} />
          <p className="exp-text reveal" style={{ transitionDelay: '.25s' }}>
            Cada visita ao Tokyo Fresh é uma imersão na cultura e na precisão da culinária japonesa. Do aroma ao sabor, do ambiente ao serviço — tudo foi pensado para que você sinta o Japão em cada detalhe.
          </p>
          <div className="exp-btns reveal" style={{ transitionDelay: '.35s' }}>
            <a href="https://wa.me/5511999999999?text=Quero%20reservar%20uma%20mesa!" className="btn-red" target="_blank" rel="noopener">Reservar Mesa</a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos">
        <div className="deps-in">
          <div className="deps-hd">
            <div className="sec-eyebrow reveal" style={{ justifyContent: 'center' }}><span className="sec-ln" /><span>Depoimentos</span><span className="sec-ln" /></div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>O que nossos <em>clientes</em> dizem</h2>
          </div>
          <div className="deps-grid">
            {[
              ['Marina A.','São Paulo, SP','Melhor japonês da cidade, sem dúvida. A qualidade dos peixes é incomparável — sinto que estou no Japão a cada visita.'],
              ['Rafael T.','São Paulo, SP','Experiência incrível do começo ao fim. O ambiente, o serviço e os sabores formam um conjunto perfeito e único.'],
              ['Camila R.','Campinas, SP','Qualidade impecável em cada detalhe. O combinado premium é simplesmente extraordinário — virei cliente fiel.'],
            ].map(([name,loc,text],i)=>(
              <div className="dep-item reveal" key={i} style={{ transitionDelay: `${i*0.12}s` }}>
                <div className="dep-q">&ldquo;</div>
                <div className="dep-stars">★★★★★</div>
                <p className="dep-text">{text}</p>
                <div className="dep-rule" />
                <div className="dep-auth"><strong>{name}</strong>{loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="faq-in">
          <div>
            <div className="sec-eyebrow reveal"><span className="sec-ln" /><span>Dúvidas</span></div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>Perguntas<br /><em>Frequentes</em></h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.2s' }}>Estamos à disposição pelo WhatsApp para qualquer dúvida adicional.</p>
          </div>
          <div className="faq-list reveal" style={{ transitionDelay: '.1s' }}>
            {faqs.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <span className="faq-ic">+</span>
                </button>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="ft-in">
          <div>
            <a href="#hero" className="ft-logo">Tokyo Fresh</a>
            <span className="ft-logo-jp">東京フレッシュ — 日本料理</span>
            <p className="ft-tag">Uma experiência autêntica da culinária japonesa, preparada com precisão e respeito pela tradição.</p>
            <a href="https://wa.me/5511999999999" className="ft-link" target="_blank" rel="noopener"><span>💬</span> WhatsApp: (11) 99999-9999</a>
            <a href="https://instagram.com/tokyofresh" className="ft-link" target="_blank" rel="noopener"><span>📸</span> @tokyofresh</a>
            <a href="#" className="ft-link"><span>📍</span> Rua Exemplo, 456 — São Paulo</a>
          </div>
          <div>
            <div className="ft-col-title">Navegação</div>
            <ul className="ft-links">
              {['#hero:Home','#destaques:Destaques do Chef','#cardapio:Cardápio','#experiencia:Experiência','#faq:Contato'].map(item=>{
                const [href,label]=item.split(':')
                return <li key={href}><a href={href}>{label}</a></li>
              })}
            </ul>
          </div>
          <div>
            <div className="ft-col-title">Horários</div>
            <ul className="ft-links">
              <li><a href="#">Ter–Sex: 12h–15h / 18h–23h</a></li>
              <li><a href="#">Sáb–Dom: 12h–23h</a></li>
              <li><a href="#">Segunda: fechado</a></li>
              <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener">Reservar Mesa →</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-bot">
          <span className="ft-copy">© 2025 Tokyo Fresh. Todos os direitos reservados.</span>
          <span className="ft-jp">東京フレッシュ</span>
        </div>
      </footer>
    </>
  )
}

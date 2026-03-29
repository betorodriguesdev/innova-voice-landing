import React, { useState, useEffect } from 'react'
import {
  Phone, CheckCircle, Star, ArrowRight, Zap, Clock,
  MessageSquare, TrendingUp, Shield, ChevronDown, Menu, X
} from 'lucide-react'
import { Onboarding } from './Onboarding'

const PHONE_LINK = 'tel:+17816537984'

// ── Nav ───────────────────────────────────────────────────────────────────────
const Nav: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/5 py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="url(#lg1)"/>
            <path d="M6 18 Q9 10 12 18 Q15 26 18 18 Q21 10 24 18 Q27 26 30 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8"/>
                <stop offset="1" stopColor="#6366f1"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="font-black text-lg text-white tracking-tight">Plannus<span className="text-sky-400"> Voice</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Como funciona', 'Casos de uso', 'Preços', 'Depoimentos'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm text-slate-400 hover:text-white transition-colors">{item}</a>
          ))}
        </div>

        <a href={PHONE_LINK} target="_blank" rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105">
          Ligar agora <ArrowRight className="w-4 h-4" />
        </a>

        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1426] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {['Como funciona', 'Casos de uso', 'Preços', 'Depoimentos'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-slate-300 text-sm" onClick={() => setOpen(false)}>{item}</a>
          ))}
          <a href={PHONE_LINK} target="_blank" rel="noreferrer"
            className="bg-sky-500 text-white text-sm font-semibold px-5 py-3 rounded-full text-center">
            Ligar agora
          </a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
    {/* Background glow */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]" />
    </div>

    {/* Grid pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

    <div className="relative max-w-5xl mx-auto px-6 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-8">
        <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
        <span className="text-sky-400 text-sm font-medium">Atendimento 24/7 em inglês perfeito</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
        Seu negócio atende em<br />
        <span className="text-gradient">inglês perfeito</span><br />
        24 horas por dia.
      </h1>

      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Um agente de IA de voz que responde chamadas, agenda clientes, tira dúvidas e nunca deixa o telefone tocar no vazio — mesmo quando você está dormindo.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href={PHONE_LINK} target="_blank" rel="noreferrer"
          className="flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 glow w-full sm:w-auto justify-center">
          <Phone className="w-5 h-5" />
          Ligar agora — teste ao vivo
        </a>
        <a href="#como-funciona"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
          Ver como funciona <ChevronDown className="w-4 h-4" />
        </a>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
        {[
          { value: '24/7', label: 'Disponível' },
          { value: '+60', label: 'Idiomas' },
          { value: '$97', label: 'Por mês' },
        ].map(s => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-black text-white">{s.value}</div>
            <div className="text-sm text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ── Problem ───────────────────────────────────────────────────────────────────
const Problem: React.FC = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20 rounded-3xl p-10 text-center">
        <div className="text-5xl mb-6">📵</div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Quantos clientes você perdeu<br />porque o telefone não foi atendido?
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          No mercado americano, <span className="text-white font-semibold">85% das pessoas não deixam recado</span>. Se não atender na primeira chamada, eles ligam para o concorrente. Simples assim.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '😤', text: 'Cliente ligou, ninguém atendeu, foi embora' },
            { icon: '🌙', text: 'Ligações fora do horário perdidas para sempre' },
            { icon: '🗣️', text: 'Barreira do inglês te faz parecer menos profissional' },
          ].map(item => (
            <div key={item.text} className="bg-white/5 rounded-2xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

// ── How it works ──────────────────────────────────────────────────────────────
const HowItWorks: React.FC = () => (
  <section id="como-funciona" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Como funciona</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
          Pronto em menos de 48 horas
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            step: '01',
            icon: <MessageSquare className="w-7 h-7 text-sky-400" />,
            title: 'Você nos conta sobre seu negócio',
            desc: 'Nos envie informações sobre seus serviços, horários, preços e perguntas frequentes dos seus clientes.',
          },
          {
            step: '02',
            icon: <Zap className="w-7 h-7 text-indigo-400" />,
            title: 'A gente configura seu agente',
            desc: 'Criamos e treinamos sua IA de voz em inglês perfeito, personalizada com o nome e a voz do seu negócio.',
          },
          {
            step: '03',
            icon: <Phone className="w-7 h-7 text-green-400" />,
            title: 'Seu telefone começa a atender',
            desc: 'Em 48h seu agente já está ativo, atendendo chamadas, respondendo dúvidas e agendando clientes automaticamente.',
          },
        ].map((item, i) => (
          <div key={i} className="relative group">
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-3xl p-8 transition-all duration-300 h-full">
              <div className="text-6xl font-black text-white/5 absolute top-6 right-8">{item.step}</div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
            {i < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                <ArrowRight className="w-6 h-6 text-slate-600" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ── Use cases ─────────────────────────────────────────────────────────────────
const UseCases: React.FC = () => (
  <section id="casos-de-uso" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Casos de uso</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
          Funciona para qualquer negócio
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            emoji: '🍽️',
            title: 'Restaurante',
            color: 'from-orange-500/20 to-red-500/10 border-orange-500/20',
            items: ['Informa cardápio e pratos do dia', 'Recebe pedidos de delivery', 'Confirma horário de funcionamento', 'Gerencia reservas de mesa'],
          },
          {
            emoji: '🔨',
            title: 'Contractor / Construção',
            color: 'from-yellow-500/20 to-orange-500/10 border-yellow-500/20',
            items: ['Agenda visitas e orçamentos', 'Informa serviços disponíveis', 'Responde dúvidas técnicas', 'Direciona urgências'],
          },
          {
            emoji: '✂️',
            title: 'Salão / Spa',
            color: 'from-pink-500/20 to-purple-500/10 border-pink-500/20',
            items: ['Agenda horários automaticamente', 'Confirma e lembra consultas', 'Informa serviços e preços', 'Gerencia cancelamentos'],
          },
          {
            emoji: '🏥',
            title: 'Clínica / Home Care',
            color: 'from-green-500/20 to-teal-500/10 border-green-500/20',
            items: ['Agenda consultas e visitas', 'Triagem inicial de pacientes', 'Informa planos aceitos', 'Direciona emergências'],
          },
        ].map(card => (
          <div key={card.title} className={`bg-gradient-to-br ${card.color} border rounded-3xl p-8`}>
            <div className="text-4xl mb-4">{card.emoji}</div>
            <h3 className="text-xl font-bold text-white mb-5">{card.title}</h3>
            <ul className="space-y-3">
              {card.items.map(item => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ── Features ──────────────────────────────────────────────────────────────────
const Features: React.FC = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-4xl font-black text-white mt-3 mb-8">
            Não é um robô.<br />É seu melhor atendente.
          </h2>
          <div className="space-y-6">
            {[
              { icon: <Clock className="w-5 h-5 text-sky-400" />, title: 'Disponível 24/7, 365 dias', desc: 'Sem folga, sem feriado, sem ligação perdida.' },
              { icon: <Shield className="w-5 h-5 text-sky-400" />, title: 'Inglês nativo e natural', desc: 'Voz profissional que transmite credibilidade para seus clientes americanos.' },
              { icon: <TrendingUp className="w-5 h-5 text-sky-400" />, title: 'Relatórios de chamadas', desc: 'Veja quantas chamadas recebeu, o que os clientes perguntaram e quanto economizou.' },
              { icon: <Zap className="w-5 h-5 text-sky-400" />, title: 'Integra com seu número atual', desc: 'Não precisa trocar de número. A gente conecta no seu telefone existente.' },
            ].map(f => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="bg-gradient-to-br from-sky-500/20 to-indigo-500/10 border border-sky-500/20 rounded-3xl p-8 glow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-slate-500 text-sm ml-2">Chamada ao vivo</span>
            </div>
            {[
              { who: 'Cliente', msg: "Hi, what time do you guys close today?", side: 'left' },
              { who: 'Seu Agente IA', msg: "Hello! We're open until 9 PM tonight. Is there anything else I can help you with?", side: 'right' },
              { who: 'Cliente', msg: "Do you take walk-ins or do I need an appointment?", side: 'left' },
              { who: 'Seu Agente IA', msg: "We do accept walk-ins! However, to guarantee your spot, I can schedule an appointment for you right now. What time works best?", side: 'right' },
            ].map((m, i) => (
              <div key={i} className={`mb-4 flex ${m.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${m.side === 'right' ? 'bg-sky-500/20 border border-sky-500/30' : 'bg-white/5 border border-white/10'}`}>
                  <div className="text-xs text-slate-500 mb-1">{m.who}</div>
                  <p className="text-sm text-slate-200">{m.msg}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-slate-500 text-xs">Agente respondendo...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// ── Pricing ───────────────────────────────────────────────────────────────────
const Pricing: React.FC = () => (
  <section id="preços" className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Preços</span>
      <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
        Simples e sem surpresas
      </h2>
      <p className="text-slate-400 mb-14">Sem taxa de instalação. Cancele quando quiser.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Starter */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 text-left">
          <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">Starter</div>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-5xl font-black text-white">$97</span>
            <span className="text-slate-400 mb-2">/mês</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">Até 500 minutos de chamadas</p>
          <ul className="space-y-4 mb-8">
            {[
              'Agente de IA personalizado',
              'Inglês nativo 24/7',
              'Até 500 min/mês de atendimento',
              'Integra com seu número atual',
              'Painel de chamadas',
              'Suporte via WhatsApp',
            ].map(item => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <a href={PHONE_LINK} target="_blank" rel="noreferrer"
            className="block w-full text-center border border-sky-500/40 hover:border-sky-400 text-sky-400 hover:text-white font-semibold py-3.5 rounded-2xl transition-all duration-200">
            Ligar agora
          </a>
        </div>

        {/* Pro */}
        <div className="relative bg-gradient-to-br from-sky-500/20 to-indigo-500/10 border border-sky-500/30 rounded-3xl p-8 text-left glow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
            MAIS POPULAR
          </div>
          <div className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-4">Pro</div>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-5xl font-black text-white">$149</span>
            <span className="text-slate-400 mb-2">/mês</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">Minutos ilimitados</p>
          <ul className="space-y-4 mb-8">
            {[
              'Tudo do Starter',
              'Minutos ilimitados',
              'Agendamento automático',
              'Integração com Google Calendar',
              'Relatórios semanais detalhados',
              'Suporte prioritário',
            ].map(item => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <a href={PHONE_LINK} target="_blank" rel="noreferrer"
            className="block w-full text-center bg-sky-500 hover:bg-sky-400 text-white font-bold py-3.5 rounded-2xl transition-all duration-200 hover:scale-105">
            Ligar agora
          </a>
        </div>
      </div>
    </div>
  </section>
)

// ── Testimonials ──────────────────────────────────────────────────────────────
const Testimonials: React.FC = () => (
  <section id="depoimentos" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
        <h2 className="text-4xl font-black text-white mt-3">
          Quem já usa não quer voltar atrás
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            name: 'Carlos M.',
            business: 'Restaurante, Massachusetts',
            text: 'Antes eu perdia clientes toda noite depois das 9pm. Agora meu agente atende tudo. As reservas aumentaram 40% no primeiro mês.',
            stars: 5,
          },
          {
            name: 'Ana P.',
            business: 'Salão de beleza, Florida',
            text: 'Minha cliente americana ficou impressionada com o inglês do meu "atendente". Ela nem sabia que era IA! Agenda lotada toda semana.',
            stars: 5,
          },
          {
            name: 'Roberto S.',
            business: 'Contractor, New Jersey',
            text: 'Eu estava perdendo contratos porque não atendia rápido. Agora o agente pega todas as chamadas e eu recebo um resumo no celular.',
            stars: 5,
          },
        ].map(t => (
          <div key={t.name} className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <div className="text-white font-semibold text-sm">{t.name}</div>
              <div className="text-slate-500 text-xs mt-0.5">{t.business}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ── Final CTA ─────────────────────────────────────────────────────────────────
const FinalCTA: React.FC = () => (
  <section className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-gradient-to-br from-sky-500/20 to-indigo-500/10 border border-sky-500/20 rounded-3xl p-12 glow">
        <div className="text-5xl mb-6">🚀</div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Pronto para nunca mais<br />perder uma chamada?
        </h2>
        <p className="text-slate-400 mb-8 text-lg">
          Seu agente fica ativo em 48 horas. Sem contrato longo. Sem complicação.
        </p>
        <a href={PHONE_LINK} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 glow">
          <Phone className="w-5 h-5" />
          Ligar agora — fale com nossa IA
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-slate-600 text-sm mt-4">+1 (781) 653-7984 • Atendimento 24/7</p>
      </div>
    </div>
  </section>
)

// ── Footer ────────────────────────────────────────────────────────────────────
const Footer: React.FC = () => (
  <footer className="border-t border-white/5 py-8 px-6 text-center">
    <div className="flex items-center justify-center gap-2 mb-3">
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
        <rect width="36" height="36" rx="10" fill="url(#lg2)"/>
        <path d="M6 18 Q9 10 12 18 Q15 26 18 18 Q21 10 24 18 Q27 26 30 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <defs>
          <linearGradient id="lg2" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8"/>
            <stop offset="1" stopColor="#6366f1"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="font-black text-white tracking-tight">Plannus <span className="text-sky-400">Voice</span></span>
    </div>
    <p className="text-slate-600 text-sm">© 2025 Innova Flow. Todos os direitos reservados.</p>
  </footer>
)

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  if (window.location.pathname === '/onboarding') {
    return <Onboarding />
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <UseCases />
      <Features />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}

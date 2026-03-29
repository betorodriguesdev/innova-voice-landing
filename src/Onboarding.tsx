import React, { useState } from 'react'
import { CheckCircle, ArrowRight, Loader } from 'lucide-react'

const SUPABASE_URL = 'https://lvffcbafwkmqkqyfsnrd.supabase.co'

interface FormData {
  nome: string
  email: string
  telefone: string
  empresa: string
  tipo_negocio: string
  servicos: string
  horario: string
  nome_assistente: string
  saudacao: string
  perguntas_frequentes: string
  agendamento: string
  area_cobertura: string
  info_extra: string
}

const initialForm: FormData = {
  nome: '', email: '', telefone: '', empresa: '',
  tipo_negocio: '', servicos: '', horario: '',
  nome_assistente: '', saudacao: '', perguntas_frequentes: '',
  agendamento: '', area_cobertura: '', info_extra: '',
}

const Logo: React.FC = () => (
  <div className="flex items-center gap-2.5 justify-center mb-8">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="10" fill="url(#lg-ob)"/>
      <path d="M6 18 Q9 10 12 18 Q15 26 18 18 Q21 10 24 18 Q27 26 30 18"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <defs>
        <linearGradient id="lg-ob" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8"/><stop offset="1" stopColor="#6366f1"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="font-black text-xl text-white tracking-tight">
      Plannus<span className="text-sky-400"> Voice</span>
    </span>
  </div>
)

const Field: React.FC<{
  label: string
  required?: boolean
  hint?: string
  children: React.ReactNode
}> = ({ label, required, hint, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-slate-300">
      {label} {required && <span className="text-sky-400">*</span>}
    </label>
    {hint && <p className="text-xs text-slate-500">{hint}</p>}
    {children}
  </div>
)

const input = "bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-sm w-full"
const textarea = input + " resize-none"

export const Onboarding: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const body = `
      <h2>📋 Novo Formulário de Onboarding — Plannus Voice</h2>
      <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;">
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;width:200px;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${form.nome}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${form.email}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Telefone</td><td style="padding:8px;border:1px solid #ddd;">${form.telefone}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Empresa</td><td style="padding:8px;border:1px solid #ddd;">${form.empresa}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Tipo de Negócio</td><td style="padding:8px;border:1px solid #ddd;">${form.tipo_negocio}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Serviços</td><td style="padding:8px;border:1px solid #ddd;">${form.servicos}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Horário</td><td style="padding:8px;border:1px solid #ddd;">${form.horario}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Nome da Assistente</td><td style="padding:8px;border:1px solid #ddd;">${form.nome_assistente}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Saudação</td><td style="padding:8px;border:1px solid #ddd;">${form.saudacao}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Perguntas Frequentes</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${form.perguntas_frequentes}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Agendamento</td><td style="padding:8px;border:1px solid #ddd;">${form.agendamento}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Área de Cobertura</td><td style="padding:8px;border:1px solid #ddd;">${form.area_cobertura}</td></tr>
        <tr><td style="padding:8px;background:#f0f0f0;font-weight:bold;">Info Extra</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${form.info_extra}</td></tr>
      </table>
    `

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-ai-setup-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'noreply@innovacall.co',
          to_admin: 'betorodrigues@gmail.com',
          customerName: form.nome,
          planName: 'Plannus Voice',
          formData: form,
          htmlBody: body,
        }),
      })

      if (!res.ok) throw new Error('Erro ao enviar')
      setDone(true)
    } catch {
      setError('Ocorreu um erro. Tente novamente ou entre em contato conosco.')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <Logo />
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <CheckCircle className="w-16 h-16 text-sky-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Recebemos tudo!</h2>
            <p className="text-slate-400 leading-relaxed">
              Nossa equipe vai montar sua assistente de IA com essas informações.
              Em até <strong className="text-white">7 dias úteis</strong> ela estará ativa atendendo suas ligações.
            </p>
            <p className="text-slate-500 text-sm mt-4">Você receberá um e-mail de confirmação em breve.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <Logo />

        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white mb-3">
            Monte sua <span className="text-gradient">Assistente de IA</span>
          </h1>
          <p className="text-slate-400">
            Preencha as informações abaixo para personalizarmos sua IA. Quanto mais detalhes, melhor ela atende seus clientes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Bloco 1: Dados pessoais */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-sky-400 uppercase tracking-widest">Seus dados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Seu nome" required>
                <input className={input} value={form.nome} onChange={set('nome')} required placeholder="João Silva" />
              </Field>
              <Field label="Email" required>
                <input className={input} type="email" value={form.email} onChange={set('email')} required placeholder="joao@empresa.com" />
              </Field>
            </div>
            <Field label="Telefone (com DDD do EUA)" required>
              <input className={input} value={form.telefone} onChange={set('telefone')} required placeholder="(305) 555-1234" />
            </Field>
          </div>

          {/* Bloco 2: Negócio */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-sky-400 uppercase tracking-widest">Sobre seu negócio</h3>
            <Field label="Nome da empresa" required>
              <input className={input} value={form.empresa} onChange={set('empresa')} required placeholder="Silva Construction LLC" />
            </Field>
            <Field label="Tipo de negócio" required>
              <select className={input} value={form.tipo_negocio} onChange={set('tipo_negocio')} required>
                <option value="">Selecione...</option>
                <option>Construção / Renovation</option>
                <option>Landscaping / Jardinagem</option>
                <option>Limpeza / Cleaning</option>
                <option>Pintura / Painting</option>
                <option>Encanamento / Plumbing</option>
                <option>Elétrica / Electrical</option>
                <option>HVAC</option>
                <option>Roofing</option>
                <option>Restaurante / Food</option>
                <option>Salão / Beauty</option>
                <option>Transporte / Delivery</option>
                <option>Outro</option>
              </select>
            </Field>
            <Field label="Serviços que você oferece" required hint="Liste os principais serviços, um por linha">
              <textarea className={textarea} rows={4} value={form.servicos} onChange={set('servicos')} required
                placeholder="Ex:&#10;- Construção de decks&#10;- Reforma de banheiro&#10;- Instalação de piso" />
            </Field>
            <Field label="Horário de atendimento" required hint="Dias e horários que sua equipe trabalha">
              <input className={input} value={form.horario} onChange={set('horario')} required
                placeholder="Ex: Segunda a Sexta 7am–6pm, Sábado 8am–2pm" />
            </Field>
            <Field label="Área de cobertura" required>
              <input className={input} value={form.area_cobertura} onChange={set('area_cobertura')} required
                placeholder="Ex: Miami-Dade, Broward e Palm Beach County" />
            </Field>
          </div>

          {/* Bloco 3: Assistente */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-sky-400 uppercase tracking-widest">Sua assistente de IA</h3>
            <Field label="Nome da assistente" hint="Como a IA vai se apresentar para seus clientes">
              <input className={input} value={form.nome_assistente} onChange={set('nome_assistente')}
                placeholder="Ex: Sarah, Lisa, Emma... (deixe em branco para a gente sugerir)" />
            </Field>
            <Field label="Saudação inicial" hint="Como a IA deve atender ao telefone">
              <input className={input} value={form.saudacao} onChange={set('saudacao')}
                placeholder='Ex: "Thank you for calling Silva Construction, this is Sarah, how can I help you?"' />
            </Field>
            <Field label="Perguntas frequentes dos seus clientes" required
              hint="Escreva as perguntas mais comuns e as respostas corretas, um por linha">
              <textarea className={textarea} rows={6} value={form.perguntas_frequentes} onChange={set('perguntas_frequentes')} required
                placeholder="Ex:&#10;P: Do you offer free estimates?&#10;R: Yes, we offer free estimates Monday through Friday.&#10;&#10;P: How long does a deck take?&#10;R: Usually 1–2 weeks depending on size." />
            </Field>
            <Field label="Como tratar agendamentos?" required>
              <select className={input} value={form.agendamento} onChange={set('agendamento')} required>
                <option value="">Selecione...</option>
                <option>Agendar visita para orçamento gratuito</option>
                <option>Agendar serviço diretamente</option>
                <option>Só coletar nome e telefone e eu retorno</option>
                <option>Enviar para WhatsApp / texto</option>
                <option>Não faz agendamentos — só informações</option>
              </select>
            </Field>
            <Field label="Informações extras" hint="Promoções, diferenciais, certificações, garantias, ou qualquer coisa que a IA deve saber">
              <textarea className={textarea} rows={4} value={form.info_extra} onChange={set('info_extra')}
                placeholder="Ex: Somos licenciados e segurados. Oferecemos garantia de 1 ano no serviço. Falamos português e espanhol." />
            </Field>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button type="submit" disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 text-base">
            {loading ? (
              <><Loader className="w-5 h-5 animate-spin" /> Enviando...</>
            ) : (
              <>Enviar e Ativar Minha IA <ArrowRight className="w-5 h-5" /></>
            )}
          </button>

          <p className="text-center text-slate-500 text-xs">
            Suas informações são usadas exclusivamente para configurar sua assistente de IA. Privacidade garantida.
          </p>
        </form>
      </div>
    </div>
  )
}

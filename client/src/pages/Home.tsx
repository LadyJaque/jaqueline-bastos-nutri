/* ============================================================
   Home.tsx — Jaqueline Bastos Nutricionista
   Design: "Sage Editorial" — Scandinavian Minimalism + Wellness Luxury
   Sections: Hero, Sobre, Serviços, Como Funciona, Depoimentos, Dicas, FAQ, Contato, Footer
   ============================================================ */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Asset URLs ── */
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/hero-nutri-HKpfukfuqZMzjSvFGNSyN3.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/about-nutri-P2McfBkFp8yQ7Le5Fircbf.webp";
const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/food-nutri-bJxhXK9CNem6woPiJSsXJG.webp";
const CONSULT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/consult-nutri-fKhERVTEFch6ABzmVtg6pK.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/logo-jaqueline_8b99bb51.png";
const WA_LINK = "https://wa.me/5500000000000?text=Olá%20Jaqueline!%20Gostaria%20de%20agendar%20uma%20consulta.";

/* ── Reusable section label ── */
function SectionLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <span className="label-caps block mb-3" style={style}>{children}</span>
  );
}

/* ── Gold divider ── */
function GoldLine({ className = "" }: { className?: string }) {
  return <span className={`gold-divider ${className}`} />;
}

/* ── Reveal wrapper ── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════
   HERO SECTION
══════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.99 0.005 80)" }}
    >
      {/* Background image — right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] lg:w-[52%]"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay to blend with left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.99 0.005 80) 0%, oklch(0.99 0.005 80 / 0.7) 25%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-xl">
          <div
            className="reveal visible"
            style={{ transitionDelay: "0ms" }}
          >
            <SectionLabel>Nutricionista Online</SectionLabel>
            <GoldLine className="mb-6" />
          </div>

          <h1
            className="reveal visible font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.22 0.01 60)",
              transitionDelay: "100ms",
            }}
          >
            Cuide da sua
            <br />
            <em style={{ color: "oklch(0.50 0.09 130)" }}>alimentação</em>
            <br />
            com leveza
          </h1>

          <p
            className="reveal visible text-base md:text-lg leading-relaxed mb-8 max-w-md"
            style={{
              color: "oklch(0.42 0.01 60)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              transitionDelay: "200ms",
            }}
          >
            Reeducação alimentar sem dietas restritivas, com um plano
            personalizado que respeita sua rotina e suas preferências.
            Atendimento 100% online.
          </p>

          <div
            className="reveal visible flex flex-col sm:flex-row gap-4"
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{
                background: "oklch(0.50 0.09 130)",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Consulta
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#sobre");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase border transition-all duration-300 hover:bg-[oklch(0.93_0.04_130)]"
              style={{
                borderColor: "oklch(0.50 0.09 130)",
                color: "oklch(0.50 0.09 130)",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Conhecer mais
            </button>
          </div>

          {/* Stats */}
          <div
            className="reveal visible flex gap-8 mt-12 pt-8 border-t"
            style={{
              borderColor: "oklch(0.90 0.02 80)",
              transitionDelay: "400ms",
            }}
          >
            {[
              { value: "100%", label: "Online" },
              { value: "Plano", label: "Personalizado" },
              { value: "Sem", label: "Restrições" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-serif"
                  style={{ color: "oklch(0.50 0.09 130)", fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-0.5"
                  style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="label-caps" style={{ color: "oklch(0.66 0.10 130)" }}>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(0.66 0.10 130)" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SOBRE SECTION
══════════════════════════════════════════════ */
function SobreSection() {
  return (
    <section
      id="sobre"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal className="relative">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4", maxHeight: "600px" }}
            >
              <img
                src={ABOUT_IMG}
                alt="Jaqueline Bastos Nutricionista"
                className="w-full h-full object-cover object-top"
              />
              {/* Decorative border */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-2"
                style={{ borderColor: "oklch(0.75 0.08 80)" }}
              />
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <SectionLabel>Sobre mim</SectionLabel>
              <GoldLine className="mb-6" />
              <h2
                className="text-4xl md:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Uma abordagem
                <br />
                <em style={{ color: "oklch(0.50 0.09 130)" }}>leve e realista</em>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Sou nutricionista apaixonada por ajudar pessoas a melhorarem
                sua relação com a comida de forma leve e realista. Acredito que
                é possível alcançar resultados sem dietas restritivas,
                respeitando a rotina e as preferências de cada pessoa.
              </p>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Minha abordagem é focada no equilíbrio, buscando não apenas
                mudanças físicas, mas também mais autoestima, bem-estar e
                qualidade de vida.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Atuo com planos alimentares personalizados e acompanhamento
                próximo, entendendo que cada pessoa é única e precisa de um
                cuidado individualizado.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3 mb-8">
                {["CRN Registrada", "Atendimento Online", "Plano Personalizado", "Acompanhamento Próximo"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                    style={{
                      background: "oklch(0.93 0.04 130)",
                      color: "oklch(0.42 0.08 130)",
                      fontFamily: "'Lato', sans-serif",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-4"
                style={{ color: "oklch(0.50 0.09 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
              >
                Agendar minha consulta
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SERVIÇOS SECTION
══════════════════════════════════════════════ */
const servicos = [
  {
    icon: "🌿",
    title: "Consulta de Nutrição Clínica",
    desc: "Avaliação nutricional completa com anamnese detalhada para entender seu histórico, objetivos e necessidades individuais.",
  },
  {
    icon: "📋",
    title: "Plano Alimentar Individualizado",
    desc: "Cardápio personalizado criado especialmente para você, respeitando suas preferências, rotina e objetivos de saúde.",
  },
  {
    icon: "⚖️",
    title: "Emagrecimento Sem Restrições",
    desc: "Estratégias sustentáveis para perda de peso sem dietas radicais, focando em mudanças reais e duradouras.",
  },
  {
    icon: "🔄",
    title: "Reeducação Alimentar",
    desc: "Transformação gradual dos seus hábitos alimentares de forma natural, sem sofrimento e com muito mais prazer.",
  },
  {
    icon: "✨",
    title: "Bem-estar e Autoestima",
    desc: "Nutrição como ferramenta para melhorar sua relação com o corpo, aumentar a energia e fortalecer a autoconfiança.",
  },
  {
    icon: "🏃",
    title: "Rotina Alimentar Prática",
    desc: "Soluções reais para quem tem a vida corrida: refeições rápidas, práticas e nutritivas que cabem no seu dia a dia.",
  },
  {
    icon: "📱",
    title: "Acompanhamento Nutricional",
    desc: "Suporte contínuo com retornos periódicos para ajustar o plano conforme sua evolução e novas necessidades.",
  },
];

function ServicosSection() {
  return (
    <section
      id="servicos"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.99 0.005 80)" }}
    >
      <div className="container">
        <Reveal>
          <div className="mb-14">
            <SectionLabel>Serviços</SectionLabel>
            <GoldLine className="mb-6" />
            <h2
              className="text-4xl md:text-5xl leading-tight max-w-lg"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
            >
              Como posso te
              <br />
              <em style={{ color: "oklch(0.50 0.09 130)" }}>ajudar</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[oklch(0.90_0.02_80)]">
          {servicos.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div
                className="p-8 group transition-all duration-300 hover:bg-[oklch(0.97_0.02_130)] h-full"
                style={{ background: "oklch(0.99 0.005 80)" }}
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3
                  className="text-lg mb-3 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {s.desc}
                </p>
                <div
                  className="mt-5 w-0 h-0.5 group-hover:w-8 transition-all duration-500"
                  style={{ background: "oklch(0.75 0.08 80)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{
                background: "oklch(0.50 0.09 130)",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Quero começar agora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   COMO FUNCIONA SECTION
══════════════════════════════════════════════ */
const steps = [
  { num: "01", title: "Agendamento", desc: "Entre em contato pelo WhatsApp e escolha o melhor horário para você. O atendimento é 100% online." },
  { num: "02", title: "Consulta Inicial", desc: "Conversamos sobre seus objetivos, rotina, preferências e histórico alimentar para entender suas necessidades." },
  { num: "03", title: "Plano Personalizado", desc: "Receba seu plano alimentar individualizado, criado especialmente para o seu perfil e estilo de vida." },
  { num: "04", title: "Acompanhamento", desc: "Retornos periódicos para ajustar o plano, tirar dúvidas e garantir que você esteja evoluindo com saúde." },
];

function ComoFuncionaSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.42 0.08 130)" }}
    >
      {/* Background food image with overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${FOOD_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10">
        <Reveal>
          <div className="mb-14">
            <SectionLabel style={{ color: "oklch(0.86 0.06 130)" }}>Como funciona</SectionLabel>

            <span className="gold-divider mb-6 block" />
            <h2
              className="text-4xl md:text-5xl leading-tight text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Seu caminho para
              <br />
              <em style={{ color: "oklch(0.86 0.06 130)" }}>uma vida mais leve</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="relative">
                <span
                  className="block text-6xl font-serif mb-4 opacity-30"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.86 0.06 130)" }}
                >
                  {step.num}
                </span>
                <h3
                  className="text-xl mb-3 text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.86 0.06 130)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-14 flex flex-col sm:flex-row items-center gap-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{
                background: "oklch(0.99 0.005 80)",
                color: "oklch(0.42 0.08 130)",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Agendar minha consulta
            </a>
            <p className="text-sm" style={{ color: "oklch(0.76 0.08 130)", fontFamily: "'Lato', sans-serif" }}>
              Atendimento online • Horários flexíveis
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   DEPOIMENTOS SECTION
══════════════════════════════════════════════ */
const depoimentos = [
  {
    name: "Ana Carolina",
    role: "Professora, 34 anos",
    text: "Finalmente encontrei uma nutricionista que não me mandou cortar tudo que eu gosto! O plano dela é super prático e se encaixa perfeitamente na minha rotina corrida. Perdi 8kg em 3 meses sem sofrimento.",
    stars: 5,
  },
  {
    name: "Mariana Silva",
    role: "Advogada, 29 anos",
    text: "A Jaqueline mudou completamente minha relação com a comida. Aprendi a comer de forma consciente e hoje me sinto muito mais disposta e confiante. O acompanhamento online é super conveniente!",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Mãe e empreendedora, 38 anos",
    text: "Tentei várias dietas antes e sempre desistia. Com a Jaqueline foi diferente — ela entendeu minha realidade de mãe com pouco tempo e criou um plano que realmente funciona no dia a dia.",
    stars: 5,
  },
];

function DepoimentosSection() {
  return (
    <section
      id="depoimentos"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <Reveal>
          <div className="mb-14">
            <SectionLabel>Depoimentos</SectionLabel>
            <GoldLine className="mb-6" />
            <h2
              className="text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
            >
              O que dizem
              <br />
              <em style={{ color: "oklch(0.50 0.09 130)" }}>minhas pacientes</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((d, i) => (
            <Reveal key={d.name} delay={i * 100}>
              <div
                className="p-8 border-l-2 relative"
                style={{ borderColor: "oklch(0.75 0.08 80)", background: "oklch(0.99 0.005 80)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: d.stars }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="oklch(0.75 0.08 80)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote mark */}
                <span
                  className="absolute top-6 right-8 text-5xl font-serif opacity-10"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.50 0.09 130)", lineHeight: 1 }}
                >
                  "
                </span>

                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: "oklch(0.40 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  "{d.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: "oklch(0.58 0.10 130)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {d.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}
                    >
                      {d.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.58 0.01 60)", fontFamily: "'Lato', sans-serif" }}
                    >
                      {d.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   DICAS SECTION
══════════════════════════════════════════════ */
const dicas = [
  {
    tag: "Hábitos",
    title: "Como criar uma rotina alimentar sustentável",
    desc: "Pequenas mudanças consistentes valem mais do que grandes transformações temporárias. Descubra como construir hábitos que duram.",
    img: FOOD_IMG,
  },
  {
    tag: "Bem-estar",
    title: "Comer bem com a vida corrida: é possível?",
    desc: "Sim! Com planejamento simples e escolhas inteligentes, você consegue se alimentar bem mesmo nos dias mais agitados.",
    img: CONSULT_IMG,
  },
  {
    tag: "Reeducação",
    title: "Por que as dietas restritivas não funcionam",
    desc: "Entenda por que cortar alimentos radicalmente pode sabotar seus resultados e como a reeducação alimentar é mais eficaz.",
    img: HERO_IMG,
  },
];

function DicasSection() {
  return (
    <section
      id="dicas"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.99 0.005 80)" }}
    >
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <SectionLabel>Dicas & Conteúdo</SectionLabel>
              <GoldLine className="mb-6" />
              <h2
                className="text-4xl md:text-5xl leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Nutrição no
                <br />
                <em style={{ color: "oklch(0.50 0.09 130)" }}>dia a dia</em>
              </h2>
            </div>
            <a
              href="https://instagram.com/seuuser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase link-underline"
              style={{ color: "oklch(0.50 0.09 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
            >
              Ver mais no Instagram
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dicas.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="overflow-hidden mb-5" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span
                  className="label-caps block mb-2"
                  style={{ color: "oklch(0.75 0.08 80)" }}
                >
                  {d.tag}
                </span>
                <h3
                  className="text-xl mb-3 leading-snug group-hover:text-[oklch(0.50_0.09_130)] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {d.desc}
                </p>
                <div
                  className="mt-4 flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                  style={{ color: "oklch(0.50 0.09 130)", fontFamily: "'Lato', sans-serif" }}
                >
                  <span>Ler mais</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FAQ SECTION
══════════════════════════════════════════════ */
const faqs = [
  {
    q: "A consulta é realmente online? Como funciona?",
    a: "Sim, 100% online! Realizamos a consulta por videochamada (Google Meet, Zoom ou WhatsApp). Você recebe o plano alimentar e todos os materiais por e-mail ou WhatsApp. É prático, seguro e tão eficaz quanto o presencial.",
  },
  {
    q: "Preciso cortar tudo que gosto para ter resultado?",
    a: "Não! Minha abordagem é baseada em reeducação alimentar, não em restrições radicais. O objetivo é criar um plano que você consiga seguir com prazer, incluindo alimentos que você gosta de forma equilibrada.",
  },
  {
    q: "Em quanto tempo verei resultados?",
    a: "Cada pessoa é única, mas em geral os primeiros resultados aparecem nas primeiras 2 a 4 semanas — mais energia, melhor digestão e disposição. Resultados físicos como emagrecimento vêm com consistência ao longo do tempo.",
  },
  {
    q: "Como é feito o acompanhamento após a consulta?",
    a: "Após a consulta inicial, realizamos retornos periódicos para avaliar sua evolução, ajustar o plano e tirar dúvidas. Você também pode me contatar pelo WhatsApp entre as consultas.",
  },
  {
    q: "O plano alimentar é personalizado para mim?",
    a: "Absolutamente! Cada plano é criado individualmente, levando em conta seus objetivos, preferências alimentares, rotina, restrições e condições de saúde. Não existe plano genérico aqui.",
  },
  {
    q: "Atende pessoas com condições específicas de saúde?",
    a: "Sim, atendo casos como diabetes, hipertensão, síndrome do intestino irritável, entre outros. Na consulta inicial avaliamos seu histórico completo para criar um plano seguro e adequado.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Dúvidas Frequentes</SectionLabel>
              <GoldLine className="mb-6" />
              <h2
                className="text-4xl md:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Perguntas
                <br />
                <em style={{ color: "oklch(0.50 0.09 130)" }}>frequentes</em>
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Ainda tem dúvidas? Entre em contato pelo WhatsApp e
                responderei com prazer.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                style={{
                  background: "oklch(0.50 0.09 130)",
                  fontFamily: "'Lato', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <div
                  className="border-b"
                  style={{ borderColor: "oklch(0.90 0.02 80)" }}
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 py-6 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span
                      className="text-base font-normal leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300"
                      style={{
                        color: "oklch(0.50 0.09 130)",
                        transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: open === i ? "300px" : "0" }}
                  >
                    <p
                      className="pb-6 text-sm leading-relaxed"
                      style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CONTATO SECTION
══════════════════════════════════════════════ */
function ContatoSection() {
  return (
    <section
      id="contato"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.99 0.005 80)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <Reveal>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={CONSULT_IMG}
                alt="Consulta online"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-6 left-6 px-5 py-3"
                style={{ background: "oklch(0.50 0.09 130)" }}
              >
                <p className="text-white text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>
                  Atendimento Online
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact info */}
          <div>
            <Reveal>
              <SectionLabel>Contato</SectionLabel>
              <GoldLine className="mb-6" />
              <h2
                className="text-4xl md:text-5xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Vamos começar
                <br />
                <em style={{ color: "oklch(0.50 0.09 130)" }}>sua jornada?</em>
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Entre em contato para agendar sua consulta ou tirar dúvidas.
                Atendo de segunda a sexta, com horários flexíveis para encaixar
                na sua rotina.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                    label: "WhatsApp",
                    value: "(00) 00000-0000",
                    href: WA_LINK,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                    label: "Instagram",
                    value: "@seuuser",
                    href: "https://instagram.com/seuuser",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "E-mail",
                    value: "seuemail@email.com",
                    href: "mailto:seuemail@email.com",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[oklch(0.50_0.09_130)] group-hover:text-white"
                      style={{ background: "oklch(0.93 0.04 130)", color: "oklch(0.42 0.08 130)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-0.5"
                        style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-base"
                        style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                style={{
                  background: "oklch(0.50 0.09 130)",
                  fontFamily: "'Lato', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{ background: "oklch(0.22 0.01 60)", borderColor: "oklch(0.30 0.01 60)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src={LOGO_URL}
              alt="Jaqueline Bastos Nutricionista"
              className="h-12 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1) opacity(0.8)" }}
            />
            <p
              className="text-xs text-center md:text-left"
              style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Lato', sans-serif" }}
            >
              Nutricionista • Atendimento Online
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Sobre", href: "#sobre" },
              { label: "Serviços", href: "#servicos" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs tracking-widest uppercase transition-colors hover:text-white"
                style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center transition-colors hover:bg-[oklch(0.50_0.09_130)]"
              style={{ background: "oklch(0.30 0.01 60)", color: "oklch(0.80 0.01 60)" }}
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/seuuser"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center transition-colors hover:bg-[oklch(0.50_0.09_130)]"
              style={{ background: "oklch(0.30 0.01 60)", color: "oklch(0.80 0.01 60)" }}
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-8 border-t text-center"
          style={{ borderColor: "oklch(0.30 0.01 60)" }}
        >
          <p
            className="text-xs"
            style={{ color: "oklch(0.45 0.01 60)", fontFamily: "'Lato', sans-serif" }}
          >
            © {new Date().getFullYear()} Jaqueline Bastos Nutricionista. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   FLOATING WHATSAPP BUTTON
══════════════════════════════════════════════ */
function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{ background: "#25D366", borderRadius: "50%" }}
      aria-label="Falar no WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* ══════════════════════════════════════════════
   MAIN PAGE EXPORT
══════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <ServicosSection />
      <ComoFuncionaSection />
      <DepoimentosSection />
      <DicasSection />
      <FaqSection />
      <ContatoSection />
      <Footer />
      <FloatingWA />
    </div>
  );
}

/* ============================================================
   Home.tsx — Jaqueline Bastos Nutricionista
   Design: "Sage Editorial" — Scandinavian Minimalism + Wellness Luxury
   Sections: Hero, Sobre, Serviços, Como Funciona, Depoimentos, Dicas, FAQ, Contato, Footer
   ============================================================ */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trpc } from "@/lib/trpc";

/* ── Asset URLs ── */
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/hero-nutri-HKpfukfuqZMzjSvFGNSyN3.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/jaqueline-foto_ce2b6d6d.png";
const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/food-nutri-bJxhXK9CNem6woPiJSsXJG.webp";
const CONSULT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/consult-nutri-fKhERVTEFch6ABzmVtg6pK.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/logo-jaqueline_8b99bb51.png";
const WA_LINK = "https://wa.me/18997871633?text=Olá%20Jaqueline!%20Gostaria%20de%20agendar%20uma%20consulta.";

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
              href="https://instagram.com/nutrijaquebastos"
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
   CONTACT FORM COMPONENT
══════════════════════════════════════════════ */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendContactMutation = trpc.email.sendContact.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none"
            style={{
              borderColor: "oklch(0.80 0.04 130)",
              background: "transparent",
              color: "oklch(0.22 0.01 60)",
              fontFamily: "'Lato', sans-serif",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none"
            style={{
              borderColor: "oklch(0.80 0.04 130)",
              background: "transparent",
              color: "oklch(0.22 0.01 60)",
              fontFamily: "'Lato', sans-serif",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
        >
          Telefone (opcional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none"
          style={{
            borderColor: "oklch(0.80 0.04 130)",
            background: "transparent",
            color: "oklch(0.22 0.01 60)",
            fontFamily: "'Lato', sans-serif",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none"
          style={{
            borderColor: "oklch(0.80 0.04 130)",
            background: "transparent",
            color: "oklch(0.22 0.01 60)",
            fontFamily: "'Lato', sans-serif",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto px-10 py-4 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:shadow-lg disabled:opacity-50"
        style={{
          background: "oklch(0.50 0.09 130)",
          fontFamily: "'Lato', sans-serif",
          letterSpacing: "0.15em",
        }}
      >
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </button>

      {submitted && (
        <div
          className="p-4 text-sm font-semibold text-white"
          style={{ background: "oklch(0.50 0.09 130)", fontFamily: "'Lato', sans-serif" }}
        >
          ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
    </form>
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
                    value: "@nutrijaquebastos",
                    href: "https://instagram.com/nutrijaquebastos",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "E-mail",
                    value: "jaquelinegomes929@gmail.com",
                    href: "mailto:jaquelinegomes929@gmail.com",
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

        {/* Contact Form */}
        <div className="mt-16 lg:mt-0 lg:col-span-2">
          <Reveal>
            <div className="p-8 md:p-12" style={{ background: "oklch(0.99 0.005 80)" }}>
              <h3
                className="text-2xl md:text-3xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Envie uma mensagem
              </h3>
              <p
                className="text-sm mb-8"
                style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Preencha o formulário abaixo e entraremos em contato em breve.
              </p>
              <ContactForm />
            </div>
          </Reveal>
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
              href="https://instagram.com/nutrijaquebastos"
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
   PREÇOS SECTION
══════════════════════════════════════════════ */
function PrecosSection() {
  const planos = [
    {
      nome: "Consulta Única",
      preco: "R$ 120",
      descricao: "Avaliação nutricional completa e orientações iniciais",
      features: [
        "Avaliação nutricional completa",
        "Anamnese detalhada",
        "Orientações iniciais",
        "Duração: 1 hora",
      ],
      destaque: false,
    },
    {
      nome: "Acompanhamento Mensal",
      preco: "R$ 300",
      descricao: "4 consultas com plano personalizado e suporte contínuo",
      features: [
        "4 consultas mensais",
        "Plano alimentar personalizado",
        "Ajustes conforme evolução",
        "Suporte via WhatsApp",
        "Melhor custo-benefício",
      ],
      destaque: true,
    },
    {
      nome: "Plano Trimestral",
      preco: "R$ 800",
      descricao: "12 consultas com acompanhamento intensivo e resultados garantidos",
      features: [
        "12 consultas trimestrais",
        "Plano alimentar detalhado",
        "Acompanhamento intensivo",
        "Suporte prioritário",
        "Maior economia",
        "Resultados mais visíveis",
      ],
      destaque: false,
    },
  ];

  return (
    <section
      id="precos"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.99 0.005 80)" }}
    >
      <div className="container">
        <Reveal>
          <SectionLabel>Investimento</SectionLabel>
          <GoldLine className="mb-6" />
          <h2
            className="text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
          >
            Planos de
            <br />
            <em style={{ color: "oklch(0.50 0.09 130)" }}>atendimento</em>
          </h2>
          <p
            className="text-base leading-relaxed mb-16 max-w-2xl"
            style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Escolha o plano que melhor se encaixa na sua jornada. Todos incluem suporte personalizado e acompanhamento próximo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planos.map((plano, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div
                className={`p-8 transition-all duration-300 ${
                  plano.destaque ? "shadow-xl scale-105" : "hover:shadow-lg"
                }`}
                style={{
                  background: plano.destaque ? "oklch(0.50 0.09 130)" : "white",
                  border: plano.destaque ? "none" : "1px solid oklch(0.90 0.01 60)",
                }}
              >
                {plano.destaque && (
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-4"
                    style={{ color: "oklch(0.99 0.005 80)", fontFamily: "'Lato', sans-serif" }}
                  >
                    ⭐ Mais Popular
                  </div>
                )}

                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: plano.destaque ? "white" : "oklch(0.22 0.01 60)",
                  }}
                >
                  {plano.nome}
                </h3>

                <p
                  className="text-sm mb-6"
                  style={{
                    color: plano.destaque ? "oklch(0.99 0.005 80 / 0.9)" : "oklch(0.50 0.01 60)",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {plano.descricao}
                </p>

                <div className="mb-8">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      color: plano.destaque ? "white" : "oklch(0.50 0.09 130)",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {plano.preco}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plano.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{
                        color: plano.destaque ? "white" : "oklch(0.22 0.01 60)",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      <span style={{ color: plano.destaque ? "oklch(0.99 0.005 80)" : "oklch(0.50 0.09 130)" }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center text-sm font-bold tracking-widest uppercase transition-all duration-300"
                  style={{
                    background: plano.destaque ? "white" : "oklch(0.50 0.09 130)",
                    color: plano.destaque ? "oklch(0.50 0.09 130)" : "white",
                    fontFamily: "'Lato', sans-serif",
                    letterSpacing: "0.15em",
                  }}
                >
                  Agendar Consulta
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   ANAMNESE SECTION (Multi-step form)
══════════════════════════════════════════════ */
function AnamneseSection() {
  const sendAnamneseMutation = trpc.email.sendAnamnese.useMutation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Passo 1: Dados Pessoais
    nome: "",
    idade: "",
    dataNascimento: "",
    sexo: "",
    altura: "",
    peso: "",
    telefone: "",
    email: "",
    // Passo 2: Objetivo e Saúde
    objetivo: "",
    metaEspecifica: "",
    doencas: "",
    cirurgias: "",
    medicamentos: "",
    alergias: "",
    intestino: "",
    // Passo 3: Hábitos e Comportamento
    rotina: "",
    refeicoes: "",
    pularefeicoes: "",
    compulsao: "",
    consumo: [] as string[],
    agua: "",
    alcool: "",
    atividade: "",
    frequencia: "",
    duracao: "",
    sono: "",
    qualidadeSono: "",
    estresse: "",
    comePor: [] as string[],
    dietas: "",
    resultado: "",
    rebote: "",
    alimentos: "",
    restricoes: "",
    comprometimento: "",
    mudanca: "",
    observacoes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name as keyof typeof prev] as string[]), value]
          : (prev[name as keyof typeof prev] as string[]).filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setLoading(true);
    try {
      await sendAnamneseMutation.mutateAsync({
        nome: formData.nome,
        idade: formData.idade,
        dataNascimento: formData.dataNascimento,
        sexo: formData.sexo,
        altura: formData.altura,
        peso: formData.peso,
        telefone: formData.telefone,
        email: formData.email,
        objetivo: formData.objetivo,
        metaEspecifica: formData.metaEspecifica,
        doencas: formData.doencas,
        cirurgias: formData.cirurgias,
        medicamentos: formData.medicamentos,
        alergias: formData.alergias,
        intestino: formData.intestino,
        rotina: formData.rotina,
        refeicoes: formData.refeicoes,
        pularefeicoes: formData.pularefeicoes,
        compulsao: formData.compulsao,
        consumo: formData.consumo,
        agua: formData.agua,
        alcool: formData.alcool,
        atividade: formData.atividade,
        frequencia: formData.frequencia,
        duracao: formData.duracao,
        sono: formData.sono,
        qualidadeSono: formData.qualidadeSono,
        estresse: formData.estresse,
        comePor: formData.comePor,
        dietas: formData.dietas,
        resultado: formData.resultado,
        rebote: formData.rebote,
        alimentos: formData.alimentos,
        restricoes: formData.restricoes,
        comprometimento: formData.comprometimento,
        mudanca: formData.mudanca,
        observacoes: formData.observacoes,
      });
      setSubmitted(true);
      setTimeout(() => {
        setStep(1);
        setFormData({
          nome: "", idade: "", dataNascimento: "", sexo: "", altura: "", peso: "", telefone: "", email: "",
          objetivo: "", metaEspecifica: "", doencas: "", cirurgias: "", medicamentos: "", alergias: "", intestino: "",
          rotina: "", refeicoes: "", pularefeicoes: "", compulsao: "", consumo: [], agua: "", alcool: "",
          atividade: "", frequencia: "", duracao: "", sono: "", qualidadeSono: "", estresse: "", comePor: [],
          dietas: "", resultado: "", rebote: "", alimentos: "", restricoes: "", comprometimento: "", mudanca: "", observacoes: "",
        });
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Erro ao enviar anamnese:", error);
      alert("Erro ao enviar anamnese. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="anamnese"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.99 0.005 80)" }}
    >
      <div className="container max-w-3xl">
        <Reveal>
          <SectionLabel>Avaliação Inicial</SectionLabel>
          <GoldLine className="mb-6" />
          <h2
            className="text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
          >
            Questionário de
            <br />
            <em style={{ color: "oklch(0.50 0.09 130)" }}>Anamnese</em>
          </h2>
          <p
            className="text-base leading-relaxed mb-12"
            style={{ color: "oklch(0.50 0.01 60)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Responda com calma em 3 passos. Suas respostas serão enviadas para jaquelinegomes929@gmail.com para que eu possa preparar uma avaliação personalizada.
          </p>
        </Reveal>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`text-sm font-bold ${
                  s <= step ? "text-white" : "text-gray-400"
                }`}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: s <= step ? "oklch(0.50 0.09 130)" : "oklch(0.70 0.01 60)",
                }}
              >
                Passo {s}
              </div>
            ))}
          </div>
          <div className="w-full h-2 bg-gray-200" style={{ background: "oklch(0.90 0.01 60)" }}>
            <div
              className="h-full transition-all duration-300"
              style={{
                width: `${(step / 3) * 100}%`,
                background: "oklch(0.50 0.09 130)",
              }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* PASSO 1: Dados Pessoais */}
          {step === 1 && (
            <Reveal>
              <div className="space-y-6">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  👤 Dados Pessoais
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Nome Completo</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Idade</label>
                    <input type="number" name="idade" value={formData.idade} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Data de Nascimento</label>
                    <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Sexo</label>
                    <select name="sexo" value={formData.sexo} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}>
                      <option value="">Selecione</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Altura (m)</label>
                    <input type="number" step="0.01" name="altura" value={formData.altura} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Peso (kg)</label>
                    <input type="number" step="0.1" name="peso" value={formData.peso} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Telefone / WhatsApp</label>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>E-mail</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* PASSO 2: Objetivo e Saúde */}
          {step === 2 && (
            <Reveal>
              <div className="space-y-6">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  🎯 Objetivo e Saúde
                </h3>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Qual seu principal objetivo?</label>
                  <div className="space-y-2">
                    {["Emagrecimento", "Ganho de massa muscular", "Reeducação alimentar", "Saúde / qualidade de vida"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="objetivo" value={opt} checked={formData.objetivo === opt} onChange={handleChange} required style={{ accentColor: "oklch(0.50 0.09 130)" }} />
                        <span style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Tem alguma meta específica?</label>
                  <textarea name="metaEspecifica" value={formData.metaEspecifica} onChange={handleChange} placeholder="Ex: perder 10kg, reduzir medidas, melhorar exames" rows={3} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Possui alguma doença diagnosticada?</label>
                  <textarea name="doencas" value={formData.doencas} onChange={handleChange} placeholder="Ex: diabetes, hipertensão, etc." rows={2} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Faz uso de medicamentos?</label>
                  <textarea name="medicamentos" value={formData.medicamentos} onChange={handleChange} placeholder="Quais medicamentos você toma?" rows={2} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Tem alergia ou intolerância alimentar?</label>
                  <textarea name="alergias" value={formData.alergias} onChange={handleChange} placeholder="Quais?" rows={2} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Como está seu funcionamento intestinal?</label>
                  <div className="space-y-2">
                    {["Regular", "Preso", "Solto"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="intestino" value={opt} checked={formData.intestino === opt} onChange={handleChange} required style={{ accentColor: "oklch(0.50 0.09 130)" }} />
                        <span style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* PASSO 3: Hábitos e Comportamento */}
          {step === 3 && (
            <Reveal>
              <div className="space-y-6">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
                >
                  🥗 Hábitos e Comportamento
                </h3>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Como é sua rotina alimentar hoje?</label>
                  <textarea name="rotina" value={formData.rotina} onChange={handleChange} placeholder="Descreva um dia comum..." rows={3} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Quantas refeições faz por dia?</label>
                    <input type="number" name="refeicoes" value={formData.refeicoes} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Pula refeições?</label>
                    <input type="text" name="pularefeicoes" value={formData.pularefeicoes} onChange={handleChange} placeholder="Quais?" className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Tem episódios de compulsão alimentar?</label>
                  <div className="space-y-2">
                    {["Não", "Sim, ocasionalmente", "Sim, frequentemente"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="compulsao" value={opt} checked={formData.compulsao === opt} onChange={handleChange} required style={{ accentColor: "oklch(0.50 0.09 130)" }} />
                        <span style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Consome bastante:</label>
                  <div className="space-y-2">
                    {["Doces", "Frituras", "Industrializados", "Refrigerantes"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="consumo" value={opt} checked={formData.consumo.includes(opt)} onChange={handleChange} style={{ accentColor: "oklch(0.50 0.09 130)" }} />
                        <span style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Litros de água por dia</label>
                    <input type="number" step="0.5" name="agua" value={formData.agua} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Bebidas alcoólicas</label>
                    <select name="alcool" value={formData.alcool} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}>
                      <option value="">Selecione</option>
                      <option value="Não">Não</option>
                      <option value="Raramente">Raramente</option>
                      <option value="Fins de semana">Fins de semana</option>
                      <option value="Frequentemente">Frequentemente</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Pratica atividade física?</label>
                  <div className="space-y-2">
                    {["Não", "Sim"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="atividade" value={opt} checked={formData.atividade === opt} onChange={handleChange} required style={{ accentColor: "oklch(0.50 0.09 130)" }} />
                        <span style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.atividade === "Sim" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Frequência semanal</label>
                      <input type="text" name="frequencia" value={formData.frequencia} onChange={handleChange} placeholder="Ex: 3x por semana" className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Duração média</label>
                      <input type="text" name="duracao" value={formData.duracao} onChange={handleChange} placeholder="Ex: 1 hora" className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Horas de sono por noite</label>
                    <input type="number" step="0.5" name="sono" value={formData.sono} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Qualidade do sono</label>
                    <select name="qualidadeSono" value={formData.qualidadeSono} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}>
                      <option value="">Selecione</option>
                      <option value="Bom">Bom</option>
                      <option value="Regular">Regular</option>
                      <option value="Ruim">Ruim</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Nível de estresse (0-10)</label>
                  <input type="number" min="0" max="10" name="estresse" value={formData.estresse} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Você come por:</label>
                  <div className="space-y-2">
                    {["Fome", "Ansiedade", "Tédio", "Emoção"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="comePor" value={opt} checked={formData.comePor.includes(opt)} onChange={handleChange} style={{ accentColor: "oklch(0.50 0.09 130)" }} />
                        <span style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Já fez dieta antes?</label>
                  <div className="space-y-2">
                    {["Não", "Sim"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="dietas" value={opt} checked={formData.dietas === opt} onChange={handleChange} required style={{ accentColor: "oklch(0.50 0.09 130)" }} />
                        <span style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.dietas === "Sim" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Teve resultado?</label>
                      <select name="resultado" value={formData.resultado} onChange={handleChange} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}>
                        <option value="">Selecione</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Teve efeito rebote?</label>
                      <select name="rebote" value={formData.rebote} onChange={handleChange} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")}>
                        <option value="">Selecione</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Alimentos que gosta</label>
                  <textarea name="alimentos" value={formData.alimentos} onChange={handleChange} placeholder="Liste seus alimentos favoritos" rows={2} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Restrições alimentares</label>
                  <textarea name="restricoes" value={formData.restricoes} onChange={handleChange} placeholder="Religiosa, ética, etc." rows={2} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>De 0 a 10, quanto você está disposto(a) a seguir o plano?</label>
                  <input type="number" min="0" max="10" name="comprometimento" value={formData.comprometimento} onChange={handleChange} required className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Está disposto(a) a mudar hábitos?</label>
                  <div className="space-y-2">
                    {["Sim, totalmente", "Sim, parcialmente", "Não tenho certeza"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="mudanca" value={opt} checked={formData.mudanca === opt} onChange={handleChange} required style={{ accentColor: "oklch(0.50 0.09 130)" }} />
                        <span style={{ color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "oklch(0.66 0.10 130)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}>Observações adicionais</label>
                  <textarea name="observacoes" value={formData.observacoes} onChange={handleChange} placeholder="Quer me contar mais alguma coisa importante?" rows={3} className="w-full px-4 py-3 border-b-2 transition-colors focus:outline-none resize-none" style={{ borderColor: "oklch(0.80 0.04 130)", background: "transparent", color: "oklch(0.22 0.01 60)", fontFamily: "'Lato', sans-serif" }} onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.50 0.09 130)")} onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.80 0.04 130)")} />
                </div>
              </div>
            </Reveal>
          )}

          {/* Buttons */}
          <div className="flex gap-4 justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300"
                style={{
                  background: "transparent",
                  border: "2px solid oklch(0.50 0.09 130)",
                  color: "oklch(0.50 0.09 130)",
                  fontFamily: "'Lato', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                Voltar
              </button>
            )}
            <button
              type="submit"
              disabled={loading}
              className="ml-auto px-8 py-3 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 disabled:opacity-50"
              style={{
                background: "oklch(0.50 0.09 130)",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              {step === 3 ? (loading ? "Enviando..." : "Enviar Anamnese") : "Próximo"}
            </button>
          </div>

          {submitted && (
            <div
              className="p-4 text-sm font-semibold text-white text-center"
              style={{ background: "oklch(0.50 0.09 130)", fontFamily: "'Lato', sans-serif" }}
            >
              ✓ Anamnese enviada com sucesso! Você receberá um retorno em breve.
            </div>
          )}
        </form>
      </div>
    </section>
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
      <PrecosSection />
      <AnamneseSection />
      <FaqSection />
      <ContatoSection />
      <Footer />
      <FloatingWA />
    </div>
  );
}

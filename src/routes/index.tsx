import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Check,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Stethoscope,
  HeartPulse,
  TrendingUp,
  Clock,
  Users,
  Activity,
  Star,
  AlertTriangle,
  MessageCircle,
  Gift,
  CalendarCheck,
  Megaphone,
  Inbox,
  UserPlus,
  Receipt,
  Wallet,
  Play,
  Volume2,
  VolumeX,
  Pause,
} from "lucide-react";
import ownerImg from "../assets/clinic-owner.jpg";
import expertImg from "../assets/yuri-portrait.png";
import astanaHubImg from "../assets/astana-hub.png";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Поток пациентов на дорогие услуги - MarkVision AI" },
      {
        name: "description",
        content:
          "Система роста для медицинских центров в Казахстане: +30 млн ₸ за 30 дней, 85% доходимости, без скидок. Разбор клиники от Юрия Запойнова.",
      },
      { property: "og:title", content: "MarkVision AI - рост медцентра на +30 млн ₸ за 30 дней" },
      {
        property: "og:description",
        content:
          "Адресное предложение, поток пациентов на дорогостоящие услуги и их удержание. Часовой разбор за 4 990 ₸ с гарантией возврата.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const WA_URL =
  "https://api.whatsapp.com/send/?phone=+77472842595&text=%D0%9C%D0%B5%D0%B4%D1%86%D0%B5%D0%BD%D1%82%D1%80";

/* ============ shared building blocks ============ */

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const enableSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    v.play().then(() => {
      setMuted(false);
      setPlaying(true);
      setStarted(true);
    }).catch(() => setStarted(true));
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <div className="relative w-full">
      <div aria-hidden className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-emerald-300/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-black shadow-2xl shadow-slate-900/15">
        <video
          ref={ref}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="block h-auto w-full"
        />

        {!started && (
          <button
            type="button"
            onClick={enableSound}
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40"
            aria-label="Включить звук"
          >
            <span className="flex items-center gap-3 rounded-full bg-white/95 px-6 py-3.5 font-semibold text-slate-900 shadow-xl backdrop-blur transition hover:scale-105">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                <Play className="h-4 w-4 fill-white" />
              </span>
              Включить со звуком
            </span>
          </button>
        )}

        {started && (
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white"
              aria-label={playing ? "Пауза" : "Воспроизвести"}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white"
              aria-label={muted ? "Включить звук" : "Выключить звук"}
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function WaButton({
  children,
  size = "lg",
  variant = "whatsapp",
  event = "cta_whatsapp_click",
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
  variant?: "whatsapp" | "primary" | "outline";
  event?: string;
}) {
  const sz =
    size === "lg"
      ? "px-7 py-4 text-base sm:text-lg"
      : "px-5 py-3 text-sm sm:text-base";
  const vr =
    variant === "primary"
      ? "bg-[var(--primary)] text-white hover:brightness-110"
      : variant === "outline"
        ? "border border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
        : "bg-[#25D366] text-white hover:bg-[#1ebe5b]";
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-event={event}
      className={`inline-flex w-full max-w-md items-center justify-center gap-2.5 rounded-full font-semibold shadow-sm shadow-slate-900/5 transition active:scale-[0.98] ${sz} ${vr}`}
    >
      {variant === "whatsapp" && <MessageCircle className="h-5 w-5" />}
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  children,
  align = "left",
}: {
  eyebrow?: string;
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--primary)] ${
            align === "center" ? "" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl leading-[1.15] text-[var(--foreground)] sm:text-4xl md:text-[44px]">
        {children}
      </h2>
    </div>
  );
}

function Chapter({
  label,
  align = "left",
}: {
  label: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-8 flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-10 bg-[var(--primary)]/40" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
        {label}
      </span>
      <span className="h-px w-10 bg-[var(--primary)]/40" />
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className="text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
        {children}
      </span>
    </li>
  );
}


/* ============ page ============ */

function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/60 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 py-3 sm:py-3.5">
        <a
          href="https://astanahub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl px-3 py-1.5 transition hover:opacity-80"
          aria-label="Резидент Astana Hub"
        >
          <img src={astanaHubImg} alt="Astana Hub" width={120} height={32} className="h-7 w-auto" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] sm:text-[11px]">
            ОФИЦИАЛЬНЫЙ УЧАСТНИК
          </span>
        </a>
      </div>
    </header>
  );
}

function Landing() {
  useReveal();

  return (
    <main className="min-h-screen bg-white text-[var(--foreground)] antialiased">
      <StickyHeader />
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--secondary)] to-white">
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--primary-soft)] opacity-70 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 -left-32 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-dot opacity-25" />

        <div className="relative mx-auto max-w-5xl px-5 pt-10 pb-14 text-center sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <div>
            {/* === Content === */}
            <div className="reveal mx-auto flex flex-col items-center space-y-5 lg:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-white/80 px-3.5 py-1.5 shadow-sm shadow-slate-900/5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary)]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--primary)] text-center">
                  ДЛЯ МЕДИЦИНСКИХ КЛИНИК <br /> В КАЗАХСТАНЕ
                </span>
              </div>

              <h1 className="max-w-4xl font-display font-extrabold leading-[1.05] tracking-[-0.02em] text-3xl sm:text-4xl md:text-5xl lg:text-[52px]">
                +100 пациентов на <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[var(--primary)]">платную диагностику</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0.5 -z-0 h-2.5 bg-[var(--primary-soft)] sm:bottom-1 sm:h-3.5"
                  />
                </span> <br />
                каждый месяц
              </h1>

              <p className="max-w-2xl text-base leading-[1.6] text-slate-700 sm:text-[17px]">
                Для владельцев медклиник, которые хотят обойти конкурентов в 2026 году <br />
                и увеличить выручку в 2–3 раза
              </p>

              {/* Hero video */}
              <div className="w-full max-w-xl">
                <HeroVideo />
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-4 pt-1 sm:flex-row sm:justify-center">
                <WaButton variant="primary">Получить разбор клиники</WaButton>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[var(--primary-soft)] text-[10px] font-bold text-[var(--primary)]">+50</div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[10px] font-bold text-slate-600">KZ</div>
                    <div className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-[var(--primary)] to-emerald-400" />
                  </div>
                  <p className="whitespace-nowrap text-left text-xs font-medium leading-tight text-slate-500">
                    Доверяют 20+<br />клиник в РК
                  </p>
                </div>
              </div>
            </div>

          </div>

          
        </div>
      </section>

      <FamiliarSituation />

      {/* ===== CASE: BAKYT — MERGED ===== */}
      <section className="relative overflow-hidden bg-[var(--secondary)] py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-dot opacity-50" />
        <div className="relative mx-auto max-w-4xl px-5">
          <Chapter label="КЕЙС КЛИНИКИ" />
          <SectionTitle eyebrow="Реальный результат">
            Медцентр в Алматы: <br />
            +13 млн без доп бюджета на рекламу
          </SectionTitle>

          {/* OWNER CARD */}
          <article className="reveal card-lift relative mt-8 flex flex-col items-start gap-5 rounded-3xl border border-[var(--border)] bg-white p-6 sm:flex-row sm:items-center sm:gap-7 sm:p-8">
            <img
              src={ownerImg}
              alt="Бакыт, владелец медцентра в Алматы"
              width={400}
              height={400}
              loading="lazy"
              className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-[var(--primary-soft)] sm:h-28 sm:w-28"
            />
            <div>
              <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-[var(--primary-soft)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--primary)]">
                <Stethoscope className="h-3 w-3" />
                Клиника-партнёр · Алматы
              </div>
              <p className="text-base text-[var(--muted-foreground)] sm:text-lg">
                <strong className="text-[var(--foreground)]">Бакыт</strong> — владелец медцентра в Алматы. Вышел на{" "}
                <span className="font-bold text-[var(--emerald)]">+13 млн ₸/мес</span> без увеличения расходов на рекламу.
              </p>
            </div>
          </article>

          {/* BEFORE / WHAT WE DID */}
          <div className="reveal mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-100 bg-rose-50/60 p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-rose-600">
                <AlertTriangle className="h-4 w-4" /> Было
              </div>
              <p className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                Один администратор не справлялся со звонками. Записывал всех подряд приходило только{" "}
                <strong className="text-rose-700">30%</strong>.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--primary-soft)] bg-[var(--primary-soft)]/40 p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                <Sparkles className="h-4 w-4" /> Что мы сделали
              </div>
              <ul className="space-y-2.5">
                {[
                  "Вывели 2 девушек в колл-центр",
                  "Обучили продажам первичной консультации",
                  "Запись только с предоплатой или полной оплатой",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                    <span className="text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RESULT DASHBOARD CARD */}
          <div
            className="reveal relative mt-5 overflow-hidden rounded-3xl p-6 text-white sm:p-8"
            style={{
              background:
                "linear-gradient(160deg, var(--primary) 0%, color-mix(in oklab, var(--primary) 80%, black) 100%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--emerald)" }}
            />

            <div className="relative mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                <TrendingUp className="h-3.5 w-3.5 text-[var(--emerald)]" />
                Результат за 2 недели
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { Icon: Megaphone, v: "830 000 ₸", l: "Расходы на рекламу" },
                { Icon: Inbox, v: "415", l: "Заявок с рекламы" },
                { Icon: Stethoscope, v: "83", l: "Платных диагностик" },
                { Icon: UserPlus, v: "29", l: "Новых пациентов" },
              ].map(({ Icon, v, l }) => (
                <div
                  key={l}
                  className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur"
                >
                  <Icon className="mb-2 h-5 w-5 text-[var(--emerald)]" strokeWidth={2.2} />
                  <div className="font-display text-xl leading-none text-white sm:text-2xl">
                    {v}
                  </div>
                  <div className="mt-2 text-[11px] leading-snug text-white/80 sm:text-xs">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-4 flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center backdrop-blur">
              <Receipt className="h-4 w-4 text-[var(--emerald)]" />
              <span className="text-sm text-white/90">
                Средний чек:{" "}
                <strong className="font-display text-white">350 000 ₸</strong>
              </span>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/15 bg-white/10 px-5 py-7 text-center backdrop-blur">
              <Wallet className="mx-auto mb-3 h-6 w-6 text-[var(--emerald)]" />
              <div className="font-display text-4xl leading-none text-[var(--emerald)] sm:text-6xl">
                +13 000 000 ₸
              </div>
              <div className="mt-3 text-sm text-white/80 sm:text-base">
                выручки в кассу
              </div>
            </div>

            <p className="relative mt-5 text-center text-sm text-white/80 sm:text-base">
              Тот же бюджет на рекламу — в 3 раза больше реально пришедших пациентов.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <Chapter label="ДО И ПОСЛЕ" align="center" />
          <SectionTitle align="center" eyebrow="Что меняется">
            <br />
          </SectionTitle>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* BEFORE */}
            <div className="reveal card-lift relative overflow-hidden rounded-3xl border border-rose-100 bg-rose-50/60 p-6 sm:p-8">
              <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-rose-200/40 blur-2xl" />
              <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-rose-600">
                <AlertTriangle className="h-4 w-4" /> До
              </div>
              <ul className="space-y-3.5">
                {[
                  "Без скидок пациенты не идут",
                  "80% — дешёвые услуги и ОСМС",
                  "Всё держится на сарафане",
                  "Простой кабинетов 4–6 часов",
                  "Запись только на 2 дня вперёд",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                    <span className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AFTER */}
            <div className="reveal card-lift relative overflow-hidden rounded-3xl border border-[var(--primary-soft)] bg-[var(--primary-soft)]/40 p-6 sm:p-8">
              <div aria-hidden className="halo halo-emerald" />
              <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                <Sparkles className="h-4 w-4" /> После
              </div>
              <p className="relative mb-5 text-lg font-semibold leading-snug text-[var(--foreground)]">
                Стабильные{" "}
                <span className="font-display text-2xl text-[var(--emerald)]">30 млн ₸</span> и
                очередь на дорогостоящие услуги.
              </p>
              <ul className="space-y-3.5">
                {[
                  "+13 млн ₸ в месяц",
                  "Запись на 2 недели вперёд",
                  "Без акций и скидок",
                  "5+ дорогих пациентов в день",
                  "Загрузка кабинетов 85%",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
                    <span className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERT ===== */}
      <section id="how" className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[var(--primary-soft)] opacity-40 blur-3xl" />
        <div className="mx-auto max-w-3xl px-5">
          <Chapter label="ЭКСПЕРТ" />

          {/* Expert intro: photo + name + lead paragraph */}
          <article className="reveal card-lift relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--secondary)] p-6 sm:p-8">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--primary-soft)] opacity-60 blur-3xl" />
            <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-start sm:gap-7">
              <img
                src={expertImg}
                alt="Юрий Запойнов, основатель MarkVision AI"
                loading="lazy"
                className="w-full shrink-0 rounded-2xl object-cover shadow-lg shadow-slate-900/10 ring-1 ring-[var(--border)] sm:w-56"
              />
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-[var(--primary)] ring-1 ring-[var(--primary)]/15">
                  <Star className="h-3 w-3 fill-[var(--primary)]" /> Основатель MarkVision AI
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[var(--foreground)] sm:text-3xl">
                  Меня зовут Юрий
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                  Помогаю клиникам находить неочевидные точки потерь — от рекламы и заявок до первичных консультаций и повторных продаж.
                </p>
              </div>
            </div>
          </article>

          {/* Stats */}
          <div className="reveal mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                Icon: Star,
                value: "5 лет",
                title: "в медицинском маркетинге",
                sub: "знаю, где чаще всего теряются заявки",
              },
              {
                Icon: Users,
                value: "десятки",
                title: "разобранных клиник",
                sub: "стоматологии, косметологии, многопрофильные центры",
              },
              {
                Icon: TrendingUp,
                value: "до 10×",
                title: "рост окупаемости",
                sub: "когда исправлена вся система, а не только реклама",
              },
            ].map(({ Icon, value, title, sub }) => (
              <article
                key={value}
                className="card-lift relative flex flex-col rounded-2xl border border-[var(--border)] bg-white p-5"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="font-display text-3xl font-extrabold leading-none text-[var(--foreground)]">
                  {value}
                </div>
                <div className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                  {title}
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                  {sub}
                </p>
              </article>
            ))}
          </div>

          {/* Philosophy */}
          <div className="reveal mt-6 rounded-3xl border border-[var(--border)] bg-white p-6 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              <Sparkles className="h-3.5 w-3.5" /> Подход
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              <p>
                Я не смотрю на рекламу отдельно от продаж. В клинике всё связано: заявка → звонок → запись → визит → план лечения → повторный приём.
              </p>
              <p>
                Поэтому на диагностике мы ищем не «красивую гипотезу», а конкретные места, где сейчас утекают пациенты и деньги.
              </p>
              <p className="rounded-2xl border border-[var(--primary)]/15 bg-[var(--primary-soft)]/60 p-4 font-semibold text-[var(--foreground)]">
                С этой системой вы перестанете терять деньги — каждая инвестиция в маркетинг начнёт работать на результат.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== METHOD INTRO ===== */}
      <section className="relative overflow-hidden bg-[var(--secondary)] py-20 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-dot opacity-40" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <div className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
            <Sparkles className="h-3.5 w-3.5" /> МЕТОД MARKVISION AI
          </div>
          <h2 className="reveal font-display text-3xl leading-[1.15] text-[var(--foreground)] sm:text-4xl md:text-[44px]">
            3 шага, которые превращают клинику <br />
            в систему роста
          </h2>
          <p className="reveal mx-auto mt-5 max-w-2xl text-base leading-[1.65] text-[var(--muted-foreground)] sm:text-lg">
            Не «волшебная реклама» — связка из адресного предложения, системы привлечения и удержания. <br />
            Работает на 20+ клиниках по РК.
          </p>

          <div className="reveal mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            <span className="h-px w-8 bg-[var(--border)]" />
            ДЕТАЛИ ПО КАЖДОМУ ШАГУ
            <span className="h-px w-8 bg-[var(--border)]" />
          </div>
        </div>
      </section>

      {/* ===== STEPS ===== */}
      <Step
        number={1}
        title="Адресное предложение"
        paragraphs={[
          "Все клиники привлекают одинаково — скидками и демпингом. Чтобы выделяться, нужно адресное предложение под одну конкретную боль.",
        ]}
        example={`Представьте - у вас стали болеть суставы. Тяжело встаёте по утрам, к вечеру колени распухают.\n\nКуда пойдёте - в первую попавшуюся клинику, «где есть ревматолог»? Или туда, где специализируются на восстановлении подвижности суставов: сразу делают комплексную диагностику с УЗИ, МРТ и анализами, а врач показывает план лечения на 3 месяца с прогнозом?\n\nОчевидно - во второй.`}
        listTitle="Что даёт адресное предложение"
        list={[
          "Выделяетесь среди конкурентов",
          "Пациент видит решение своей боли",
          "Поток на дорогие услуги",
          "Не конкурируете по цене",
        ]}
      />

      <Step
        number={2}
        title="Система привлечения пациентов (СПП)"
        paragraphs={[
          "Не тратьте бюджет на охотников за скидками. Фокус — на 20% пациентов, готовых платить за результат.",
        ]}
        bulletList={[
          "Долго терпели и решились",
          "Не помогли в госклинике",
          "Получили отказ или непонятный диагноз",
          "Платят за результат, не за дешёвый приём",
        ]}
        listTitle="Что делает СПП"
        list={[
          "Ведёт горячих пациентов с конкретной болью",
          "Реклама только на целевую аудиторию",
          "Окупается после первой диагностики",
        ]}
        result="Стабильные 15–30 млн ₸/мес и очередь на дорогие услуги."
        alt
      />

      <Step
        number={3}
        title="Механизм удержания пациентов"
        paragraphs={[
          "Записываются — но не доходят. Задача: не принять звонок, а продать диагностику.",
        ]}
        listTitle="Для этого нужно"
        list={[
          "Перезвон за 5 минут",
          "Отдел продаж, продающий пакет диагностики",
          "Скрипты на «дорого» и «подумаю»",
          "Автонапоминания за день и за час",
          "План лечения на первом приёме",
        ]}
      />

      {/* ===== CALL TO BREAKDOWN ===== */}
      <section className="relative overflow-hidden bg-[var(--secondary)] py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[var(--primary-soft)] opacity-50 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5">
          <Chapter label="ЗАЧЕМ РАЗБОР" />
          <SectionTitle eyebrow="Часовая сессия со мной">
            Часовой разбор — и у вас план на <br />
            <span className="text-[var(--primary)]">+100 млн ₸ в год</span>
          </SectionTitle>
          <p className="reveal mt-6 text-base leading-[1.65] text-[var(--muted-foreground)] sm:text-lg">
            Без воды, без шаблонов — конкретные шаги под вашу клинику.
          </p>

          <div className="reveal mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                Icon: Stethoscope,
                title: "Аудит клиники",
                desc: "Смотрим, где утекают пациенты — реклама, скрипты, администраторы, приём.",
              },
              {
                Icon: Sparkles,
                title: "Адресное предложение",
                desc: "Собираем оффер под вашу нишу, который не зависит от скидок.",
              },
              {
                Icon: TrendingUp,
                title: "План на 30 дней",
                desc: "Конкретные действия с приоритетами — что внедрить в первую очередь.",
              },
            ].map(({ Icon, title, desc }) => (
              <article
                key={title}
                className="card-lift rounded-2xl border border-[var(--border)] bg-white p-5"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-bold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUTCOME ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Chapter label="РЕЗУЛЬТАТ СЕССИИ" />
          <SectionTitle eyebrow="Результат сессии">
            Что вы получите на консультации
          </SectionTitle>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Адресное предложение под вашу нишу",
              "5+ дорогих пациентов в день",
              "Снятие возражений ещё до контакта",
              "85% загрузки кабинетов",
              "30 млн ₸/мес без скидок",
              "20% пациентов = 80% выручки",
            ].map((t) => (
              <li
                key={t}
                className="reveal flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
                <span className="text-[15px] leading-relaxed text-[var(--foreground)] sm:text-base">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="cta" className="bg-[var(--secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5">
          <Chapter label="СТОИМОСТЬ" align="center" />
          <SectionTitle align="center" eyebrow="Стоимость">
            Сколько это стоит?
          </SectionTitle>
          <div className="reveal mt-8 space-y-2.5">
            <PriceRow label="Реальная ценность" value="500 000 ₸" strike />
            <PriceRow label="Обычная цена консультации" value="50 000 ₸" strike />
          </div>

          <div className="reveal relative overflow-hidden mt-4 rounded-3xl border-2 border-[var(--primary)] bg-white p-8 text-center shadow-lg shadow-teal-900/5">
            <div aria-hidden className="ribbon">−75%</div>
            <div aria-hidden className="halo halo-emerald" />
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
              <Users className="h-3.5 w-3.5" /> Цена для первых 10 владельцев
            </div>
            <div className="relative mt-3 font-display text-5xl text-[var(--emerald)] sm:text-7xl">
              4 990 ₸
            </div>
            <div className="relative mt-2 text-sm text-[var(--muted-foreground)]">
              было <span className="strike-rose font-semibold text-[var(--foreground)]">19 900 ₸</span>
            </div>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">
              Осталось <strong className="text-[var(--foreground)]">7 из 10</strong> мест на этот месяц
            </p>
            <div className="relative mt-6 flex justify-center">
              <WaButton variant="primary">Записаться за 4 990 ₸</WaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BONUSES ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <Chapter label="БОНУСЫ" />
          <SectionTitle eyebrow="Бонусы">
            Первым 10 владельцам - 3 бонуса на 110 000 ₸
          </SectionTitle>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                n: 1,
                t: "Скрипт дожима первичных пациентов",
                price: "50 000 ₸",
                d: "Готовые речёвки на «подумаю» и «дорого».",
              },
              {
                n: 2,
                t: "Чек-лист отдела продаж медцентра",
                price: "30 000 ₸",
                d: "Пошаговая карта построения отдела продаж.",
              },
              {
                n: 3,
                t: "Система оплаты и мотивации администраторов",
                price: "30 000 ₸",
                d: "KPI и оплата, чтобы каждый звонок шёл в работу.",
              },
            ].map((b) => (
              <article
                key={b.n}
                className="reveal card-lift relative flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--secondary)] p-6"
              >
                <div aria-hidden className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-lg shadow-teal-900/20 float-c">
                  <Gift className="h-5 w-5" />
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                    БОНУС №{b.n}
                  </span>
                  <span className="text-xs">
                    <span className="text-[var(--muted-foreground)] line-through">
                      {b.price}
                    </span>{" "}
                    <span className="font-semibold text-[var(--emerald)]">
                      бесплатно
                    </span>
                  </span>
                </div>
                <h3 className="font-display text-lg text-[var(--foreground)]">
                  {b.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {b.d}
                </p>
              </article>
            ))}
          </div>
          <div className="reveal mt-6 rounded-2xl bg-[var(--primary-soft)] px-5 py-4 text-center">
            <span className="font-display text-xl text-[var(--primary)] sm:text-2xl">
              Итого: 110 000 ₸ - бесплатно
            </span>
          </div>
        </div>
      </section>

      {/* ===== HONEST TALK ===== */}
      <section className="bg-[var(--secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Chapter label="ЧЕСТНЫЙ РАЗГОВОР" />
          <SectionTitle>А теперь честно</SectionTitle>
          <ul className="mt-8 space-y-3">
            {[
              "Сколько денег вы потратили на рекламу, которая не привела пациентов?",
              "Сколько месяцев работаете без стабильного потока?",
              "Сколько пациентов выбрали другой центр - потому что там дешевле?",
              "Сколько раз давали скидки, чтобы заполнить кабинеты, теряя прибыль?",
            ].map((q) => (
              <li
                key={q}
                className="reveal rounded-2xl border border-[var(--border)] border-l-4 border-l-[var(--primary)] bg-white p-5"
              >
                <span className="text-[15px] leading-relaxed text-[var(--foreground)] sm:text-base">
                  {q}
                </span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-8 rounded-3xl bg-slate-900 p-8 text-center text-white">
            <p className="font-display text-2xl leading-tight sm:text-3xl">
              5 млн ₸? 10 млн ₸? 20 млн ₸?
            </p>
            <p className="mt-3 text-base text-white/70">
              Сейчас вы можете получить весь алгоритм всего за
            </p>
            <p className="mt-2 font-display text-5xl text-[var(--emerald)] sm:text-6xl">
              4 990 ₸
            </p>
            <div className="mt-6 flex justify-center">
              <WaButton>Написать в WhatsApp</WaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUARANTEE ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Chapter label="ГАРАНТИЯ" align="center" />
          <div className="text-center">
          <div
            className="reveal relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--primary-soft)]"
            style={{
              boxShadow: "0 0 0 12px color-mix(in oklab, var(--primary) 8%, transparent)",
            }}
          >
            <span aria-hidden className="absolute inset-0 -m-4 rounded-full" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)", filter: "blur(12px)", animation: "halo-pulse 5s ease-in-out infinite" }} />
            <ShieldCheck className="h-12 w-12 text-[var(--primary)]" />
          </div>
          <SectionTitle align="center" eyebrow="Гарантия">
            Вы ничем не рискуете
          </SectionTitle>
          <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            Не понравится — напишите{" "}
            <span className="font-semibold text-[var(--foreground)]">«Юрий, хочу возврат»</span>.
            Верну 4 990 ₸ и{" "}
            <span className="font-semibold text-[var(--emerald)]">ещё 4 990 ₸ за время</span>.
          </p>
          <p className="reveal mt-4 font-semibold text-[var(--foreground)]">
            Всю ответственность беру на себя.
          </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-[var(--secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Chapter label="ВОПРОСЫ И ОТВЕТЫ" />
          <SectionTitle eyebrow="FAQ">Частые вопросы</SectionTitle>
          <div className="mt-8 space-y-3">
            {[
              {
                q: "Почему так дёшево, если это так ценно?",
                a: "4 990 ₸ — плата за то, что вы дойдёте до встречи. На разборе ничего не продаю: даю план, дальше внедряете сами или со мной.",
              },
              {
                q: "Почему только 10 человек? Это дожим или уловка?",
                a: "10 разборов = 10 часов в месяц. Больше физически не успеваю.",
              },
              {
                q: "Откуда вы взяли эту систему?",
                a: "Собрана на 20+ клиниках по Казахстану. Внедряется за 30 дней.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="reveal card-lift group rounded-2xl border border-[var(--border)] bg-white p-5 open:border-[var(--primary)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-[var(--foreground)] sm:text-base">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--primary)] transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-5 text-center">
          <h2 className="reveal font-display text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Готовы начать?
          </h2>
          <p className="reveal mt-3 max-w-md text-base text-[var(--muted-foreground)] sm:text-lg">
            Часовой разбор за 4 990 ₸ с гарантией возврата. Кодовое слово -
            «Разбор».
          </p>
          <div className="reveal mt-7 w-full flex justify-center">
            <WaButton>Написать в WhatsApp</WaButton>
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[var(--primary)]" />
              Ответ за 2 минуты
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--primary)]" />
              Без обязательств
            </span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-900 py-12 text-slate-400">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="font-display text-xl text-white">
                MarkVision AI
              </div>
              <p className="mt-1 max-w-sm text-sm text-slate-400">Система роста для медицинских центров <br /> в Казахстане.</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                <img src={astanaHubImg} alt="Astana Hub" width={80} height={20} className="h-5 w-auto invert" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">Участник ​</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:text-right">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#25D366]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: +7 747 284 25 95
              </a>
              <span className="text-xs text-slate-500">© 2026 MarkVision AI</span>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="grid gap-2 text-xs leading-relaxed text-slate-500 sm:grid-cols-2">
              <div>
                <div className="mb-1 font-semibold uppercase tracking-wider text-slate-400">Реквизиты</div>
                <div>ТОО «MarkVision AI»</div>
                <div>БИН: 260240010690</div>
                <div>Директор: Запойнов Ю.В.</div>
              </div>
              <div className="sm:text-right">
                <div className="mb-1 font-semibold uppercase tracking-wider text-slate-400">Адрес</div>
                <div>Республика Казахстан, г. Астана</div>
                <div>пр. Мангилик Ел, 55/15, Astana Hub</div>
                <div>info@markvision.ai</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

/* ============ subcomponents ============ */

function FamiliarSituation() {
  const items = [
    {
      title: "Нет стабильного потока первички",
      desc: "Заявки то есть, то нет. План по выручке держится на удаче, а не на системе.",
    },
    {
      title: "Таргетологи жгут бюджет",
      desc: "Меняете подрядчиков по кругу, платите каждый месяц — а понятных заявок и записей всё так же мало.",
    },
    {
      title: "Держитесь на скидках и акциях",
      desc: "Бесплатные консультации, демпинг, «приведи друга». Пациенты идут на низкий чек и больше не возвращаются.",
    },
    {
      title: "Администраторы не дожимают",
      desc: "Из 10 обращений на приём доходят 2–3. Записать на дорогую услугу — вообще отдельная боль.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-dot opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5">
        <Chapter label="ЗНАКОМАЯ СИТУАЦИЯ" />
        <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
          <AlertTriangle className="h-3.5 w-3.5" /> Если узнаёте себя — читайте дальше
        </div>
        <h2 className="reveal font-display text-3xl font-bold leading-[1.15] tracking-tight text-[var(--foreground)] sm:text-4xl md:text-[44px]">
          Узнаёте себя?
        </h2>
        <p className="reveal mt-4 text-base leading-[1.65] text-[var(--muted-foreground)] sm:text-lg">
          Прежде чем показать решение — давайте честно. Вот 4 ситуации, в которых оказывается почти каждый владелец медцентра.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <article
              key={i}
              className="reveal card-lift relative rounded-2xl border border-[var(--border)] bg-[var(--secondary)] p-5"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold leading-snug text-[var(--foreground)] sm:text-base">
                    {it.title}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
                    {it.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-8 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary-soft)] p-5 text-center sm:p-6">
          <p className="text-[15px] font-semibold text-[var(--primary)] sm:text-base">
            Если вам это знакомо — читайте дальше. Я расскажу, как исправить <br />
            эту ситуацию за 3 шага.
          </p>
        </div>
      </div>
    </section>
  );
}

function PriceRow({
  label,
  value,
  strike,
}: {
  label: string;
  value: string;
  strike?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white px-5 py-3.5">
      <span className="text-sm text-[var(--muted-foreground)] sm:text-base">
        {label}
      </span>
      <span
        className={`font-display text-lg sm:text-xl ${
          strike
            ? "text-[var(--muted-foreground)] line-through"
            : "text-[var(--foreground)]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Step({
  number,
  title,
  paragraphs,
  example,
  bulletList,
  afterBullets,
  listTitle,
  list,
  result,
  outro,
  alt,
}: {
  number: number;
  title: string;
  paragraphs: string[];
  example?: string;
  bulletList?: string[];
  afterBullets?: string;
  listTitle?: string;
  list?: string[];
  result?: string;
  outro?: string;
  alt?: boolean;
}) {
  return (
    <section className={`${alt ? "bg-[var(--secondary)]" : "bg-white"} py-16 sm:py-24`}>
      <div className="mx-auto max-w-3xl px-5">
        <div className="reveal mb-4 flex items-center gap-3">
          <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] font-display text-xl text-white">
            <span aria-hidden className="absolute inset-0 -m-2 rounded-full" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)", filter: "blur(10px)", animation: "halo-pulse 5s ease-in-out infinite" }} />
            <span className="relative">{number}</span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            ШАГ {number} ИЗ 3
          </span>
        </div>
        <h2 className="reveal font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
          {paragraphs.map((p, i) => (
            <p key={i} className="reveal">
              {p}
            </p>
          ))}
        </div>

        {bulletList && (
          <ul className="reveal mt-5 space-y-2.5 text-base text-[var(--foreground)] sm:text-lg">
            {bulletList.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {afterBullets && (
          <p className="reveal mt-5 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            {afterBullets}
          </p>
        )}

        {example && (
          <div className="reveal mt-8 rounded-2xl border border-[var(--border)] border-l-4 border-l-[var(--primary)] bg-white p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              <Sparkles className="h-4 w-4" /> ПРИМЕР
            </div>
            {example.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="mt-3 text-[15px] leading-relaxed text-[var(--foreground)] first:mt-0 sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {list && (
          <div className="reveal mt-8">
            {listTitle && (
              <h3 className="mb-4 font-display text-xl text-[var(--foreground)]">
                {listTitle}
              </h3>
            )}
            <ul className="space-y-2.5">
              {list.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
                  <span className="text-[15px] leading-relaxed text-[var(--foreground)] sm:text-base">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {result && (
          <div className="reveal mt-8 rounded-2xl bg-[var(--primary-soft)] p-6">
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              РЕЗУЛЬТАТ
            </div>
            <p className="text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
              {result}
            </p>
          </div>
        )}

        {outro && (
          <p className="reveal mt-8 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            {outro}
          </p>
        )}
      </div>
    </section>
  );
}
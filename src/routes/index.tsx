import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import heroImg from "../assets/hero.jpg";
import ownerImg from "../assets/clinic-owner.jpg";
import expertImg from "../assets/expert.jpg";
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
  n,
  label,
  align = "left",
}: {
  n: string;
  label: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-8 flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="font-display text-sm font-bold tracking-[0.2em] text-[var(--primary)]">
        {n}
      </span>
      <span className="h-px w-10 bg-[var(--primary)]/30" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
        {label}
      </span>
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

function TrustBar() {
  const items = [
    { icon: Stethoscope, label: "20+ клиник в РК" },
    { icon: TrendingUp, label: "85% доходимости" },
    { icon: ShieldCheck, label: "Возврат 100%" },
    { icon: Clock, label: "Разбор 60 минут" },
  ];
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-white px-3 py-2.5"
        >
          <Icon className="h-4 w-4 shrink-0 text-[var(--primary)]" />
          <span className="text-xs font-medium text-[var(--muted-foreground)] sm:text-sm">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ============ page ============ */

function Landing() {
  useReveal();

  return (
    <main className="min-h-screen bg-white text-[var(--foreground)] antialiased">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--secondary)] to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 pt-12 pb-14 sm:pt-20 sm:pb-20">
          <div className="reveal">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
              <HeartPulse className="h-3.5 w-3.5 text-[var(--primary)]" />
              Для владельцев медицинских центров
            </div>
            <h1 className="font-display text-[34px] leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-[56px]">
              Как медцентру вырасти на{" "}
              <span className="text-[var(--emerald)]">+30 млн ₸</span> за 30 дней
              - с системой{" "}
              <span className="text-[var(--primary)]">MarkVision&nbsp;AI</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              Без разорительных акций и скидок. 85% доходимости пациентов до
              приёма. Каждый второй остаётся на курсовое лечение.
            </p>
          </div>

          <ul className="reveal mt-7 space-y-3.5">
            <Bullet>Без разорительных акций и скидок</Bullet>
            <Bullet>85% доходимости пациентов до приёма</Bullet>
            <Bullet>Каждый второй пациент - на курсовое лечение</Bullet>
          </ul>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <WaButton variant="primary">Записаться на разбор</WaButton>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-4 text-base font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Как это работает
            </a>
          </div>

          <TrustBar />

          <a
            href="https://astanahub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-5 inline-flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-4 py-2.5 transition hover:border-[var(--primary)]"
            aria-label="Резидент Astana Hub"
          >
            <img
              src={astanaHubImg}
              alt="Astana Hub"
              width={120}
              height={32}
              className="h-7 w-auto"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Официальный участник
              </span>
              <span className="text-sm font-semibold text-[var(--foreground)]">​</span>
            </span>
          </a>

          <div className="reveal relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-[var(--border)] shadow-xl shadow-slate-900/5">
            <img
              src={heroImg}
              alt="Современный медицинский центр"
              width={1280}
              height={896}
              className="h-auto w-full"
            />
            {/* Floating decor over hero image */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-3 top-3 float-a sm:left-5 sm:top-5">
                <div className="chip-3d">
                  <TrendingUp className="h-3.5 w-3.5 text-[var(--emerald)]" />
                  +30 млн ₸ / 30 дней
                </div>
              </div>
              <div className="absolute right-3 top-10 float-b sm:right-5">
                <div className="chip-3d">
                  <span className="dot" />
                  85% доходимость
                </div>
              </div>
              <div className="absolute bottom-3 left-3 float-c sm:bottom-5 sm:left-5">
                <div className="chip-3d">
                  <CalendarCheck className="h-3.5 w-3.5 text-[var(--primary)]" />
                  Новая запись · Имплантация
                </div>
              </div>
            </div>
          </div>

          <div className="reveal mt-10 rounded-2xl border border-[var(--border)] bg-white p-6">
            <p className="font-display text-lg leading-snug text-[var(--foreground)] sm:text-xl">Получая поток пациентов на дорогостоящие услуги:</p>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] sm:text-base">
              платные диагностики, реабилитационные курсы, комплексные
              обследования.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CASE: BAKYT ===== */}
      <section className="relative overflow-hidden bg-[var(--secondary)] py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-dot opacity-50" />
        <div className="mx-auto max-w-3xl px-5">
          <Chapter n="01" label="Кейс клиники" />
          <article className="reveal card-lift relative flex flex-col items-start gap-5 rounded-3xl border border-[var(--border)] bg-white p-6 sm:flex-row sm:items-center sm:gap-7 sm:p-8">
            <img
              src={ownerImg}
              alt="Бакыт, владелец медцентра"
              width={400}
              height={400}
              loading="lazy"
              className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-[var(--primary-soft)] sm:h-28 sm:w-28"
            />
            <div>
              <div className="mb-1 inline-flex items-center gap-1 rounded-full bg-[var(--primary-soft)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--primary)]">
                Клиника-партнёр MarkVision AI
              </div>
              <p className="text-base text-[var(--muted-foreground)] sm:text-lg">
                Знакомьтесь, <strong className="text-[var(--foreground)]">Бакыт</strong> -
                владелец многопрофильного медцентра.
              </p>
              <p className="mt-2 text-base text-[var(--muted-foreground)] sm:text-lg">
                Его клиника вышла на стабильные{" "}
                <span className="font-bold text-[var(--emerald)]">13 млн ₸</span>{" "}
                после двух лет застоя.
              </p>
            </div>
            {/* Mini-ops overlay */}
            <div className="hidden sm:block absolute -right-4 -top-6 w-56 rotate-[3deg] rounded-2xl border border-[var(--border)] bg-white p-3 shadow-xl shadow-slate-900/10 float-b">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Записи · сегодня</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" />
              </div>
              {[
                ["09:00", "Консультация"],
                ["11:30", "Имплантация"],
                ["14:00", "Контроль"],
              ].map(([t, l]) => (
                <div key={t} className="flex items-center justify-between border-t border-[var(--border)] py-1.5 text-[11px]">
                  <span className="font-semibold text-[var(--foreground)]">{t}</span>
                  <span className="text-[var(--muted-foreground)]">{l}</span>
                  <CheckCircle2 className="h-3 w-3 text-[var(--emerald)]" />
                </div>
              ))}
            </div>
            <div className="hidden sm:block absolute -bottom-5 left-6 float-c">
              <div className="chip-3d">
                <span className="dot" />
                +13 млн ₸ / мес
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ===== ALMATY CASE: REAL CLINIC RESULTS ===== */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <Chapter n="02" label="Реальные результаты" />
          <SectionTitle eyebrow="Кейс клиники">
            Результаты из реальных клиник
          </SectionTitle>
          <p className="reveal mt-4 text-base text-[var(--muted-foreground)] sm:text-lg">
            Разные города, разные ниши - одна система.
          </p>

          <div className="reveal mt-8 rounded-3xl border border-[var(--border)] bg-white p-6 sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
              <Stethoscope className="h-3.5 w-3.5" />
              Клиника из Алматы
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* БЫЛО */}
              <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-rose-600">
                  <AlertTriangle className="h-4 w-4" /> Было
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                  Один администратор не справлялся со звонками. Записывал
                  всех подряд - приходило только{" "}
                  <strong className="text-rose-700">30%</strong> от записанных.
                </p>
              </div>

              {/* ЧТО СДЕЛАЛИ */}
              <div className="rounded-2xl border border-[var(--primary-soft)] bg-[var(--primary-soft)]/40 p-5">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                  <Sparkles className="h-4 w-4" /> Что мы сделали
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Вывели 2 сотрудниц в отдельный колл-центр",
                    "Обучили скриптам продажи первичной консультации",
                    "Поставили задачу: записать с предоплатой или полной оплатой",
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
                { Icon: Inbox, v: "415", l: "Обращений" },
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
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <Chapter n="03" label="До и после" align="center" />
          <SectionTitle align="center" eyebrow="Что меняется">
            До MarkVision AI&nbsp;- и после
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
                  "Без акций и скидок пациенты не идут",
                  "80% пациентов - на самые дешёвые услуги или ОСМС",
                  "Большая зависимость от сарафанного радио",
                  "Кабинеты простаивают по 4–6 часов в день",
                  "Записи нет дальше двух дней вперёд",
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
                  "Закрывает +13 млн ₸ в месяц",
                  "Запись пациентов на 2 недели вперёд",
                  "Забыли про разорительные акции и скидки",
                  "От 5 пациентов в день на дорогостоящие услуги",
                  "Кабинеты загружены на 85% весь день",
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

      {/* ===== TRIGGER ===== */}
      <section className="bg-[var(--secondary)] py-14">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <p className="reveal text-xl leading-relaxed text-[var(--foreground)] sm:text-2xl">
            Если знакомо - читайте дальше. Расскажу, как за{" "}
            <span className="rounded-md bg-[var(--primary-soft)] px-2 py-0.5 font-semibold text-[var(--primary)]">
              3 шага
            </span>{" "}
            исправить ситуацию.
          </p>
        </div>
      </section>

      {/* ===== EXPERT ===== */}
      <section id="how" className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[var(--primary-soft)] opacity-40 blur-3xl" />
        <div className="mx-auto max-w-3xl px-5">
          <Chapter n="03" label="Эксперт" />
          <article className="reveal card-lift relative flex flex-col items-start gap-5 rounded-3xl border border-[var(--border)] bg-[var(--secondary)] p-6 sm:flex-row sm:items-center sm:gap-7 sm:p-8">
            <img
              src={expertImg}
              alt="Юрий Запойнов, основатель MarkVision AI"
              width={400}
              height={400}
              loading="lazy"
              className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-white sm:h-32 sm:w-32"
              style={{ boxShadow: "0 0 0 4px var(--primary-soft)" }}
            />
            <div>
              <div className="mb-1 inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)]">
                <Star className="h-3.5 w-3.5 fill-[var(--primary)]" /> Основатель MarkVision AI
              </div>
              <p className="text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
                Меня зовут <strong className="text-[var(--foreground)]">Юрий</strong>.
                За последние 2 года я разобрал десятки медицинских клиник в
                Казахстане - от семейных центров до сетей в Алматы, Астане и
                Шымкенте.
              </p>
            </div>
            <div className="hidden sm:block absolute -right-3 -top-4 float-a">
              <div className="chip-3d">
                <Stethoscope className="h-3.5 w-3.5 text-[var(--primary)]" />
                20+ клиник в РК
              </div>
            </div>
          </article>

          <div className="reveal mt-12">
            <SectionTitle eyebrow="Главное наблюдение">
              И почти везде одни и те же проблемы, которые{" "}
              <span className="text-[var(--primary)]">мешают пробить потолок</span>{" "}
              в 10–15 млн ₸
            </SectionTitle>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Зависимость от сарафанного радио",
                d: "Сегодня пациенты есть - завтра пустые кабинеты.",
              },
              {
                t: "Высокая конкуренция и демпинг",
                d: "Пациент звонит в 5 центров и идёт туда, где дешевле.",
              },
              {
                t: "Привлечение только через акции",
                d: "Разорительные скидки съедают прибыль.",
              },
              {
                t: "70–80% - на дешёвые услуги",
                d: "Анализы, разовые приёмы, ОСМС. Большой чек - мимо.",
              },
            ].map((p, i) => (
              <article
                key={i}
                className="reveal card-lift relative rounded-2xl border border-[var(--border)] bg-white p-5"
              >
                <span aria-hidden className="absolute right-4 top-4 h-2 w-2 rounded-full bg-rose-400" />
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-bold text-[var(--primary)]">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg text-[var(--foreground)]">
                  {p.t}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {p.d}
                </p>
              </article>
            ))}
          </div>

          <p className="reveal mt-8 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            Чтобы медцентр стабильно приносил прибыль, нужно понимать: какие{" "}
            <span className="font-semibold text-[var(--primary)]">20% пациентов</span>{" "}
            приносят{" "}
            <span className="font-semibold text-[var(--primary)]">80% выручки</span>{" "}
            - и привлекать именно их без скидок, демпинга и зависимости от
            сарафана.
          </p>
        </div>
      </section>

      {/* ===== STEPS ===== */}
      <Step
        number={1}
        title="Адресное предложение"
        paragraphs={[
          "Рынок медцентров в Казахстане перенасыщен. В небольшом городе - больше 100 клиник, в Алматы и Астане - сотни.",
          "Почти все привлекают одинаково: акции «терапевт за 3 000 ₸», скидки, демпинг. Пациент не видит разницы и выбирает по цене.",
          "Чтобы выделяться - нужно адресное предложение, которое решает одну конкретную проблему у одной конкретной аудитории.",
        ]}
        example={`Представьте - у вас стали болеть суставы. Тяжело встаёте по утрам, к вечеру колени распухают.\n\nКуда пойдёте - в первую попавшуюся клинику, «где есть ревматолог»? Или туда, где специализируются на восстановлении подвижности суставов: сразу делают комплексную диагностику с УЗИ, МРТ и анализами, а врач показывает план лечения на 3 месяца с прогнозом?\n\nОчевидно - во второй.`}
        listTitle="Что даёт адресное предложение"
        list={[
          "Вы выделяетесь среди конкурентов",
          "Пациент сразу видит, что вы решаете его проблему",
          "Бесперебойный поток на дорогостоящие услуги",
          "Перестаёте конкурировать по цене",
        ]}
      />

      <Step
        number={2}
        title="Система привлечения пациентов (СПП)"
        paragraphs={[
          "Не тратьте рекламный бюджет на тех, кто никогда ничего не купит без скидки 50%. Сфокусируйтесь на 20% пациентов, которые сами готовы платить за качественное лечение.",
        ]}
        bulletList={[
          "Уже год терпят боль и наконец решились",
          "Не нашли решения в государственной клинике",
          "Получили отказ или непонятный диагноз",
          "Готовы платить за результат, а не за дешёвый приём",
        ]}
        afterBullets="Для них нужен другой подход - система привлечения пациентов (СПП)."
        listTitle="Что делает СПП"
        list={[
          "Привлекает горячих пациентов с конкретной болью",
          "Показывает рекламу только целевой аудитории",
          "Окупает затраты уже после первой платной диагностики",
        ]}
        result="Вы выходите на стабильные 15–30 млн ₸ выручки в месяц и выстраиваете очередь на дорогостоящие услуги."
        alt
      />

      <Step
        number={3}
        title="Механизм удержания пациентов"
        paragraphs={[
          "Пациенты записываются - но не доходят. Кабинеты простаивают, вы платите за каждую такую запись.",
          "Ваша задача - не просто принять звонок, а записать пациента на лечение и показать, почему лечиться нужно именно у вас.",
        ]}
        listTitle="Для этого нужно"
        list={[
          "Администратор, который перезванивает за 5 минут",
          "Отдел продаж, который продаёт пакет диагностики",
          "Скрипты под возражения «дорого» и «подумаю»",
          "Автонапоминания за день и за час до приёма",
          "Понятный план лечения уже на первом приёме",
        ]}
        outro="Не каждый администратор умеет снимать возражения с первого звонка. Чтобы расти на 20% каждый месяц, нужно супер-предложение, которое закрывает возражения ещё до того, как пациент позвонил."
      />

      {/* ===== CALL TO BREAKDOWN ===== */}
      <section className="bg-[var(--secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Chapter n="07" label="Зачем разбор" />
          <h2 className="reveal font-display text-2xl leading-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
            На первый взгляд всё просто. Но у меня ушло{" "}
            <span className="text-[var(--primary)]">3 года</span>, чтобы
            собрать это в систему.
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            Все ответы найдены, все шаги отработаны на десятках медцентров. Я
            делюсь ими на часовой консультации.
          </p>
          <p className="reveal mt-3 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            После неё у вас будет понимание, как получать дополнительно{" "}
            <span className="font-semibold text-[var(--emerald)]">+30 млн ₸ в год</span>{" "}
            за счёт стабильного потока пациентов на дорогостоящие услуги.
          </p>
        </div>
      </section>

      {/* ===== OUTCOME ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Chapter n="08" label="Результат сессии" />
          <SectionTitle eyebrow="Результат сессии">
            Что вы получите на консультации
          </SectionTitle>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Адресное предложение, дающее поток на дорогие услуги",
              "Как ежедневно получать 5+ пациентов на дорогостоящие услуги",
              "Предложение, которое снимает возражения до контакта",
              "85% загрузки кабинетов каждый день недели",
              "Стабильные 30 млн ₸ без акций и скидок",
              "20% пациентов, приносящих 80% выручки",
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
          <Chapter n="09" label="Стоимость" align="center" />
          <SectionTitle align="center" eyebrow="Стоимость">
            Сколько это стоит?
          </SectionTitle>
          <p className="reveal mx-auto mt-4 max-w-lg text-center text-base text-[var(--muted-foreground)] sm:text-lg">
            Положа руку на сердце - решение таких задач стоит минимум 500 000 ₸.
          </p>

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
          <Chapter n="10" label="Бонусы" />
          <SectionTitle eyebrow="Бонусы">
            Первым 10 владельцам - 3 бонуса на 110 000 ₸
          </SectionTitle>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                n: 1,
                t: "Скрипт дожима первичных пациентов",
                price: "50 000 ₸",
                d: "Готовые речевые конструкции для администратора. Что говорить, если пациент отвечает «подумаю». Можно распечатать.",
              },
              {
                n: 2,
                t: "Чек-лист отдела продаж медцентра",
                price: "30 000 ₸",
                d: "Пошаговая карта создания эталонного отдела продаж. Проверена на 50+ клиниках с оборотом от 15 млн ₸.",
              },
              {
                n: 3,
                t: "Система оплаты и мотивации администраторов",
                price: "30 000 ₸",
                d: "Какая должна быть система оплаты и KPI, чтобы каждый звонок и сообщение обрабатывали на 100%.",
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                    Бонус №{b.n}
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
          <Chapter n="11" label="Честный разговор" />
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
          <Chapter n="12" label="Гарантия" align="center" />
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
            Если информация на консультации покажется банальной и вы захотите
            возврат - просто напишите{" "}
            <span className="font-semibold text-[var(--foreground)]">
              «Юрий, хочу возврат»
            </span>
            .
          </p>
          <p className="reveal mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            Скажу больше -{" "}
            <span className="font-semibold text-[var(--emerald)]">
              дополнительно скину 4 990 ₸
            </span>{" "}
            за потраченное время, если информация не оправдает ваших ожиданий.
          </p>
          <p className="reveal mt-4 font-semibold text-[var(--foreground)]">
            Всю ответственность беру на себя.
          </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-[var(--secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Chapter n="13" label="Вопросы и ответы" />
          <SectionTitle eyebrow="FAQ">Частые вопросы</SectionTitle>
          <div className="mt-8 space-y-3">
            {[
              {
                q: "Почему так дёшево, если это так ценно?",
                a: "Хочу, чтобы максимальное число владельцев медцентров в Казахстане увидели, как работает система. 4 990 ₸ - плата за вашу готовность дойти до встречи и не пропустить её. На самой консультации никто ничего не продаёт: вы получаете готовый план - внедряете сами или со мной.",
              },
              {
                q: "Почему только 10 человек? Это дожим или уловка?",
                a: "10 консультаций - это 10 часов моего личного времени. Именно столько физически могу выделить в месяц без вреда для основной деятельности. Поэтому 10 мест, а не 100.",
              },
              {
                q: "Откуда вы взяли эту систему?",
                a: "Разработана на основе исследования наших проектов и протестирована в 20+ медицинских клиниках Казахстана - от Алматы до Усть-Каменогорска. Упакована в формат, который внедряется за 30 дней.",
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
            «Медцентр».
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
              <p className="mt-1 max-w-sm text-sm text-slate-400">Система роста для медицинских центров в Казахстане.</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                <img src={astanaHubImg} alt="Astana Hub" width={80} height={20} className="h-5 w-auto invert" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">Участник ​</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:text-right">
              <a
                href="https://wa.me/77089027071"
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
            Шаг {number} из 3
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
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
              <Sparkles className="h-4 w-4" /> Пример
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
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
              Результат
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
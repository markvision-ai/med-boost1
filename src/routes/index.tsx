import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  ChevronDown,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import heroImg from "../assets/hero.jpg";
import ownerImg from "../assets/clinic-owner.jpg";
import expertImg from "../assets/expert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MarkVision AI — система роста для медицинских центров" },
      {
        name: "description",
        content:
          "Как медицинскому центру выйти на +30 млн ₸ выручки за 30 дней без скидок и акций. Система привлечения пациентов на дорогостоящие услуги.",
      },
    ],
  }),
  component: Landing,
});

const WA_URL =
  "https://api.whatsapp.com/send/?phone=+77472842595&text=%D0%9C%D0%B5%D0%B4%D1%86%D0%B5%D0%BD%D1%82%D1%80";

const YELLOW = "#FACC15";

function WaButton({
  children,
  variant = "yellow",
}: {
  children: React.ReactNode;
  variant?: "yellow" | "green";
}) {
  const styles =
    variant === "green"
      ? "bg-[#25D366] text-white hover:bg-[#1ebe5b]"
      : "bg-[#FACC15] text-black hover:bg-[#eab308]";
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full px-7 py-5 text-lg font-bold uppercase tracking-wide shadow-xl shadow-black/10 transition active:scale-[0.98] sm:text-xl ${styles}`}
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function YellowBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span
        className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full"
        style={{ backgroundColor: YELLOW }}
      />
      <span className="text-base leading-relaxed sm:text-lg">{children}</span>
    </li>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-white text-foreground antialiased">
      {/* ============ HERO (dark bold like reference) ============ */}
      <section className="relative overflow-hidden bg-black text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(250,204,21,0.25), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 pt-14 pb-16 sm:pt-20 sm:pb-20">
          <h1
            className="font-display text-3xl font-bold uppercase leading-[1.05] sm:text-5xl"
            style={{ color: YELLOW }}
          >
            КАК МЕДИЦИНСКОМУ ЦЕНТРУ УВЕЛИЧИТЬ ВЫРУЧКУ НА +30 МЛН ₸ ВСЕГО ЗА 30 ДНЕЙ С
            ПОМОЩЬЮ СИСТЕМЫ «MARKVISION AI»
          </h1>
          <ul className="mt-8 space-y-4">
            <YellowBullet>Без разорительных акций и скидок</YellowBullet>
            <YellowBullet>85% доходимости пациентов до приёма</YellowBullet>
            <YellowBullet>
              Каждый второй пациент остаётся на курсовое лечение
            </YellowBullet>
          </ul>

          <div className="relative mx-auto mt-10 max-w-md overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src={heroImg}
              alt="Современный медицинский центр"
              width={1280}
              height={896}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-10 rounded-2xl bg-white/5 p-6 text-center backdrop-blur">
            <p
              className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl"
              style={{ color: YELLOW }}
            >
              Получая бесперебойный поток пациентов на дорогостоящие услуги:
            </p>
            <p className="mt-3 text-base text-white/80 sm:text-lg">
              платные диагностики, реабилитационные курсы, комплексные обследования
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-base text-white/70">Как работает эта система</p>
            <ArrowDown className="h-6 w-6 animate-bounce" style={{ color: YELLOW }} />
          </div>
        </div>
      </section>

      {/* ============ CASE: BAKYT ============ */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-3xl bg-neutral-200/60 p-5 sm:p-7">
            <div className="grid grid-cols-[110px_1fr] gap-5 sm:grid-cols-[160px_1fr] sm:gap-7">
              <img
                src={ownerImg}
                alt="Бакыт"
                width={400}
                height={400}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover ring-4 ring-white"
              />
              <div className="text-base leading-relaxed sm:text-lg">
                <p>
                  Знакомьтесь <strong>Бакыт</strong>,
                  <br />
                  владелец многопрофильного медцентра
                </p>
                <p className="mt-4">
                  Его клиника вышла на стабильные{" "}
                  <span
                    className="font-bold"
                    style={{ color: "#b45309", backgroundColor: YELLOW, padding: "0 4px" }}
                  >
                    13 млн ₸
                  </span>{" "}
                  <span className="font-bold">после двух лет застоя</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BEFORE ============ */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-3xl px-5">
          <h2
            className="font-display text-5xl font-bold uppercase sm:text-6xl"
            style={{ color: "white" }}
          >
            ДО:
          </h2>
          <ul className="mt-8 space-y-5">
            {[
              "Без акций и скидок пациенты не идут",
              "80% пациентов приходят на самые дешёвые услуги или по ОСМС",
              "Большая зависимость от сарафанного радио",
              "Кабинеты врачей простаивают по 4–6 часов в день",
              "Записи нет дальше двух дней вперёд",
            ].map((t) => (
              <li key={t} className="flex items-start gap-4 text-lg">
                <XCircle
                  className="mt-1 h-6 w-6 shrink-0"
                  style={{ color: "#f87171" }}
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ AFTER (yellow block like reference) ============ */}
      <section className="py-16" style={{ backgroundColor: YELLOW }}>
        <div className="mx-auto max-w-3xl px-5 text-black">
          <h2 className="font-display text-5xl font-bold uppercase sm:text-6xl">ПОСЛЕ:</h2>
          <p className="mt-4 text-lg font-semibold uppercase leading-tight sm:text-xl">
            Таким образом вы выйдете на{" "}
            <span style={{ color: "#dc2626" }}>стабильные 30 млн ₸</span>
            <br /> и выстроите очередь на дорогостоящие услуги
          </p>
          <ul className="mt-8 space-y-5">
            {[
              "Стабильно закрывает +13 млн ₸ в месяц",
              "Запись пациентов на 2 недели вперёд",
              "Забыли про разорительные акции и скидки",
              "От 5 пациентов в день на дорогостоящие услуги",
              "Кабинеты загружены на 85% весь рабочий день",
            ].map((t) => (
              <li key={t} className="flex items-start gap-4 text-lg">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-black" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ TRIGGER ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <p className="text-xl font-medium leading-relaxed text-black sm:text-2xl">
            Если вам это знакомо — читайте дальше.
            <br />Я расскажу, как за{" "}
            <span
              className="font-bold"
              style={{ backgroundColor: YELLOW, padding: "0 6px" }}
            >
              3 шага
            </span>{" "}
            исправить эту ситуацию.
          </p>
        </div>
      </section>

      {/* ============ EXPERT YURIY ============ */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-3xl px-5">
          <div
            className="rounded-[2.5rem] border-2 p-5 sm:p-7"
            style={{ borderColor: YELLOW }}
          >
            <div className="grid grid-cols-[110px_1fr] items-center gap-5 sm:grid-cols-[160px_1fr] sm:gap-7">
              <img
                src={expertImg}
                alt="Юрий"
                width={400}
                height={400}
                loading="lazy"
                className="aspect-square w-full rounded-full object-cover ring-4"
                style={{ boxShadow: `0 0 0 4px ${YELLOW}` }}
              />
              <p className="text-base leading-relaxed sm:text-lg">
                Меня зовут <strong>Юрий</strong> и за последние 2 года я разобрал десятки
                медицинских клиник в Казахстане — от небольших семейных центров до
                крупных сетей в Алматы, Астане и Шымкенте.
              </p>
            </div>
          </div>

          <h2
            className="mt-12 font-display text-2xl font-bold uppercase leading-tight sm:text-3xl"
            style={{ color: "white" }}
          >
            И ПОЧТИ ВЕЗДЕ ВИЖУ ОДНИ И ТЕ ЖЕ ПРОБЛЕМЫ,
          </h2>
          <p className="mt-3 text-base text-white/80 sm:text-lg">
            которые{" "}
            <span
              className="font-bold"
              style={{ backgroundColor: YELLOW, color: "black", padding: "0 4px" }}
            >
              мешают пробить потолок
            </span>{" "}
            в 10–15 млн ₸
          </p>

          <div className="mt-8 space-y-5 rounded-3xl bg-neutral-800 p-6 sm:p-8">
            {[
              "Зависимость от сарафанного радио. Сегодня пациенты есть, завтра — пустые кабинеты.",
              "Высокая конкуренция и демпинг цен. Пациент звонит в 5 центров и идёт туда, где дешевле.",
              "Привлекают только через разорительные акции и сниженные цены.",
              "70–80% пациентов приходят на самые дешёвые услуги — анализы, разовые приёмы.",
            ].map((t, i) => (
              <p key={i} className="text-base leading-relaxed sm:text-lg">
                <span
                  className="font-bold"
                  style={{ color: YELLOW }}
                >
                  Проблема {i + 1}.
                </span>{" "}
                {t}
              </p>
            ))}
            <AlertTriangle
              className="ml-auto h-10 w-10"
              style={{ color: YELLOW }}
            />
          </div>

          <div className="mt-8 text-base leading-relaxed text-white/80 sm:text-lg">
            Чтобы ваш медицинский центр стабильно приносил прибыль, у вас должно быть
            понимание: какие <span style={{ color: YELLOW }} className="font-bold">20% пациентов</span>{" "}
            приносят <span style={{ color: YELLOW }} className="font-bold">80% выручки</span>. И как
            привлекать именно их — без скидок, без демпинга, без зависимости от сарафана.
          </div>
        </div>
      </section>

      {/* ============ STEPS ============ */}
      <Step
        number={1}
        title="АДРЕСНОЕ ПРЕДЛОЖЕНИЕ"
        paragraphs={[
          "Рынок медицинских центров в Казахстане перенасыщен. Даже в небольшом городе — больше 100 многопрофильных клиник. В Алматы и Астане — сотни.",
          "Почти все они привлекают пациентов одинаково: акции «приём терапевта за 3 000 ₸», скидки на анализы, демпинг. Пациенты не видят разницы между центрами и выбирают по цене.",
          "Чтобы выделяться среди конкурентов, нужно создать адресное предложение — которое решает одну конкретную проблему у одной конкретной аудитории.",
        ]}
        example={`Представьте — у вас стали болеть суставы. Вы тяжело встаёте по утрам, ходите с трудом, а к вечеру колени распухают.\n\nКуда вы пойдёте? В первую попавшуюся клинику, где «есть ревматолог»? Или в медицинский центр, который специализируется на восстановлении подвижности суставов — где сразу сделают комплексную диагностику с УЗИ, МРТ и анализами, врач покажет план лечения на 3 месяца с прогнозом результата?\n\nОчевидно, во второй.`}
        listTitle="Что даёт адресное предложение:"
        list={[
          "Вы выделяетесь на фоне конкурентов",
          "Пациент сразу видит, что вы решаете его проблему",
          "Бесперебойный поток на дорогостоящие услуги",
          "Вы перестаёте конкурировать по цене",
        ]}
      />

      <Step
        number={2}
        title="СИСТЕМА ПРИВЛЕЧЕНИЯ КЛИЕНТОВ (СПК)"
        paragraphs={[
          "Чтобы не тратить рекламный бюджет на тех, кто у вас никогда ничего не купит без скидки 50%, нужно сфокусироваться на тех 20% пациентов, которые сами готовы платить за качественное лечение.",
        ]}
        bulletList={[
          "Уже год терпят боль и наконец решились",
          "Не нашли решения в государственной клинике",
          "Получили отказ или непонятный диагноз в другом центре",
          "Готовы платить за результат, а не за дешёвый приём",
        ]}
        afterBullets="Для них нужен другой подход. И этот подход называется СПК — система привлечения клиентов."
        listTitle="Что делает СПК:"
        list={[
          "Привлекает горячих пациентов — тех, кому нужно решить проблему",
          "Показывает рекламу только тем, у кого есть конкретная боль",
          "Окупает затраты уже после первой платной диагностики",
        ]}
        result="Вы выходите на стабильные 15–30 млн ₸ выручки в месяц и выстраиваете очередь на дорогостоящие услуги."
      />

      <Step
        number={3}
        title="МЕХАНИЗМ УДЕРЖАНИЯ ПАЦИЕНТОВ"
        paragraphs={[
          "Многие медицинские центры сталкиваются с одной и той же проблемой. Пациенты записываются на приём, но не доходят до кабинета врача. Кабинеты простаивают, а вы платите за каждую такую несостоявшуюся запись.",
          "Главное, что нужно понять — ваша задача не получить заявку. Ваша задача — продать основную услугу. И показать пациенту, почему он должен лечиться именно у вас.",
        ]}
        listTitle="Для этого нужно:"
        list={[
          "Администратор, который отвечает на заявку в течение 5 минут",
          "Отдел продаж, который умеет продавать пакет диагностики",
          "Скрипты под каждое возражение — «дорого», «подумаю»",
          "Автоматические напоминания за день и за час до приёма",
          "Понятный план лечения уже на первом приёме",
        ]}
        outro="Не каждый администратор умеет снимать все возражения при первом звонке. Чтобы расти на 20% каждый месяц, нужно создать супер-предложение, которое закрывает все возражения ещё на этапе привлечения — до того, как пациент позвонил в клинику."
      />

      {/* ============ CALL TO BREAKDOWN ============ */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
            На первый взгляд всё выглядит просто. Но у меня ушло{" "}
            <span style={{ color: YELLOW }}>3 года</span>, чтобы разобраться в этом до
            уровня системы.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            Все ответы уже найдены. Все шаги отработаны на десятках медицинских центров.
            Я предлагаю их вам на часовой консультации.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            После неё у вас будет полное понимание, как получать дополнительно{" "}
            <span style={{ color: YELLOW }} className="font-bold">+30 млн ₸ в год</span>{" "}
            за счёт стабильного потока пациентов на дорогостоящие услуги.
          </p>
        </div>
      </section>

      {/* ============ OUTCOME LIST ============ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div
            className="mb-6 inline-block px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-black"
            style={{ backgroundColor: YELLOW }}
          >
            РЕЗУЛЬТАТ СЕССИИ
          </div>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            Что вы получите на консультации
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "Как создать адресное предложение, которое обеспечит поток пациентов на дорогостоящие услуги",
              "Как привлекать от 5 пациентов в день на дорогостоящие услуги с помощью системы СПК",
              "Как внедрить предложение с непреодолимой выгодой, которое отрабатывает возражения ещё до контакта с администратором",
              "Как обеспечить 85% загрузки кабинетов благодаря СПК",
              "Как выйти на стабильные 30 млн ₸ без разорительных акций и скидок",
              "Как найти 20% пациентов, которые приносят 80% выручки",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-4 rounded-2xl bg-neutral-100 p-5"
              >
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 shrink-0"
                  style={{ color: "#b45309" }}
                />
                <span className="text-base sm:text-lg">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            Сколько это должно стоить?
          </h2>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg">
            Положа руку на сердце — решение таких проблем стоит минимум 500 000 ₸.
          </p>
          <div className="mt-8 space-y-3 text-left">
            <PriceRow label="Реальная ценность" value="500 000 ₸" strike />
            <PriceRow label="Обычная цена консультации" value="50 000 ₸" strike />
          </div>
          <div
            className="mt-4 rounded-3xl border-4 border-black p-7 text-center"
            style={{ backgroundColor: YELLOW }}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-black">
              Цена для первых 10 владельцев
            </div>
            <div className="mt-2 font-display text-6xl font-bold text-black sm:text-7xl">
              4 990 ₸
            </div>
          </div>
        </div>
      </section>

      {/* ============ BONUSES ============ */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-4xl px-5">
          <h2
            className="font-display text-2xl font-bold uppercase leading-tight sm:text-3xl"
            style={{ color: YELLOW }}
          >
            ПЕРВЫМ 10 ВЛАДЕЛЬЦАМ — 3 БОНУСА НА 110 000 ₸
          </h2>
          <div className="mt-8 space-y-5">
            {[
              {
                n: 1,
                t: "Скрипт дожима первичных пациентов на платную диагностику",
                price: "50 000 ₸",
                d: "Готовые речевые конструкции для администратора, которые повышают конверсию из заявки в запись. Что говорить, если пациент говорит «подумаю». Можно распечатать и положить рядом с телефоном.",
              },
              {
                n: 2,
                t: "Чек-лист отдела продаж медцентра",
                price: "30 000 ₸",
                d: "Пошаговая дорожная карта по созданию эталонного отдела продаж. Проверена на 50+ клиниках с оборотом от 15 млн ₸ в месяц.",
              },
              {
                n: 3,
                t: "Система оплаты и мотивации администраторов",
                price: "30 000 ₸",
                d: "Какая должна быть система оплаты и KPI, чтобы каждый звонок и сообщение были отработаны на 100%.",
              },
            ].map((b) => (
              <article
                key={b.n}
                className="rounded-3xl bg-neutral-900 p-6 ring-1 ring-white/10"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span
                    className="font-display text-xl font-bold uppercase"
                    style={{ color: YELLOW }}
                  >
                    Бонус №{b.n}
                  </span>
                  <span className="text-sm">
                    <span className="text-white/40 line-through">{b.price}</span>{" "}
                    <span className="font-bold" style={{ color: YELLOW }}>
                      бесплатно
                    </span>
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{b.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{b.d}</p>
              </article>
            ))}
          </div>
          <div
            className="mt-8 rounded-2xl p-5 text-center text-black"
            style={{ backgroundColor: YELLOW }}
          >
            <span className="font-display text-2xl font-bold uppercase">
              Итого: 110 000 ₸ БЕСПЛАТНО
            </span>
          </div>
        </div>
      </section>

      {/* ============ HONEST TALK ============ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            А теперь давайте честно.
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "Сколько денег вы потратили на рекламу, которая не привела пациентов?",
              "Сколько месяцев работаете без стабильного потока пациентов?",
              "Сколько пациентов выбрали другой центр, потому что там было дешевле?",
              "Сколько раз давали скидки, чтобы заполнить кабинеты, теряя прибыль?",
            ].map((q) => (
              <li
                key={q}
                className="flex items-start gap-3 border-l-4 bg-neutral-100 p-5"
                style={{ borderColor: YELLOW }}
              >
                <span className="text-base sm:text-lg">{q}</span>
              </li>
            ))}
          </ul>
          <div
            className="mt-8 rounded-3xl p-6 text-center"
            style={{ backgroundColor: "#000" }}
          >
            <p className="font-display text-2xl font-bold uppercase text-white sm:text-3xl">
              5 МЛН ₸? 10 МЛН ₸? 20 МЛН ₸?
            </p>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Сейчас вы можете получить весь алгоритм всего за
            </p>
            <p
              className="mt-2 font-display text-5xl font-bold"
              style={{ color: YELLOW }}
            >
              4 990 ₸
            </p>
          </div>
        </div>
      </section>

      {/* ============ MAIN CTA ============ */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-5 text-center">
          <WaButton variant="green">Написать в WhatsApp</WaButton>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600">
            При нажатии откроется чат в WhatsApp с кодовым словом «Медцентр». Далее я
            свяжусь с вами, чтобы задать пару вопросов и убедиться, что моя система
            точно подходит вашему центру.
          </p>
        </div>
      </section>

      {/* ============ GUARANTEE ============ */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
            ВЫ НИЧЕМ НЕ РИСКУЕТЕ
          </h2>
          <div
            className="mx-auto my-10 flex h-32 w-32 items-center justify-center rounded-full"
            style={{
              background: `radial-gradient(circle, ${YELLOW} 0%, #b45309 100%)`,
              boxShadow: `0 0 60px ${YELLOW}40`,
            }}
          >
            <ShieldCheck className="h-16 w-16 text-black" />
          </div>
          <h3
            className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl"
          >
            Я УВЕРЕН В СВОЕЙ ТЕХНОЛОГИИ И ЕЁ ПОЛЬЗЕ, ПОЭТОМУ ДАЮ БЕЗУСЛОВНУЮ{" "}
            <span style={{ color: YELLOW }}>ГАРАНТИЮ ВОЗВРАТА СРЕДСТВ</span>
          </h3>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
            <p>
              Если информация на консультации покажется банальной, и вы захотите возврат —
              просто напишите мне{" "}
              <span className="font-semibold text-white">«Юрий, хочу возврат»</span>
            </p>
            <p>
              Скажу даже больше!{" "}
              <span className="font-semibold" style={{ color: YELLOW }}>
                Я дополнительно скину Вам 4 990 ₸
              </span>{" "}
              за потраченное время, если информация не оправдает твоих ожиданий
            </p>
            <p className="font-semibold text-white">
              Всю ответственность беру на себя!
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            Частые вопросы
          </h2>
          <div className="mt-8 space-y-3">
            {[
              {
                q: "Почему так дешево, если это так ценно?",
                a: "Я хочу, чтобы максимальное число владельцев медицинских центров в Казахстане увидели, как работает система. Цена в 4 990 ₸ — это плата за вашу готовность дойти до встречи и не пропустить её. На самой консультации никто ничего не продаёт. Вы получаете готовый план — внедряете сами или со мной, как решите.",
              },
              {
                q: "Почему только 10 человек? Это дожим или уловка?",
                a: "10 консультаций — это 10 часов моего личного времени. Именно столько я физически могу выделить в месяц без вреда для основной деятельности — я веду MarkVision AI и работаю с клиниками индивидуально. Поэтому 10 мест, а не 100.",
              },
              {
                q: "Откуда вы взяли эту систему?",
                a: "Система разработана на основе глубокого исследования наших проектов. Протестирована в 20+ медицинских клиниках Казахстана — от Алматы до Усть-Каменогорска. Со временем мы довели её до совершенства и упаковали в формат, который можно внедрить в любой медицинский центр за 30 дней.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border-2 border-black bg-white p-5 open:bg-neutral-50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold sm:text-lg">
                  {f.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 transition group-open:rotate-180"
                    style={{ color: "#b45309" }}
                  />
                </summary>
                <p className="mt-4 leading-relaxed text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-5 text-center">
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
            <span style={{ color: YELLOW }}>Готовы</span> начать?
          </h2>
          <div className="mt-8 w-full flex justify-center">
            <WaButton variant="green">Написать в WhatsApp</WaButton>
          </div>
          <p className="mt-5 text-sm text-white/70">
            При нажатии откроется чат. Кодовое слово — «Медцентр».
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-neutral-900 py-10 text-white/70">
        <div className="mx-auto max-w-5xl px-5 text-sm">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div
              className="font-display text-xl font-bold uppercase"
              style={{ color: YELLOW }}
            >
              MarkVision AI
            </div>
            <div>WhatsApp: +7 708 902 70 71</div>
            <div>© 2026 · Юрий Запоинов</div>
          </div>
          <p className="mt-4 text-xs">
            MarkVision AI — система роста для медицинских центров в Казахстане.
          </p>
        </div>
      </footer>
    </main>
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
    <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 ring-1 ring-neutral-200">
      <span className="text-neutral-600">{label}</span>
      <span
        className={`font-display text-xl font-bold ${
          strike ? "text-neutral-400 line-through" : "text-black"
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
}) {
  return (
    <section className={number % 2 === 1 ? "bg-white py-16" : "bg-neutral-100 py-16"}>
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-5 flex items-center gap-3">
          <span
            className="font-display text-7xl font-bold leading-none"
            style={{ color: YELLOW, WebkitTextStroke: "2px black" }}
          >
            {number}
          </span>
          <span className="font-display text-xl font-bold uppercase text-neutral-500">
            ШАГ
          </span>
        </div>
        <h2 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-neutral-700 sm:text-lg">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {bulletList && (
          <ul className="mt-5 space-y-2 text-base text-black sm:text-lg">
            {bulletList.map((b) => (
              <li key={b} className="flex gap-3">
                <span
                  className="mt-2.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: YELLOW }}
                />
                {b}
              </li>
            ))}
          </ul>
        )}
        {afterBullets && (
          <p className="mt-5 text-base leading-relaxed text-neutral-700 sm:text-lg">
            {afterBullets}
          </p>
        )}
        {example && (
          <div
            className="mt-8 rounded-2xl border-l-4 bg-neutral-50 p-6"
            style={{ borderColor: YELLOW }}
          >
            <div
              className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
              style={{ color: "#b45309" }}
            >
              <Sparkles className="h-4 w-4" /> Пример
            </div>
            {example.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="mt-3 text-base leading-relaxed text-black first:mt-0"
              >
                {p}
              </p>
            ))}
          </div>
        )}
        {list && (
          <div className="mt-8">
            {listTitle && (
              <h3 className="mb-4 font-display text-xl font-bold uppercase">
                {listTitle}
              </h3>
            )}
            <ul className="space-y-3">
              {list.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0"
                    style={{ color: "#b45309" }}
                  />
                  <span className="text-base sm:text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {result && (
          <div
            className="mt-8 rounded-2xl p-6 text-base leading-relaxed text-black sm:text-lg"
            style={{ backgroundColor: YELLOW }}
          >
            <div className="mb-2 text-xs font-bold uppercase tracking-wider">
              Результат
            </div>
            {result}
          </div>
        )}
        {outro && (
          <p className="mt-8 text-base leading-relaxed text-neutral-700 sm:text-lg">
            {outro}
          </p>
        )}
      </div>
    </section>
  );
}

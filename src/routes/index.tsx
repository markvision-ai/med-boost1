import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Sparkles,
  ArrowRight,
  ChevronDown,
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

function WaButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#1ebe5b] hover:shadow-xl ${
        large ? "px-8 py-5 text-lg sm:text-xl" : "px-6 py-3 text-base"
      }`}
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-white text-foreground antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="mx-auto max-w-5xl px-5 pt-12 pb-16 sm:pt-20 sm:pb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <HeartPulse className="h-4 w-4" /> MarkVision AI · для медицинских центров
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
            Как медицинскому центру увеличить выручку{" "}
            <span className="text-primary">на +30 млн ₸</span> всего за 30 дней с помощью
            системы <span className="whitespace-nowrap">«MarkVision AI»</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Без разорительных акций и скидок. Получая бесперебойный поток пациентов на
            дорогостоящие услуги: платные диагностики, реабилитационные курсы, комплексные
            обследования.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "85% доходимости пациентов до приёма",
              "Каждый второй пациент остаётся на курсовое лечение",
              "Стабильный поток на дорогостоящие услуги",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-base text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <WaButton large>Узнать, как работает система</WaButton>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-sky-900/10">
            <img
              src={heroImg}
              alt="Современный медицинский центр"
              width={1280}
              height={896}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle eyebrow="Реальный кейс">
            Знакомьтесь — Бакыт, владелец многопрофильного медицинского центра в Алматы.
          </SectionTitle>
          <div className="grid items-center gap-8 rounded-3xl border border-border bg-secondary/40 p-6 sm:grid-cols-[200px_1fr] sm:p-8">
            <img
              src={ownerImg}
              alt="Бакыт, владелец клиники"
              width={400}
              height={400}
              loading="lazy"
              className="h-44 w-44 rounded-2xl object-cover sm:h-50 sm:w-50"
            />
            <p className="text-lg leading-relaxed text-foreground">
              Его клиника вышла на стабильные{" "}
              <span className="font-bold text-primary">13 млн ₸ выручки в месяц</span>{" "}
              после двух лет застоя на уровне 800 000–1 200 000 ₸.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-200 bg-rose-50/60 p-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-sm font-bold uppercase tracking-wider text-rose-600">
                <XCircle className="h-4 w-4" /> ДО
              </div>
              <ul className="space-y-4">
                {[
                  "Без акций и скидок пациенты не идут",
                  "80% пациентов приходят на самые дешёвые услуги или по ОСМС",
                  "Большая зависимость от сарафанного радио",
                  "Кабинеты врачей простаивают по 4–6 часов в день",
                  "Записи нет дальше двух дней вперёд",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-foreground">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-bold uppercase tracking-wider text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> ПОСЛЕ
              </div>
              <ul className="space-y-4">
                {[
                  "Стабильно закрывает +13 млн ₸ в месяц",
                  "Запись пациентов на 2 недели вперёд",
                  "Забыли про разорительные акции и скидки",
                  "От 5 пациентов в день на дорогостоящие услуги",
                  "Кабинеты загружены на 85% весь рабочий день",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRIGGER */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            Если вам это знакомо — читайте дальше. Я расскажу, как за{" "}
            <span className="text-primary">3 шага</span> исправить эту ситуацию.
          </p>
        </div>
      </section>

      {/* EXPERT STORY */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full p-1 ring-4 ring-primary/30">
              <img
                src={expertImg}
                alt="Юрий, основатель MarkVision AI"
                width={400}
                height={400}
                loading="lazy"
                className="h-40 w-40 rounded-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Меня зовут Юрий — основатель MarkVision AI
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              За последние 2 года я лично разобрал десятки медицинских клиник в
              Казахстане — от небольших семейных центров до крупных сетей в Алматы,
              Астане и Шымкенте.
            </p>
            <p>
              И почти везде вижу одни и те же{" "}
              <span className="font-semibold text-foreground">4 проблемы</span>, которые
              мешают центру пробить потолок выручки в 10–15 млн ₸ в месяц.
            </p>
            <p>
              Если вам знакома эта ситуация — я расскажу, как её исправить всего за 3
              шага.
            </p>
          </div>
        </div>
      </section>

      {/* 4 PROBLEMS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <SectionTitle eyebrow="Диагностика">
            4 проблемы, которые блокируют рост медицинского центра
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                t: "Зависимость от сарафанного радио",
                d: "Сегодня пациенты есть, завтра — пустые кабинеты.",
              },
              {
                t: "Высокая конкуренция и демпинг цен",
                d: "Пациент звонит в 5 центров и идёт туда, где дешевле.",
              },
              {
                t: "Привлечение только через скидки",
                d: "Маржа падает, а количество пациентов не растёт пропорционально.",
              },
              {
                t: "70–80% — дешёвые услуги",
                d: "Анализы и разовые приёмы. До платных диагностик доходят единицы.",
              },
            ].map((p, i) => (
              <article
                key={p.t}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-lg font-bold text-rose-600">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Проблема {i + 1}. {p.t}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{p.d}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-7 text-lg leading-relaxed text-foreground">
            Чтобы ваш медицинский центр стабильно приносил прибыль, у вас должно быть
            понимание: какие <span className="font-bold text-primary">20% пациентов</span>{" "}
            приносят <span className="font-bold text-primary">80% выручки</span>. И как
            привлекать именно их — без скидок, без демпинга, без зависимости от сарафана.
          </div>
        </div>
      </section>

      {/* STEPS */}
      <Step
        number={1}
        title="Адресное предложение"
        paragraphs={[
          "Рынок медицинских центров в Казахстане перенасыщен. Даже в небольшом городе — больше 100 многопрофильных клиник. В Алматы и Астане — сотни.",
          "Почти все они привлекают пациентов одинаково: акции «приём терапевта за 3 000 ₸», скидки на анализы, демпинг. Пациенты не видят разницы между центрами и выбирают по цене.",
          "Чтобы выделяться среди конкурентов, нужно создать адресное предложение — которое решает одну конкретную проблему у одной конкретной аудитории.",
        ]}
        example={`Представьте — у вас стали болеть суставы. Вы тяжело встаёте по утрам, ходите с трудом, а к вечеру колени распухают.\n\nКуда вы пойдёте? В первую попавшуюся клинику, где «есть ревматолог»? Или в медицинский центр, который специализируется на восстановлении подвижности суставов — где вам сразу сделают комплексную диагностику с УЗИ, МРТ и анализами, врач покажет план лечения на 3 месяца с прогнозом результата, и где у каждого второго пациента к концу курса проходит боль?\n\nОчевидно, во второй.`}
        listTitle="Что даёт адресное предложение:"
        list={[
          "Вы выделяетесь на фоне конкурентов",
          "Пациент сразу видит, что вы решаете именно его проблему",
          "Вы выстраиваете бесперебойный поток пациентов на дорогостоящие услуги",
          "Вы перестаёте конкурировать по цене",
        ]}
        bg="white"
      />

      <Step
        number={2}
        title="Система привлечения клиентов (СПК)"
        paragraphs={[
          "Чтобы не тратить рекламный бюджет на тех, кто у вас никогда ничего не купит без скидки 50%, нужно сфокусироваться на тех 20% пациентов, которые сами готовы платить за качественное лечение.",
          "Это люди, которые:",
        ]}
        bulletList={[
          "Уже год терпят боль и наконец решились",
          "Не нашли решения в государственной клинике",
          "Получили отказ или непонятный диагноз в другом центре",
          "Готовы платить за результат, а не за самый дешёвый приём",
        ]}
        afterBullets="Для них нужен другой подход. И этот подход называется СПК — система привлечения клиентов."
        listTitle="Что делает СПК:"
        list={[
          "Привлекает горячих пациентов — тех, кому уже нужно решить проблему",
          "Показывает рекламу только тем, у кого есть конкретная боль",
          "Окупает затраты на привлечение уже после первой платной диагностики",
        ]}
        result="Вы выходите на стабильные 15–30 млн ₸ выручки в месяц и выстраиваете очередь на дорогостоящие услуги."
        bg="muted"
      />

      <Step
        number={3}
        title="Механизм удержания пациентов"
        paragraphs={[
          "Многие медицинские центры сталкиваются с одной и той же проблемой. Пациенты записываются на приём, но не доходят до кабинета врача. Кабинеты простаивают, врачи остаются без работы, а вы платите за каждую такую несостоявшуюся запись — потому что уже отдали деньги за рекламу.",
          "Главное, что нужно понять — ваша задача не получить заявку. Ваша задача — продать основную услугу. И показать пациенту, почему он должен лечиться именно у вас.",
        ]}
        listTitle="Для этого нужно:"
        list={[
          "Администратор, который отвечает на заявку в течение 5 минут",
          "Администратор или отдел продаж, который умеет продавать пакет диагностики",
          "Скрипты под каждое возражение — «дорого», «подумаю», «посоветуюсь»",
          "Автоматические напоминания за день и за час до приёма",
          "Понятный план лечения, который врач показывает уже на первом приёме",
        ]}
        outro="Не каждый администратор умеет снимать все возражения при первом звонке. Поэтому, чтобы расти на 20% каждый месяц, нужно донести ценность услуги и создать супер-предложение, которое закрывает все возражения и боли ещё на этапе привлечения — до того, как пациент позвонит в клинику. Тогда администратору остаётся только уточнить детали, выставить счёт на предоплату и закрепить дату приёма."
        bg="white"
      />

      {/* CALL TO BREAKDOWN */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            На первый взгляд всё выглядит просто. Но у меня ушло{" "}
            <span className="text-primary">3 года</span>, чтобы разобраться в этом до
            уровня системы.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Все ответы уже найдены. Все шаги отработаны на десятках медицинских центров.
            Я предлагаю их вам на часовой консультации.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            После неё у вас будет полное понимание, как из вашей текущей ситуации
            получать дополнительно{" "}
            <span className="font-bold text-foreground">+30 млн ₸ в год</span> за счёт
            стабильного потока пациентов на дорогостоящие услуги.
          </p>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle eyebrow="Результат сессии">Что вы получите на консультации</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Как создать адресное предложение, которое обеспечит поток пациентов на дорогостоящие услуги",
              "Как привлекать от 5 пациентов в день на дорогостоящие услуги с помощью системы СПК",
              "Как внедрить предложение с непреодолимой выгодой, которое отрабатывает возражения ещё до контакта с администратором",
              "Как обеспечить 85% загрузки кабинетов благодаря СПК",
              "Как выйти на стабильные 30 млн ₸ без разорительных акций и скидок",
              "Как найти 20% пациентов, которые приносят 80% выручки",
            ].map((t) => (
              <div
                key={t}
                className="flex gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <SectionTitle eyebrow="Стоимость">Сколько это должно стоить?</SectionTitle>
          <p className="text-lg text-muted-foreground">
            Положа руку на сердце — решение таких проблем стоит минимум 500 000 ₸.
          </p>
          <div className="mt-8 space-y-3">
            <PriceRow label="Реальная ценность предложения" value="500 000 ₸" strike />
            <PriceRow label="Обычная стоимость моей консультации" value="50 000 ₸" strike />
            <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">
                Цена для первых 10 владельцев
              </div>
              <div className="mt-2 text-5xl font-bold text-foreground sm:text-6xl">
                4 990 ₸
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <SectionTitle eyebrow="Бонусы">
            Первым 10 владельцам — 3 бонуса на 110 000 ₸
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                n: 1,
                t: "Скрипт дожима первичных пациентов",
                price: "50 000 ₸",
                d: "Готовые речевые конструкции для администратора, которые повышают конверсию из заявки в запись. Что говорить, если пациент говорит «подумаю». Как мягко перевести интерес в запись на платный приём.",
              },
              {
                n: 2,
                t: "Чек-лист отдела продаж медцентра",
                price: "30 000 ₸",
                d: "Пошаговая дорожная карта по созданию эталонного отдела продаж для медицинского центра. Проверена на 50+ клиниках с оборотом от 15 млн ₸ в месяц.",
              },
              {
                n: 3,
                t: "Система оплаты и мотивации администраторов",
                price: "30 000 ₸",
                d: "Какая должна быть система оплаты и KPI для администраторов и менеджеров, чтобы каждый звонок и сообщение были отработаны на 100%.",
              },
            ].map((b) => (
              <article
                key={b.n}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    Бонус №{b.n}
                  </span>
                  <span className="text-sm">
                    <span className="text-muted-foreground line-through">{b.price}</span>{" "}
                    <span className="font-bold text-emerald-600">бесплатно</span>
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{b.t}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.d}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-primary/10 p-6 text-center">
            <span className="text-lg font-semibold text-foreground">Итого: </span>
            <span className="text-2xl font-bold text-primary">110 000 ₸ бесплатно</span>
          </div>
        </div>
      </section>

      {/* HONEST TALK */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <SectionTitle>А теперь давайте честно.</SectionTitle>
          <ul className="space-y-4">
            {[
              "Сколько денег вы потратили на рекламу, которая не привела пациентов?",
              "Сколько месяцев подряд вы работаете без стабильного потока пациентов?",
              "Сколько пациентов выбрали другой центр только потому, что там было дешевле?",
              "Сколько раз вы давали скидки и акции, чтобы хоть как-то заполнить кабинеты, теряя прибыль?",
            ].map((q) => (
              <li key={q} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <span className="text-foreground">{q}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <p className="text-xl font-medium text-foreground">
              5 млн ₸? 10 млн ₸? 20 млн ₸?
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Сейчас вы можете получить весь алгоритм всего за{" "}
              <span className="text-2xl font-bold text-primary">4 990 ₸</span>.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <WaButton large>Написать в WhatsApp</WaButton>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            При нажатии откроется чат в WhatsApp с кодовым словом «Медцентр». Далее я
            свяжусь с вами, чтобы задать пару вопросов и убедиться, что моя система
            точно подходит вашему центру.
          </p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-gradient-to-b from-secondary/40 to-white py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold uppercase text-foreground sm:text-4xl">
            Вы ничем не рискуете
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Если информация на консультации покажется вам банальной или вы захотите
              возврат — просто напишите мне:{" "}
              <span className="font-semibold text-foreground">«Юрий, хочу возврат»</span>.
            </p>
            <p>
              Скажу больше — я дополнительно верну вам ещё{" "}
              <span className="font-semibold text-foreground">4 990 ₸</span> за
              потраченное время, если информация не оправдает ваших ожиданий.
            </p>
            <p className="font-semibold text-foreground">
              Всю ответственность беру на себя.
            </p>
          </div>
          <p className="mt-8 text-base italic text-muted-foreground">
            Я уверен в своей технологии и её пользе, поэтому даю безусловную гарантию
            возврата средств.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5">
          <SectionTitle eyebrow="FAQ">Частые вопросы</SectionTitle>
          <div className="space-y-3">
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
                a: "Эта система разработана на основе глубокого исследования наших проектов. Протестирована в 20+ медицинских клиниках Казахстана — от Алматы до Усть-Каменогорска. Показала стабильную положительную динамику в каждой. Со временем мы довели её до совершенства и упаковали в формат, который можно внедрить в любой медицинский центр за 30 дней.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-card p-5 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-foreground">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-b from-white to-sky-50 py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Готовы начать?</h2>
          <div className="mt-8">
            <WaButton large>Написать в WhatsApp</WaButton>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            При нажатии откроется чат со мной. Кодовое слово — «Медцентр».
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-white py-10">
        <div className="mx-auto max-w-5xl px-5 text-sm text-muted-foreground">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Stethoscope className="h-5 w-5 text-primary" />
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
    <div className="flex items-center justify-between rounded-xl border border-border bg-white px-5 py-4 text-left">
      <span className="text-muted-foreground">{label}</span>
      <span className={`font-semibold ${strike ? "text-muted-foreground line-through" : "text-foreground"}`}>
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
  bg,
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
  bg: "white" | "muted";
}) {
  return (
    <section className={bg === "white" ? "bg-white py-20" : "bg-secondary/30 py-20"}>
      <div className="mx-auto max-w-4xl px-5">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
          Шаг {number}
        </div>
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {bulletList && (
          <ul className="mt-5 space-y-2">
            {bulletList.map((b) => (
              <li key={b} className="flex gap-3 text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>
        )}
        {afterBullets && (
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{afterBullets}</p>
        )}
        {example && (
          <div className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
            <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
              Пример
            </div>
            {example.split("\n\n").map((p, i) => (
              <p key={i} className="mt-3 text-base leading-relaxed text-foreground first:mt-0">
                {p}
              </p>
            ))}
          </div>
        )}
        {list && (
          <div className="mt-8">
            {listTitle && (
              <h3 className="mb-4 text-xl font-semibold text-foreground">{listTitle}</h3>
            )}
            <ul className="space-y-3">
              {list.map((t) => (
                <li key={t} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {result && (
          <div className="mt-8 rounded-2xl bg-emerald-50 p-6 text-lg leading-relaxed text-foreground">
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              Результат
            </div>
            {result}
          </div>
        )}
        {outro && (
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{outro}</p>
        )}
      </div>
    </section>
  );
}

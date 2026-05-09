import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Phone, MapPin, Mail, Clock, Star, Check, Leaf, Truck, Factory, ShieldCheck } from "lucide-react";
import heroStraws from "@/assets/hero-straws.jpg";
import strawsVariety from "@/assets/straws-variety.jpg";
import production from "@/assets/production.jpg";

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", qty: "", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка отправлена", description: "Перезвоним в течение 30 минут в рабочее время." });
    setForm({ name: "", phone: "", qty: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="container-tight flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
              <span className="font-serif text-primary-foreground font-bold text-lg">Ц</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif font-semibold">ООО ЦРУ</div>
              <div className="text-xs text-muted-foreground">Производство бумажных трубочек</div>
            </div>
          </div>
          <a href="tel:+74950000000" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-primary">
            <Phone className="w-4 h-4" /> +7 (495) 000-00-00
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container-tight py-10 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground mb-5">
              <Leaf className="w-3.5 h-3.5" /> Биоразлагаемая упаковка · ГОСТ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Бумажные трубочки для коктейля — оптом от производителя
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Плотные стенки, не размокают до 4 часов. Своё производство в России. Опт от 5 000 шт., доставка по РФ за 2–7 дней.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="#zayavka">Получить расчёт за 15 минут</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+74950000000"><Phone className="w-4 h-4 mr-2" /> Позвонить</a>
              </Button>
            </div>

            {/* Yandex trust block */}
            <a
              href="https://yandex.ru/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors w-fit"
            >
              <div className="w-10 h-10 rounded-md bg-[#FFCC00] flex items-center justify-center font-bold text-black">Я</div>
              <div className="text-sm">
                <div className="flex items-center gap-1 font-semibold">
                  4,9 <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-muted-foreground font-normal">· 87 отзывов на Яндекс.Картах</span>
                </div>
                <div className="text-xs text-muted-foreground">Открыть карточку организации →</div>
              </div>
            </a>
          </div>

          <div className="relative">
            <img
              src={heroStraws}
              alt="Бумажные трубочки для коктейля производства ООО ЦРУ"
              width={1536}
              height={1280}
              className="rounded-xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg hidden sm:block">
              <div className="text-2xl font-serif font-bold text-primary">от 1,2 ₽</div>
              <div className="text-xs text-muted-foreground">за трубочку, опт</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-tight py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { i: Factory, t: "Своё производство", s: "с 2019 года" },
            { i: Truck, t: "Доставка по РФ", s: "от 2 рабочих дней" },
            { i: ShieldCheck, t: "Сертификаты", s: "ТР ТС, СГР" },
            { i: Leaf, t: "Биоразлагаемые", s: "разложение 90 дней" },
          ].map(({ i: Icon, t, s }) => (
            <div key={t} className="flex items-start gap-3">
              <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-muted-foreground text-xs">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 md:py-20">
        <div className="container-tight">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="text-sm font-medium text-accent mb-2">Отзывы клиентов</div>
              <h2 className="text-3xl md:text-4xl font-bold">Нам доверяют бары, рестораны и ивент-агентства</h2>
            </div>
            <div className="text-sm text-muted-foreground">Источник: Яндекс.Карты</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "Андрей К.", r: "Сеть кофеен, Москва", t: "Заказывали кратовые трубочки D6 — держатся в латте на льду весь рабочий день. Перешли с пластика без жалоб от гостей." },
              { n: "Марина С.", r: "Ивент-агентство", t: "На свадьбу нужны были трубочки в фирменных цветах. Сделали за 9 дней, цвет точно по PMS. Отдельное спасибо за упаковку." },
              { n: "Сергей В.", r: "Бар, Санкт-Петербург", t: "Брали пробную партию 10 000 шт. Жёсткие, не разваливаются в коктейлях с цитрусом. Подписали контракт на постоянные поставки." },
            ].map((r) => (
              <Card key={r.n} className="p-5 bg-card">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4">«{r.t}»</p>
                <div className="text-sm font-semibold">{r.n}</div>
                <div className="text-xs text-muted-foreground">{r.r}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services / catalog */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container-tight">
          <div className="text-sm font-medium text-accent mb-2">Каталог</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Что производим</h2>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <img
              src={strawsVariety}
              alt="Ассортимент бумажных трубочек: крафт, чёрные, полосатые, цветные"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="space-y-4">
              {[
                { t: "Классические крафт", d: "Ø 6 / 8 / 10 / 12 мм. Длина 197–230 мм. 3-слойная намотка.", p: "от 1,2 ₽" },
                { t: "Цветные и полосатые", d: "Более 20 расцветок в наличии. Краска на водной основе, безопасна.", p: "от 1,5 ₽" },
                { t: "С печатью под бренд", d: "Логотип, рисунок, фирменные цвета. Минимальный тираж 20 000 шт.", p: "от 2,1 ₽" },
                { t: "Для смузи и боба-чая", d: "Усиленные Ø 10–12 мм. Срез под углом, скошенный край.", p: "от 1,8 ₽" },
              ].map((s) => (
                <div key={s.t} className="flex justify-between gap-4 p-4 rounded-lg bg-card border border-border">
                  <div>
                    <div className="font-semibold mb-1">{s.t}</div>
                    <div className="text-sm text-muted-foreground">{s.d}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-serif font-bold text-primary">{s.p}</div>
                    <div className="text-xs text-muted-foreground">за шт.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before / after — production */}
      <section className="py-14 md:py-20">
        <div className="container-tight">
          <div className="text-sm font-medium text-accent mb-2">Производство</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">От рулона бумаги до готовой партии</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={production}
              alt="Цех производства бумажных трубочек ООО ЦРУ"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="space-y-5">
              {[
                { n: "До", t: "Пищевой крафт 60–80 г/м²", d: "Сертифицированная бумага. Хранится в сухом цеху, проверяется партиями." },
                { n: "В работе", t: "Спиральная намотка, 3 слоя", d: "Клей пищевой, без растворителей. Контроль диаметра каждые 30 минут." },
                { n: "После", t: "Готовая партия в коробах", d: "Индивидуальная плёнка по 100 шт. Гофрокороб 200×100×100 — 5 000 шт." },
              ].map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">{b.n}</div>
                    <div className="font-semibold mb-1">{b.t}</div>
                    <div className="text-sm text-muted-foreground">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20 stripe-bg">
        <div className="container-tight">
          <div className="text-sm font-medium text-accent mb-2">Как работаем</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Заказ за 4 шага</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Заявка", d: "Пишете объём, диаметр, цвет. Перезваниваем за 30 минут." },
              { t: "Расчёт и образцы", d: "КП в течение дня. Бесплатные образцы по РФ." },
              { t: "Производство", d: "Стандартные позиции 3–5 дней, под бренд — 9–14 дней." },
              { t: "Отгрузка", d: "СДЭК, Деловые Линии, ПЭК или самовывоз с производства." },
            ].map((s, i) => (
              <Card key={s.t} className="p-5 bg-card">
                <div className="font-serif text-3xl font-bold text-accent mb-2">0{i + 1}</div>
                <div className="font-semibold mb-1">{s.t}</div>
                <div className="text-sm text-muted-foreground">{s.d}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="zayavka" className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container-tight grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Рассчитаем стоимость и сроки</h2>
            <p className="opacity-90 mb-6">
              Оставьте заявку — пришлём прайс под ваш объём, образцы и срок отгрузки. Без спама и рассылок.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Ответ в течение 30 минут (Пн–Пт, 9:00–18:00)",
                "Бесплатные образцы по России",
                "Закрывающие документы, безнал и НДС",
                "Скидка 7% при заказе от 50 000 шт.",
              ].map((t) => (
                <li key={t} className="flex gap-2 items-start">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-6 bg-card text-card-foreground">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Телефон</label>
                <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Тираж и диаметр</label>
                <Input value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} placeholder="Например: 30 000 шт., Ø 8 мм, крафт" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Комментарий</label>
                <Textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Город доставки, сроки, печать логотипа" rows={3} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-14 md:py-20">
        <div className="container-tight">
          <div className="text-sm font-medium text-accent mb-2">Контакты</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Связаться напрямую</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              {[
                { i: Phone, t: "+7 (495) 000-00-00", s: "Отдел продаж" },
                { i: Mail, t: "zakaz@cru-straws.ru", s: "Заявки и КП" },
                { i: MapPin, t: "г. Москва, ул. Производственная, 12", s: "Склад и производство" },
                { i: Clock, t: "Пн–Пт 9:00–18:00", s: "Сб–Вс — по согласованию" },
              ].map(({ i: Icon, t, s }) => (
                <div key={t} className="flex gap-3">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{s}</div>
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t border-border text-xs text-muted-foreground">
                ООО «ЦРУ» · ИНН 7700000000 · ОГРН 1207700000000
              </div>
            </Card>

            <Card className="p-0 overflow-hidden min-h-[320px] bg-secondary flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="font-semibold mb-1">Мы на Яндекс.Картах</div>
                <div className="text-sm text-muted-foreground mb-4">Рейтинг 4,9 · 87 отзывов</div>
                <Button asChild variant="outline">
                  <a href="https://yandex.ru/maps/" target="_blank" rel="noopener noreferrer">Открыть карточку</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container-tight flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} ООО ЦРУ. Производство бумажных трубочек.</div>
          <div>Сделано для оптовых клиентов · Москва</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

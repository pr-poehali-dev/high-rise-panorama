import { useState } from "react";
import Icon from "@/components/ui/icon";

const BUILDING_IMAGE = "https://cdn.poehali.dev/projects/d092783b-8203-4889-932b-fbc9631b5d61/bucket/4e6a2195-eb4a-4ae2-8383-fde6a4a4a627.jpeg";

const apartments = [
  { id: 1, type: "Студия", floor: 2, area: 32, price: 4200000, rooms: 0, features: ["Панорамные окна", "Отделка под ключ"] },
  { id: 2, type: "1-комнатная", floor: 4, area: 48, price: 6800000, rooms: 1, features: ["Балкон", "Вид на горы"] },
  { id: 3, type: "2-комнатная", floor: 6, area: 72, price: 9500000, rooms: 2, features: ["Угловая квартира", "2 балкона"] },
  { id: 4, type: "2-комнатная", floor: 8, area: 78, price: 10800000, rooms: 2, features: ["Панорамный вид", "Премиум отделка"] },
  { id: 5, type: "3-комнатная", floor: 9, area: 105, price: 14500000, rooms: 3, features: ["Пентхаус", "Терраса 20 м²"] },
  { id: 6, type: "3-комнатная", floor: 7, area: 98, price: 13200000, rooms: 3, features: ["Угловая", "Вид на парк"] },
];

const commercial = [
  { id: 1, type: "Торговое помещение", floor: 1, area: 85, price: 15000000, purpose: "Ритейл / кафе", features: ["Отдельный вход", "Витрина"] },
  { id: 2, type: "Офис", floor: 2, area: 120, price: 18000000, purpose: "Офис / коворкинг", features: ["Панорамные окна", "Опенспейс"] },
  { id: 3, type: "Торговое помещение", floor: 1, area: 55, price: 9500000, purpose: "Ритейл / салон", features: ["Угловое", "Высокий трафик"] },
];

const galleryImages = [
  { url: BUILDING_IMAGE, caption: "Фасад здания" },
  { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", caption: "Современный интерьер" },
  { url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", caption: "Панорамный вид" },
  { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", caption: "Жилые пространства" },
  { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", caption: "Коммерческие площади" },
  { url: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80", caption: "Балконы и виды" },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(price);
}

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "apartments", label: "Квартиры" },
    { id: "commercial", label: "Коммерция" },
    { id: "gallery", label: "Галерея" },
    { id: "contacts", label: "Контакты" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-gradient rounded-sm flex items-center justify-center">
                <Icon name="Building2" size={16} className="text-background" />
              </div>
              <span className="font-bold text-sm tracking-widest uppercase text-foreground">
                ВысотаПрестиж
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="nav-link text-sm font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contacts")}
              className="hidden md:block px-5 py-2 bg-amber-gradient text-background text-sm font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </button>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacts")}
              className="px-5 py-3 bg-amber-gradient text-background text-sm font-semibold rounded-sm tracking-wide"
            >
              Оставить заявку
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={BUILDING_IMAGE}
            alt="Здание"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">Премиальная недвижимость</span>
            </div>

            <h1
              className="mb-6 leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.5rem, 9vw, 7rem)", fontWeight: 300 }}
            >
              Живи<br />
              <em className="text-gradient not-italic font-semibold">выше</em><br />
              остальных
            </h1>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-lg">
              Современное здание с панорамными окнами и стеклянным лифтом.
              Квартиры и коммерческие площади на выбор.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("apartments")}
                className="px-8 py-4 bg-amber-gradient text-background font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Смотреть квартиры
              </button>
              <button
                onClick={() => scrollTo("commercial")}
                className="px-8 py-4 border border-border text-foreground font-semibold rounded-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Коммерческие площади
              </button>
            </div>

            <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-border/40">
              {[
                { value: "9", label: "этажей" },
                { value: "24", label: "квартиры" },
                { value: "3", label: "коммерческих\nпомещения" },
                { value: "100%", label: "стеклянный\nлифт" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wide whitespace-pre-line">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Листай</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* APARTMENTS */}
      <section id="apartments" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">Жилая недвижимость</span>
            </div>
            <h2
              className="leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}
            >
              Квартиры
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              От уютных студий до просторных трёхкомнатных квартир с панорамными видами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apartments.map((apt) => (
              <div key={apt.id} className="card-hover bg-card rounded-sm border border-border overflow-hidden group">
                <div className="h-1 bg-amber-gradient" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{apt.type}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Icon name="Layers" size={14} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{apt.floor} этаж</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{formatPrice(apt.price)}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{Math.round(apt.price / apt.area / 1000)} тыс./м²</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-5 py-4 border-y border-border">
                    <div className="flex items-center gap-2">
                      <Icon name="Move" size={16} className="text-primary" />
                      <span className="text-sm font-medium">{apt.area} м²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="BedDouble" size={16} className="text-primary" />
                      <span className="text-sm font-medium">{apt.rooms === 0 ? "Студия" : `${apt.rooms} комн.`}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {apt.features.map((f) => (
                      <span key={f} className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-sm">
                        {f}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 border border-primary text-primary text-sm font-semibold rounded-sm tracking-wide hover:bg-primary hover:text-background transition-colors">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section id="commercial" className="py-24" style={{ background: "hsl(30, 12%, 10%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">Бизнес-площади</span>
            </div>
            <h2
              className="leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}
            >
              Коммерческие площади
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Помещения на первых этажах для ритейла, кафе и офисов — в месте с высоким трафиком
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commercial.map((item) => (
              <div key={item.id} className="card-hover bg-card rounded-sm border border-border overflow-hidden">
                <div className="h-1 bg-amber-gradient" />
                <div className="p-7">
                  <div className="mb-5">
                    <span className="inline-block px-3 py-1 bg-primary/15 text-primary text-xs font-semibold rounded-sm mb-3 tracking-wide">
                      {item.purpose}
                    </span>
                    <h3 className="font-semibold text-xl text-foreground">{item.type}</h3>
                    <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                      <Icon name="Layers" size={13} />
                      <span className="text-sm">{item.floor} этаж</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5 py-5 border-y border-border">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Площадь</div>
                      <div className="text-lg font-bold text-foreground">{item.area} м²</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Стоимость</div>
                      <div className="text-lg font-bold text-primary">{formatPrice(item.price)}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((f) => (
                      <span key={f} className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-sm">{f}</span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-amber-gradient text-background text-sm font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity">
                    Узнать подробности
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 md:p-12 rounded-sm border border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary opacity-5" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Нужна консультация?</h3>
                <p className="text-muted-foreground">Расскажем о всех доступных площадях и поможем выбрать под ваш бизнес</p>
              </div>
              <button
                onClick={() => scrollTo("contacts")}
                className="flex-shrink-0 px-8 py-4 bg-amber-gradient text-background font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">Фотографии</span>
            </div>
            <h2
              className="leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}
            >
              Галерея
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm cursor-pointer group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
                onClick={() => { setGalleryIndex(i); setGalleryOpen(true); }}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-medium text-white">{img.caption}</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-primary/80 backdrop-blur-sm rounded-sm flex items-center justify-center">
                    <Icon name="Expand" size={14} className="text-background" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ background: "hsl(30, 12%, 10%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">Связаться</span>
              </div>
              <h2
                className="mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}
              >
                Оставьте заявку
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Наш менеджер свяжется с вами в течение 30 минут и ответит на все вопросы
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", label: "+7 (999) 000-00-00" },
                  { icon: "Mail", label: "info@vysota.ru" },
                  { icon: "MapPin", label: "г. Сочи, ул. Примерная, 1" },
                  { icon: "Clock", label: "Пн-Вс: 9:00 — 20:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/15 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as "Phone"} size={18} className="text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-sm border border-border p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Форма обратной связи</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Интересует</label>
                  <select className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors text-sm">
                    <option value="">Выберите тип недвижимости</option>
                    <option>Квартира — студия</option>
                    <option>Квартира 1-комнатная</option>
                    <option>Квартира 2-комнатная</option>
                    <option>Квартира 3-комнатная</option>
                    <option>Коммерческое помещение</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Комментарий</label>
                  <textarea
                    placeholder="Ваши пожелания..."
                    rows={3}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  />
                </div>
                <button className="w-full py-4 bg-amber-gradient text-background font-semibold rounded-sm tracking-wide hover:opacity-90 transition-opacity mt-2">
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-amber-gradient rounded-sm flex items-center justify-center">
              <Icon name="Building2" size={12} className="text-background" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase">ВысотаПрестиж</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 ВысотаПрестиж. Все права защищены.</p>
          <div className="flex gap-4">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {galleryOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setGalleryOpen(false)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-card border border-border rounded-sm flex items-center justify-center hover:border-primary transition-colors"
            onClick={() => setGalleryOpen(false)}
          >
            <Icon name="X" size={18} />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-sm flex items-center justify-center hover:border-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length); }}
          >
            <Icon name="ChevronLeft" size={18} />
          </button>
          <div className="max-w-4xl w-full px-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[galleryIndex].url}
              alt={galleryImages[galleryIndex].caption}
              className="w-full max-h-[75vh] object-contain rounded-sm"
            />
            <p className="text-center text-muted-foreground mt-4 text-sm">{galleryImages[galleryIndex].caption}</p>
            <p className="text-center text-xs text-muted-foreground mt-1">{galleryIndex + 1} / {galleryImages.length}</p>
          </div>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-sm flex items-center justify-center hover:border-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); setGalleryIndex((galleryIndex + 1) % galleryImages.length); }}
          >
            <Icon name="ChevronRight" size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;

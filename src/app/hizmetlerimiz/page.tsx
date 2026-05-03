const services = [
  {
  title: "Sıhhi Tesisat",
  description:
    "Modern altyapı çözümleriyle temiz ve güvenli su erişimi sağlıyoruz.",
  icon: "/images/icons/sihhi-tesisat.png",
},
  {
    title: "Isıtma Tesisatı",
    description:
      "Maksimum enerji tasarrufu ve konfor sunan ısıtma çözümleri geliştiriyoruz.",
     icon: "/images/icons/isitma-sistemleri.png",
  },
  {
    title: "Soğutma Tesisatı",
    description:
      "Yüksek verimli sistemlerle ideal iklimlendirme ve ferahlık sunuyoruz.",
    icon: "/images/icons/sogutma-sistemleri.png",
  },
  {
    title: "Havalandırma Tesisatı",
    description:
      "Hava kalitesini artıran, taze ve sağlıklı sirkülasyon sistemleri kuruyoruz.",
    icon: "/images/icons/havalandirma.png",
  },
  {
    title: "Yangın Tesisatı",
    description:
      "Güvenlik standartlarına tam uyumlu, profesyonel yangın koruma sistemleri tasarlıyoruz.",
    icon: "/images/icons/yangin-tesisati.png",
  },
  {
    title: "Otomasyon Sistemleri",
    description:
      "Mekanik süreçleri akıllı ve merkezi yönetim sistemleriyle dijitalleştiriyoruz.",
    icon: "/images/icons/mekanik-tesisat.png",
  },
];

const advantages = [
  "Stratejik Projelendirme",
  "Üst Segment Uygulama Kalitesi",
  "Uçtan Uca Profesyonel Süreç Yönetimi",
];

export default function HizmetlerimizPage() {
  return (
    <main className="bg-[var(--vm-cream)]">
      <section className="px-6 pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-[1180px]">
          <h1 className="mx-auto max-w-[760px] text-center text-[42px] font-bold leading-[0.95] tracking-[-0.05em] text-[var(--vm-navy)] md:text-[68px]">
            Güvenli, verimli ve anahtar teslim mekanik çözümler
          </h1>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="overflow-hidden bg-[#d9d9d9]">
              <img
                src="/images/services/services-main.jpg"
                alt="Vena Mekanik mekanik tesisat sistemleri"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex min-h-[210px] flex-col items-center justify-center bg-white px-8 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,23,65,0.08)]"
                >
                 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70">
  <img
    src={service.icon}
    alt={`${service.title} ikonu`}
    className="h-9 w-9 object-contain"
  />
</div>

                  <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[var(--vm-navy)]">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-[230px] text-[14px] font-light leading-6 text-[var(--vm-muted)]">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--vm-cream)] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1040px]">
          <h2 className="max-w-[660px] text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--vm-navy)] md:text-[54px]">
            Prestijli Projeler İçin Doğru Mekanik Partner
          </h2>

          <div className="mt-16 border-y border-[var(--vm-border)]">
            {advantages.map((advantage) => (
              <a
                key={advantage}
                href="#iletisim"
                className="group flex items-center justify-between border-b border-[var(--vm-border)] py-8 last:border-b-0"
              >
                <span className="text-[22px] font-bold tracking-[-0.03em] text-[var(--vm-navy)] md:text-[26px]">
                  {advantage}
                </span>

                <span className="text-[30px] text-[var(--vm-navy)] transition group-hover:translate-x-2 group-hover:text-[var(--vm-red)]">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="relative overflow-hidden bg-[var(--vm-navy)] px-6 py-16 md:py-24 lg:min-h-[720px]"
      >
        <img
          src="/images/services/services-contact-bg.jpg"
          alt="Vena Mekanik saha uzmanı"
          className="absolute inset-0 hidden h-full w-full object-cover opacity-85 md:block"
        />

        <div className="absolute inset-0 hidden bg-[var(--vm-navy)]/10 md:block" />

        <div className="relative z-10 mx-auto flex max-w-[1180px] justify-end">
          <div className="w-full bg-[var(--vm-cream)] px-8 py-10 shadow-[0_28px_70px_rgba(0,23,65,0.16)] md:max-w-[500px] md:px-10 md:py-12">
            <h2 className="max-w-[420px] text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--vm-navy)] md:text-[38px]">
              Formu Doldurun Projeniz Hakkında Görüşelim
            </h2>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="AD SOYAD"
                className="h-13 w-full border border-transparent bg-[#f1eadb] px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/70 focus:border-[var(--vm-red)]"
              />

              <input
                type="tel"
                placeholder="TELEFON"
                className="h-13 w-full border border-transparent bg-[#f1eadb] px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/70 focus:border-[var(--vm-red)]"
              />

              <input
                type="text"
                placeholder="ŞİRKET İSMİ"
                className="h-13 w-full border border-transparent bg-[#f1eadb] px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/70 focus:border-[var(--vm-red)]"
              />

              <textarea
                rows={6}
                placeholder="MESAJINIZ"
                className="w-full resize-none border border-transparent bg-[#f1eadb] px-5 py-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/70 focus:border-[var(--vm-red)]"
              />

              <label className="flex items-center gap-3 pt-1 text-[10px] font-medium text-[var(--vm-muted)]">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[var(--vm-red)]"
                />
                <span>KVKK Aydınlatma Metni’ni okudum ve kabul ediyorum.</span>
              </label>

              <button
                type="button"
                className="flex h-14 w-full items-center justify-center bg-[var(--vm-red)] text-[12px] font-bold uppercase tracking-[0.22em] text-white transition hover:opacity-85"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
const services = [
  {
    title: "Sıhhi Tesisat",
    description:
      "Modern altyapı çözümleriyle temiz ve güvenli su erişimi sağlıyoruz. Atık suyu yaşam alanlarından uzaklaştırıyoruz.",
    icon: "/images/icons/sihhi-tesisat.png",
  },
  {
    title: "Isıtma Sistemleri",
    description:
      "Maksimum enerji tasarrufu ve konfor sunan ısıtma çözümleri geliştiriyoruz.",
    icon: "/images/icons/isitma-sistemleri.png",
  },
  {
    title: "Soğutma Sistemleri",
    description:
      "Yüksek verimli sistemlerle ideal iklimlendirme ve ferahlık sunuyoruz.",
    icon: "/images/icons/sogutma-sistemleri.png",
  },
  {
    title: "Havalandırma Sistemleri",
    description:
      "İç mekânlarda hava kalitesini üst seviyeye taşıyan, taze hava sürekliliği ve sağlıklı sirkülasyon sağlayan sistemler sunuyoruz.",
    icon: "/images/icons/havalandirma.png",
  },
  {
    title: "Yangın Koruma ve Söndürme Çözümleri",
    description:
      "Ulusal ve uluslararası güvenlik standartlarına tam uyumlu, profesyonel yangından koruma sistemleri tasarlıyor ve uyguluyoruz.",
    icon: "/images/icons/yangin-tesisati.png",
  },
  {
    title: "Bina Otomasyonu ve Kontrol Sistemleri",
    description:
      "Mekanik süreçleri akıllı ve merkezi yönetim sistemleriyle dijitalleştiriyoruz.",
    icon: "/images/icons/mekanik-tesisat.png",
  },
];

const advantages = [
  "Keşif ve İhtiyaç Analizi",
  "Projelendirme ve Uygulama Planlama",
  "Saha Uygulaması ve Süreç Yönetimi",
];

export default function HizmetlerimizPage() {
  return (
    <main className="bg-white">
      <section className="bg-white px-6 pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-[1180px]">
          <h1 className="mx-auto max-w-[820px] text-center text-[38px] font-bold leading-[1.02] tracking-[-0.05em] text-[var(--vm-navy)] md:text-[60px]">
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
  className="flex min-h-[260px] flex-col items-center border border-[#eef1f6] bg-white px-7 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,23,65,0.08)]"
>
  <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f8fafc]">
    <img
      src={service.icon}
      alt={`${service.title} ikonu`}
      className="h-9 w-9 object-contain"
    />
  </div>

  <h2 className="flex min-h-[50px] items-center justify-center text-[17px] font-bold leading-tight tracking-[-0.02em] text-[var(--vm-navy)]">
    {service.title}
  </h2>

  <p className="mt-3 max-w-[250px] text-[14px] font-light leading-6 text-[var(--vm-muted)]">
    {service.description}
  </p>
</article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1040px]">
          <h2 className="max-w-[720px] text-[34px] font-bold leading-[1.08] tracking-[-0.04em] text-[var(--vm-navy)] md:text-[48px]">
            Projeleriniz İçin Uçtan Uca Mekanik Çözüm Ortağı
          </h2>

          <p className="mt-6 max-w-[620px] text-[16px] font-light leading-8 text-[var(--vm-muted)]">
            Keşif, projelendirme, uygulama ve süreç yönetimi aşamalarında
            mekanik tesisat ihtiyaçlarınıza profesyonel çözümler sunuyoruz.
          </p>

          <div className="mt-14 border-y border-[#eef1f6]">
            {advantages.map((advantage) => (
              <a
                key={advantage}
                href="#iletisim"
                className="group flex items-center justify-between border-b border-[#eef1f6] py-8 last:border-b-0"
              >
                <span className="text-[21px] font-bold tracking-[-0.03em] text-[var(--vm-navy)] md:text-[25px]">
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
          <div className="w-full border border-[#eef1f6] bg-white px-8 py-10 shadow-[0_28px_70px_rgba(0,23,65,0.16)] md:max-w-[500px] md:px-10 md:py-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--vm-red)]">
              İletişim
            </span>

            <h2 className="mt-4 max-w-[420px] text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--vm-navy)] md:text-[38px]">
              Formu Doldurun, Projeniz Hakkında Görüşelim
            </h2>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="AD SOYAD"
                className="h-12 w-full border border-[#eef1f6] bg-[#f8fafc] px-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/70 focus:border-[var(--vm-red)] focus:bg-white"
              />

              <input
                type="tel"
                placeholder="TELEFON"
                className="h-12 w-full border border-[#eef1f6] bg-[#f8fafc] px-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/70 focus:border-[var(--vm-red)] focus:bg-white"
              />

              <input
                type="text"
                placeholder="ŞİRKET İSMİ"
                className="h-12 w-full border border-[#eef1f6] bg-[#f8fafc] px-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/70 focus:border-[var(--vm-red)] focus:bg-white"
              />

              <textarea
                rows={6}
                placeholder="MESAJINIZ"
                className="w-full resize-none border border-[#eef1f6] bg-[#f8fafc] px-5 py-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/70 focus:border-[var(--vm-red)] focus:bg-white"
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
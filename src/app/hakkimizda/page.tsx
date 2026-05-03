export default function HakkimizdaPage() {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/venamekanik/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/vena-mekanik/",
    },
  ];

  return (
    <main className="bg-[var(--vm-cream)]">
      <section className="px-6 py-16 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="relative overflow-hidden bg-[#d9d9d9]">
            <img
              src="/images/about/about-main.jpg"
              alt="Vena Mekanik mekanik tesisat ve mühendislik ekibi"
              className="h-full min-h-[360px] w-full object-cover md:min-h-[520px]"
            />
          </div>

          <div>
            <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.36em] text-[var(--vm-red)]">
              Hakkımızda
            </p>

            <h1 className="max-w-[560px] text-[38px] font-bold leading-[1.12] tracking-[-0.04em] text-[var(--vm-navy)] md:text-[56px] lg:text-[62px]">
              Mekanik Tesisatta Sürdürülebilir Kalite ve Uzmanlık
            </h1>

            <p className="mt-9 max-w-[560px] text-[18px] font-light leading-9 text-[var(--vm-text)]/78">
              Vena Mekanik, mekanik tesisat ve mühendislik alanında; güvenilir,
              sürdürülebilir ve yüksek verimli çözümler sunmak amacıyla
              kurulmuştur. Projelendirmeden uygulamaya kadar tüm süreçlerde
              kaliteyi merkezine alan yaklaşımıyla, yaşam ve çalışma alanlarında
              konforu standart haline getirmeyi hedefler.
            </p>
          </div>
        </div>
      </section>

      <section
        id="hakkimizda-iletisim"
        className="bg-[var(--vm-cream)] px-6 py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-[980px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <h2 className="max-w-[420px] text-[34px] font-light leading-[1.12] tracking-[-0.04em] text-[var(--vm-navy)] md:text-[48px]">
              Projeniz İçin Bizimle İletişime Geçin
            </h2>

            <p className="mt-9 max-w-[420px] text-[17px] font-light leading-8 text-[var(--vm-text)]/70">
              Mekanik tesisat ve mühendislik çözümlerimiz hakkında bilgi almak
              veya teklif talebinde bulunmak için formu doldurun. Ekibimiz en
              kısa sürede sizinle iletişime geçecektir.
            </p>

            <div className="mt-12">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--vm-red)]">
                İletişim
              </p>

              <a
                href="tel:+905532017491"
                className="block text-[20px] font-light text-[var(--vm-navy)] transition hover:text-[var(--vm-red)]"
              >
                +90 553 201 74 91
              </a>

              <a
                href="mailto:alperen.turan@venamekanik.com"
                className="mt-2 block text-[17px] font-light text-[var(--vm-navy)] underline underline-offset-4 transition hover:text-[var(--vm-red)]"
              >
                alperen.turan@venamekanik.com
              </a>
            </div>

            <div className="mt-12">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--vm-red)]">
                Bizi Takip Edin
              </p>

              <div className="relative z-20 flex flex-wrap gap-7 text-[16px] font-light text-[var(--vm-navy)] pointer-events-auto">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[var(--vm-red)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="grid gap-7">
            <div className="grid gap-7 md:grid-cols-2">
              <label className="block">
                <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--vm-muted)]">
                  Ad Soyad
                </span>
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="h-14 w-full border border-transparent bg-[#e9e6df] px-5 text-[15px] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)] focus:border-[var(--vm-red)]"
                />
              </label>

              <label className="block">
                <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--vm-muted)]">
                  Telefon
                </span>
                <input
                  type="tel"
                  placeholder="05*********"
                  className="h-14 w-full border border-transparent bg-[#e9e6df] px-5 text-[15px] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)] focus:border-[var(--vm-red)]"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--vm-muted)]">
                Şirket İsmi
              </span>
              <input
                type="text"
                placeholder="Şirket İsmini Giriniz"
                className="h-14 w-full border border-transparent bg-[#e9e6df] px-5 text-[15px] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)] focus:border-[var(--vm-red)]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--vm-muted)]">
                Mesaj
              </span>
              <textarea
                rows={7}
                placeholder="Mesajınızı buraya yazınız..."
                className="w-full resize-none border border-transparent bg-[#e9e6df] px-5 py-5 text-[15px] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)] focus:border-[var(--vm-red)]"
              />
            </label>

            <label className="flex items-center gap-3 text-[10px] font-medium text-[var(--vm-muted)]">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[var(--vm-red)]"
              />
              <span>KVKK Aydınlatma Metni’ni okudum ve kabul ediyorum.</span>
            </label>

            <button
              type="button"
              className="flex h-16 w-full items-center justify-center bg-[var(--vm-red)] text-[12px] font-bold uppercase tracking-[0.26em] text-white transition hover:opacity-85"
            >
              Gönder
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
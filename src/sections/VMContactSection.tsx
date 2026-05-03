export default function VMContactSection() {
  return (
    <section id="iletisim" className="bg-[var(--vm-cream)]">
      <div className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
           <div className="hidden overflow-hidden bg-[#d9d9d9] shadow-[0_24px_60px_rgba(0,23,65,0.08)] lg:block">
  <img
    src="/images/contact/contact-facility.jpg"
    alt="Vena Mekanik endüstriyel tesis uygulama alanı"
    className="h-full min-h-[420px] w-full object-cover"
  />
</div>

            <div className="bg-[#fffaf0] px-8 py-10 shadow-[0_24px_60px_rgba(0,23,65,0.06)] md:px-12 md:py-12">
              <h2 className="max-w-[420px] text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--vm-navy)] md:text-[40px]">
                Formu Doldurun Projeniz Hakkında Görüşelim
              </h2>

              <form className="mt-9 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="AD SOYAD"
                  className="h-12 w-full border border-transparent bg-white px-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/65 focus:border-[var(--vm-red)]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="TELEFON"
                  className="h-12 w-full border border-transparent bg-white px-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/65 focus:border-[var(--vm-red)]"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="ŞİRKET"
                  className="h-12 w-full border border-transparent bg-white px-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/65 focus:border-[var(--vm-red)]"
                />

                <textarea
                  name="message"
                  placeholder="MESAJINIZ"
                  rows={6}
                  className="w-full resize-none border border-transparent bg-white px-5 py-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-navy)] outline-none transition placeholder:text-[var(--vm-muted)]/65 focus:border-[var(--vm-red)]"
                />

                <label className="flex items-start gap-3 pt-1 text-[10px] font-medium leading-5 text-[var(--vm-muted)]">
                  <input
                    type="checkbox"
                    className="mt-1 h-3.5 w-3.5 shrink-0 accent-[var(--vm-red)]"
                  />
                  <span>KVKK aydınlatma metnini okudum ve kabul ediyorum.</span>
                </label>

                <button
                  type="button"
                  className="mt-3 flex h-12 w-full items-center justify-center bg-[var(--vm-red)] text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:opacity-85"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--vm-cream-soft)] px-6 py-10 md:py-12">
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-[22px] font-bold leading-snug tracking-[-0.03em] text-[var(--vm-navy)] md:text-[28px]">
            Her aşamada güven ve ustalıkla, vizyonunuzu hayata geçiriyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
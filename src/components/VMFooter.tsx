import Link from "next/link";

const footerLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Referanslarımız", href: "/referanslarimiz" },
  { label: "İletişim", href: "/iletisim" },
];

export default function VMFooter() {
  return (
    <footer className="bg-[var(--vm-navy)] px-6 pb-8 pt-12 text-white md:pb-10 md:pt-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.25fr_1fr_0.8fr_0.7fr] lg:gap-16">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Vena Mekanik"
            >
              <img
                src="/images/logos/vena-logo-white.svg"
                alt="Vena Mekanik"
                className="h-12 w-auto object-contain md:h-16"
              />
            </Link>

            <p className="mt-7 max-w-[330px] text-[13px] font-light leading-7 text-white/58">
              Vena Mekanik, uzman kadrosuyla modern tesisat ve mühendislik
              alanında yüksek verimli, güvenilir ve sürdürülebilir çözümler
              sunan çözüm ortağınızdır.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-6 py-7 md:rounded-none md:border-0 md:bg-transparent md:p-0">
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/65">
              İletişim
            </h3>

            <div className="space-y-4 text-[13px] leading-6 text-white/62">
              <a
                href="tel:+905532017491"
                className="block transition hover:text-white"
              >
                +90 553 201 74 91
              </a>

              <a
                href="mailto:info@venamekanik.com"
                className="block transition hover:text-white"
              >
                info@venamekanik.com
              </a>

              <p>
                Pendik / İstanbul <br />
                Türkiye
              </p>
            </div>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-6 py-7 md:rounded-none md:border-0 md:bg-transparent md:p-0">
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/65">
              Linkler
            </h3>

            <nav className="grid grid-cols-2 gap-4 md:flex md:flex-col">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/62 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/65">
              Bize Ulaşın
            </h3>

            <div className="flex items-center gap-3">
             

              <a
                href="https://www.instagram.com/venamekanik/"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[12px] font-bold text-white/70 transition hover:border-white hover:bg-white hover:text-[var(--vm-navy)]"
              >
                i
              </a>

              <a
                href="https://www.linkedin.com/company/vena-mekanik/?viewAsMember=true"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[12px] font-bold text-white/70 transition hover:border-white hover:bg-white hover:text-[var(--vm-navy)]"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-7 text-center text-[11px] leading-5 text-white/42 md:mt-14 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© 2026 Vena Mekanik. Tüm hakları saklıdır.</p>

          <p>
            <a
              href="https://www.isfikir.com"
              target="_blank"
              rel="noopener noreferrer"
              className="silver-shine font-semibold"
            >
              İş Fikir Reklam Ajansı
            </a>
          </p>

          <p>Web tasarım ve yazılım altyapısı Next.js ile geliştirilmiştir.</p>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "ANASAYFA", href: "/" },
  { label: "HAKKIMIZDA", href: "/hakkimizda" },
  { label: "HİZMETLERİMİZ", href: "/hizmetlerimiz" },
  { label: "REFERANSLARIMIZ", href: "/referanslarimiz" },
  { label: "İLETİŞİM", href: "/iletisim" },
];

export default function VMHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="relative z-50 w-full bg-[var(--vm-cream)]">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Vena Mekanik"
          onClick={closeMenu}
        >
          <img
            src="/images/logos/vena-logo.svg"
            alt="Vena Mekanik"
            className="h-11 w-auto object-contain md:h-12"
          />
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                  active
                    ? "text-[var(--vm-red)]"
                    : "text-[var(--vm-navy)] hover:text-[var(--vm-red)]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[var(--vm-red)] transition-all duration-300 ${
                    active ? "w-5" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Masaüstü sağ alan */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+905062007401"
            className="text-[11px] font-semibold tracking-[0.02em] text-[var(--vm-navy)] transition hover:text-[var(--vm-red)]"
          >
            📞 +90 506 200 74 01
          </a>
        </div>

        {/* Mobil menü butonu */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative flex h-10 w-10 items-center justify-center border border-[var(--vm-border)] text-[var(--vm-navy)] transition hover:border-[var(--vm-red)] lg:hidden"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition duration-300 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition duration-300 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobil açılır menü */}
      <div
        className={`absolute left-0 top-full z-40 w-full overflow-hidden bg-[var(--vm-cream)] px-6 shadow-[0_24px_60px_rgba(0,23,65,0.14)] transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen
            ? "max-h-[520px] border-t border-[var(--vm-border)] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1180px] py-7">
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border-b border-[var(--vm-border)] py-4 text-[13px] font-bold uppercase tracking-[0.12em] transition ${
                    active
                      ? "text-[var(--vm-red)]"
                      : "text-[var(--vm-navy)] hover:text-[var(--vm-red)]"
                  }`}
                >
                  <span>{item.label}</span>

                  <span
                    className={`text-[14px] transition ${
                      active
                        ? "text-[var(--vm-red)]"
                        : "text-[var(--vm-muted)]"
                    }`}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-7">
            <a
              href="tel:+905062007401"
              onClick={closeMenu}
              className="flex h-12 items-center justify-center border border-[var(--vm-border)] bg-white text-[12px] font-bold tracking-[0.08em] text-[var(--vm-navy)] transition hover:border-[var(--vm-red)] hover:text-[var(--vm-red)]"
            >
              +90 506 200 74 01
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
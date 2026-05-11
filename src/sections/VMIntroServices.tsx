"use client";

import { useState } from "react";

const services = [
  {
    title: "Sıhhi Tesisat ve Altyapı Sistemleri",
    image: "/images/services/sihhi-tesisat.jpg",
    alt: "Vena Mekanik sıhhi tesisat ve altyapı sistemleri",
  },
  {
    title: "Isıtma Sistemleri",
    image: "/images/services/isitma-sistemleri.jpg",
    alt: "Vena Mekanik ısıtma sistemleri uygulamaları",
  },
  {
    title: "Soğutma Sistemleri",
    image: "/images/services/sogutma-sistemleri.jpg",
    alt: "Vena Mekanik soğutma sistemleri uygulamaları",
  },
  {
    title: "Havalandırma Sistemleri",
    image: "/images/services/havalandirma-sistemleri.jpg",
    alt: "Vena Mekanik havalandırma sistemleri uygulamaları",
  },
  {
    title: "Yangın Koruma ve Söndürme Çözümleri",
    image: "/images/services/yangin-koruma.jpg",
    alt: "Vena Mekanik yangın koruma ve söndürme sistemleri",
  },
  {
    title: "Bina Otomasyonu ve Kontrol Sistemleri",
    image: "/images/services/bina-otomasyonu.jpg",
    alt: "Vena Mekanik bina otomasyonu ve kontrol sistemleri",
  },
  {
    title: "Mekanik Projelendirme ve Danışmanlık",
    image: "/images/services/mekanik-projelendirme.jpg",
    alt: "Vena Mekanik mekanik projelendirme ve danışmanlık hizmetleri",
  },
];

export default function VMIntroServices() {
  const [activeService, setActiveService] = useState(0);

  const selectedService = services[activeService];

  return (
    <section
      id="hizmetlerimiz"
       className="bg-white px-6 pb-20 pt-14 md:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <h1 className="w-full max-w-[1120px] text-[28px] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--vm-navy)] md:text-[40px] lg:text-[44px] xl:text-[46px]">
          Projelerinizi yüksek{" "}
          <span className="text-[var(--vm-red)]">
            mühendislik standartlarıyla
          </span>{" "}
          buluşturarak, anahtar teslim mekanik taahhüt hizmetleri sağlamaktayız.
        </h1>

        {/* Mobil düzen: başlık / görsel / butonlar */}
        <div className="mt-9 md:hidden">
          <div className="aspect-[1.16/1] overflow-hidden bg-[#d9d9d9]">
            <img
              key={selectedService.image}
              src={selectedService.image}
              alt={selectedService.alt}
              className="h-full w-full object-cover transition duration-500"
            />
          </div>

          <div className="mt-5 flex flex-col gap-2.5">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className={`flex min-h-12 w-full items-center justify-between border px-4 py-3 text-left text-[13px] font-semibold leading-snug transition ${
                    isActive
                      ? "border-[var(--vm-red)] bg-[var(--vm-red)] text-white"
                      : "border-[var(--vm-border)] bg-white text-[var(--vm-navy)]"
                  }`}
                >
                  <span>{service.title}</span>

                  <span
                    className={`ml-4 h-2 w-2 shrink-0 rounded-full ${
                      isActive ? "bg-white" : "bg-[var(--vm-red)]"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Masaüstü düzen: sol liste / sağ görsel */}
        <div className="mt-16 hidden items-start gap-12 md:grid lg:grid-cols-[1fr_520px] lg:gap-20">
          <div className="pt-2">
            <ul className="border-y border-[var(--vm-border)]">
              {services.map((service, index) => {
                const isActive = activeService === index;

                return (
                  <li key={service.title}>
                    <button
                      type="button"
                      onClick={() => setActiveService(index)}
                      className={`group flex w-full items-center justify-between border-b border-[var(--vm-border)] py-5 text-left text-[15px] transition-colors last:border-b-0 ${
                        isActive
                          ? "font-bold text-[var(--vm-navy)]"
                          : "font-normal text-[var(--vm-muted)] hover:text-[var(--vm-navy)]"
                      }`}
                    >
                      <span>{service.title}</span>

                      <span
                        className={`ml-4 h-[7px] w-[7px] shrink-0 rounded-full transition-colors ${
                          isActive
                            ? "bg-[var(--vm-red)]"
                            : "bg-transparent group-hover:bg-[var(--vm-red)]"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[1.16/1] overflow-hidden bg-[#d9d9d9]">
              <img
                key={selectedService.image}
                src={selectedService.image}
                alt={selectedService.alt}
                className="h-full w-full object-cover transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
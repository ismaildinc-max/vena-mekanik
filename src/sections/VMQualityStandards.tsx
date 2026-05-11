"use client";

import { useState } from "react";

const qualityImages = [
  {
    src: "/images/quality/quality-1.jpg",
    alt: "Vena Mekanik teknik saha uygulaması",
  },
  {
    src: "/images/quality/quality-2.jpg",
    alt: "Vena Mekanik mekanik tesisat sistemleri",
  },
  {
    src: "/images/quality/quality-3.jpg",
    alt: "Vena Mekanik bina otomasyonu kontrol sistemleri",
  },
];

const marqueeItems = [
  "Akıllı Altyapı",
  "Modern Sistem",
  "Nitelikli Uygulama",
  "Sürekli Gelişim",
  "Kusursuz Mühendislik",
  "Kaliteli İşçilik",
];

const loopedMarqueeItems = [...marqueeItems, ...marqueeItems];

export default function VMQualityStandards() {
  const [activeImage, setActiveImage] = useState(0);

  const goPrev = () => {
    setActiveImage((current) =>
      current === 0 ? qualityImages.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveImage((current) =>
      current === qualityImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="bg-[var(--vm-navy)] px-6 py-20 text-white md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-20 overflow-hidden border-b border-white/10 pb-7">
          <div className="vm-quality-marquee flex w-max items-center gap-12 md:gap-20">
            {loopedMarqueeItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-3 text-[19px] font-light tracking-[-0.02em] text-white/80">
              Kusursuz Mühendislik
            </p>

            <h2 className="max-w-[420px] text-[42px] font-bold leading-[0.98] tracking-[-0.04em] md:text-[58px]">
              Üstün Kalite Standartları
            </h2>
          </div>

          <div className="lg:pt-2">
            <p className="max-w-[660px] text-[15px] font-light leading-8 text-white/72">
  Vena Mekanik olarak, yapıların kalıcı değerini artıran mekanik
  sistemleri; güçlü mühendislik altyapımız, uzman kadromuz ve üst
  düzey uygulama standartlarımızla hayata geçiriyoruz. Modern
  teknolojilerle entegre süreçlerimizle, projelerin her aşamasında
  güven, verimlilik ve sürdürülebilir kaliteyi garanti altına alıyoruz.
</p>

            <div className="mt-10 grid max-w-[420px] grid-cols-2 gap-10">
              <div>
                <strong className="block text-[46px] font-bold leading-none tracking-[-0.04em]">
                  7+
                </strong>
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  Sektörel Deneyim
                </span>
              </div>

              <div>
                <strong className="block text-[46px] font-bold leading-none tracking-[-0.04em]">
                  50+
                </strong>
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  Proje Tecrübesi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobil görsel slider */}
        <div className="mt-14 md:hidden">
          <div className="aspect-[0.86/1] overflow-hidden bg-white/10">
            <img
              key={qualityImages[activeImage].src}
              src={qualityImages[activeImage].src}
              alt={qualityImages[activeImage].alt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-7 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Önceki görsel"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {qualityImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`${index + 1}. görsele geç`}
                  className={`h-2 w-2 rounded-full transition ${
                    activeImage === index ? "bg-white" : "bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Sonraki görsel"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
            >
              ›
            </button>
          </div>
        </div>

        {/* Masaüstü görsel grid - mevcut yapı korunur */}
        <div className="mt-16 hidden gap-6 md:grid md:grid-cols-3">
          {qualityImages.map((image) => (
            <div
              key={image.src}
              className="aspect-[0.86/1] overflow-hidden bg-white/10"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
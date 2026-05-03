export default function VMHero() {
  return (
    <section className="vm-hero-section relative w-full overflow-hidden bg-[var(--vm-white)]">
      <div className="vm-hero-cad-layer pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <span className="vm-cad-soft-line absolute left-0 top-[24%] h-px w-[34%]" />
        <span className="vm-cad-soft-line-reverse absolute right-0 top-[24%] h-px w-[34%]" />

        <span className="vm-cad-soft-line absolute left-0 bottom-[24%] h-px w-[28%]" />
        <span className="vm-cad-soft-line-reverse absolute right-0 bottom-[24%] h-px w-[28%]" />

        <span className="vm-cad-vertical absolute left-[7%] top-[18%] h-[64%] w-px" />
        <span className="vm-cad-vertical-reverse absolute right-[7%] top-[18%] h-[64%] w-px" />

        <span className="absolute left-[7%] top-[24%] h-2 w-2 rounded-full bg-[var(--vm-red)]/65" />
        <span className="absolute right-[7%] bottom-[24%] h-2 w-2 rounded-full bg-[var(--vm-red)]/65" />
      </div>

      <div className="vm-hero-video-wrap relative z-10 w-full">
        <div className="vm-video-shell relative aspect-video overflow-hidden rounded-[22px] border border-[#001741]/20 bg-[#d9d9d9] shadow-[0_18px_45px_rgba(0,23,65,0.12)] md:rounded-[44px] md:shadow-[0_24px_60px_rgba(0,23,65,0.12)] xl:rounded-[52px]">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/vena-hero.mp4" type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-[var(--vm-navy)]/5" />
        </div>
      </div>
    </section>
  );
}
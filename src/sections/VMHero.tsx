export default function VMHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--vm-white)] md:left-1/2 md:h-[calc(100svh-72px)] md:min-h-[560px] md:w-screen md:-translate-x-1/2">
      {/* Mobil görünüm: eski kart yapısı */}
      <div className="vm-hero-video-wrap relative z-10 w-full md:hidden">
        <div className="vm-video-shell relative aspect-video overflow-hidden rounded-[22px] border border-[#001741]/20 bg-[#d9d9d9] shadow-[0_18px_45px_rgba(0,23,65,0.12)]">
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

      {/* Desktop görünüm: tam ekran slider/video */}
      <div className="absolute inset-0 hidden md:block">
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

        <div className="pointer-events-none absolute inset-0 bg-[#001741]/10" />
      </div>
    </section>
  );
}
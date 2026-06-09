"use client";

function restartVideo(video: HTMLVideoElement) {
  video.currentTime = 0;
  video.play().catch(() => {});
}

function videoLoopProps() {
  return {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto" as const,
    onEnded: (event: React.SyntheticEvent<HTMLVideoElement>) => {
      restartVideo(event.currentTarget);
    },
    onTimeUpdate: (event: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = event.currentTarget;

      if (video.duration && video.currentTime >= video.duration - 0.15) {
        restartVideo(video);
      }
    },
  };
}

export default function VMHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white md:left-1/2 md:h-[calc(100svh-72px)] md:min-h-[560px] md:w-screen md:-translate-x-1/2">
      {/* Mobil görünüm: 9:16 özel video */}
      <div className="relative h-[calc(100svh-72px)] min-h-[620px] w-full overflow-hidden md:hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          {...videoLoopProps()}
        >
          <source src="/videos/vena-hero-mobile.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-[#001741]/10" />
      </div>

      {/* Desktop görünüm: mevcut yatay video */}
      <div className="absolute inset-0 hidden md:block">
        <video className="h-full w-full object-cover" {...videoLoopProps()}>
          <source src="/videos/vena-hero.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-[#001741]/10" />
      </div>
    </section>
  );
}
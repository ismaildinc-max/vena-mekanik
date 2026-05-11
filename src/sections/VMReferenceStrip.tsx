type VMReferenceStripProps = {
  className?: string;
  sectionId?: string;
  compact?: boolean;
};

const references = [
  {
    name: "DAİKİN",
    logo: "/images/references/daikin.png",
  },
  {
    name: "AYVAZ",
    logo: "/images/references/ayvaz.png",
  },
  {
    name: "FRAENKISCHE",
    logo: "/images/references/fraenkische-logo.png",
  },
  {
    name: "GREE",
    logo: "/images/references/Gree-Electric.png",
  },
  {
    name: "WAVİN",
    logo: "/images/references/Wavin_logo.png",
  },
];

const loopedReferences = [...references, ...references];

export default function VMReferenceStrip({
  className = "",
  sectionId = "referanslarimiz",
  compact = false,
}: VMReferenceStripProps) {
  return (
    <section
      id={sectionId}
      className={`bg-white px-6 ${
        compact ? "pb-8 pt-4" : "pb-20 pt-4 md:pt-8"
      } ${className}`}
    >
      <div className="mx-auto max-w-[1180px]">
        <div className={compact ? "mb-4 text-center" : "mb-7 text-center"}>
  <span
    className={`font-bold uppercase text-[var(--vm-red)] ${
      compact
        ? "text-[10px] tracking-[0.2em]"
        : "text-[11px] tracking-[0.24em]"
    }`}
  >
    Güçlü Marka Ağı
  </span>

  <h2
    className={`font-bold leading-tight tracking-[-0.03em] text-[var(--vm-navy)] ${
      compact
        ? "mt-2 text-[20px] md:text-[26px]"
        : "mt-3 text-[24px] md:text-[34px]"
    }`}
  >
    Çözüm Ortaklarımız
  </h2>
</div>

        <div className="overflow-hidden border-y border-[var(--vm-border)] bg-white">
          <div className="vm-logo-marquee flex w-max">
            {loopedReferences.map((reference, index) => (
              <div
                key={`${reference.name}-${index}`}
                className={`group flex shrink-0 items-center justify-center border-r border-[var(--vm-border)] px-8 ${
                  compact
                    ? "h-[78px] min-w-[150px]"
                    : "h-[116px] min-w-[220px] md:min-w-[236px]"
                }`}
              >
                <img
                  src={reference.logo}
                  alt={reference.name}
                  className={`pointer-events-none w-auto object-contain opacity-55 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
                    compact
                      ? "max-h-[34px] max-w-[100px]"
                      : "max-h-[48px] max-w-[150px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
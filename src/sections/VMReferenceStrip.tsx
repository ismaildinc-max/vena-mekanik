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
    name: "GREE",
    logo: "/images/references/Gree-Electric.png",
  },
  {
    name: "FRAENKISCHE",
    logo: "/images/references/fraenkische-logo.png",
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
      className={`bg-[var(--vm-cream)] px-6 ${
        compact ? "pb-8 pt-4" : "pb-20"
      } ${className}`}
    >
      <div className="mx-auto max-w-[1180px] overflow-hidden border-y border-[var(--vm-border)] bg-gray">
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
                  compact ? "max-h-[34px] max-w-[100px]" : "max-h-[48px] max-w-[150px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
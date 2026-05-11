const contactItems = [
  {
    label: "Adres",
    value:
      "Fevzi Çakmak Muhsin Yazıcıoğlu Cad. No: 23A\nKapı No: 11 Pendik / İstanbul",
    href: "https://www.google.com/maps/search/?api=1&query=Fevzi%20%C3%87akmak%20Muhsin%20Yaz%C4%B1c%C4%B1o%C4%9Flu%20Cad.%20No%3A%2023A%20Kap%C4%B1%20No%3A%2011%20Pendik%20%C4%B0stanbul",
    icon: "map",
  },
  {
    label: "Telefon",
    value: "+90 553 201 74 91",
    href: "tel:+905532017491",
    icon: "phone",
  },
  {
    label: "E-posta",
    value: "alperen.turan@venamekanik.com",
    href: "mailto:alperen.turan@venamekanik.com",
    icon: "mail",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/venamekanik/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vena-mekanik/",
    icon: "linkedin",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 4.3 4.3l1.26-1.26a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M4 6h16v12H4V6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({ type }: { type: string }) {
  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M7.2 9.2V19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7.2 5.8v.1"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M11.5 19v-5.4c0-2.3 1.3-4.1 3.7-4.1 2.2 0 3.6 1.5 3.6 4.3V19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17 7.4v.1"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function IletisimPage() {
  return (
    <main className="bg-white text-[#061f49]">
      <section className="bg-white px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-[1180px] items-stretch gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14 2xl:max-w-[1400px]">
          <div className="lg:flex lg:min-h-[560px] lg:flex-col lg:justify-between">
            <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.26em] text-[#ef1d18]">
              İletişim
            </p>

            <h1 className="max-w-[640px] text-[31px] font-bold leading-[1.1] tracking-[-1px] text-[#061f49] md:text-[40px] lg:text-[42px] 2xl:text-[46px]">
  Detaylı bilgi ve sorularınız için iletişime geçebilirsiniz.
</h1>

            <p className="mt-6 max-w-[540px] text-[15px] leading-7 text-[#70798a] md:text-[16px]">
              Alanında uzman ekibimiz, tüm ihtiyaç ve proje talepleriniz için
              yanınızdadır. Vena Mekanik ile her zaman iletişime geçebilirsiniz.
            </p>

            <div className="mt-8 space-y-5">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.icon === "map" ? "_blank" : undefined}
                  rel={item.icon === "map" ? "noopener noreferrer" : undefined}
                  className="group flex max-w-[560px] items-start gap-5"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center text-[#ef1d18] transition duration-300 group-hover:scale-110">
                    <ContactIcon type={item.icon} />
                  </span>

                  <span>
                    <span className="block text-[13px] font-semibold uppercase tracking-[1.8px] text-[#7b8190]">
                      {item.label}
                    </span>

                    <span className="mt-1 block whitespace-pre-line text-[16px] font-semibold leading-6 text-[#061f49] transition duration-300 group-hover:text-[#ef1d18] md:text-[17px]">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-5 text-[13px] font-semibold uppercase tracking-[1.8px] text-[#7b8190]">
                Sosyal Medya
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eef1f6] bg-white text-[#061f49] transition duration-300 hover:border-[#ef1d18] hover:bg-[#ef1d18] hover:text-white"
                  >
                    <SocialIcon type={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group relative overflow-hidden rounded-[4px] border border-[#eef1f6] bg-white shadow-[0_26px_55px_rgba(6,31,73,0.10)]">
              <iframe
                title="Vena Mekanik Konum"
                src="https://www.google.com/maps?q=Fevzi%20%C3%87akmak%20Muhsin%20Yaz%C4%B1c%C4%B1o%C4%9Flu%20Cad.%20No%3A%2023A%20Kap%C4%B1%20No%3A%2011%20Pendik%20%C4%B0stanbul&output=embed"
                className="h-[420px] w-full border-0 grayscale contrast-[1.08] brightness-[0.9] transition duration-700 group-hover:grayscale-0 group-hover:brightness-100 md:h-[540px] lg:h-[560px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="pointer-events-none absolute -bottom-7 left-8 right-8 h-12 rounded-full bg-[#061f49]/10 blur-2xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
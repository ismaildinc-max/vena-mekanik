const phoneNumber = "+905532017491";
const whatsappNumber = "905532017491";
const email = "alperen.turan@venamekanik.com";

function ReferencesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h5A1.5 1.5 0 0 1 12 5.5v5A1.5 1.5 0 0 1 10.5 12h-5A1.5 1.5 0 0 1 4 10.5v-5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5.5A1.5 1.5 0 0 1 15.5 4h3A1.5 1.5 0 0 1 20 5.5v3A1.5 1.5 0 0 1 18.5 10h-3A1.5 1.5 0 0 1 14 8.5v-3Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.5A1.5 1.5 0 0 1 15.5 13h3a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-4Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16.5A1.5 1.5 0 0 1 5.5 15h5a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 10.5 20h-5A1.5 1.5 0 0 1 4 18.5v-2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
         d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12.04 2C6.58 2 2.13 6.37 2.13 11.75c0 1.94.58 3.74 1.58 5.26L2 22l5.18-1.64a10.12 10.12 0 0 0 4.86 1.24c5.46 0 9.9-4.37 9.9-9.75S17.5 2 12.04 2Zm0 17.87a8.37 8.37 0 0 1-4.28-1.18l-.3-.18-3.07.97 1-2.93-.2-.31a7.88 7.88 0 0 1-1.32-4.39c0-4.43 3.66-8.03 8.17-8.03 4.5 0 8.17 3.6 8.17 8.03 0 4.42-3.66 8.02-8.17 8.02Zm4.48-6.02c-.24-.12-1.45-.7-1.68-.78-.22-.08-.38-.12-.54.12-.16.23-.62.77-.76.93-.14.15-.28.17-.52.06-.24-.12-1.02-.37-1.94-1.18-.72-.63-1.2-1.41-1.34-1.65-.14-.23-.02-.36.1-.48.11-.1.24-.27.36-.4.12-.14.16-.24.24-.39.08-.16.04-.29-.02-.41-.06-.12-.54-1.28-.74-1.75-.2-.46-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.29-.22.23-.84.81-.84 1.97s.86 2.28.98 2.44c.12.16 1.7 2.55 4.12 3.58.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.45-.58 1.65-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function VMFloatingActions() {
  return (
    <>
      {/* Mobil dock */}
      <div className="fixed bottom-[calc(18px+env(safe-area-inset-bottom))] left-1/2 z-[90] flex -translate-x-1/2 items-center gap-4 rounded-[24px] border border-[#e9edf3] bg-white px-5 py-4 shadow-[0_12px_34px_rgba(6,31,73,0.16)] md:hidden">
        <a
          href="/referanslarimiz"
          aria-label="Referanslar"
          className="flex h-10 w-10 items-center justify-center text-[#061f49] transition duration-300 hover:-translate-y-0.5 hover:text-[var(--vm-red)]"
        >
          <ReferencesIcon />
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-10 w-10 items-center justify-center text-[#061f49] transition duration-300 hover:-translate-y-0.5 hover:text-[#25D366]"
        >
          <WhatsAppIcon />
        </a>

        <a
          href={`mailto:${email}`}
          aria-label="E-posta"
          className="flex h-10 w-10 items-center justify-center text-[#061f49] transition duration-300 hover:-translate-y-0.5 hover:text-[var(--vm-red)]"
        >
          <MailIcon />
        </a>

        <a
          href={`tel:${phoneNumber}`}
          aria-label="Telefon"
          className="flex h-10 w-10 items-center justify-center text-[#061f49] transition duration-300 hover:-translate-y-0.5 hover:text-[var(--vm-red)]"
        >
          <PhoneIcon />
        </a>
      </div>

      {/* Masaüstü WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-8 right-8 z-[90] hidden h-14 w-14 items-center justify-center rounded-[20px] border border-[#e9edf3] bg-white text-[#061f49] shadow-[0_12px_34px_rgba(6,31,73,0.16)] transition duration-300 hover:-translate-y-1 hover:text-[#25D366] md:flex"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
import Link from "next/link";

const projects = [
  {
    slug: "dikilitas-cami-projesi",
    title: "Dikilitaş Cami Projesi",
    image: "/images/projects/dikiltas-cami-1.jpg",
    location: "Beşiktaş / İstanbul",
    service: "VRF, Mekanik Tesisat, Yangın",
    area: "12.500 m2",
    status: "Tamamlandı",
  },
  {
    slug: "test-alani-sprinkler-degisimi",
    title: "Test Alanı Sprinkler Değişimi",
    image: "/images/projects/efectis-era.jpeg",
    location: "Beşiktaş / İstanbul",
    service: "VRF, Mekanik Tesisat, Yangın",
    area: "12.500 m2",
    status: "Tamamlandı",
  },
  {
    slug: "torium-ortak-alan-revizyonlari",
    title: "Torium Ortak Alan Revizyonları",
    image: "/images/projects/torium_avm.jpeg",
    location: "Beylikdüzü / İstanbul",
    service: "VRF, Mekanik Tesisat, Yangın",
    area: "12.500 m2",
    status: "Tamamlandı",
  },
  {
    slug: "referans-villa-proje",
    title: "Referans Villa Proje",
    image: "/images/projects/villa.jpeg",
    location: "Büyükçekmece / İstanbul",
    service: "Isıtma, Soğutma, Havalandırma",
    area: "3.200 m2",
    status: "Tamamlandı",
  },
  {
    slug: "referans-otel-proje",
    title: "Referans Otel Proje",
    image: "/images/projects/hotel.jpeg",
    location: "Şişli / İstanbul",
    service: "Mekanik Tesisat, Yangın, Havalandırma",
    area: "8.750 m2",
    status: "Tamamlandı",
  },
  {
    slug: "referans-residance-proje",
    title: "Referans Residance Proje",
    image: "/images/projects/residance.jpeg",
    location: "Ataşehir / İstanbul",
    service: "VRF, Isıtma, Soğutma",
    area: "10.400 m2",
    status: "Tamamlandı",
  },
  {
    slug: "referans-hastane-proje",
    title: "Referans Hastane Proje",
    image: "/images/projects/hospital.jpeg",
    location: "Pendik / İstanbul",
    service: "Havalandırma, Yangın, Mekanik Tesisat",
    area: "15.600 m2",
    status: "Tamamlandı",
  },
  {
    slug: "referans-magaza-proje",
    title: "Referans Mağaza Proje",
    image: "/images/projects/store.jpeg",
    location: "Bakırköy / İstanbul",
    service: "Klima, Havalandırma, Mekanik Tesisat",
    area: "2.150 m2",
    status: "Tamamlandı",
  },
  {
    slug: "referans-ofis-proje",
    title: "Referans Ofis Proje",
    image: "/images/projects/office.jpeg",
    location: "Maslak / İstanbul",
    service: "VRF, Mekanik Tesisat, Havalandırma",
    area: "4.850 m2",
    status: "Tamamlandı",
  },
];

export default function ReferanslarimizPage() {
  return (
    <main className="bg-[#f7f0df] text-[#061f49]">
      <section className="px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="mx-auto max-w-[780px] text-center">
            

            <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-1.8px] text-[#061f49] md:text-[64px] 2xl:text-[76px]">
              Referanslarımız ve proje öne çıkanları
            </h1>

            <p className="mx-auto mt-7 max-w-[680px] text-[16px] leading-7 text-[#647086] md:text-[18px]">
              Vena Mekanik olarak farklı ölçeklerdeki yapılarda; ısıtma,
              soğutma, havalandırma ve mekanik tesisat alanlarında güvenilir,
              verimli ve uzun ömürlü çözümler sunuyoruz.
            </p>
          </div>

          <div className="mt-20 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3 2xl:gap-x-6 2xl:gap-y-14">
            {projects.map((item) => (
              <article
                key={item.slug}
                className="group overflow-hidden rounded-[6px]"
              >
                <Link
                  href={`/referanslarimiz/${item.slug}`}
                  className="block overflow-hidden rounded-t-[6px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[320px] 2xl:h-[360px]"
                  />
                </Link>

                <div className="rounded-b-[6px] border border-[#d7d1c4] bg-[#ece7dc] px-7 py-7 shadow-[0_14px_30px_rgba(6,31,73,0.06)]">
                  <Link href={`/referanslarimiz/${item.slug}`} className="block">
                    <h2 className="text-[26px] font-bold leading-tight tracking-[-0.7px] text-[#061f49] transition duration-300 group-hover:text-[#ef1d18]">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-[14px] font-semibold uppercase tracking-[1.8px] text-[#6c7382]">
                    {item.location}
                  </p>

                  <div className="mt-8 border-t border-[#d0c9bb]">
                    <div className="flex items-start justify-between gap-4 border-b border-[#d0c9bb] py-4">
                      <span className="min-w-[120px] text-[13px] font-semibold uppercase tracking-[1.6px] text-[#7a808c]">
                        Hizmet Kapsamı
                      </span>
                      <span className="text-right text-[13px] font-semibold uppercase leading-6 tracking-[0.5px] text-[#061f49]">
                        {item.service}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 border-b border-[#d0c9bb] py-4">
                      <span className="text-[13px] font-semibold uppercase tracking-[1.6px] text-[#7a808c]">
                        Proje Alanı
                      </span>
                      <span className="text-right text-[13px] font-semibold uppercase leading-6 tracking-[0.5px] text-[#061f49]">
                        {item.area}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 border-b border-[#d0c9bb] py-4">
                      <span className="text-[13px] font-semibold uppercase tracking-[1.6px] text-[#7a808c]">
                        Mevcut Durum
                      </span>
                      <span className="text-right text-[13px] font-semibold uppercase leading-6 tracking-[0.5px] text-[#061f49]">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/referanslarimiz/${item.slug}`}
                    className="mt-7 inline-flex items-center justify-center rounded-full border border-[#061f49] px-6 py-3 text-[14px] font-semibold tracking-[0.2px] text-[#061f49] transition duration-300 hover:border-[#ef1d18] hover:bg-[#ef1d18] hover:text-white"
                  >
                    Bu Referans Hakkında Detaylar
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-5 pt-8 md:px-8 md:pt-12">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <img
            src="/images/logos/vena-logo.svg"
            alt="Vena Mekanik"
            className="w-full opacity-100"
          />
        </div>
      </section>
    </main>
  );
}
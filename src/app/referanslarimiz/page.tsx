import Link from "next/link";

const projects = [
  {
  slug: "dikilitas-cami-projesi",
  title: "Dikilitaş Cami Projesi",
  image: "/images/projects/dikiltas-cami-1.jpg",
  location: "Beşiktaş / İstanbul",
  employer: "Sinpaş GYO - Pirinçoğlu İnşaat",
  area: "793 m²",
  status: "Devam Ediyor",
},
{
  slug: "test-alani-sprinkler-degisimi",
  title: "Test Alanı Sprinkler Değişimi",
  image: "/images/projects/efectis-era.jpeg",
  location: "Dilovası / Kocaeli",
  employer: "Efectis Era Avrasya",
  area: "900 m²",
  status: "Tamamlandı",
},
{
  slug: "torium-ortak-alan-revizyonlari",
  title: "Torium Ortak Alan Revizyonları",
  image: "/images/projects/torium_avm.jpeg",
  location: "Esenyurt / İstanbul",
  employer: "Torunlar GYO",
  area: "350 m²",
  status: "Tamamlandı",
},
];

export default function ReferanslarimizPage() {
  return (
    <main className="bg-white text-[#061f49]">
      <section className="px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="mx-auto max-w-[780px] text-center">
            

            <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-1.8px] text-[#061f49] md:text-[64px] 2xl:text-[76px]">
  Referanslarımız
</h1>
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

                <div className="rounded-b-[6px] border border-[#eef1f6] bg-white px-7 py-7 shadow-[0_14px_30px_rgba(6,31,73,0.06)]">
                  <Link href={`/referanslarimiz/${item.slug}`} className="block">
                    <h2 className="text-[26px] font-bold leading-tight tracking-[-0.7px] text-[#061f49] transition duration-300 group-hover:text-[#ef1d18]">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-[14px] font-semibold uppercase tracking-[1.8px] text-[#6c7382]">
                    {item.location}
                  </p>

                  <div className="mt-8 border-t border-[#eef1f6]">
                    <div className="flex items-start justify-between gap-4 border-b border-[#eef1f6] py-4">
                      <span className="min-w-[120px] text-[13px] font-semibold uppercase tracking-[1.6px] text-[#7a808c]">
                        İşveren
                      </span>
                      <span className="text-right text-[13px] font-semibold uppercase leading-6 tracking-[0.5px] text-[#061f49]">
                        {item.employer}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 border-b border-[#eef1f6] py-4">
                      <span className="text-[13px] font-semibold uppercase tracking-[1.6px] text-[#7a808c]">
                        Proje Alanı
                      </span>
                      <span className="text-right text-[13px] font-semibold uppercase leading-6 tracking-[0.5px] text-[#061f49]">
                        {item.area}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 border-b border-[#eef1f6] py-4">
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
                    Proje Detayları
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
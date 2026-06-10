import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectHoverGallery from "@/components/ProjectHoverGallery";

const projects = [
{
  slug: "dikilitas-cami-projesi",
  title: "Dikilitaş Cami Projesi",
  image: "/images/projects/dikiltas-cami-1.jpg",
  location: "Beşiktaş / İstanbul",
  employer: "Sinpaş GYO - Pirinçoğlu İnşaat",
  area: "793 m²",
  status: "Devam Ediyor",
  category: "Mekanik Tesisat",
  eyebrow: "Proje Detayı",
  detailTitle: "Dikilitaş Cami Projesi mekanik tesisat uygulamaları",
  intro:
    "Dikilitaş Cami Projesi kapsamında yapının teknik ihtiyaçlarına uygun, güvenilir ve uzun ömürlü mekanik tesisat çözümleri uygulanmıştır.",
  content:
    "Projede sıhhi tesisat, yerden ısıtma tesisatı, VRF sistem drenajları, yağmur inişleri ve havalandırma sistemleri yer almaktadır. Uygulama aşamasında sistem verimliliği, kullanım güvenliği ve sürdürülebilir performans ön planda tutulmuştur.",
  gallery: [
    {
      image: "/images/projects/dikilitas-cami-2.jpg",
      title: "Genel Proje Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/dikilitas-cami-3.jpg",
      title: "Kuş Bakışı Mahal",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/dikilitas-cami-4.jpg",
      title: "Yapı İç Bölümü",
      category: "Fotoğraf 03",
    },
  ],
},
{
  slug: "test-alani-sprinkler-degisimi",
  title: "Test Alanı Sprinkler Değişimi",
  image: "/images/projects/efectis-era.jpeg",
  location: "Dilovası / Kocaeli",
  employer: "Efectis Era Avrasya",
  area: "900 m²",
  status: "Tamamlandı",
  category: "Yangın Tesisatı",
  eyebrow: "Proje Detayı",
  detailTitle: "Test alanı sprinkler değişimi ve sistem revizyonu",
  intro:
    "Test Alanı Sprinkler Değişimi projesinde mevcut yangın tesisatı altyapısı yenilenerek daha güvenli ve sürdürülebilir bir sistem yapısı oluşturulmuştur.",
  content:
    "Çalışma kapsamında mevcut sprinkler kullanım alanına uygun özellikte yeni sprinklerle değiştirilmiştir. Uygulama süreci, çalışan tesisin çalışma saatlerini etkilemeyecek şekilde İSG kuralları esas alınarak 12 metre yüksekliğinde çalışma alanında tamamlanmıştır.",
  gallery: [
    {
      image: "/images/projects/efectis-era-2.jpeg",
      title: "Alan Genel Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/efectis-era-3.jpeg",
      title: "Dış Genel Görünümü",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/efectis-era-4.jpg",
      title: "Dış Detay Görünüm",
      category: "Fotoğraf 03",
    },
  ],
},
{
  slug: "torium-ortak-alan-revizyonlari",
  title: "Torium Ortak Alan Revizyonları",
  image: "/images/projects/torium_avm.jpeg",
  location: "Esenyurt / İstanbul",
  employer: "Torunlar GYO",
  area: "350 m²",
  status: "Devam Ediyor",
  category: "AVM Mekanik Revizyon",
  eyebrow: "Proje Detayı",
  detailTitle: "Torium ortak alan mekanik sistem revizyonları",
  intro:
    "Torium Ortak Alan Revizyonları kapsamında yoğun kullanıma sahip alanlarda mekanik altyapının performansı ve işletme verimliliği artırılmıştır.",
  content:
    "Proje boyunca ortak WC alanlarının tamamen demonte edilerek hatlarıyla birlikte yeniden imal edilmektedir. Kullanım ömrü ve işletme sürecinde konforun artırılması hedeflenmiştir.",
  gallery: [
    {
      image: "/images/projects/torium-avm-2.jpg",
      title: "Genel Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/torium-avm-4.jpg",
      title: "Ortak Alan Genel Görünümü",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/torium-avm-3.jpg",
      title: "Genel Görünümü",
      category: "Fotoğraf 03",
    },
  ],
},
];

export default async function ReferansDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

 if (!project) {
  return (
    <main className="min-h-screen bg-white px-8 py-40 text-[#061f49]">
      <h1 className="text-4xl font-bold">Slug eşleşmedi</h1>

      <p className="mt-6 text-xl">
        Gelen slug: <strong>{slug}</strong>
      </p>

      <div className="mt-8">
        <p className="font-bold">Mevcut sluglar:</p>

        <ul className="mt-4 space-y-2">
          {projects.map((item) => (
            <li key={item.slug} className="font-mono text-sm">
              {item.slug}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);

const moreProjects = [
  ...projects.slice(currentIndex + 1),
  ...projects.slice(0, currentIndex),
].slice(0, 3);

  return (
    <main className="bg-white text-[#061f49]">
      <section className="px-5 pb-20 pt-24 md:px-8 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="overflow-hidden rounded-[4px] shadow-[0_22px_55px_rgba(6,31,73,0.12)]">
              <img
                src={project.image}
                alt={project.title}
                className="h-[460px] w-full object-cover md:h-[720px] lg:h-[780px] 2xl:h-[840px]"
              />
            </div>

            <div className="lg:pl-4">
              <p className="text-[13px] font-semibold uppercase tracking-[2px] text-[#ef1d18]">
                {project.eyebrow}
              </p>

              <h1 className="mt-4 text-[36px] font-bold uppercase leading-[1.05] tracking-[-1.2px] text-[#061f49] md:text-[52px] 2xl:text-[60px]">
  {project.title}
</h1>

              <p className="mt-6 text-[18px] font-medium leading-7 text-[#263b5f] md:text-[20px]">
  {project.detailTitle}
</p>

              <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-[#6a7280] md:text-[16px]">
  {project.intro}
</p>

              <div className="my-8 h-px w-full bg-[#eef1f6]" />

              <h2 className="text-[24px] font-semibold tracking-[-0.4px] text-[#061f49]">
                Proje Kapsamı
              </h2>

              <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-[#6a7280] md:text-[16px]">
  {project.content}
</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#eef1f6] bg-white px-4 py-2 text-[13px] font-semibold uppercase tracking-[1px] text-[#061f49]">
İşveren: {project.employer}
</span>

                <span className="rounded-full border border-[#eef1f6] px-4 py-2 text-[13px] font-semibold uppercase tracking-[1px] text-[#061f49]">
                  Proje Alanı: {project.area}
                </span>

                <span className="rounded-full border border-[#eef1f6] px-4 py-2 text-[13px] font-semibold uppercase tracking-[1px] text-[#061f49]">
                  Mevcut Durum: {project.status}
                </span>
              </div>

              <Link
                href="/referanslarimiz"
                className="mt-8 inline-flex items-center gap-3 text-[15px] font-semibold uppercase tracking-[0.8px] text-[#061f49] transition duration-300 hover:text-[#ef1d18]"
              >
                Tüm projelere dön
                <span className="text-[22px] leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="mb-8">
            <p className="text-[13px] font-semibold uppercase tracking-[2px] text-[#ef1d18]">
              Proje Galerisi
            </p>

            <h2 className="mt-3 text-[34px] font-bold uppercase leading-tight tracking-[-0.8px] text-[#061f49] md:text-[42px]">
              Projeye Ait Diğer Fotoğraflar
            </h2>
          </div>

          <ProjectHoverGallery items={project.gallery} />
        </div>
      </section>

      <section className="bg-[#061f49] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[2px] text-[#ef1d18]">
                Diğer Projeler
              </p>

              <h2 className="mt-3 text-[34px] font-bold uppercase leading-tight tracking-[-0.8px] text-white md:text-[42px]">
                Diğer Projeler
              </h2>
            </div>

            <Link
              href="/referanslarimiz"
              className="inline-flex w-fit border-b-2 border-[#ef1d18] pb-2 text-[15px] font-semibold uppercase tracking-[0.6px] text-white transition duration-300 hover:text-[#ef1d18]"
            >
              Tüm Projeleri Gör
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {moreProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/referanslarimiz/${item.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-[4px] bg-[#0b2c64]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[310px] w-full object-cover opacity-70 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.4px] text-white transition duration-300 group-hover:text-[#ef1d18]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[1.8px] text-white/45">
                  {item.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
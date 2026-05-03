import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectHoverGallery from "@/components/ProjectHoverGallery";

const projects = [
  {
    slug: "dikilitas-cami-projesi",
    title: "Dikilitaş Cami Projesi",
    image: "/images/projects/dikiltas-cami-1.jpg",
    location: "Beşiktaş / İstanbul",
    service: "VRF, Mekanik Tesisat, Yangın",
    area: "12.500 m2",
    status: "Tamamlandı",
    category: "Mekanik Tesisat",
    eyebrow: "Referans Proje",
    detailTitle: "Dikilitaş Cami Projesi mekanik tesisat uygulamaları",
    intro:
      "Dikilitaş Cami Projesi kapsamında yapının teknik ihtiyaçlarına uygun, güvenilir ve uzun ömürlü mekanik tesisat çözümleri uygulanmıştır.",
    content:
      "Proje sürecinde VRF sistemleri, yangın tesisatı ve genel mekanik altyapı çalışmaları bütüncül bir planlama ile ele alınmıştır. Uygulama aşamasında sistem verimliliği, kullanım güvenliği ve sürdürülebilir performans ön planda tutulmuştur.",
    gallery: [
      {
        image: "/images/projects/dikiltas-cami-1.jpg",
        title: "Genel Proje Görünümü",
        category: "Fotoğraf 01",
      },
      {
        image: "/images/projects/dikiltas-cami-1.jpg",
        title: "Uygulama Detayı",
        category: "Fotoğraf 02",
      },
      {
        image: "/images/projects/dikiltas-cami-1.jpg",
        title: "Mekanik Sistem Bölümü",
        category: "Fotoğraf 03",
      },
    ],
  },
  {
    slug: "test-alani-sprinkler-degisimi",
    title: "Test Alanı Sprinkler Değişimi",
    image: "/images/projects/efectis-era.jpeg",
    location: "Beşiktaş / İstanbul",
    service: "VRF, Mekanik Tesisat, Yangın",
    area: "12.500 m2",
    status: "Tamamlandı",
    category: "Yangın Tesisatı",
    eyebrow: "Referans Proje",
    detailTitle: "Test alanı sprinkler değişimi ve sistem revizyonu",
    intro:
      "Test Alanı Sprinkler Değişimi projesinde mevcut yangın tesisatı altyapısı yenilenerek daha güvenli ve sürdürülebilir bir sistem yapısı oluşturulmuştur.",
    content:
      "Çalışma kapsamında sprinkler hattı, bağlantı detayları ve sistem bileşenleri proje ihtiyaçlarına göre revize edilmiştir. Uygulama süreci, tesis güvenliğini artıracak ve sistem performansını koruyacak şekilde tamamlanmıştır.",
    gallery: [
      {
        image: "/images/projects/efectis-era.jpeg",
        title: "Alan Genel Görünümü",
        category: "Fotoğraf 01",
      },
      {
        image: "/images/projects/efectis-era.jpeg",
        title: "Sprinkler Hattı Revizyonu",
        category: "Fotoğraf 02",
      },
      {
        image: "/images/projects/efectis-era.jpeg",
        title: "Sistem Detayı",
        category: "Fotoğraf 03",
      },
    ],
  },
  {
    slug: "torium-ortak-alan-revizyonlari",
    title: "Torium Ortak Alan Revizyonları",
    image: "/images/projects/torium_avm.jpeg",
    location: "Beylikdüzü / İstanbul",
    service: "VRF, Mekanik Tesisat, Yangın",
    area: "12.500 m2",
    status: "Tamamlandı",
    category: "AVM Mekanik Revizyon",
    eyebrow: "Referans Proje",
    detailTitle: "Torium ortak alan mekanik sistem revizyonları",
    intro:
      "Torium Ortak Alan Revizyonları kapsamında yoğun kullanıma sahip alanlarda mekanik altyapının performansı ve işletme verimliliği artırılmıştır.",
    content:
      "Proje boyunca ortak alanların mevcut mekanik sistemleri değerlendirilmiş, ihtiyaç duyulan noktalarda revizyon ve iyileştirme çalışmaları gerçekleştirilmiştir. Amaç, kullanıcı konforunu artırırken sistem sürekliliğini korumaktır.",
    gallery: [
      {
        image: "/images/projects/torium_avm.jpeg",
        title: "Ortak Alan Genel Görünümü",
        category: "Fotoğraf 01",
      },
      {
        image: "/images/projects/torium_avm.jpeg",
        title: "Revizyon Uygulama Alanı",
        category: "Fotoğraf 02",
      },
      {
        image: "/images/projects/torium_avm.jpeg",
        title: "Tamamlanan Bölüm",
        category: "Fotoğraf 03",
      },
    ],
  },
  {
  slug: "referans-villa-proje",
  title: "Referans Villa Proje",
  image: "/images/projects/villa.jpeg",
  location: "Büyükçekmece / İstanbul",
  service: "Isıtma, Soğutma, Havalandırma",
  area: "3.200 m2",
  status: "Tamamlandı",
  category: "Villa Projesi",
  eyebrow: "Referans Proje",
  detailTitle: "Villa yaşam alanları için konfor odaklı mekanik çözümler",
  intro:
    "Referans Villa Proje kapsamında yaşam konforunu artıran ısıtma, soğutma ve havalandırma sistemleri uygulanmıştır.",
  content:
    "Villa ölçeğindeki projede kullanıcı konforu, enerji verimliliği ve estetik entegrasyon birlikte değerlendirilmiştir. Mekanik sistemler, yapının mimari kurgusuna uyumlu olacak şekilde planlanmıştır.",
  gallery: [
    {
      image: "/images/projects/villa.jpeg",
      title: "Villa Genel Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/villa.jpeg",
      title: "İç Mekan Uygulaması",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/villa.jpeg",
      title: "Sistem Detayı",
      category: "Fotoğraf 03",
    },
  ],
},
{
  slug: "referans-otel-proje",
  title: "Referans Otel Proje",
  image: "/images/projects/hotel.jpeg",
  location: "Şişli / İstanbul",
  service: "Mekanik Tesisat, Yangın, Havalandırma",
  area: "8.750 m2",
  status: "Tamamlandı",
  category: "Otel Projesi",
  eyebrow: "Referans Proje",
  detailTitle: "Otel yapıları için yüksek konforlu mekanik sistemler",
  intro:
    "Referans Otel Proje kapsamında misafir konforunu ve işletme sürekliliğini destekleyen mekanik tesisat çözümleri uygulanmıştır.",
  content:
    "Otel projelerinde süreklilik, sessiz çalışma, konfor ve güvenlik kritik öneme sahiptir. Bu doğrultuda havalandırma, yangın ve mekanik tesisat uygulamaları koordineli şekilde tamamlanmıştır.",
  gallery: [
    {
      image: "/images/projects/hotel.jpeg",
      title: "Otel Genel Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/hotel.jpeg",
      title: "Teknik Alan",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/hotel.jpeg",
      title: "Uygulama Detayı",
      category: "Fotoğraf 03",
    },
  ],
},
{
  slug: "referans-residance-proje",
  title: "Referans Residance Proje",
  image: "/images/projects/residance.jpeg",
  location: "Ataşehir / İstanbul",
  service: "VRF, Isıtma, Soğutma",
  area: "10.400 m2",
  status: "Tamamlandı",
  category: "Residence Projesi",
  eyebrow: "Referans Proje",
  detailTitle: "Residence projeleri için verimli iklimlendirme çözümleri",
  intro:
    "Referans Residance Proje kapsamında konut kullanıcılarına yönelik konforlu ve enerji verimli iklimlendirme çözümleri geliştirilmiştir.",
  content:
    "Projede VRF, ısıtma ve soğutma sistemleri yapının kullanım senaryolarına göre tasarlanmıştır. Amaç, farklı yaşam alanlarında dengeli iklimlendirme ve uzun ömürlü sistem performansı sağlamaktır.",
  gallery: [
    {
      image: "/images/projects/residance.jpeg",
      title: "Residence Genel Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/residance.jpeg",
      title: "İç Mekan Uygulaması",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/residance.jpeg",
      title: "Sistem Bölümü",
      category: "Fotoğraf 03",
    },
  ],
},
{
  slug: "referans-hastane-proje",
  title: "Referans Hastane Proje",
  image: "/images/projects/hospital.jpeg",
  location: "Pendik / İstanbul",
  service: "Havalandırma, Yangın, Mekanik Tesisat",
  area: "15.600 m2",
  status: "Tamamlandı",
  category: "Sağlık Yapısı",
  eyebrow: "Referans Proje",
  detailTitle: "Sağlık yapıları için güvenli mekanik tesisat uygulamaları",
  intro:
    "Referans Hastane Proje kapsamında hijyen, güvenlik ve sistem sürekliliği gerektiren mekanik tesisat çalışmaları gerçekleştirilmiştir.",
  content:
    "Sağlık yapılarında mekanik sistemler, kullanıcı güvenliği ve operasyonel süreklilik açısından kritik rol oynar. Proje kapsamında havalandırma, yangın ve genel mekanik altyapı uygulamaları bu hassasiyetlerle ele alınmıştır.",
  gallery: [
    {
      image: "/images/projects/hospital.jpeg",
      title: "Hastane Genel Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/hospital.jpeg",
      title: "Mekanik Alan",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/hospital.jpeg",
      title: "Teknik Uygulama",
      category: "Fotoğraf 03",
    },
  ],
},
{
  slug: "referans-magaza-proje",
  title: "Referans Mağaza Proje",
  image: "/images/projects/store.jpeg",
  location: "Bakırköy / İstanbul",
  service: "Klima, Havalandırma, Mekanik Tesisat",
  area: "2.150 m2",
  status: "Tamamlandı",
  category: "Ticari Alan",
  eyebrow: "Referans Proje",
  detailTitle: "Mağaza alanları için kompakt ve verimli mekanik çözümler",
  intro:
    "Referans Mağaza Proje kapsamında ticari kullanım ihtiyaçlarına uygun klima, havalandırma ve mekanik tesisat çözümleri uygulanmıştır.",
  content:
    "Mağaza projelerinde kullanıcı sirkülasyonu, iç hava kalitesi ve iklimlendirme dengesi önemlidir. Bu doğrultuda alanın işletme ihtiyaçlarına uygun, verimli ve sürdürülebilir bir sistem kurulumu hedeflenmiştir.",
  gallery: [
    {
      image: "/images/projects/store.jpeg",
      title: "Mağaza Genel Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/store.jpeg",
      title: "İç Mekan Detayı",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/store.jpeg",
      title: "Sistem Uygulaması",
      category: "Fotoğraf 03",
    },
  ],
},
{
  slug: "referans-ofis-proje",
  title: "Referans Ofis Proje",
  image: "/images/projects/office.jpeg",
  location: "Maslak / İstanbul",
  service: "VRF, Mekanik Tesisat, Havalandırma",
  area: "4.850 m2",
  status: "Tamamlandı",
  category: "Ofis Projesi",
  eyebrow: "Referans Proje",
  detailTitle: "Ofis yapıları için konforlu çalışma alanı çözümleri",
  intro:
    "Referans Ofis Proje kapsamında çalışma alanlarında konforu artıran VRF, havalandırma ve mekanik tesisat sistemleri uygulanmıştır.",
  content:
    "Ofis projelerinde iç hava kalitesi, sessiz çalışma ve enerji verimliliği önceliklidir. Proje kapsamında mekanik sistemler, çalışma alanlarının günlük kullanım ritmine uygun şekilde planlanmıştır.",
  gallery: [
    {
      image: "/images/projects/office.jpeg",
      title: "Ofis Genel Görünümü",
      category: "Fotoğraf 01",
    },
    {
      image: "/images/projects/office.jpeg",
      title: "Çalışma Alanı Detayı",
      category: "Fotoğraf 02",
    },
    {
      image: "/images/projects/office.jpeg",
      title: "Teknik Uygulama",
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
    <main className="min-h-screen bg-[#f7f0df] px-8 py-40 text-[#061f49]">
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
    <main className="bg-[#f7f0df] text-[#061f49]">
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

              <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#6a7280] md:text-[17px]">
                {project.intro}
              </p>

              <div className="my-8 h-px w-full bg-[#d8d0bf]" />

              <h2 className="text-[24px] font-semibold tracking-[-0.4px] text-[#061f49]">
                Proje Kapsamı
              </h2>

              <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-[#6a7280] md:text-[16px]">
  {project.content}
</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#d8d0bf] px-4 py-2 text-[13px] font-semibold uppercase tracking-[1px] text-[#061f49]">
                  {project.service}
                </span>

                <span className="rounded-full border border-[#d8d0bf] px-4 py-2 text-[13px] font-semibold uppercase tracking-[1px] text-[#061f49]">
                  {project.area}
                </span>

                <span className="rounded-full border border-[#d8d0bf] px-4 py-2 text-[13px] font-semibold uppercase tracking-[1px] text-[#061f49]">
                  {project.status}
                </span>
              </div>

              <Link
                href="/referanslarimiz"
                className="mt-8 inline-flex items-center gap-3 text-[15px] font-semibold uppercase tracking-[0.8px] text-[#061f49] transition duration-300 hover:text-[#ef1d18]"
              >
                Tüm referanslara dön
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
                Diğer Referanslar
              </h2>
            </div>

            <Link
              href="/referanslarimiz"
              className="inline-flex w-fit border-b-2 border-[#ef1d18] pb-2 text-[15px] font-semibold uppercase tracking-[0.6px] text-white transition duration-300 hover:text-[#ef1d18]"
            >
              Tüm Referansları Gör
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
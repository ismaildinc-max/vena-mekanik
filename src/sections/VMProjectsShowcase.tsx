"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Dikilitaş Cami Projesi",
    location: "Beşiktaş / İstanbul",
    image: "/images/projects/dikiltas-cami-1.jpg",
    details: [
      {
        label: "Hizmet Kapsamı",
        value: "VRF, Mekanik Tesisat, Yangın",
      },
      {
        label: "Proje Alanı",
        value: "12.500 M2",
      },
      {
        label: "Mevcut Durum",
        value: "Tamamlandı",
      },
    ],
  },
  {
    title: "Test Alanı Sprinkler Değişimi",
    location: "Beşiktaş / İstanbul",
    image: "/images/projects/efectis-era.jpeg",
    details: [
      {
        label: "Hizmet Kapsamı",
        value: "VRF, Mekanik Tesisat, Yangın",
      },
      {
        label: "Proje Alanı",
        value: "12.500 M2",
      },
      {
        label: "Mevcut Durum",
        value: "Tamamlandı",
      },
    ],
  },
  {
    title: "Torium Ortak Alan Revizyonları",
    location: "Beşiktaş / İstanbul",
    image: "/images/projects/torium_avm.jpeg",
    details: [
      {
        label: "Hizmet Kapsamı",
        value: "VRF, Mekanik Tesisat, Yangın",
      },
      {
        label: "Proje Alanı",
        value: "12.500 M2",
      },
      {
        label: "Mevcut Durum",
        value: "Tamamlandı",
      },
    ],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,23,65,0.10)]">
      <div className="aspect-[1.28/1] overflow-hidden bg-[#d9d9d9]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-6 py-6">
        <h3 className="text-[20px] font-bold leading-tight tracking-[-0.02em] text-[var(--vm-navy)]">
          {project.title}
        </h3>

        <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-muted)]">
          {project.location}
        </p>

        <div className="mt-8 border-y border-[var(--vm-border)]">
          {project.details.map((detail) => (
            <div
              key={detail.label}
              className="grid grid-cols-[112px_1fr] items-center border-b border-[var(--vm-border)] py-3 last:border-b-0 md:grid-cols-[120px_1fr]"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[var(--vm-muted)] md:text-[10px]">
                {detail.label}
              </span>

              <span className="text-right text-[9px] font-bold uppercase tracking-[0.04em] text-[var(--vm-navy)] md:text-[10px]">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function VMProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const startX = useRef(0);
  const currentX = useRef(0);

  const goPrev = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      goNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isDragging]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startX.current = event.clientX;
    currentX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    currentX.current = event.clientX;
    const distance = currentX.current - startX.current;

    setDragOffset(distance);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const distance = currentX.current - startX.current;
    const threshold = 55;

    if (distance > threshold) {
      goPrev();
    }

    if (distance < -threshold) {
      goNext();
    }

    setDragOffset(0);
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="bg-[var(--vm-cream)] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--vm-muted)]">
            Büyük altyapı, estetik dokunuş ve mühendislik
          </p>

          <h2 className="mx-auto max-w-[620px] text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--vm-navy)] md:text-[48px]">
            Mühendislikte Yüksek Standartlar
          </h2>
        </div>

        {/* Mobil proje slider */}
        <div className="mt-12 overflow-hidden md:hidden">
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            className="cursor-grab overflow-hidden active:cursor-grabbing [touch-action:pan-y]"
          >
            <div
              className={`flex ${
                isDragging
                  ? "transition-none"
                  : "transition-transform duration-700 ease-in-out"
              }`}
              style={{
                transform: `translateX(calc(-${
                  activeProject * 100
                }% + ${dragOffset}px))`,
              }}
            >
              {projects.map((project) => (
                <div key={project.image} className="w-full shrink-0">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.image}
                type="button"
                onClick={() => setActiveProject(index)}
                aria-label={`${index + 1}. projeye geç`}
                className={`h-2 w-2 rounded-full transition ${
                  activeProject === index
                    ? "bg-[var(--vm-red)]"
                    : "bg-[var(--vm-navy)]/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Masaüstü proje grid */}
        <div className="mt-14 hidden gap-8 md:grid md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.image} project={project} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#projelerimiz"
            className="flex h-12 items-center justify-center bg-[var(--vm-red)] px-10 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:opacity-85"
          >
            Projelerimiz
          </a>
        </div>
      </div>
    </section>
  );
}
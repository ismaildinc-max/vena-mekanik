"use client";

type GalleryItem = {
  image: string;
  title: string;
  category?: string;
};

export default function ProjectHoverGallery({
  items,
}: {
  items: GalleryItem[];
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 md:h-[520px] md:flex-row md:gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[5px] transition-all duration-500 ease-out md:flex-[1_1_0%] md:hover:flex-[2.4_1_0%]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-5 md:p-7">
              {item.category && (
                <p className="text-[12px] font-semibold uppercase tracking-[1.8px] text-white/70">
                  {item.category}
                </p>
              )}

              <h3 className="mt-2 text-[20px] font-semibold leading-tight text-white md:text-[24px]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
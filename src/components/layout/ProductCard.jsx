import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * Pure presentational product card (Tailwind CSS only, no state, no custom CSS).
 *
 * <ProductCard
 *   title="Shipping"
 *   description="Automated nationwide shipping at ₹20/500gms*"
 *   icon={PackageCheck}
 *   image="https://.../Ship-Now-1-1.webp"
 *   href="/signup"
 * />
 *
 * Pass `className` / `style` to control it from the parent
 * (e.g. grid sizing, or style={{ animationDelay: "120ms" }} for a stagger).
 */
export default function ProductCard({
  title,
  description,
  icon: Icon,
  image,
  imageAlt = "",
  href = "#",
  cta = "Sign Up",
  className = "",
  style,
}) {
  return (
    <article
      style={style}
      className={`group flex flex-col overflow-hidden rounded-[18px] bg-white shadow-sm motion-safe:transition motion-safe:duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-900/20 ${className}`}
    >
      {/* Artwork */}
      <div className="aspect-[6/5] w-full overflow-hidden bg-[#f3f3f7]">
        {image && (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-bottom"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
        <div className="flex items-center gap-2.5">
          {Icon && <Icon aria-hidden="true" size={26} className="shrink-0 text-violet-600" />}

          <h3 className="flex-1 text-xl font-semibold tracking-tight text-[#14141f]">
            {title}
          </h3>

          <a
            href={href}
            aria-label={`Explore ${title}`}
            className="grid size-[30px] shrink-0 place-items-center rounded-full border border-[#dcdce3] bg-[#f0f0f3] text-slate-500 outline-none motion-safe:transition motion-safe:duration-200 group-hover:rotate-45 group-hover:border-violet-600 group-hover:bg-violet-600 group-hover:text-white focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
          >
            <ArrowUpRight size={15} />
          </a>
        </div>

        <p className="mb-5 mt-3.5 flex-1 text-[15px] leading-relaxed text-slate-500">
          {description}
        </p>

        <a
          href={href}
          className="group/cta inline-flex items-center gap-2 self-start rounded text-[15px] text-violet-600 outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
        >
          {cta}
          <ArrowRight
            size={17}
            className="motion-safe:transition-transform motion-safe:duration-200 group-hover/cta:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}

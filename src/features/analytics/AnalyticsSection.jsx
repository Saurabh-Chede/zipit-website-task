// White report card with the dotted-underline title. `hint` shows as a tooltip on the title.
export default function AnalyticsSection({ id, title, hint, children }) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className="rounded-md border border-line bg-white px-5 pb-5 pt-5"
    >
      <h2
        id={`${id}-title`}
        title={hint}
        className="mb-4 w-fit text-[17px] font-semibold text-ink underline decoration-dotted decoration-ink/70 underline-offset-[5px]"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

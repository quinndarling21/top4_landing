import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-3xl text-white/80",
        align === "center" && "text-center",
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/50">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-pretty text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-white/65 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

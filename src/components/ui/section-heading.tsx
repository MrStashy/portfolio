import { cn } from "~/lib/utils";

type SectionHeadingProps = {
  title: string;
  subTitle?: string;
  className?: string;
  email?: string;
};

export function SectionHeading({
  title,
  subTitle,
  className,
  email
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 md:flex-row md:items-baseline md:gap-5`}
    >
      <h2
        className={`gradient-text text-center text-24-40 font-extrabold ${cn(className)}`}
      >
        {title}
      </h2>
      {subTitle && (
        <div>
        <p className="text-center text-lg font-light text-muted-foreground">
          {subTitle}
        </p><a className="cursor-pointer" href="mailto:bax.will@googlemail.com">{email}</a>
        </div>
      )}
    </div>
  );
}

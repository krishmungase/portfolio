import Image from "next/image";

import { cn } from "@/lib/utils";
import { GridEffect } from "@/components/kico/effects/grid-effect";
import { TagLine } from "@/components/kico/ui/heading";
import { Status } from "@/components/kico/ui/status";
import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { DotEffect } from "@/components/kico/effects/dot-effect";
import { ButtonLink } from "@/components/kico/ui/button-link";

type ProjectCardProps = {
  className?: string;
  borderGradient?: boolean;
  tag: string;
  src: string;
  title: string;
  description: string;
  status: "done" | "inProgress" | "pending";
  blurEffect?: boolean;
  gridEffect?: boolean;
  dotEffect?: boolean;
  leftButton?: ButtonType;
  rightButton?: ButtonType;
};

type ButtonType = {
  href: string;
  title: string;
};

export const ProjectCard = ({
  className,
  borderGradient = false,
  tag,
  src,
  title,
  description,
  status,
  blurEffect,
  gridEffect,
  dotEffect,
  leftButton,
  rightButton,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "transition-transform duration-300 hover:scale-105 hover:shadow-2xl group",
        "md:flex even:md:translate-y-[7rem] p-[1px] rounded-[2.5rem] h-fit",
        borderGradient ? "bg-conic-gradient" : "bg-stroke",
        className,
        "max-w-[350px]"
      )}
    >
      <div className="relative p-4 bg-card rounded-[2.4375rem] overflow-hidden xl:p-6">
        {blurEffect && <BlurEffect />}
        {dotEffect && <DotEffect />}
        {gridEffect && <GridEffect />}

        <div className="relative z-1">
          <div className="flex items-center justify-between max-w-[27rem] mb-4 md:mb-6">
            <TagLine>{tag}</TagLine>
            <Status status={status} />
          </div>

          <div className="mb-4 flex justify-center">
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <Image
                className="w-full object-cover"
                src={src}
                width={320}
                height={140}
                alt="tv image"
                style={{ maxHeight: 140 }}
              />
            </div>
          </div>

          <h4 className="h4 mb-2 font-bold text-base text-gray-400">{title}</h4>

          <p className="body-2 text-n-4 mb-2 text-sm">{description}</p>

          {(leftButton || rightButton) && (
            <div className="mt-2 flex items-center justify-between gap-4">
              {leftButton ? (
                <ButtonLink
                  buttonHref={leftButton.href}
                  buttonTitle={leftButton.title}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
                />
              ) : (
                <div />
              )}

              {rightButton && (
                <ButtonLink
                  buttonHref={rightButton.href}
                  buttonTitle={rightButton.title}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

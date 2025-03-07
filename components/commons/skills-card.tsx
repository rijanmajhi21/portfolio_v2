import clsx from "clsx";
import Image from "next/image";
import React, { FunctionComponent } from "react";

export interface SkillCardProps {
  image: string;
  skillTitle: string;
  description: string;
  className?: string;
  height: number;
  width: number;
}

const SkillCard: FunctionComponent<SkillCardProps> = ({
  image,
  description,
  skillTitle,
  height,
  width,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 border-4 border-neutral-800 rounded-lg w-full md:w-1/3 px-4 md:px-8 py-4 md:py-10",
        className
      )}
    >
      <div className="relative py-2 h-10 w-20">
        <Image src={image} alt={skillTitle} height={height} width={width} />
      </div>
      <div className="">
        <div className="py-2 font-anton md:text-start lg:text-title-4 md:text-body-base">
          <span>{skillTitle}</span>
        </div>
        <div className="text-body-big py-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

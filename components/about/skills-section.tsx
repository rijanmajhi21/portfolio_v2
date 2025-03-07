import React, { FunctionComponent } from "react";
import Button from "../commons/buttons/button";
import { SKILLS } from "@/constants/static-contents";
import SkillCard from "../commons/skills-card";

const SkillSection: FunctionComponent = () => {
  return (
    <section className="c-container flex flex-col gap-10 mx-auto pb-10">
      <div className="flex w-full justify-between">
        <div className="text-center md:text-start font-anton text-[5vw] md:text-[3vw] lg:text-[2.5vw]">
          <span>What I can do for you:</span>
        </div>
        <Button text="Let's start a project!" href={""} variant="dark" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {SKILLS.map((skill, index) => (
          <SkillCard
            key={index}
            image={skill.image}
            skillTitle={skill.skillTitle}
            description={skill.description}
            height={skill.height}
            width={skill.width}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;

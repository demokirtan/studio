
'use client';

export function SkillsMarquee({ skills }: { skills: string[] }) {
  const marqueeSkills = [...skills, ...skills]; // Duplicate for seamless loop

  const SkillPill = ({ skill }: { skill: string }) => (
    <div className="mx-3 shrink-0 rounded-full border border-primary/20 bg-secondary/50 px-6 py-3 text-lg font-medium text-primary shadow-md">
      {skill}
    </div>
  );

  return (
    <div className="relative flex w-full flex-col gap-4 overflow-hidden">
      <div className="flex min-w-full shrink-0 items-center">
        <div className="animate-marquee flex min-w-full shrink-0 items-center">
          {marqueeSkills.map((skill, index) => (
            <SkillPill key={`fw-${index}`} skill={skill} />
          ))}
        </div>
        <div className="animate-marquee flex min-w-full shrink-0 items-center" aria-hidden="true">
          {marqueeSkills.map((skill, index) => (
            <SkillPill key={`fw-clone-${index}`} skill={skill} />
          ))}
        </div>
      </div>
      <div className="flex min-w-full shrink-0 items-center">
        <div className="animate-marquee-reverse flex min-w-full shrink-0 items-center">
          {marqueeSkills.map((skill, index) => (
            <SkillPill key={`rev-${index}`} skill={skill} />
          ))}
        </div>
        <div className="animate-marquee-reverse flex min-w-full shrink-0 items-center" aria-hidden="true">
          {marqueeSkills.map((skill, index) => (
            <SkillPill key={`rev-clone-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

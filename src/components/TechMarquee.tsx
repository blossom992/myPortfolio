import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
];

function TechMarquee() {
  const items = [...technologies, ...technologies];

  return (
    <section className="border-y border-white/10 py-6">
      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_25s_linear_infinite]">
          {items.map(({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="mx-6 flex items-center gap-3 text-zinc-400"
            >
              <Icon className="text-xl" />
              <span className="text-sm font-medium whitespace-nowrap">
                {name}
              </span>
              <span className="ml-3 text-purple-400">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechMarquee;
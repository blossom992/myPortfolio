import { Link } from "react-router-dom";

type ProjectDetailProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
  projectUrl?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
};

function ProjectDetail({
  number,
  title,
  category,
  description,
  details,
  projectUrl,
  linkLabel = "View project ↗",
  image,
  imageAlt,
}: ProjectDetailProps) {
  return (
    <main className="min-h-screen bg-[#08070c] text-white">
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-10 md:px-12 lg:px-20 lg:pt-16">
        <Link
          to="/work"
          className="inline-flex text-sm font-semibold text-zinc-400 transition hover:text-purple-300"
        >
          ← Back to things I've made
        </Link>

        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
            {number} / {category}
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 md:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="text-sm text-zinc-500">{detail.label}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        {image && (
          <div className="mt-10">
            <a
              href="#project-preview"
              className="inline-flex items-center rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-purple-400/30 hover:text-purple-300"
            >
              View concept ↓
            </a>
          </div>
        )}

        {projectUrl && (
          <div className="mt-10">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-purple-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-purple-400"
            >
              {linkLabel}
            </a>
          </div>
        )}

        {image && (
          <div
            id="project-preview"
            className="mt-20 scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-[#0e0c15]"
          >
            <img
              src={image}
              alt={imageAlt ?? `${title} project preview`}
              className="h-auto w-full"
            />
          </div>
        )}

        <div className="mt-20 rounded-3xl border border-white/10 bg-[#0e0c15] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-purple-300">
            Project story
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            This project page is where I'll document the thinking, design
            decisions, challenges, and things I learned while building this
            project.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";

function Exploring() {
  return (
    <main className="min-h-screen bg-[#08070c] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-12 lg:px-20">
  <Reveal mode="repeat" direction="up">
  <div className="mb-12 max-w-2xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
      02 — What I'm figuring out
    </p>

    <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
      I'm curious about a lot of things.
    </h2>

    <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">
      These are some of the things I'm currently exploring, learning,
      and trying to understand better.
    </p>
  </div>
  </Reveal>
  <div className="grid gap-5 md:grid-cols-2">
    {/* Design */}
    <Reveal mode="repeat" direction="up">
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-7 transition hover:-translate-y-1 hover:border-purple-300/20 md:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/10 bg-purple-500/10 text-lg text-purple-300">
        ✦
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        Design
      </h3>

      <p className="mt-3 max-w-md leading-7 text-zinc-400">
        Learning how to create interfaces that don't just look good,
        but feel intentional and easy to use.
      </p>
    </article>
</Reveal>
    {/* Frontend */}
    
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-7 transition hover:-translate-y-1 hover:border-purple-300/20 md:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/10 bg-purple-500/10 text-lg text-purple-300">
        &lt;/&gt;
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        Frontend
      </h3>

      <p className="mt-3 max-w-md leading-7 text-zinc-400">
        Going deeper with React, TypeScript, and the little details
        that make an interface feel really good.
      </p>
    </article>
    

    {/* AI */}
    <Reveal mode="repeat" direction="up">
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-7 transition hover:-translate-y-1 hover:border-purple-300/20 md:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/10 bg-purple-500/10 text-lg text-purple-300">
        ◇
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        AI
      </h3>

      <p className="mt-3 max-w-md leading-7 text-zinc-400">
        Exploring how AI can become part of the way I think, design,
        build, and solve problems.
      </p>
    </article>
    </Reveal>

    {/* Content */}
    <Reveal mode="repeat" direction="up">
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-7 transition hover:-translate-y-1 hover:border-purple-300/20 md:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/10 bg-purple-500/10 text-lg text-purple-300">
        ♡
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        Content
      </h3>

      <p className="mt-3 max-w-md leading-7 text-zinc-400">
        Figuring out how to tell stories, share what I'm learning,
        and make tech feel a little more human.
      </p>
    </article>
    </Reveal>

  </div>
  {/* What I work with */}
<section className="mx-auto max-w-6xl px-6 py-24 md:px-12 lg:px-20">
  <div className="max-w-2xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
      02.5 — What I work with
    </p>

    <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
      Tools I use to turn ideas into interfaces.
    </h2>

    <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">
      A mix of design, frontend development, and tools that help me
      take an idea from a rough thought to something people can use.
    </p>
  </div>
  <div className="mt-12 grid gap-5 md:grid-cols-3">
    {/* Design */}
    <Reveal mode="repeat" direction="left">
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-7 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
        01 / Design
      </p>

      <h3 className="mt-5 text-2xl font-bold">
        Designing the experience.
      </h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {["Figma", "UI Design", "Prototyping"].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
    </Reveal>

    {/* Frontend */}
    <Reveal mode="repeat" direction="right" delay={100}>
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-7 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
        02 / Frontend
      </p>

      <h3 className="mt-5 text-2xl font-bold">
        Bringing ideas to life.
      </h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "TypeScript",
          "Tailwind CSS",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
    </Reveal>

    {/* Tools */}
    <Reveal mode="repeat" direction="left" delay={150}>
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-7 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
        03 / Tools
      </p>

      <h3 className="mt-5 text-2xl font-bold">
        Making the process work.
      </h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "Git",
          "GitHub",
          "Vercel",
          "Canva",
          "Webflow",
          "WordPress",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
    </Reveal>
  </div>
</section>
{/* Back home */}
        <Link
          to="/"
          className="mt-12 inline-flex text-sm font-semibold text-zinc-400 transition hover:text-purple-300"
        >
          ← Back home
        </Link>

      </section>
    </main>
  );
}

export default Exploring;
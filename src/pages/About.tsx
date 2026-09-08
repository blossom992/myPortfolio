import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
  return (
    <main className="min-h-screen bg-[#08070c] text-white">
      <Navbar />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:px-12 lg:px-20 lg:pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
          03 — About me
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          I think I've always wanted to build things that respond to people.
        </h1>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-12 lg:px-20">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 md:left-[9px]" />

          {/* 01 — Robotics */}
          <article className="relative pb-20 pl-10 md:pl-16">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-purple-300/60 bg-[#08070c]" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
              01 / Robotics
            </p>

            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              Before software, there was robotics.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              I was fascinated by the idea of building healthcare technology
              that could respond to signals from the brain, and even everyday
              household appliances that could operate intelligently.
            </p>
          </article>

          {/* 02 — Software */}
          <article className="relative pb-20 pl-10 md:pl-16">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-purple-300/60 bg-[#08070c]" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
              02 / Software
            </p>

            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              I found another way to build.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              As I explored software engineering, I realized I wanted
              something where I could actually see my ideas come to life.
            </p>
          </article>

          {/* 03 — Frontend */}
          <article className="relative pb-20 pl-10 md:pl-16">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-purple-300/60 bg-[#08070c]" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
              03 / Frontend
            </p>

            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              This became my space to make ideas visible.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Frontend gave me a way to take an idea, figure out how I wanted
              it to look and feel, and then turn it into something I could
              actually interact with.
            </p>
          </article>

          {/* 04 — Design */}
          <article className="relative pb-20 pl-10 md:pl-16">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-purple-300/60 bg-[#08070c]" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
              04 / Design
            </p>

            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              Then I started caring about the experience.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Design became part of the process too. I started caring about
              how things looked, how people moved through them, and whether
              the experience actually made sense before I wrote the code.
            </p>
          </article>

          {/* 05 — Design Engineer */}
          <article className="relative pb-20 pl-10 md:pl-16">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-purple-300 bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.35)]" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
              05 / Design Engineer
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Figuring out the idea.
              <br />
              Designing the experience.
              <br />
              Building the thing.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Somewhere along the way, I realized this is what being a Design
              Engineer means to me — bringing together the way I think, the
              way I design, and the way I build.
            </p>
          </article>

          {/* What's next */}
          <article className="relative pl-10 md:pl-16">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-purple-300/40 bg-[#08070c]" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
              What's next?
            </p>

            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              Maybe robotics isn't finished with me yet.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              I'm still curious about where software can take me, and I'm
              hoping I might find a way to start exploring that intersection
              with robotics here in Nigeria.
            </p>

            <p className="mt-6 text-sm font-semibold text-zinc-300">
              Fingers crossed. 🤞🏽
            </p>
          </article>
        </div>

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

export default About;
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.png";
import bulkupImage from "../assets/bulkup.png";
import fintrackImage from "../assets/fintrack.png";
import TechMarquee from "../components/TechMarquee";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <main className="min-h-screen bg-[#08070c] text-white">
      <Navbar />

      {/* HERO */}
      <section className="mx-auto grid min-h-[calc(100vh-96px)] max-w-350 items-center gap-16 px-6 py-14 md:px-12 lg:grid-cols-2 lg:px-20">

        {/* Left */}
        <Reveal mode="repeat" delay={100}>
          <div className="relative z-10 lg:pl-6">
          <p className="mb-6 text-sm font-semibold uppercase  tracking-wide text-purple-300">
            Hey there! 👋🏽
          </p>

          <h1 className="text-6xl font-extrabold leading-[0.95] tracking-[-4px] md:text-8xl">
            I like figuring
            <br />
            <span className="text-purple-400">things out.</span>
          </h1>

          <div className="mt-7 h-0.5 w-20 bg-purple-400"></div>

          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400">
            I'm{" "}
            <span className="font-semibold text-purple-200">
              Blossom
            </span>{" "}
            — a Design Engineer who enjoys turning ideas into digital
            experiences that are thoughtful, functional, accessible and made
            for real people.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-zinc-300">
            <span>&lt;/&gt; Design Engineer</span>
            <span className="text-zinc-600">|</span>
            <span>◇ Builder</span>
            <span className="text-zinc-600">|</span>
            <span>✦ Experimenter</span>
            <span className="text-zinc-600">|</span>
            <span>+ Problem Solver</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/Work"
              className="rounded-lg bg-purple-500 px-6 py-3 text-sm font-bold transition hover:-translate-y-1 hover:bg-purple-400"
            >
              See my work ↗
            </a>

            <a
              href="/Contact"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-bold transition hover:-translate-y-1 hover:border-purple-400"
            >
              Let's connect ♡
            </a>
          </div>
        </div>
</Reveal>
        {/* Right */}
        {/* Right */}
<div className="relative flex min-h-[500px] items-center justify-center">

  {/* Soft background glow */}
  <div className="absolute h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-3xl" />

  {/* Illustration */}
  <Reveal mode="repeat" delay={200}>
<div className="relative z-10 flex items-end justify-center">
    <img
      src={heroImg}
      alt="Illustration of Blossom working between design and code"
      className="w-[420px] max-w-full object-contain md:w-[500px]"
    />
  </div>
  </Reveal>
</div>
      </section>
    < Reveal mode="repeat" delay={150}>
      <TechMarquee />
      </Reveal>
      
      {/* Things I've made */}
{/* Things I've made */}
<section className="mx-auto max-w-6xl px-6 py-24 md:px-12 lg:px-20">
  <Reveal mode="repeat" direction="up"> 
  
  <div className="mb-12">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
      01 — Things I've made
    </p>

    <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
      Things I've built, designed, and figured out.
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
      A collection of projects where I've explored ideas, solved problems,
      and turned designs into things people can actually use.
    </p>
  </div>
</Reveal>

  <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0e0c15] lg:grid-cols-2">
    {/* Project information */}
    <Reveal mode="repeat" direction="left">
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
        Featured project
      </p>

      <h3 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        BulkUp
      </h3>

      <p className="mt-6 text-lg leading-8 text-zinc-300">
        What if getting school essentials didn't have to mean everyone
        buying the same things separately — and paying more for it?
      </p>

      <p className="mt-5 text-base leading-7 text-zinc-500">
        BulkUp started from that question. I'm exploring how collective
        buying can make everyday essentials more accessible, while keeping
        the experience simple for the people using it.
      </p>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Role
        </p>
        <p className="mt-2 text-sm text-zinc-300">
          Design · Product · Frontend
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Built with
        </p>
        <p className="mt-2 text-sm text-zinc-300">
          React · TypeScript · Tailwind
        </p>
      </div>

      <a
        href="#"
        className="mt-9 inline-flex w-fit rounded-lg bg-purple-500 px-5 py-3 text-sm font-bold transition hover:-translate-y-1 hover:bg-purple-400"
      >
        View case study ↗
      </a>
    </div>
    </Reveal>
    <Reveal mode="repeat" direction="up">
      {/* Project visual */}
    <div className="flex min-h-[500px] items-center justify-center bg-[#0b0913] p-10 md:p-14">
      <img
        src={bulkupImage}
        alt="BulkUp app"
        className="w-[220px] max-w-full md:w-[260px]"
      />
    </div>
      </Reveal>
  </article>
  {/* FinTrack */}
<article className="mt-8 grid overflow-hidden rounded-3xl border border-white/10 bg-[#0e0c15] lg:grid-cols-2">
  
  {/* Project visual */}
 <Reveal mode="repeat" direction="up">
   <div className="flex min-h-[420px] items-center justify-center bg-[#0b0913] p-8 md:p-12">
    <div className="w-full max-w-xl overflow-hidden rounded-xl border border-white/10 shadow-2xl">
      <img
        src={fintrackImage}
        alt="FinTrack finance dashboard"
        className="w-full object-cover"
      />
    </div>
  </div>
  </Reveal>

  {/* Project information */}
  <Reveal mode="repeat" direction="up">
    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
      02 — FinTrack
    </p>

    <h3 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
      FinTrack
    </h3>

    <p className="mt-6 text-lg leading-8 text-zinc-300">
      A simple finance tracker built to make everyday spending easier to
      understand.
    </p>

    <p className="mt-5 text-base leading-7 text-zinc-500">
      A frontend project focused on turning financial information into a
      clear and easy-to-navigate experience.
    </p>

    <div className="mt-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
        Focus
      </p>

      <p className="mt-2 text-sm text-zinc-300">
        Finance · Frontend
      </p>
    </div>

    <div className="mt-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
        Built with
      </p>

      <p className="mt-2 text-sm text-zinc-300">
        React · TypeScript · Tailwind
      </p>
    </div>

   <a
  href="https://fin-track-chi.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex text-sm font-bold text-purple-300 transition hover:text-white"
>
  View project ↗
</a>
  </div>
    </Reveal>
</article>
{/* Other projects */}
<section className="mt-20">
 <Reveal mode="repeat" direction="up">
   <div className="mb-10">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
      03 — Other things I've made
    </p>

    <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
      More things I've been experimenting with.
    </h3>
  </div>

  <div className="grid gap-6 md:grid-cols-2">

    {/* Foodies */}
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-8 transition hover:-translate-y-1 hover:border-purple-300/20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
        03 — Foodies
      </p>

      <h4 className="mt-4 text-3xl font-bold">
        Foodies
      </h4>

      <p className="mt-4 leading-7 text-zinc-400">
        A frontend project where I took a Figma design and brought it
        to life as a responsive web experience.
      </p>

      <div className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Focus
        </p>

        <p className="mt-2 text-sm text-zinc-300">
          UI · Frontend
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Built with
        </p>

        <p className="mt-2 text-sm text-zinc-300">
          React · Tailwind
        </p>
      </div>

      <a
        href="https://www.figma.com/proto/kgEVJYvrFBHqjrwNqXJVj9/freeCodeCamp?node-id=318-5&p=f&t=SWzkyXUCFVNsYNiV-1&scaling=scale-down&content-scaling=fixed&page-id=91%3A2"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex text-sm font-bold text-purple-300 transition hover:text-white"
      >
        View project ↗
      </a>
    </article>

    {/* Flashcards */}
    <article className="rounded-3xl border border-white/10 bg-[#0e0c15] p-8 transition hover:-translate-y-1 hover:border-purple-300/20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
        04 — Flashcards
      </p>

      <h4 className="mt-4 text-3xl font-bold">
        Flashcards
      </h4>

      <p className="mt-4 leading-7 text-zinc-400">
        A React project built around learning, interaction, and creating
        a simple experience that feels easy to use.
      </p>

      <div className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Focus
        </p>

        <p className="mt-2 text-sm text-zinc-300">
          React · Interaction
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Built with
        </p>

        <p className="mt-2 text-sm text-zinc-300">
          React · Tailwind
        </p>
      </div>

      <a
        href="https://it-project-amber.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex text-sm font-bold text-purple-300 transition hover:text-white"
      >
        View project ↗
      </a>
    </article>

  </div>
  </Reveal>
</section>
</section>


      {/* Values */}
      {/* What I'm figuring out */}
<section className="mx-auto max-w-6xl px-6 py-24 md:px-12 lg:px-20">
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

  <div className="grid gap-5 md:grid-cols-2">

    {/* Design */}
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

    {/* Content */}
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
</section>
    </main>
  );
}

export default Home;
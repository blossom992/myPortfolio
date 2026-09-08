import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bulkupImage from "../assets/bulkup.png";

function Work() {
  return (
    <main className="min-h-screen bg-[#08070c] text-white">
      <Navbar />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-12 lg:px-20 lg:pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
          01 — Things I've made
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Things I've built, designed, and figured out.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          A collection of projects where I've explored ideas, solved
          problems, and turned designs into things people can actually use.
        </p>
      </section>

      {/* BulkUp */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-12 lg:px-20">
        <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0e0c15]">
          {/* Project visual */}
          <div className="flex min-h-[520px] items-center justify-center bg-[#0b0913] px-6 py-16 md:min-h-[650px]">
            <img
              src={bulkupImage}
              alt="BulkUp app splash screen"
              className="w-[260px] max-w-full md:w-[310px]"
            />
          </div>

          {/* Project information */}
          <div className="grid gap-10 p-7 md:grid-cols-[1fr_auto] md:p-10 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-purple-300">
                Featured project
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                BulkUp
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base">
                What if getting school essentials didn't have to mean everyone
                buying the same things separately — and paying more for it?
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
                BulkUp started from that question. I'm exploring how
                collective buying can make everyday essentials more
                accessible, while keeping the experience simple for the people
                using it.
              </p>

              <Link
                to="/work/bulkup"
                className="mt-7 inline-flex items-center rounded-xl border border-purple-300/30 px-5 py-3 text-sm font-semibold text-purple-200 transition hover:-translate-y-0.5 hover:border-purple-300/60 hover:bg-purple-500/10"
              >
                Explore BulkUp ↗
              </Link>
            </div>

            {/* Project details */}
            <div className="grid h-fit gap-6 text-sm sm:grid-cols-2 md:min-w-[260px] md:grid-cols-1">
              <div>
                <p className="text-zinc-500">My role</p>
                <p className="mt-1 text-zinc-200">
                  Design · Product · Frontend
                </p>
              </div>

              <div>
                <p className="text-zinc-500">Built with</p>
                <p className="mt-1 text-zinc-200">
                  React · TypeScript · Tailwind
                </p>
              </div>

              <div>
                <p className="text-zinc-500">Type</p>
                <p className="mt-1 text-zinc-200">Product concept</p>
              </div>

              <div>
                <p className="text-zinc-500">Status</p>
                <p className="mt-1 text-zinc-200">Exploring</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Other projects */}
      <section className="mx-auto max-w-6xl px-6 pb-32 md:px-12 lg:px-20">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
          More things I've made
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* FinTrack */}
          <Link
            to="/work/fintrack"
            className="group rounded-2xl border border-white/10 bg-[#0e0c15] p-7 transition hover:-translate-y-1 hover:border-purple-300/30"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">
              Finance · React
            </p>

            <h3 className="mt-4 text-2xl font-bold">FinTrack</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A finance tracker designed to make keeping up with your money
              feel simple and clear.
            </p>

            <span className="mt-6 inline-block text-sm font-semibold text-zinc-300 transition group-hover:text-purple-300">
              Explore project ↗
            </span>
          </Link>

          {/* Foodies */}
          <Link
  to="/work/foodies"
  className="group rounded-2xl border border-white/10 bg-[#0e0c15] p-7 transition hover:-translate-y-1 hover:border-purple-300/30"
>
  <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">
    UI Design · Figma
  </p>

  <h3 className="mt-4 text-2xl font-bold">Foodies</h3>

  <p className="mt-3 text-sm leading-6 text-zinc-400">
    A food-focused interface where I explored layout, visual hierarchy,
    and creating a simple experience around discovering food.
  </p>

  <span className="mt-6 inline-block text-sm font-semibold text-zinc-300 transition group-hover:text-purple-300">
    View design ↗
  </span>
</Link>

          {/* Flashcards */}
          <Link
            to="/work/flashcards"
            className="group rounded-2xl border border-white/10 bg-[#0e0c15] p-7 transition hover:-translate-y-1 hover:border-purple-300/30"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">
              React · Interaction
            </p>

            <h3 className="mt-4 text-2xl font-bold">Flashcards</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A small React project exploring interactive learning and
              component-based interfaces.
            </p>

            <span className="mt-6 inline-block text-sm font-semibold text-zinc-300 transition group-hover:text-purple-300">
              Explore project ↗
            </span>
          </Link>
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

export default Work;
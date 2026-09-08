import Navbar from "../components/Navbar";

function Contact() {
  return (
    <main className="min-h-screen bg-[#08070c] text-white">
      <Navbar />

      {/* Contact */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-24 md:px-12 lg:px-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
          04 — Let's talk
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Let's build something worth talking about.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          I'm always open to interesting conversations, collaborations,
          opportunities, and ideas worth exploring.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:hellodevblossom@gmail.com"
            className="inline-flex items-center rounded-xl bg-purple-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-400"
          >
            Let's talk ↗
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12 flex flex-wrap items-center gap-6 text-sm  text-zinc-400">
          <a
            href="https://www.linkedin.com/in/blossom-ilonze-399a69389?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-purple-500"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/blossom992"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-purple-300"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:hellodevblossom@gmail.com"
            className="transition hover:text-purple-300"
          >
            Email ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
          <p className="font-semibold text-zinc-300">
            dev<span className="text-purple-400">blossom</span>{" "}
            <span className="text-purple-300">✦</span>
          </p>

          <p>Made with curiosity and a little chaos.</p>

          <p>© 2026</p>
        </div>
      </footer>
    </main>
  );
}

export default Contact;
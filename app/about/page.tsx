import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-zinc-100 p-4">
      <article className="mx-auto">
        <Link
          href="/"
          className="text-sm font-medium text-[#ada2fc] hover:underline"
        >
          ← Back to the checker
        </Link>

        <header className="mt-8 border-b border-[#232425] pb-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            What did the template leave out?
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            A prototype for catching missing abstracts and figure descriptions
            before a patent team reuses an updated drafting template.
          </p>
        </header>

        <div className="mt-8 space-y-9 text-base leading-7 text-zinc-300">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              One template change can affect many drafts
            </h2>

            <p>
              Page White Farrer, a patent law firm, uses Solve Intelligence to
              build drafting templates for different clients and technologies.
              That workflow inspired a question I wanted to explore: when a team
              changes a template, how can it see what the new drafts are missing
              before using it on a new application?
            </p>

            <Link
              target="_blank"
              href="https://www.solveintelligence.com/case-studies/page-white-farrer"
              className="inline-block text-sm text-[#ada2fc] underline underline-offset-4"
            >
              Read the Page White Farrer case study
            </Link>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              What the checker does
            </h2>

            <p>
              The checker runs through a set of fictional inventions. It looks
              for an abstract in each generated draft and a description for each
              figure in the source material. When something is missing, it shows
              the source and the draft side by side so you can see the exact
              omission.
            </p>
          </section>

          <section className="rounded-xl border border-[#30251a] bg-[#15110d] p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-[#f5bd6a]">
              Try it with the battery cooling draft
            </h2>

            <p className="mt-3">
              Keep <strong>Include abstract</strong> on, switch off{" "}
              <strong>Include figure descriptions</strong>, and click{" "}
              <strong>Run checks</strong>. The abstract stays in the draft, but
              the checker flags the descriptions for FIG. 1 and FIG. 2 as
              missing. The duplicate payment sample still passes because it has
              an abstract and no figures to check.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              Where it could fit in Solve Intelligence
            </h2>

            <p>
              A patent attorney could run an edited template on a few saved
              examples before sharing the update with their team. A finding like{" "}
              <em>“FIG. 2 is missing a description”</em> gives them a specific
              place to start their review.
            </p>

            <Link
              href="/"
              className="mt-2 inline-flex rounded-lg bg-[#ada2fc] px-4 py-2 text-sm font-semibold text-black hover:bg-violet-200"
            >
              Try the checker
            </Link>
          </section>
        </div>
      </article>
    </section>
  );
}

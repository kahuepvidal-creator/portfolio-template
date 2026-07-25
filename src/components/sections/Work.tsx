import { Container } from '@/components/primitives/Container'
import { FadeIn } from '@/components/primitives/FadeIn'

// Seus projetos. Troque nome/descrição e coloque as imagens em /public/assets
// (proporção 4:3). Adicione ou remova itens à vontade.
const projects = [
  { n: '01', name: 'Project One', desc: 'Short description of the project', img: '/assets/case-placeholder.svg' },
  { n: '02', name: 'Project Two', desc: 'What it was and what you did', img: '/assets/case-placeholder.svg' },
  { n: '03', name: 'Project Three', desc: 'A line about the outcome', img: '/assets/case-placeholder.svg' },
]

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          {/* Coluna esquerda — travada no scroll */}
          <div className="md:sticky md:top-[calc(50svh_-_3.5rem)] md:h-fit md:self-start">
            <h2 className="font-display text-h1 italic leading-[0.95] text-ink">
              <span className="block">selected</span>
              <span className="block">work</span>
            </h2>
          </div>

          {/* Coluna direita — projetos aparecem no scroll */}
          <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((p) => (
              <FadeIn key={p.n}>
                <article className="group">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-h3 text-ink-subtle">
                      ({p.n})
                    </span>
                    <h3 className="font-display text-h2 leading-none text-ink">
                      {p.name}
                    </h3>
                  </div>
                  <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-card bg-paper-sunken">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute left-5 top-4 text-sm font-medium text-white [text-shadow:0_1px_5px_rgba(0,0,0,0.55)]">
                      {p.desc}
                    </span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

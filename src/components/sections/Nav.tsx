import { Container } from '@/components/primitives/Container'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: "Let's talk", href: '#contact' },
]

export function Nav() {
  return (
    <header className="relative z-40">
      <Container className="flex items-center justify-between py-6">
        <a
          href="#top"
          className="font-display text-xl leading-none tracking-tight text-ink"
        >
          Your Name
        </a>
        <nav className="flex items-center gap-6 sm:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            Résumé
          </a>
        </nav>
      </Container>
    </header>
  )
}

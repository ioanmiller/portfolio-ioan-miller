const projects = [
  {
    name: 'Sentinel',
    description:
      'A static-analysis tool that flags insecure crypto usage in Python codebases.',
    outcome:
      'Scanned 40+ open-source repos and surfaced 120 real misconfigurations.',
    href: '#',
  },
  {
    name: 'PhishNet',
    description:
      'An ML classifier that scores inbound emails for phishing indicators.',
    outcome: '96% precision on a held-out set; deployed as a browser extension.',
    href: '#',
  },
  {
    name: 'KeyForge',
    description:
      'A hardware-backed password manager built on a Raspberry Pi and a TPM.',
    outcome: 'Final-year dissertation project graded at 82 (first class).',
    href: '#',
  },
]

export function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        Featured Projects
      </h2>
      <ul className="mt-6 flex flex-col gap-8">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <h3 className="font-mono text-sm font-medium text-foreground underline decoration-border underline-offset-4 group-hover:decoration-foreground">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground text-pretty">
                {project.outcome}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

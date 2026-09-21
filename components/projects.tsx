const projects = [
  {
    name: 'AI Governance Framework (Concept)',
    description:
      "Businesses are adopting AI faster than they can govern it responsibly, leaving them exposed to unethical use, opaque decision-making, and threats they're not set up to catch. In my third-year dissertation, I designed a concept framework mapping out the concrete steps a business needs to take to govern its AI systems, from initial risk assessment through to catching threats as they emerge. It's built around three core risk areas — ethical misuse, lack of transparency, and threat detection.",
    outcome:
      'Gives businesses a practical starting point instead of a blank page.',
    href: '#',
    image: {
      src: '/projects/ai-governance-framework.png',
      alt: 'Architecture diagram of the U.S. AI Governance Framework Case Study Explorer, showing identified gaps in AI oversight, proposed governance oversight, three risk tiers with illustrative case studies, and a selected case study detail view.',
      caption: 'The diagram shows the architecture of the case finder.',
    },
  },
  {
    name: 'SOC Analyst SIEM Lab',
    description:
      "Used a Wazuh manager to deploy a Wazuh agent to a monitored endpoint. The agent connects back to the manager, and I configured File Integrity Monitoring by editing the agent's config file so changes to chosen directories are logged.",
    outcome:
      'Alerts surface on the Wazuh dashboard, showing a working end-to-end detection pipeline.',
    href: '#',
    image: {
      src: '/projects/soc-siem-lab.png',
      alt: 'Wazuh SIEM dashboard showing File Integrity Monitoring for a Windows endpoint, with donut charts for most active users, actions, and files added, modified, and deleted, plus a Wazuh agent window confirming the agent is running and connected to the manager.',
      caption:
        'The Wazuh dashboard showing File Integrity Monitoring alerts from the monitored endpoint.',
    },
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
            {project.image ? (
              <figure className="mt-4">
                <img
                  src={project.image.src || '/placeholder.svg'}
                  alt={project.image.alt}
                  className="w-full rounded-md border border-border"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {project.image.caption}
                </figcaption>
              </figure>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

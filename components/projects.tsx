const projects = [
  {
    name: 'AI Governance Framework (Concept)',
    description:
      "Businesses are adopting AI faster than they can govern it responsibly, leaving them exposed to unethical use, opaque decision-making, and threats they're not set up to catch. In my third-year dissertation, I designed a concept framework mapping out the concrete steps a business needs to take to govern its AI systems, from initial risk assessment through to catching threats as they emerge. It's built around three core risk areas — ethical misuse, lack of transparency, and threat detection.",
    outcome:
      'Gives businesses a practical starting point instead of a blank page.',
    href: 'https://docs.google.com/document/d/1sdQ7Ing9rS5LmVXnE6ZgwTaw6_1L3bBq/edit?usp=sharing&ouid=117032266366284758779&rtpof=true&sd=true',
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
    name: 'Caravan Website Backend',
    description:
      'The caravan business had a front-end site but no backend to actually make it work. I contributed to building it, working across HTML, PHP, and C++ to get the core logic running.',
    outcome:
      'A functioning backend, built across three languages, that turned static pages into something the business could actually use.',
    href: 'https://drive.google.com/file/d/1J73TE2LkE9jtf-JGiKGwuqc5H26_h6sZ/view?usp=sharing',
    githubHref: 'https://github.com/ioanmiller/Caravan-Website',
    image: {
      src: '/projects/caravan-backend.png',
      alt: 'Architecture diagram of the Caravan Business Platform, showing a client layer with the customer browser and HTML/CSS front-end, a PHP application layer with the web server and application modules, a C++ core logic layer with a CLI bridge and business engine, and a data and operations layer with a relational database, file store, and staff admin.',
      caption:
        'The diagram shows the three-language backend architecture (HTML / PHP / C++).',
    },
  },
  {
    name: 'Wireless Sensor Network Simulator',
    description:
      "This project uses Cooja, a Java-based wireless sensor network simulator, to model an IoT environment consisting of a sink node acting as an MQTT broker and multiple sensor nodes — including temperature sensors and motion detectors functioning as publishers and subscribers. The objective is to configure and verify MQTT communication across the simulated network, then capture traffic using Cooja's packet sniffer and export it to Wireshark. The analysis identifies security vulnerabilities such as plaintext data transmission, missing authentication, and unencrypted TCP communication.",
    outcome:
      'A simulated MQTT network with captured traffic and documented security findings.',
    href: 'https://docs.google.com/document/d/1ERb3cw8JCvs9r8-WRJ7GWLvlo8WNdP3I/edit?usp=sharing&ouid=117032266366284758779&rtpof=true&sd=true',
    image: {
      src: '/projects/wireless-sensor-network-simulator.png',
      alt: 'Cooja wireless sensor network simulation and security analysis workflow showing MQTT communication between sensor nodes and a sink node, packet capture, Wireshark inspection, and identified security vulnerabilities.',
      caption:
        'The diagram shows the Cooja MQTT simulation, packet capture workflow, and security findings.',
    },
  },
]

export function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        Featured Academic / Homelabs Projects
      </h2>
      <ul className="mt-6 flex flex-col gap-8">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
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
            {project.githubHref ? (
              <a
                href={project.githubHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xs text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                View the GitHub repository
              </a>
            ) : null}
            {project.image ? (
              <figure className="mt-4">
                <a
                  href={project.image.src || '/placeholder.svg'}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} image in a new tab`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <img
                    src={project.image.src || '/placeholder.svg'}
                    alt={project.image.alt}
                    className="w-full rounded-md border border-border group-hover:opacity-90"
                    loading="lazy"
                  />
                </a>
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

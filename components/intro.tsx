export function Intro() {
  return (
    <header>
      <h1 className="font-mono text-base font-medium tracking-tight text-foreground text-pretty sm:text-lg">
        {
          "Hi, I'm Ioan Miller — I am a recent graduate with a Computer Security degree (2:1) and I'm the kind of person who wants to know how things break so I can figure out how to stop it happening."
        }
      </h1>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground text-pretty">
        {
          "I achieved my ISO 27001:2022 Internal Auditor cert along the way, and outside of my academic work I'm usually on a Linux distro learning tools or expanding my knowledge with online courses. Most recently I did a labs exercise creating a SIEM lab using Wazuh and learning the fundamentals of AWS. Lately I've been just as obsessed with AI, especially the governance side of it. Always tinkering, always learning."
        }
      </p>
    </header>
  )
}

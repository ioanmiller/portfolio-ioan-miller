const posts = [
  {
    title:
      'Arduino Project - Fire Alarm ',
    date: '2025',
    href: 'https://docs.google.com/document/d/1b_R1hPZEaxtqI4dRSw0sf8B5KklfIKG5/edit?usp=sharing&ouid=117032266366284758779&rtpof=true&sd=true',
  },
  {
    title: 'Network and Security — Packet Tracer',
    date: '2026',
    href: 'https://docs.google.com/document/d/1h9Rv3WhT_nnmFI8sr4AFcn1lmglimg14/edit?usp=sharing&ouid=117032266366284758779&rtpof=true&sd=true',
  },
  {
    title: 'Ethical Hacking',
    date: '2026',
    href: 'https://docs.google.com/document/d/1B7uJgrkGMoxFRjXQy8eOkXlDXrPaFHB3/edit?usp=sharing&ouid=117032266366284758779&rtpof=true&sd=true',
  },
]

export function Writing() {
  return (
    <section aria-labelledby="writing-heading">
      <h2
        id="writing-heading"
        className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        Writing
      </h2>
      <ul className="mt-6 flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.title}>
            <a
              href={post.href}
              target={post.href.startsWith('http') ? '_blank' : undefined}
              rel={post.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex flex-col gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="text-sm leading-relaxed text-foreground underline decoration-border underline-offset-4 group-hover:decoration-foreground text-pretty">
                {post.title}
              </span>
              <span className="font-mono text-xs text-muted-foreground tabular-nums">
                {post.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

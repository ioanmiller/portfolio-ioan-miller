const posts = [
  {
    title: 'Why constant-time comparison actually matters',
    date: '2025',
    href: '#',
  },
  {
    title: 'Reversing a firmware update: a beginner walkthrough',
    date: '2024',
    href: '#',
  },
  {
    title: 'Notes on threat modeling for small teams',
    date: '2024',
    href: '#',
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

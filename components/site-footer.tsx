export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-8">
      <ul className="flex flex-col gap-2 font-mono text-sm sm:flex-row sm:gap-6">
        <li>
          <a
            href="mailto:ioanmiller2005@gmail.com"
            className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            Ioanmiller2005@gmail.com
          </a>
        </li>
        <li>
          <a
            href="http://www.linkedin.com/in/ioan-miller-7b5913294"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-8">
      <ul className="flex flex-col gap-2 font-mono text-sm sm:flex-row sm:gap-6">
        <li>
          <a
            href="mailto:jordan@ellis.dev"
            className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            jordan@ellis.dev
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
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

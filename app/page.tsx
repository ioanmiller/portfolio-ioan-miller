import { Intro } from '@/components/intro'
import { Projects } from '@/components/projects'
import { Writing } from '@/components/writing'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-xl px-6 py-16 sm:py-24">
      <div className="flex flex-col gap-16 sm:gap-20">
        <Intro />
        <Projects />
        <Writing />
        <SiteFooter />
      </div>
    </main>
  )
}

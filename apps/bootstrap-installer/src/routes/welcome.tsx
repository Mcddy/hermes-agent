import { type CSSProperties } from 'react'

import { HackeryButton } from '../components/hackery-button'
import { startInstall } from '../store'

/*
 * Welcome screen.
 *
 * Mirrors the desktop's chat intro (apps/desktop/src/components/chat/intro.tsx):
 *   - HERMES AGENT wordmark rendered in Collapse Bold, uppercase, tracked
 *   - mix-blend-plus-lighter so the type "glows" on the canvas
 *   - fit-text utility so the wordmark sizes itself to the column
 *
 * No install-path footer. The default install location is correct for
 * 99% of users; the rest will use the CLI installer with a -HermesHome
 * flag. Showing %LOCALAPPDATA% to grandma is developer-brain.
 */
export default function Welcome() {
  return (
    <div className="install-welcome hermes-fade-in h-full px-10 py-9">
      <section className="install-intro min-w-0" aria-labelledby="install-title">
        <p className="install-kicker">Local setup</p>
        <p
          className="fit-text mb-5 w-full font-['Collapse'] font-bold uppercase leading-[0.9] tracking-[0.08em] text-midground mix-blend-plus-lighter dark:text-foreground/90"
          style={
            {
              '--fit-text-line-height': '0.9',
              '--fit-text-max': '6rem',
              '--fit-text-min': '2.5rem'
            } as CSSProperties
          }
        >
          <span>
            <span>HERMES AGENT</span>
          </span>
          <span aria-hidden="true">HERMES AGENT</span>
        </p>

        <h1 id="install-title" className="m-0 max-w-xl text-2xl font-semibold tracking-tight text-foreground">
          Install the local agent and desktop app.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Setup prepares the runtimes, Hermes repository and required packages on this computer. Every stage remains
          visible while it runs.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <HackeryButton label="Install Hermes" onClick={() => void startInstall()} />
          <p className="m-0 text-xs text-muted-foreground">You can cancel during setup or inspect the live log.</p>
        </div>
      </section>

      <aside className="install-manifest" aria-label="Installation stages">
        <div className="install-manifest-heading">
          <span>Installation manifest</span>
          <span>3 groups</span>
        </div>
        <ol>
          <li>
            <span className="install-manifest-number">01</span>
            <div>
              <strong>Local runtime</strong>
              <span>System packages, uv and a Python environment</span>
            </div>
          </li>
          <li>
            <span className="install-manifest-number">02</span>
            <div>
              <strong>Hermes workspace</strong>
              <span>Repository and Python dependencies</span>
            </div>
          </li>
          <li>
            <span className="install-manifest-number">03</span>
            <div>
              <strong>Desktop app</strong>
              <span>Node runtime and the Hermes desktop build</span>
            </div>
          </li>
        </ol>
      </aside>
    </div>
  )
}

import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Cloud,
  HeartHandshake,
  Layers3,
  Sparkles,
  Store,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Haaflah 2026 | Build for real businesses' },
      {
        name: 'description',
        content:
          'Haaflah is a Hacktoberfest programme for building open source products, training developers, and shipping real SME solutions.',
      },
    ],
  }),
  component: HomePage,
})

const sprintWeeks = [
  ['01', 'Foundations', 'Git workflows, Docker, repo setup, and the contribution guidelines.'],
  ['02', 'Architecture', 'PRDs, Figma review, database schemas, and core API decisions.'],
  ['03', 'Core build', 'Intensive coding, frontend-backend integration, and mentor reviews.'],
  ['04', 'Polish', 'QA triage, regression fixes, responsive checks, and documentation.'],
  ['05', 'Demo day', 'Cloud deployment, SME onboarding, release tagging, and impact showcase.'],
]

const productAreas = [
  {
    icon: Store,
    title: 'Customer storefront',
    copy: 'A responsive catalogue, search, local cart state, one-page checkout, and WhatsApp receipts.',
  },
  {
    icon: Layers3,
    title: 'Merchant dashboard',
    copy: 'Inventory management, order fulfilment, customer logs, and revenue analytics for the people running the business.',
  },
  {
    icon: Cloud,
    title: 'Backend platform',
    copy: 'Auth, REST or GraphQL, local payment webhooks, and OpenAPI docs that make the whole system portable.',
  },
]

const funnelStages = [
  'Application',
  'Screening',
  'Onboarding',
  'Squad pairing',
  'Training sprints',
  'First PR',
  'Feature sprints',
  'Demo & review',
  'Deployment',
  'SME empowerment',
]

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero grain-texture">
        <div className="home-hero-orbit home-hero-orbit-one" />
        <div className="home-hero-orbit home-hero-orbit-two" />
        <div className="home-wrap home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-eyebrow home-reveal home-reveal-one">
              <Sparkles size={15} /> Haaflah 2026 / Hacktoberfest
            </p>
            <h1 className="home-reveal home-reveal-two">
              Build for real businesses.
              <span>Train real developers.</span>
              <em>Create open source.</em>
            </h1>
            <p className="home-hero-lede home-reveal home-reveal-three">
              A five-week product incubator for people who want to move from
              first contribution to software that matters in the real world.
            </p>
            <div className="home-actions home-reveal home-reveal-four">
              <Link to="/register" className="home-primary-action">
                Join the build <ArrowRight size={17} />
              </Link>
              <a href="#open-commerce" className="home-text-action">
                Meet the product <ArrowDownRight size={17} />
              </a>
            </div>
          </div>

          <div className="home-hero-signal home-reveal home-reveal-three">
            <div className="home-signal-topline">
              <span className="home-live-dot" /> Programme in motion
              <span>2026</span>
            </div>
            <div className="home-signal-core">
              <span className="home-signal-label">One open source product</span>
              <strong>Open<br />Commerce</strong>
              <span className="home-signal-caption">Self-hosted tools for growing businesses.</span>
            </div>
            <div className="home-signal-stats">
              <span><b>05</b> weeks</span>
              <span><b>08</b> squad seats</span>
              <span><b>500+</b> builders</span>
            </div>
          </div>
        </div>
        <div className="home-scroll-note"><span /> Scroll to enter the build</div>
      </section>

      <div className="home-marquee" aria-label="Haaflah programme stages">
        <div className="home-marquee-track">
          {[...['Community', 'Learning', 'Building', 'Deployment', 'SME empowerment'], ...['Community', 'Learning', 'Building', 'Deployment', 'SME empowerment']].map((stage, index) => (
            <span key={`${stage}-${index}`}><i /> {stage}</span>
          ))}
        </div>
      </div>

      <section className="home-section home-manifesto" id="blueprint">
        <div className="home-wrap home-manifesto-grid">
          <div className="home-section-heading home-reveal-on-scroll">
            <p className="home-eyebrow">The reason we gather</p>
            <h2>Not just a sprint.<br /><span>A software foundry.</span></h2>
          </div>
          <div className="home-manifesto-copy home-reveal-on-scroll">
            <p className="home-big-copy">
              Hacktoberfest becomes a continuous talent pipeline and product
              incubator, connecting curious people to work that survives past
              October.
            </p>
            <p>
              We move as one system: community into learning, learning into
              building, building into deployment, and deployment into useful
              software for small and medium businesses.
            </p>
            <div className="home-rule-list">
              <span><Check size={15} /> Build with care</span>
              <span><Check size={15} /> Learn in public</span>
              <span><Check size={15} /> Ship for someone real</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-product" id="open-commerce">
        <div className="home-wrap">
          <div className="home-product-intro">
            <div>
              <p className="home-eyebrow">Flagship product / v1.0.0</p>
              <h2>Open <i>Commerce</i></h2>
            </div>
            <p>
              A modular, headless, self-hostable commerce suite for SMEs priced
              out of the SaaS world. Permissive by design.
            </p>
          </div>
          <div className="home-stack-line">
            <span>Building with</span>
            <b>Next.js</b><b>Tailwind</b><b>Node / Go</b><b>PostgreSQL</b><b>Redis</b>
          </div>
          <div className="home-product-grid">
            {productAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <article className="home-product-card home-reveal-on-scroll" key={area.title}>
                  <div className="home-card-index">0{index + 1}</div>
                  <Icon size={23} strokeWidth={1.5} />
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                  <span className="home-card-arrow"><ArrowRight size={17} /></span>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-funnel">
        <div className="home-wrap">
          <div className="home-section-heading home-reveal-on-scroll">
            <p className="home-eyebrow">The contributor journey</p>
            <h2>From “I’m curious”<br /><span>to “it’s deployed.”</span></h2>
          </div>
          <div className="home-funnel-layout">
            <p className="home-big-copy home-reveal-on-scroll">
              Nobody is dropped into a repo and left alone. The programme has
              a clear ten-stage progression, with squads, mentors, reviews, and
              real feedback at every turn.
            </p>
            <div className="home-funnel-list home-reveal-on-scroll">
              {funnelStages.map((stage, index) => (
                <div key={stage} className="home-funnel-stage">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <b>{stage}</b>
                  {index < funnelStages.length - 1 && <ArrowRight size={15} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-sprint">
        <div className="home-wrap">
          <div className="home-sprint-heading">
            <div>
              <p className="home-eyebrow">Five weeks / one rhythm</p>
              <h2>Make the work<br /><span>move forward.</span></h2>
            </div>
            <p>Monday alignment. Friday integration testing. Sunday PR merge deadline.</p>
          </div>
          <div className="home-sprint-list">
            {sprintWeeks.map(([number, title, copy]) => (
              <article className="home-sprint-row home-reveal-on-scroll" key={number}>
                <span className="home-sprint-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ArrowRight className="home-sprint-arrow" size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-impact">
        <div className="home-wrap home-impact-grid">
          <div className="home-impact-copy">
            <p className="home-eyebrow">The measure of the work</p>
            <h2>Impact you<br /><span>can point to.</span></h2>
            <p>
              The primary metric is not attendance. It is the number of people
              transformed into confident, real-world software builders.
            </p>
          </div>
          <div className="home-kpi-grid">
            <div><strong>500<span>+</span></strong><small>registered participants</small></div>
            <div><strong>100<span>+</span></strong><small>high-quality PRs</small></div>
            <div><strong>50<span>+</span></strong><small>first-time contributors</small></div>
            <div><strong>5<span>+</span></strong><small>SME solutions deployed</small></div>
          </div>
        </div>
      </section>

      <section className="home-cta home-reveal-on-scroll">
        <div className="home-wrap home-cta-inner">
          <div>
            <p className="home-eyebrow"><HeartHandshake size={15} /> Make room for your work</p>
            <h2>Bring your curiosity.<br /><i>Leave with a launch.</i></h2>
          </div>
          <Link to="/register" className="home-primary-action">
            Register for Haaflah <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}

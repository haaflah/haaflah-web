import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import emailjs from '@emailjs/browser'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Github,
  Mic2,
  Palette,
  Sparkles,
  Users,
} from 'lucide-react'

export const Route = createFileRoute('/register')({
  head: () => ({
    meta: [
      { title: 'Register | Haaflah' },
      {
        name: 'description',
        content: 'Join Haaflah 2026 as a builder, designer, speaker, or community member.',
      },
    ],
  }),
  component: RegisterPage,
})

type RegistrationRole = 'developer' | 'designer' | 'other' | 'speaker'

const roleOptions: Array<{
  value: RegistrationRole
  label: string
  description: string
  icon: typeof Code2
}> = [
  {
    value: 'developer',
    label: 'Developer',
    description: 'Build, ship, and make the impossible compile.',
    icon: Code2,
  },
  {
    value: 'designer',
    label: 'Designer',
    description: 'Shape the ideas people will remember.',
    icon: Palette,
  },
  {
    value: 'speaker',
    label: 'Speaker',
    description: 'Bring a story, lesson, or sharp point of view.',
    icon: Mic2,
  },
  {
    value: 'other',
    label: 'Other kind of human',
    description: 'Community, product, content, or something new.',
    icon: Users,
  },
]

function RegisterPage() {
  const [role, setRole] = useState<RegistrationRole>('developer')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('Registration is not configured yet. Please try again later.')
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.sendForm(serviceId, templateId, event.currentTarget, { publicKey })
      setSubmitted(true)
    } catch {
      setSubmitError('We could not send your registration. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="register-page">
        <section className="register-success grain-texture">
          <div className="register-success-mark">
            <Check size={28} strokeWidth={2.5} />
          </div>
          <p className="register-kicker">You’re on the list</p>
          <h1>See you at the starting line.</h1>
          <p className="register-success-copy">
            Thanks for raising your hand for Haaflah 2026. We’ll send the next
            details to your inbox when the program takes shape.
          </p>
          <Link to="/" className="register-secondary-action">
            Back to Haaflah <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="register-page">
      <section className="register-intro grain-texture">
        <div className="register-orbit register-orbit-one" />
        <div className="register-orbit register-orbit-two" />
        <div className="register-intro-inner">
          <Link to="/" className="register-back-link">
            <span aria-hidden="true">←</span> Haaflah
          </Link>
          <div className="register-intro-content">
            <p className="register-kicker">
              <Sparkles size={15} /> Haaflah 2026
            </p>
            <h1>Make something worth gathering for.</h1>
            <p>
              We’re building a room for curious people who turn rough ideas
              into useful, beautiful things. Tell us how you want to join in.
            </p>
          </div>
          <div className="register-intro-footer">
            <span>Registration is open</span>
            <span className="register-footer-dot" />
            <span>October 2026</span>
          </div>
        </div>
      </section>

      <section className="register-form-section">
        <div className="register-form-heading">
          <div>
            <p className="register-kicker">01 / Your place in the room</p>
            <h2>Start with the basics.</h2>
          </div>
          <span className="register-required-note">* Required</span>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-field-grid">
            <label className="register-field">
              <span>Full name <b>*</b></span>
              <input name="name" type="text" placeholder="Ada Lovelace" required />
            </label>
            <label className="register-field">
              <span>Email address <b>*</b></span>
              <input name="email" type="email" placeholder="ada@example.com" required />
            </label>
          </div>

          <fieldset className="register-role-fieldset">
            <legend>How are you joining? <b>*</b></legend>
            <div className="register-role-grid">
              {roleOptions.map((option) => {
                const Icon = option.icon
                const selected = role === option.value
                return (
                  <label
                    key={option.value}
                    className={`register-role-option${selected ? ' is-selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={option.value}
                      checked={selected}
                      onChange={() => setRole(option.value)}
                    />
                    <span className="register-role-icon"><Icon size={19} /></span>
                    <span className="register-role-copy">
                      <strong>{option.label}</strong>
                      <small>{option.description}</small>
                    </span>
                    <span className="register-radio-indicator" />
                  </label>
                )
              })}
            </div>
          </fieldset>

          <div className="register-section-rule">
            <span>02 / Tell us a little more</span>
          </div>

          {role === 'developer' && (
            <div className="register-role-fields register-reveal">
              <div className="register-field-grid">
                <label className="register-field">
                  <span>Developer level <b>*</b></span>
                  <span className="register-select-wrap">
                    <select name="developerLevel" required>
                      <option value="">Choose your level</option>
                      <option value="beginner">Beginner / finding my feet</option>
                      <option value="intermediate">Intermediate / shipping regularly</option>
                      <option value="advanced">Advanced / mentoring others</option>
                      <option value="expert">Expert / deep in the craft</option>
                    </select>
                    <ChevronDown size={17} />
                  </span>
                </label>
                <label className="register-field">
                  <span>Developer focus <b>*</b></span>
                  <span className="register-select-wrap">
                    <select name="developerFocus" required>
                      <option value="">Choose a focus</option>
                      <option value="frontend">Frontend and web</option>
                      <option value="backend">Backend and APIs</option>
                      <option value="fullstack">Full-stack product building</option>
                      <option value="devops">DevOps and infrastructure</option>
                      <option value="data-ai">Data and AI</option>
                    </select>
                    <ChevronDown size={17} />
                  </span>
                </label>
              </div>
              <div className="register-field-grid">
                <label className="register-field">
                  <span>GitHub username <b>*</b></span>
                  <span className="register-input-with-icon">
                    <Github size={17} />
                    <input name="github" type="text" placeholder="your-handle" required />
                  </span>
                </label>
              </div>
              <label className="register-field">
                <span>Portfolio or personal site <em>Optional</em></span>
                <input name="portfolio" type="url" placeholder="https://yourspace.dev" />
              </label>
            </div>
          )}

          {role === 'designer' && (
            <div className="register-role-fields register-reveal">
              <div className="register-field-grid">
                <label className="register-field">
                  <span>Design focus <b>*</b></span>
                  <span className="register-select-wrap">
                    <select name="designFocus" required>
                      <option value="">Choose a focus</option>
                      <option value="product">UI/UX</option>
                      <option value="visual">Graphic Design</option>
                      <option value="motion">Motion and interaction</option>
                      <option value="research">Research and systems</option>
                    </select>
                    <ChevronDown size={17} />
                  </span>
                </label>
                <label className="register-field">
                  <span>Portfolio <em>Optional</em></span>
                  <input name="portfolio" type="url" placeholder="https://yourspace.dev" />
                </label>
              </div>
              <label className="register-field">
                <span>What are you excited to make?</span>
                <textarea name="designNote" rows={3} placeholder="A sentence or two is perfect." />
              </label>
            </div>
          )}

          {role === 'speaker' && (
            <div className="register-role-fields register-reveal">
              <div className="register-field-grid">
                <label className="register-field">
                  <span>Talk title <b>*</b></span>
                  <input name="talkTitle" type="text" placeholder="The idea behind the idea" required />
                </label>
                <label className="register-field">
                  <span>Portfolio or profile <em>Optional</em></span>
                  <input name="speakerProfile" type="url" placeholder="https://yourspace.dev" />
                </label>
              </div>
              <label className="register-field">
                <span>What would you like to share? <b>*</b></span>
                <textarea name="talkAbstract" rows={4} placeholder="Give us the short version of your story or session." required />
              </label>
            </div>
          )}

          {role === 'other' && (
            <div className="register-role-fields register-reveal">
              <label className="register-field">
                <span>How would you like to contribute? <b>*</b></span>
                <textarea name="contribution" rows={4} placeholder="Tell us what you bring to the room." required />
              </label>
              <label className="register-field">
                <span>Portfolio or profile <em>Optional</em></span>
                <input name="profile" type="url" placeholder="https://yourspace.dev" />
              </label>
            </div>
          )}

          <div className="register-form-footer">
            <p>We'll only use your details for Haaflah updates and speaker follow-up.</p>
            <button type="submit" className="register-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting registration...' : 'Submit Registration'}
              {!isSubmitting && <ArrowRight size={17} />}
            </button>
          </div>
          {submitError && <p className="register-submit-error" role="alert">{submitError}</p>}
        </form>
      </section>
    </main>
  )
}

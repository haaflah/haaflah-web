
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <img src="/haaflah-light.png" alt="Haaflah"/>
          <p>Build for real businesses. Train real developers. Create open source.</p>
        </div>
        <div className="site-footer-links">
          <a href="/#blueprint">Blueprint</a>
          <a href="/#open-commerce">Open Commerce</a>
          <a href="/register">Register</a>
        </div>
        <a
          className="site-footer-social"
          href="https://www.linkedin.com/company/haaflah/"
          target="_blank"
          rel="noreferrer"
          aria-label="Haaflah on LinkedIn"
        >
          <Linkedin size={19} strokeWidth={1.8} />
        </a>
      </div>
    </footer>
  )
}

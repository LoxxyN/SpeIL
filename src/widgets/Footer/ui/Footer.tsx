import { Logo } from '@shared/ui'
import { SOCIAL_LINKS } from '../model'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo />

        <div className="footer__social-links">
          {SOCIAL_LINKS.map((item) => (
            <p key={item.id}>
              <a href={item.href} className="footer__social-link" target="_blank">
                {item.label}
              </a>
            </p>
          ))}
          <p>
            Powered by{' '}
            <a
              href="https://aistudio.google.com/welcome?ref=humai.blog"
              className="footer__social-link"
              target="_blank"
            >
              Gemini API
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

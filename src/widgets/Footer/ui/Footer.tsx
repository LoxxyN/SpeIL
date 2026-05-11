import { Logo } from '@shared/ui'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo />

        <div className="footer__social-links">
          <p>
            <a href="https://t.me/L0xxyN" className="footer__social-link" target="_blank">
              Telegram
            </a>
          </p>
          <p>
            <a href="mailto:feed@speil.dev" className="footer__social-link" target="_blank">
              feed@speil.dev
            </a>
          </p>
          <p>
            <a href="https://github.com/LoxxyN" className="footer__social-link" target="_blank">
              GitHub
            </a>
          </p>
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

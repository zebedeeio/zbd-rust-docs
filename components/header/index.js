import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Arrow, Logo } from '../icons'
import styles from './header.module.css'

const ActiveLink = ({ href, children }) => {
  const { pathname } = useRouter()

  return (
    <Link
      href={href}
      className={`${styles.link} ${
        pathname.split('/')[1] === href.split('/')[1] ? styles.active : ''
      }`}
    >
      {children}
    </Link>
  )
}

export default () => {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label="Hyper logo">
          <Logo width={31} height={23} />
        </Link>

        <nav className={styles.desktopNav}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zebedeeio/zbd-node"
            className={styles.link}
          >
            @zbd/node
          </a>
          <ActiveLink href="/#setup">Setup</ActiveLink>
          <ActiveLink href="/#api">API</ActiveLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://zbd-node-playground.zebedee.io"
            className={styles.link}
          >
            Playground
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dashboard.zebedee.io"
            className={styles.link}
          >
            Developer&nbsp;Dashboard
          </a>
        </nav>

        <div className={styles.rightNav}>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.vercel}
          >
            ▲
          </a>
        </div>

        <span className={styles.toggle} onClick={toggle}>
          <Arrow height={14} width={26} />
        </span>
      </header>

      <nav
        className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ''}`}
      >
        <Link href="/plugins">Setup</Link>
        <Link href="/themes">GitHub: @zbd/node</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </>
  )
}

import styles from './footer.module.css'

export default () => (
  <footer className={styles.root}>
    <nav className={styles.content}>
      <div className={styles.left}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/miketwenty1/zebedee-rust"
        >
          GitHub
        </a>
        <span>
          License:&nbsp;<b>MIT</b>
        </span>
      </div>

      <a
        href="https://zbd.gg"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.zbd}
      >
        <img src="/zbd-logo.svg" className={styles.zebedeeLogo} />
      </a>
    </nav>
  </footer>
)

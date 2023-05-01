import styles from './download-button.module.css'

const DownloadButton = () => {
  return (
    <div className={styles.doubleWrap}>
      <a className={styles.root} href="/#api" rel="noopener noreferrer">
        <strong>View Documentation</strong>
      </a>
      <a
        className={styles.root}
        href="https://playground-zbd-node.zebedee.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Open Playground</strong>
      </a>
    </div>
  )
}

export default DownloadButton

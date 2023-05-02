import styles from './download-button.module.css'

const DownloadButton = ({ buttonOne, buttonTwo }) => {
  return (
    <div className={styles.doubleWrap}>
      {buttonOne && buttonOne.label && (
        <a
          className={styles.root}
          href={buttonOne.url}
          rel="noopener noreferrer"
        >
          <strong style={{ color: '#000' }}>{buttonOne.label}</strong>
        </a>
      )}
      {buttonTwo && buttonTwo.label && (
        <a
          className={styles.root}
          href={buttonTwo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{buttonTwo.label}</strong>
        </a>
      )}
    </div>
  )
}

export default DownloadButton

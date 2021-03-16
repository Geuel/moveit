import styles from '../styles/components/ExperienseBar.module.css';

export function ExperienceBar() {
  return (
    <header className={styles.experienseBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span className={styles.currentExperiense} style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}
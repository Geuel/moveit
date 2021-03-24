import { useContext } from 'react';
import styles from '../styles/components/ExperienseBar.module.css';
import { ChallengesContext } from './contexts/ChallengesContext';

export function ExperienceBar() {
  const { currentExperiense, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperiense * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienseBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperiense} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperiense} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}
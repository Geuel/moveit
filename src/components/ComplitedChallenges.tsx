import { useContext } from 'react';
import styles from '../styles/components/ComplitedChallenges.module.css'
import { ChallengesContext } from './contexts/ChallengesContext';

export function ComplitedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallenges}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}
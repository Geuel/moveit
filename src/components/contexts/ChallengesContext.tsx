import { createContext, ReactNode, useState } from 'react';


interface ChallengesContextData {
  level: number;
  currentExperiense: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperiense, setCurrentExperiense] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('new challenge');
  }
  
  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperiense,
      challengesCompleted,
      levelUp,
      startNewChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}


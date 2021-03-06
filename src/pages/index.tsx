import { ComplitedChallenges } from "../components/ComplitedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../components/contexts/CountdownContext";
import { ChallengesProvider } from "../components/contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperiense: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperiense={props.currentExperiense}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <ComplitedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperiense, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level:Number(level),
      currentExperiense: Number(currentExperiense),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
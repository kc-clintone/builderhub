import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BuilderHub - Learn Fullstack Development</title>
        <meta
          name="description"
          content="Learn fullstack development through real project contributions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Welcome to BuilderHub - Your journey to fullstack development starts
            here!
          </p>
        </div>

        <div className={styles.center}>
          <h1>🚀 BuilderHub</h1>
          <p>Learn by contributing to real projects</p>
        </div>

        <div className={styles.grid}>
          <a href="/roadmap" className={styles.card}>
            <h2>
              Learning Roadmap <span>-&gt;</span>
            </h2>
            <p>
              Follow our structured curriculum from beginner to advanced
              fullstack developer.
            </p>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>
              Projects <span>-&gt;</span>
            </h2>
            <p>Explore available projects and start contributing today.</p>
          </a>

          <a href="/community" className={styles.card}>
            <h2>
              Community <span>-&gt;</span>
            </h2>
            <p>Connect with fellow learners and experienced mentors.</p>
          </a>

          <a href="/docs" className={styles.card}>
            <h2>
              Documentation <span>-&gt;</span>
            </h2>
            <p>Comprehensive guides and resources for your learning journey.</p>
          </a>
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ExpressionOfDemand from "./ExpressionOfDemand";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>futureMade</title>
        <meta name="description" content="a future, made together." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          future, made.
        </h1>

        <p className={styles.description}>
          not really ~ let{"'"}s shape it forward.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Intentions over impressions &rarr;</h2>
            <p>A demand-aware framework for the age of opinionated prosumers. Constants over predictions.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>What does it change? &rarr;</h2>
            <p>Express a potential interest, a proactive
              offer with their terms and conditions.</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://offsetmovement.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by{' '} 
          <span className={styles.logo}>
            <Image src="/om_logo.png" alt="offset movement" width={30} height={30} />
          </span>
        </a>
      </footer>
    </div>
  );
}

import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Essays = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Essays - yena</title>
        <meta name="description" content="yena company essays" />
        <link rel="icon" type="image/png" href="/yenay.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/yenay.png" />
        <link rel="shortcut icon" href="/yenay.png" />
      </Head>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
      </nav>

      <main className={styles.main}>
        <h1>Coming Soon</h1>
      </main>
    </div>
  );
};

export default Essays;
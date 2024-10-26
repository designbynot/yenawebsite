import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [particles, setParticles] = useState([]);

  const createParticle = (x: number, y: number) => {
    const emojis = ['🗣️', '🛠️', '💹'];

    const numParticles = 8;
    const newParticles = Array.from({ length: numParticles }).map((_, i) => {
      const angle = (i * 2 * Math.PI) / numParticles;
      const speed = 2;
      const randomOffset = Math.random() * 20 - 10;

      return {
        id: Date.now() + i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: x - 10,
        y: y - 10,
        velocity: {
          x: Math.cos(angle) * speed + randomOffset,
          y: Math.sin(angle) * speed + randomOffset
        },
        size: Math.random() * (1.5 - 0.8) + 0.8
      };
    });

    setParticles(prev => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles(prev => 
        prev.filter(p => !newParticles.find(np => np.id === p.id))
      );
    }, 1000);
  };

  // Event handlers for both mouse and touch events
  const handleMouseMove = (e: React.MouseEvent) => {
    createParticle(e.clientX, e.clientY);
  };

  const handleTouch = (e: React.TouchEvent) => {
    // Prevent scrolling while touching the logo
    e.preventDefault();
    const touch = e.touches[0];
    createParticle(touch.clientX, touch.clientY);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>yena</title>
        <meta name="description" content="yena company website" />
      </Head>

      <nav className={styles.nav}>
        <Link href="https://x.com/notbylght" className={styles.navLink}>
          Founder
        </Link>
        <Link href="/essays" className={styles.navLink}>
          Essays
        </Link>
        <a href="mailto:yap@yena.co" className={styles.navLink}>
          Contact
        </a>
      </nav>

      <main className={styles.main}>
        <h1 
          className={styles.logo} 
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouch}
          onTouchStart={handleTouch}
        >
          yena
        </h1>
        {particles.map(particle => (
          <span
            key={particle.id}
            className={styles.particle}
            style={{
              left: particle.x + 'px',
              top: particle.y + 'px',
              transform: `scale(${particle.size})`,
              ['--velocity-x' as string]: `${particle.velocity.x}rem`,
              ['--velocity-y' as string]: `${particle.velocity.y}rem`,
            }}
          >
            {particle.emoji}
          </span>
        ))}
      </main>
    </div>
  );
};

export default Home;
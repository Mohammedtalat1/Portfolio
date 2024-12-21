import { PC } from '@/components/pc/pc';
import styles from './styles.module.scss';

const Intro = () => {
  return (
    <section id="home" className={styles.intro}>
      <PC className={styles.pc} />

      <div className={styles.description}>
        <h1 className={styles.title}>
          Hello there! 👋
          <br />
          I&apos;m <span>Mohammed Talat</span>
        </h1>

        <p className={styles.text}>
  I&apos;m Mohammed Talat, a full-stack developer. Welcome to my portfolio!
</p>

      </div>
    </section>
  );
};

export { Intro };

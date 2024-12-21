import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

        <ul className={styles.list}>
          {/* <li>
            <Card
              img="/img/works/taskify.jpg"
              title="Taskify"
              description="Task manager to keep track of your goals."
              href="https://taskify-ashen-delta.vercel.app/"
              githubUrl=""
              topics={[
                'nextjs',
                'prisma',
                'typescript',
                'stripe',
                'tailwindcss',
              ]}
            />
          </li> */}


        </ul>
      </div>
    </section>
  );
};

export default Works;

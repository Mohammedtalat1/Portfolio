import Link from 'next/link';
import Image from 'next/image';

import { Skill } from '@/common/types/types';
import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

const About = () => {
  const skills: Skill[] = [
    { title: 'asp', iconName: 'asp', href: 'https://dotnet.microsoft.com/en-us/apps/aspnet' },
    { title: 'csharp', iconName: 'csharp', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    { title: 'Postman', iconName: 'postman', href: 'https://www.postman.com/' },
    { title: 'Playwright', iconName: 'playwright', href: 'https://playwright.dev/' },
    { title: 'HTML', iconName: 'html', href: 'https://html.spec.whatwg.org/multipage/' },
    { title: 'CSS', iconName: 'css', href: 'https://www.w3.org/Style/CSS/' },
    { title: 'JavaScript', iconName: 'js', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
    { title: 'TypeScript', iconName: 'typescript', href: 'https://www.typescriptlang.org/' },
    { title: 'Next.js', iconName: 'nextjs', href: 'https://nextjs.org/' },
    { title: 'React', iconName: 'react', href: 'https://react.dev/' },
    { title: 'php', iconName: 'php', href: 'https://www.php.net/' },
    { title: 'Node.js', iconName: 'node', href: 'https://nodejs.org/' }


    //{ title: 'Sass', iconName: 'sass', href: 'https://sass-lang.com/' },
    //{ title: 'Gulp', iconName: 'gulp', href: 'https://gulpjs.com/' },
    //{ title: 'Figma', iconName: 'figma', href: 'https://www.figma.com/' },


  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/about.JPG"
          width={550}
          height={320}
          alt="Picture with characters from anime and video games"
        />

        <div className={styles.content}>
          <h2 className={styles.title}>About <span>Me</span></h2>
          <p className={styles.text}>
  Greetings! I&apos;m <span>Mohammed Talat</span>, a passionate full-stack developer with expertise in <span>integration testing</span> to ensure professional, high-performing applications. My strongest expertise lies in <span>C#</span> and <span>ASP.NET</span>, where I have the most experience. I also work extensively with <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>React</span>, <span>Next.js</span>, <span>TypeScript</span>, and other technologies. I&apos;m dedicated to continuously improving my skills and staying ahead of industry trends to deliver top-notch applications.
</p>

        </div>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <ul className={styles.skillsList}>
          {skills.map(skill => (
            <li key={skill.title}>
              <Link
                className={styles.skillsLink}
                href={skill.href}
                title={skill.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  aria-label={skill.title + ' logo'}
                  name={skill.iconName}
                  size={50}
                />    
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { About };
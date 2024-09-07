import { useState } from 'react';
import classes from './Navbar.module.css';

const data = [
    { link: 'welcome', label: 'Welcome' },
    { link: 'about', label: 'About' },
    { link: 'coaches', label: 'Coaches' },
    { link: 'services', label: 'Services' },
    { link: 'partners', label: 'Partners' },
    { link: 'achievements', label: 'Achievements' },
    { link: 'gallery', label: 'Gallery' },
    { link: 'goals', label: 'Goals' },
  ];

export function Navbar() {
    const [active, setActive] = useState('Welcome');

    const links = data.map((item) => (
        <a
          className={classes.link}
          data-active={item.label === active || undefined}
          href={item.link}
          key={item.label}
          onClick={(event) => {
            event.preventDefault();
            setActive(item.label);

            const section = document.getElementById(item.link);
            if (section) {
                let top = section.getBoundingClientRect().top + window.scrollY - 59;
                if (item.link === "welcome") {
                    top -= 110;
                }
                window.scrollTo({ top, behavior: 'smooth' });
            }
          }}
        >
          <span className={classes.linkIcon}>{item.label}</span>
        </a>
      ));

    return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {links}
      </div>
    </nav>
    );
}

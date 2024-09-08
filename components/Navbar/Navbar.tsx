import { useState } from 'react';
import classes from './Navbar.module.css';
import { navLinks } from '@/app/constants/constants';

interface ChildComponentProps {
  opened: boolean;
  toggle: () => void;
}

export function Navbar({ opened, toggle }: ChildComponentProps) {
    const [active, setActive] = useState('Welcome');

    const links = navLinks.map((item) => (
        <a
          className={classes.link}
          data-active={item.id === active || undefined}
          href={item.id}
          key={item.id}
          onClick={(event) => {
            event.preventDefault();
            setActive(item.id);
            if (opened) {
                toggle();
            }
            const section = document.getElementById(item.id);
            if (section) {
                let top = section.getBoundingClientRect().top + window.scrollY - 59;
                if (item.id === "welcome") {
                    top -= 110;
                }
                window.scrollTo({ top, behavior: 'smooth' });
            }
          }}
        >
          <span className={classes.linkIcon}>{item.title}</span>
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

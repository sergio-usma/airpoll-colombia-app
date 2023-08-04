import { NavLink } from 'react-router-dom';
import { ChevroLeft, Microphone, Settings } from '../assets/icons/icons';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles}>
      <div className={styles.container}>
        <NavLink to="/">
          <ChevroLeft />
        </NavLink>
        <h1>airpoll</h1>
        <nav>
          <Microphone />
          <Settings />
        </nav>
      </div>
    </header>
  );
}

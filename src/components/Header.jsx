import { NavLink } from 'react-router-dom';
import { ChevroLeft, Microphone, Settings } from '../assets/icons/icons';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/">
          <ChevroLeft />
        </NavLink>
        <h1 className={styles.header_title}>airpoll</h1>
        <nav className={styles.nav}>
          <Microphone />
          <Settings />
        </nav>
      </div>
    </header>
  );
}

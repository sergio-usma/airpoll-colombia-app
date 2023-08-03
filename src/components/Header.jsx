import { BiArrowBack, BiMicrophone } from 'react-icons/bi';
import { BsGearFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles}>
      <div className={styles.container}>
        <Link to="/">
          <BiArrowBack fontSize="20px" color="#fff" />
        </Link>
        <h1>The Air Pollution App</h1>
        <nav>
          <Link to="/">
            <BiMicrophone fontSize="20px" color="#fff" />
          </Link>
          <NavLink to="/">
            <BsGearFill fontSize="18px" color="#fff" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

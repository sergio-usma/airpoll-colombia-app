import { BiArrowBack, BiMicrophone } from 'react-icons/bi';
import { BsGearFill } from 'react-icons/bs';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles}>
      <div className={styles.container}>
        <BiArrowBack fontSize="20px" color="#fff" />
        <h1>The Air Pollution App</h1>
        <nav>
          <BiMicrophone fontSize="20px" color="#fff" />
          <BsGearFill fontSize="18px" color="#fff" />
        </nav>
      </div>
    </header>
  );
}

import { useNavigate } from 'react-router-dom';
import styles from '../styles/locations.module.css';

export default function Locations() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/city');
  }
  return (
    <button className={styles.card} onClick={handleClick} type="button">
      <h2 className={styles.card__title}>This is a selected location</h2>
    </button>
  );
}

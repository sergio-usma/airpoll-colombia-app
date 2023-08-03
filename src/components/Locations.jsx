import { useNavigate } from 'react-router-dom';
import locationImg from '../assets/locations/santa_marta/santamarta_col_sm.jpg';
import styles from '../styles/locations.module.css';

export default function Locations() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/city');
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleClick();
    }
  }

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <img className={styles.card__img} src={locationImg} alt="This is a city" />
      <div className={styles.card__details}>
        <h2 className={styles.card__title}>city_name</h2>
        <p className={styles.card__subtitle}>State</p>
        <p className={styles.card__paragraph}>Population</p>
      </div>
    </div>
  );
}

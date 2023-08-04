// eslint-disable-next-line import/no-extraneous-dependencies
import { BsFillPeopleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import locationImg from '../assets/locations/santa_marta/santamarta_col_sm.jpg';
import styles from '../styles/locations.module.css';

export default function Locations({
  city, state, population, onClick,
}) {
  return (
    <div className={styles.card} onClick={onClick} role="presentation">
      <img className={styles.card__img} src={locationImg} alt="This is a city" />
      <div className={styles.card__details}>
        <h2 className={styles.card__title}>{city}</h2>
        <p className={styles.card__subtitle}>{state}</p>
        <p className={styles.card__paragraph}>
          {`${population.toLocaleString()} `}
          <BsFillPeopleFill />
        </p>
      </div>
    </div>
  );
}

Locations.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

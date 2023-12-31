import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/parametersaqi.module.css';

export default function ParametersAQI({
  aqi, co, no, no2, o3, so2, pm25, pm10, nh3,
}) {
  const [rating, setRating] = useState('');

  useEffect(() => {
    switch (aqi) {
      case 1:
        setRating('Good');
        break;
      case 2:
        setRating('Fair');
        break;
      case 3:
        setRating('Moderate');
        break;
      case 4:
        setRating('Poor');
        break;
      case 5:
        setRating('Very Poor');
        break;
      default:
        setRating('');
    }
  }, [aqi]);

  return (
    <>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            <td className={styles.td}>Ammonia:</td>
            <td className={styles.td}>{`${nh3} μg/m3`}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Carbon:</td>
            <td className={styles.td}>{`${co} μg/m3`}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Nitrogen Dioxide:</td>
            <td className={styles.td}>{`${no2} μg/m3`}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Nitrogen Monoxide:</td>
            <td className={styles.td}>{`${no} μg/m3`}</td>
          </tr>
        </tbody>

        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            <td className={styles.td}>Ozone:</td>
            <td className={styles.td}>{`${o3} μg/m3`}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Particulates PM2.5:</td>
            <td className={styles.td}>{`${pm25} μg/m3`}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Particulates PM10:</td>
            <td className={styles.td}>{`${pm10} μg/m3`}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Sulphur Dioxide:</td>
            <td className={styles.td}>{`${so2} μg/m3`}</td>
          </tr>
        </tbody>
      </table>
      <button className={styles.city__aqi} type="button">{`Air Quality Index: ${aqi} (${rating})`}</button>
    </>
  );
}

ParametersAQI.propTypes = {
  aqi: PropTypes.number.isRequired,
  co: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
  no2: PropTypes.number.isRequired,
  o3: PropTypes.number.isRequired,
  so2: PropTypes.number.isRequired,
  pm25: PropTypes.number.isRequired,
  pm10: PropTypes.number.isRequired,
  nh3: PropTypes.number.isRequired,
};

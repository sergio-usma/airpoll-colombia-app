import { FaMapLocationDot } from 'react-icons/fa6';
import hero from '../assets/locations/santa_marta/santamarta_col_sm.jpg';
import styles from '../styles/city.module.css';

export default function City() {
  return (
    <div className={styles.city__card}>
      <div className={styles.city__title}>
        <FaMapLocationDot fontSize="4rem" color="#fff" />
        <h2 className={styles.city__name}>Santa Marta</h2>
      </div>
      <div className={styles.city__image}>
        <p className={styles.state__name}>Magdalena, Colombia</p>
        <img className={styles} src={hero} alt="This is a banner" />
        <h3 className={styles.city__aqi}>Air Quality Index:</h3>
      </div>

      <div className={styles.city__data}>
        <h4 className={styles.table__header}>Air Quality Parameters</h4>
        <table>
          <tbody>
            <tr>
              <td>Particulates PM2.5:</td>
              <td>2.5 μg/m3</td>
            </tr>
            <tr>
              <td>Carbon:</td>
              <td>2.5 μg/m3</td>
            </tr>
            <tr>
              <td>Nitrogen Dioxide:</td>
              <td>2.5 μg/m3</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Nitrogen Monoxide:</td>
              <td>2.5 μg/m3</td>
            </tr>

            <tr>
              <td>Sulphur Dioxide:</td>
              <td>2.5 μg/m3</td>
            </tr>
            <tr>
              <td>Ozone:</td>
              <td>2.5 μg/m3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { FaMapLocationDot } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import hero from '../assets/locations/santa_marta/santamarta_col_sm.jpg';
import styles from '../styles/city.module.css';
import { getCityDetail } from '../redux/getCitiesSlice';

export default function City() {
  const { city } = useParams();
  const { cities } = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const coordinates = useRef();

  const currentCity = cities.filter((location) => location.capital === city);

  currentCity.forEach((location) => {
    coordinates.current = [location.latitude, location.longitude];
  });

  useEffect(() => {
    dispatch(getCityDetail(coordinates.current));
  }, [dispatch, city]);

  return (
    <div className={styles.city__card}>
      <div className={styles.city__title}>
        <FaMapLocationDot fontSize="4rem" color="#fff" />
        <h2 className={styles.city__name}>{currentCity[0].capital}</h2>
      </div>
      <div className={styles.city__image}>
        <p className={styles.state__name}>{`${currentCity[0].department}, Colombia`}</p>
        <img
          className={styles}
          src={hero}
          alt={`This is a landscape from ${currentCity[0].department}, Colombia`}
        />
        <h3 className={styles.city__aqi}>Air Quality Index:</h3>
      </div>

      <div className={styles.city__data}>
        <h4 className={styles.table__header}>Air Quality Parameters</h4>
        <table>
          <tbody>
            <tr>
              <td>Ammonia:</td>
              <td> μg/m3</td>
            </tr>
            <tr>
              <td>Carbon:</td>
              <td> μg/m3</td>
            </tr>
            <tr>
              <td>Nitrogen Dioxide:</td>
              <td> μg/m3</td>
            </tr>
            <tr>
              <td>Nitrogen Monoxide:</td>
              <td> μg/m3</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Ozone:</td>
              <td> μg/m3</td>
            </tr>
            <tr>
              <td>Particulates PM2.5:</td>
              <td> μg/m3</td>
            </tr>
            <tr>
              <td>Particulates PM10:</td>
              <td> μg/m3</td>
            </tr>
            <tr>
              <td>Sulphur Dioxide:</td>
              <td> μg/m3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

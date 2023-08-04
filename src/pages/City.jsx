import { FaMapLocationDot } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import hero from '../assets/locations/santa_marta/santamarta_col_sm.jpg';
import styles from '../styles/city.module.css';
import { getCityDetail } from '../redux/getCitiesSlice';
import ParametersAQI from '../components/ParametersAQI';

export default function City() {
  const { city } = useParams();
  const { cities, details, isLoading } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const coordinates = useRef();
  const currentCity = cities.filter((location) => location.capital === city);

  coordinates.current = [currentCity[0].latitude, currentCity[0].longitude];

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

      </div>

      <div className={styles.city__data}>
        <h4 className={styles.table__header}>Air Quality Parameters</h4>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          details.map((location) => (
            <ParametersAQI
              key={crypto.randomUUID()}
              aqi={location.main.aqi}
              co={location.components.co}
              no={location.components.no}
              no2={location.components.no2}
              o3={location.components.o3}
              so2={location.components.so2}
              pm25={location.components.pm2_5}
              pm10={location.components.pm10}
              nh3={location.components.nh3}
            />
          ))
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Locations from './Locations';
import styles from '../styles/feed.module.css';

export default function Feed() {
  const [query, setQuery] = useState('');
  const { cities } = useSelector((state) => state.details);
  const navigate = useNavigate();

  function handleClick(city) {
    navigate(`/${city}`);
  }

  const filter = cities.filter((location) => location.capital
    .toLowerCase()
    .includes(query.toLowerCase()));

  return (
    <>
      <div className={styles.hero_container}>
        <img
          className={styles.img_banner}
          src="https://i.postimg.cc/zGPqCgcN/colombia.jpg"
          alt="Colombia banner"
        />
        <input
          className={styles.input}
          type="search"
          value={query}
          placeholder="Enter a city in Colombia"
          onChange={(e) => setQuery(e.target.value)}
        />
        <h2 className={styles.filter}>Air Pollution Index</h2>
      </div>
      <div className={styles.wrapper}>
        {filter.map((location) => (
          <Locations
            key={location.id}
            city={location.capital}
            state={location.department}
            population={location.capital_population}
            onClick={() => handleClick(location.capital)}
            image={location.image}
          />
        ))}
      </div>
    </>
  );
}

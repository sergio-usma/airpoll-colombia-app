import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/feed.module.css';
import Locations from './Locations';

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
        <img className={styles.image_banner} src="https://i.postimg.cc/zGPqCgcN/colombia.jpg" alt="Colombia banner" />
        <div className={styles.searchbar}>
          <input
            className={styles.input}
            type="search"
            value={query}
            placeholder="Enter a city in Colombia"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
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

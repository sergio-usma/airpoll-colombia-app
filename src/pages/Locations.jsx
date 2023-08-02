import City from '../components/City';
import styles from '../styles/locations.module.css';

export default function Locations() {
  return (
    <div className={styles.wrapper}>
      <City />
      <City />
      <City />
      <City />
      <City />
      <City />
      <City />
      <City />
      <City />
    </div>
  );
}

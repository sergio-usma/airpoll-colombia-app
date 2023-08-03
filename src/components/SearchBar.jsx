import style from '../styles/searchbar.module.css';

export default function SearchBar() {
  return (
    <div className={style.hero}>
      <input type="search" placeholder="Enter a city in Colombia" />
    </div>
  );
}

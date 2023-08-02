import style from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={style.hero}>
      <input type="search" placeholder="Enter a city in Colombia" />
    </div>
  );
}

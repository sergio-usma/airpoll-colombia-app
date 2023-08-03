import Header from './components/Header';
import Home from './pages/Home';
import Feed from './components/Feed';

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <Feed />
      </div>
    </>
  );
}

export default App;

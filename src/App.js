import Header from './components/Header';
import Home from './pages/Home';
import Locations from './pages/Locations';

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <Locations />
      </div>
    </>
  );
}

export default App;

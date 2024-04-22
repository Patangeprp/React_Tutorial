import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <h1 className='pizza'>The Pizza House</h1>
      {Data.map((element) => (
        <Cards
          key={element.id}
          src={element.src}
          name={element.name}
          price={element.price}
          description={element.description}
        />
      ))}
    </div>
  );
}

export default App;

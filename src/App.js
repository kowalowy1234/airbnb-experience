import './Styles/App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from'./Components/Card';
import data from './data';

function App() {

  const cards = data.map(element => {
    return (
    <Card 
      key = {element.id}
      element = {element}
    />  
  )})
  
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;

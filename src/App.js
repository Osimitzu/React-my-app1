
import './App.css';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import FreeTime from './components/FreeTime';
import FavFood from './components/FavFood';
import Stack from './components/Stack';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <AboutMe/>
      <Hobbies/>
      <FreeTime/>
      <FavFood/>
      <Stack/>
      <Card Title="Hobbies" Item1="Bailar" Item2="Videojuegos" Item3="Ajedrez" Background={"cardHobbies"}/>
      <Card Title="FreeTime" Item1="Dormir" Item2="Escuchar musica" Item3="Ver memes" Background={"cardFreeTime"}/>
      <Card Title="Favorite Food" Item1="Pollo con verduras" Item2="Pizza" Item3="Tacos" Background={"cardFavFood"}/>
      <Card Title="Stack" Item1="HTML//CSS" Item2="JavaScript" Item3="React" Background={"cardStack"}/>
    </div>
);
}

export default App;

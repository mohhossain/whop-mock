import './App.css';
import Card from './components/cards/Cards';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Grid from '@mui/material/Grid';
import GridSection from './components/gridsection/GridSection';



function App() {
  return (
    <div>
      <Navbar>
      </Navbar>

      <Hero>
      </Hero>

      <GridSection></GridSection>
    </div>
  );
}

export default App;

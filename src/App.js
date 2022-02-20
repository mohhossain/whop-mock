import './App.css';
import Card from './components/cards/Card';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Grid from '@mui/material/Grid';
import ChipFilter from './components/chip/ChipFilter';



function App() {
  return (
    <div>
      <Navbar>
      </Navbar>

      <Hero>
      </Hero>

      <div className='products'>
        <div className='leftDiv'></div>
        <div className='rightdiv'>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 6, md: 8, xmd:10, lg: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} xmd={4} lg={3} key={index}>
                <Card></Card>
              </Grid>
            ))}
          </Grid>
        </div>
      
      </div>

      <ChipFilter></ChipFilter>
    </div>
  );
}

export default App;

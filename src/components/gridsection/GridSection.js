import Grid from '@mui/material/Grid';
import "../styles/grid.css"
import Cards from "../cards/Cards"
import AccordionFilter from '../accordion/AccordionFilter';


function GridSection(){

    return(
        <div className='products'>
        <div className='leftDiv'>
          <AccordionFilter></AccordionFilter>
          <AccordionFilter></AccordionFilter>
          <AccordionFilter></AccordionFilter>
        </div>
        <div className='rightdiv'>
          <Grid  container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 6, md: 8, xmd:10, lg: 12 }}   alignItems="center" justifyContent={"center"}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid id='grid' alignItems="center" justifyContent={"center"} item xs={12} sm={6} md={4} xmd={4} lg={3} key={index}>
                <Cards id='cards'></Cards>
              </Grid>
            ))}
          </Grid>

          <button className='filterButton'>Filter</button>
        </div>
      </div>
    )

}

export default GridSection; 
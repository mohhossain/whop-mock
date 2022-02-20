import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import "../styles/accordion.css"
import {FaAngleDown} from "react-icons/fa";



function AccordionFilter(){

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <div className='accordion'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          expandIcon={<FaAngleDown></FaAngleDown>}

        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Text
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <ul className='filterOptions'>
              <li>
                <label>
                 <input type="checkbox" />
                 Filter Options
                </label>
              </li>
              <li>
                <label>
                 <input type="checkbox" />
                 Filter Options
                </label>
              </li>
              <li>
                <label>
                 <input type="checkbox" />
                 Filter Options
                </label>
              </li>
              <li>
                <label>
                 <input type="checkbox" />
                 Filter Options
                </label>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    )


}

export default AccordionFilter;
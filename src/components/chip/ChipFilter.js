import React, { useState } from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function ChipFilter(){
    const [click, setClick] = useState(false)
    return(
        <div>
            <Stack direction="row" spacing={1}>
                {
                    click?
                <Chip label="color" color="success" variant="outlined"  /> :
                <Chip label="Clickable" color="success" variant="outlined" onClick={()=> setClick(!click)} />
                }
            </Stack>
        </div>
    )
    
}

export default ChipFilter;
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
                    <Chip label="Filters"  onClick={()=> setClick(!click)}  /> :
                    <Chip label="Filters" color="success" onClick={()=> setClick(!click)} />
                }
                
            </Stack>
        </div>
    )
    
}

export default ChipFilter;
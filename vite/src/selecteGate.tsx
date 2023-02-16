import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FC, memo} from "react";

interface SelectGateProp {
  gateList: string[]
}

const SelectGate:FC<SelectGateProp>  = ({gateList}) =>{
  const [gate, setGate] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGate(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel>gate</InputLabel>
        <Select
          value={gate}
          label="gate"
          onChange={handleChange}
        > {...gateList.map((gate)=><MenuItem value={gate}>{gate}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
export default memo(SelectGate)

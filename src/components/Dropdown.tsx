import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

type DropdownProps = {
  label: string,
  value: string,
  options: {key: number, value: string, label: string}[],
  helperText: string,
  onSelect: React.ChangeEventHandler<HTMLInputElement>
}

function Dropdown (dropdown: DropdownProps) {
  const {label, value, options, onSelect, helperText} = dropdown;
  return (
    <Grid item xs={12} sm={4}>
      <TextField
      select
      label={label}
      value={value}
      onChange={onSelect}
      helperText={helperText}
    >
      {options.map((option) => (
        <MenuItem key={option.key} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </Grid>
  )

  // <label>
  //   {label}
  //   <select value={value} onChange={onSelect}>
  //     <option value={""} disabled>
  //       Choose an option
  //     </option>
  //     {options.map((option)=> (
  //       <option key={option.key} value={option.value}>{option.label}</option>
  //     ))}
  //   </select>
  // </label>)
}

export default Dropdown
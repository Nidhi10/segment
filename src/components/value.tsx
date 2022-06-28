import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

type Input = {
  value: string | number
}

function Value() {
  const [valueArray, setValueArray] = useState<Input[]>([])
  const [currentValue, setCurrentValue] = useState<Input>({ value: '' })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue({ value: e.currentTarget.value })
  }

  const handleAddValue = () => {
    setValueArray(arr => [...arr, currentValue]);
    setCurrentValue({ value: '' })
  }

  const handleDeleteValue = (index: number) => {
    let arr = [...valueArray]
    arr.splice(index, 1)
    setValueArray(arr);
  }
  return (
    <Grid item xs={12} sm={4}>
      <Grid container spacing={2}>
        {valueArray.map((input, i) => {
          return (
            <Grid item xs={12} sm={11}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Value"
                    value={input.value}
                    key={i}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button variant="outlined" sx={{mb: 2 }} onClick={() => handleDeleteValue(i)}>Delete</Button>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
        <Grid item xs={12} sm={9}>
          <TextField
            required
            id="outlined-required"
            label="Value"
            value={currentValue.value}
            key={valueArray.length}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="outlined"  sx={{mb: 2 }} onClick={handleAddValue}>Add</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Value
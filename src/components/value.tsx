import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

type ValueInput = Array<string | number>

interface stateUpdateCallback {
  (value: ValueInput): void;
}

function Value(props: { valueArray: ValueInput, onValueChange: stateUpdateCallback }) {
  const [currentValue, setCurrentValue] = useState<string | number>('')
  const { valueArray, onValueChange } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value)
  }

  const handleAddValue = () => {
    onValueChange([...valueArray, currentValue])
    setCurrentValue('')
  }

  const handleDeleteValue = (index: number) => {
    let arr = [...valueArray]
    arr.splice(index, 1)
    onValueChange(arr)
  }

  return (
    <Grid item xs={12} sm={4}>
      <Grid container spacing={2}>
        {valueArray.map((input, i) => {
          return (
            <Grid key={i} item xs={12} sm={11}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Value"
                    value={input}
                    key={i}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button variant="outlined" sx={{ mb: 2 }} onClick={() => handleDeleteValue(i)}>Delete</Button>
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
            value={currentValue}
            key={valueArray.length}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="outlined" sx={{ mb: 2 }} onClick={handleAddValue}>Add</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Value
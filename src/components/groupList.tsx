import React, { useState, useCallback } from 'react';
import SegmentGroup from './segmentGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function GroupList() {
  const [count, setCount] = useState(1)

  const renderSegmentGroups = useCallback(() => {
    var segmentGroups = []
    for (let i = 0; i < count; i++) {
      segmentGroups.push(<SegmentGroup />)
    }
    return segmentGroups
  }, [count])

  const handleAddSegmentGroup = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const handleSubmit = () => {
    console.log('form submitted')
  }
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
            {renderSegmentGroups()}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained"  sx={{ mt: 3, mb: 2 }} onClick={handleAddSegmentGroup}> Add Group</Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >Submit</Button>
      </Grid>

    </Box>
  )
}

export default GroupList
import React, {useCallback, useState} from 'react';
import Segment from './segment';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function SegmentGroup () {

  const [count, setCount] = useState(1)

  const renderSegments = useCallback(() => {
    var segments = []
    for (let i=0; i< count; i++) {
      segments.push(
        <Grid item xs={12} sm={8}>
          <Segment />
        </Grid>
      )
    }
    return segments
  }, [count])

  const handleAddSegment = useCallback(() => {
    setCount(count+1)
  }, [count])

  return (
    <Grid container spacing={4} borderBottom={1} sx={{ mt: 3, mb: 2 }}>
      {renderSegments()}
      <Grid item xs={12} sm={4}>
        <Button  variant="contained"  sx={{mb: 2 }} onClick={handleAddSegment}> Add Segment</Button>
      </Grid>
    </Grid>
  )
}

export default SegmentGroup
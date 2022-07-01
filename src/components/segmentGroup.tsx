import React, { Fragment, useCallback } from 'react';
import Segment from './segment';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import useStore from '../store/GroupListStore'

function SegmentGroup(props: { index: number }) {
  const { index } = props
  const { curGroupListInput, addSegment, deleteSegment } = useStore();
  const renderSegments = useCallback(() => {
    var segments = []
    for (let i = 0; i < curGroupListInput[index].length; i++) {
      segments.push(
        <Fragment key={i}>
          <Grid item xs={12} sm={8}>
            <Segment segmentIndex={i} segmentGroupIndex={index} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="outlined" color="secondary" sx={{ mb: 2 }} startIcon={<DeleteIcon />} onClick={() => deleteSegment(index, i)}> Segment</Button>
          </Grid>
        </Fragment>
      )
    }
    return segments 
  }, [curGroupListInput, index, deleteSegment])

  return (
    <Grid container spacing={4} sx={{ mt: 3, mb: 2 }}>
      {renderSegments()}
      <Grid item xs={12} sm={2}>
        <Button variant="contained" sx={{ mb: 2 }} onClick={() => addSegment(index)}> Add Segment</Button>
      </Grid>
    </Grid>
  )
}
export default SegmentGroup
import React, { useCallback } from 'react';
import SegmentGroup from './segmentGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStore from '../store/GroupListStore'
import DeleteIcon from '@mui/icons-material/Delete';

function GroupList() {
  const { curGroupListInput, addSegmentGroup, deleteSegmentGroup } = useStore();
  const renderSegmentGroups = useCallback(() => {
    var segmentGroups = []
    for (let i = 0; i < curGroupListInput.length; i++) {
      //pass parent state and callback as props
      segmentGroups.push(
        <Grid key={i} borderBottom={1} >
          <Grid item xs={12} sm={9}>
            <SegmentGroup key={i} index={i} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="contained" color="secondary" sx={{ mb: 2 }} startIcon={<DeleteIcon />} onClick={() => deleteSegmentGroup(i)}>Group</Button>
          </Grid>
        </Grid>
      )
    }
    console.log(curGroupListInput)
    return segmentGroups
  }, [curGroupListInput, deleteSegmentGroup])

  const handleSubmit = () => {
    alert(curGroupListInput.length)
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid item xs={12} >
        <Grid item xs={12}>
          {renderSegmentGroups()}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={addSegmentGroup}> Add Group</Button>
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
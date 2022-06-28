import React, { useState, useCallback} from 'react';
import SegmentGroup from './segmentGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GroupListInput from '../interfaces/GroupListInput'
import SegmentGroupInput from '../interfaces/SegmentGroupInput'

function GroupList() {

  const emptySegmentGroup = [{ id: 0, attribute: '', operator: '', value: [] }];
  const [curGroupListInput, setGroupListInput] = useState<GroupListInput>([emptySegmentGroup])

  const handleSegmentGroupChange = useCallback((index: number, segmentGroupValue: SegmentGroupInput) => {
    //update parent state
    let curGroupListNew = [...curGroupListInput]
    curGroupListNew[index] = segmentGroupValue
    setGroupListInput(curGroupListNew)
  }, [curGroupListInput])

  const handleSegmentGroupDelete = useCallback((index: number) => {
    //update parent state
    let curGroupListNew = [...curGroupListInput]
    curGroupListNew.splice(index,1)
    setGroupListInput(curGroupListNew)
  }, [curGroupListInput])

  const renderSegmentGroups = useCallback(() => {
    var segmentGroups = []
    for (let i = 0; i < curGroupListInput.length; i++) {
      //pass parent state and callback as props
      segmentGroups.push(
      <Grid  key={i}>
        <SegmentGroup key={i} index={i} curGroupList={curGroupListInput} onSegmentGroupChange={handleSegmentGroupChange} />
        {(i !== 0) &&
          <Button variant="contained" sx={{ mb: 2 }} onClick={() => handleSegmentGroupDelete(i)}> Delete Group</Button>}
      </Grid>
      )
    }
    console.log(curGroupListInput)
    return segmentGroups
  }, [curGroupListInput, handleSegmentGroupChange, handleSegmentGroupDelete])

  const handleAddSegmentGroup = () => {
    setGroupListInput(arr => [...arr, emptySegmentGroup]);
  }

  const handleSubmit = () => {
    alert(curGroupListInput.length)
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          {renderSegmentGroups()}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleAddSegmentGroup}> Add Group</Button>
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
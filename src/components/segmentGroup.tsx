import React, { useCallback } from 'react';
import Segment from './segment';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IProps from '../interfaces/IProps'
import SegmentInput from '../interfaces/segmentInput';

function SegmentGroup(props: IProps) {
  const { index, curGroupList, onSegmentGroupChange } = props
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const emptySegment = { id: 0, attribute: '', operator: '', value: [] };

  const handleUpdateSegment = useCallback((segmentIndex: number, updatedSegment: SegmentInput) => {
    let segmentGroup = [...curGroupList][index]
    segmentGroup[segmentIndex] = updatedSegment
    onSegmentGroupChange(index, segmentGroup)
  }, [curGroupList, index, onSegmentGroupChange])

  const handleAddSegment = useCallback(() => {
    onSegmentGroupChange(index, [...curGroupList[index], emptySegment])
  },[curGroupList, emptySegment, index, onSegmentGroupChange])

  const handleDeleteSegment = useCallback((segmentIndex: number) => {
    let segmentGroup = [...curGroupList][index]
    segmentGroup.splice(segmentIndex,1)
    onSegmentGroupChange(index, segmentGroup)
  }, [curGroupList, index, onSegmentGroupChange])

  const renderSegments = useCallback(() => {
    var segments = []
    for (let i = 0; i < curGroupList[index].length; i++) {
      segments.push(
        <Grid key={i} item xs={12} sm={8}>
          <Segment key={i} index={i} curSegmentGroup={curGroupList[index]} onSegmentChange={handleUpdateSegment} />
          {(i !== 0) &&
             <Button variant="contained" sx={{ mb: 2 }} onClick={() => handleDeleteSegment(i)}> Delete Segment</Button>}
        </Grid>
      )
    }
    return segments
  }, [curGroupList, index, handleUpdateSegment, handleDeleteSegment])

  return (
    <Grid container spacing={4} borderBottom={1} sx={{ mt: 3, mb: 2 }}>
      {renderSegments()}
      <Grid item xs={12} sm={4}>
        <Button variant="contained" sx={{ mb: 2 }} onClick={handleAddSegment}> Add Segment</Button>
      </Grid>
    </Grid>
  )
}
export default SegmentGroup
import React, { useCallback } from 'react';
import Attribute from './attribute';
import CustomOperator from './customOperator';
import Value from './value';
import Grid from '@mui/material/Grid';
import useStore from '../store/GroupListStore'

function Segment(props: { segmentGroupIndex: number, segmentIndex: number }) {
  const { segmentIndex, segmentGroupIndex } = props
  const { curGroupListInput, updateSegment } = useStore();
  const curSegmentGroup = [...curGroupListInput][segmentGroupIndex]

  const handleUpdateAttribute = useCallback((value: string) => {
    //Pass new attribute to parent
    let newSegment = curGroupListInput[segmentGroupIndex][segmentIndex]
    newSegment.attribute = value
    updateSegment(segmentGroupIndex, segmentIndex, newSegment)
  }, [curGroupListInput, segmentGroupIndex, segmentIndex, updateSegment])

  const handleUpdateOperator = useCallback((value: string) => {
    //Pass new operator to parent
    let newSegment = curGroupListInput[segmentGroupIndex][segmentIndex]
    newSegment.operator = value
    updateSegment(segmentGroupIndex, segmentIndex, newSegment)
  }, [curGroupListInput, segmentGroupIndex, segmentIndex, updateSegment])

  const handleUpdateValue = useCallback((value: Array<number | string>) => {
    //Pass new value to parent
    let newSegment = curGroupListInput[segmentGroupIndex][segmentIndex]
    newSegment.value = value
    updateSegment(segmentGroupIndex, segmentIndex, newSegment)
  }, [curGroupListInput, segmentGroupIndex, segmentIndex, updateSegment])


  return (
    <Grid key={segmentIndex} container spacing={2} >
      <Attribute attribute={curSegmentGroup[segmentIndex].attribute} onAttributeChange={handleUpdateAttribute} />
      <CustomOperator operator={curSegmentGroup[segmentIndex].operator} onOperatorChange={handleUpdateOperator} />
      <Value valueArray={curSegmentGroup[segmentIndex].value} onValueChange={handleUpdateValue} />
    </Grid>
  )
}

export default Segment
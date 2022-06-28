import React, {useCallback} from 'react';
import Attribute from './attribute';
import CustomOperator from './customOperator';
import Value from './value';
import Grid from '@mui/material/Grid';
import SegmentGroupInput from '../interfaces/SegmentGroupInput'
import SegmentInput from '../interfaces/segmentInput'

interface stateUpdateCallback {
  (segmentIndex: number, segment: SegmentInput): void;
}

function Segment(props: { index: number, curSegmentGroup: SegmentGroupInput, onSegmentChange: stateUpdateCallback }) {
  const { index, curSegmentGroup, onSegmentChange } = props

  const handleUpdateAttribute = useCallback((value: string) => {
    //Pass new attribute to parent
    let newSegment = curSegmentGroup[index]
    newSegment.attribute = value
    onSegmentChange(index, newSegment)

  }, [curSegmentGroup, index, onSegmentChange])

  const handleUpdateOperator = useCallback((value: string) => {
    //Pass new operator to parent
    let newSegment = curSegmentGroup[index]
    newSegment.operator = value
    onSegmentChange(index, newSegment)

  }, [curSegmentGroup, index, onSegmentChange])

  const handleUpdateValue = useCallback((value: Array<number | string>) => {
    //Pass new value to parent
    let newSegment = curSegmentGroup[index]
    newSegment.value = value
    onSegmentChange(index, newSegment)

  }, [curSegmentGroup, index, onSegmentChange])


  return (
    <Grid key={index} container spacing={2} >
      <Attribute attribute={curSegmentGroup[index].attribute} onAttributeChange={handleUpdateAttribute} />
      <CustomOperator operator={curSegmentGroup[index].operator} onOperatorChange={handleUpdateOperator} />
      <Value valueArray={curSegmentGroup[index].value} onValueChange={handleUpdateValue} />
    </Grid>
  )
}

export default Segment
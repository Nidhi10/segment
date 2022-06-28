import GroupListInput from '../interfaces/GroupListInput'
import SegmentGroupInput from '../interfaces/SegmentGroupInput'

interface stateUpdateCallback {
  (segmentGroupindex: number, segmentGroup: SegmentGroupInput): void;
}

interface IProps {
  index: number
  curGroupList: GroupListInput
  onSegmentGroupChange: stateUpdateCallback
}

export default IProps
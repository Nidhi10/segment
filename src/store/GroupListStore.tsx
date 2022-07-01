import GroupListInput from '../interfaces/GroupListInput'
import SegmentGroupInput from '../interfaces/SegmentGroupInput'
import SegmentInput from '../interfaces/segmentInput'
import create from 'zustand'
import {persist} from 'zustand/middleware';

interface GroupListState {
  curGroupListInput: GroupListInput;
  addSegmentGroup: () => void;
  deleteSegmentGroup: (groupIndex: number) => void;
  updateSegmentGroup: (groupIndex: number, segmentGroupValue: SegmentGroupInput) => void;
  addSegment: (segmentGroupIndex: number) => void;
  deleteSegment: (segmentGroupIndex: number, segmentIndex: number) => void;
  updateSegment: (segmentGroupIndex: number, segmentIndex: number, segmentValue: SegmentInput) => void;
}

const useStore = create<GroupListState>()(persist(
  (set) => ({
    //initial state
    curGroupListInput: [[{ id: 0, attribute: '', operator: '', value: [] }]],
    addSegmentGroup: () => {
      set((state) => ({
        curGroupListInput: [
          ...state.curGroupListInput,
          [{
            id: 0, attribute: '', operator: '', value: []
          }]
        ]
      }))
    },
    deleteSegmentGroup: (groupIndex: number) => {
      set((state) => ({
        curGroupListInput: [...state.curGroupListInput].filter((segmentGroup, index) => index !== groupIndex)
      }))
    },
    updateSegmentGroup: (groupIndex: number, segmentGroupValue: SegmentGroupInput) => {
      set((state) => ({
        curGroupListInput: [...state.curGroupListInput].map((segmentGroup, index) => index === groupIndex ?
          segmentGroupValue : segmentGroup)
      }))
    },
    addSegment: (segmentGroupIndex: number) => {
      set((state) => ({
        curGroupListInput: [...state.curGroupListInput].map((segmentGroup, index) => index === segmentGroupIndex ?
          [...segmentGroup, {
            id: 0, attribute: '', operator: '', value: []
          }] : segmentGroup)
      }))
    },
    deleteSegment: (segmentGroupIndex: number, segmentIndex: number) => {
      set((state) => ({
        curGroupListInput: [...state.curGroupListInput].map((segmentGroup, index) => index === segmentGroupIndex ?
          [...segmentGroup].filter((segment, index) => index !== segmentIndex) : segmentGroup)
      }))
    },
    updateSegment: (segmentGroupIndex: number, segmentIndex: number, segmentValue: SegmentInput) => {
      set((state) => ({
        curGroupListInput: [...state.curGroupListInput].map((segmentGroup, index) => index === segmentGroupIndex ?
          [...segmentGroup].map((segment, index) => index === segmentIndex ?
            segmentValue : segment) : segmentGroup)
      }))
    }
  }),
  { name: "segment-storage" }
))

export default useStore

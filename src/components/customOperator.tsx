import React from 'react';
import Dropdown from './Dropdown';

interface stateUpdateCallback {
  (value: string): void;
}

function CustomOperator(props: { operator: string, onOperatorChange: stateUpdateCallback }) {

  const { operator, onOperatorChange } = props

  const handleOperator = (e: React.ChangeEvent<HTMLInputElement>) => {
    onOperatorChange(e.target.value)
    // setOperator(e.target.value)
    console.log("selected", operator)
  }
  
  const operatorList = {
    label: "Operator",
    value: operator,
    options: [{ key: 1, value: "equals", label: "Equals" },
    { key: 2, value: "not equals", label: "not Equals" }],
    helperText: "Please select an operator",
    onSelect: handleOperator
  }

  return (
    <Dropdown {...operatorList} />
  )
}

export default CustomOperator
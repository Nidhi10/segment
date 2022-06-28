import React, {useState} from 'react';
import Dropdown from './Dropdown';

function CustomOperator () {
  const [operator, setOperator] = useState('')

  const handleOperator= (e: React.ChangeEvent<HTMLInputElement>) => {
    setOperator(e.target.value)
    console.log("selected", operator)
  }
  const operatorList = {
    label: "Operator",
    value: operator,
    options: [{key:1, value: "equals", label: "Equals"},
      {key:2, value: "not equals", label: "not Equals"}],
    helperText: "Please select an operator",
    onSelect: handleOperator
  }

  return (
    <Dropdown {...operatorList} />
  )
}

export default CustomOperator
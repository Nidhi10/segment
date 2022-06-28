import React, {useState} from 'react';
import Dropdown from './Dropdown';

function Attribute () {
  const [attribute, setAttribute] = useState('')

  const handleAttribute = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttribute(e.target.value)
    console.log("selected", attribute)
  }
  const attributeList = {
    label: "Attribute",
    value: attribute,
    options: [{key:1, value: "gender", label: "Gender"},
      {key:2, value: "salary", label: "Salary"}],
    helperText: "Please select attribute",
    onSelect: handleAttribute
  }

  return (
    <Dropdown {...attributeList} />
  )
}

export default Attribute
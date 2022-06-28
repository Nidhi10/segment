import React from 'react';
import Dropdown from './Dropdown';

interface stateUpdateCallback {
  (value: string): void;
}

function Attribute(props: { attribute: string, onAttributeChange: stateUpdateCallback }) {

  const { attribute, onAttributeChange } = props

  const handleAttribute = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAttributeChange(e.target.value)
  }
  
  const attributeList = {
    label: "Attribute",
    value: attribute,
    options: [{ key: 1, value: "gender", label: "Gender" },
    { key: 2, value: "salary", label: "Salary" }],
    helperText: "Please select attribute",
    onSelect: handleAttribute
  }

  return (
    <Dropdown {...attributeList} />
  )
}

export default Attribute
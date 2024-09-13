import React from 'react'
import "./Header.css"
import { Box } from '../Box/Box'


export const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <div className='box'  ><Box grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} /></div>
  )
}


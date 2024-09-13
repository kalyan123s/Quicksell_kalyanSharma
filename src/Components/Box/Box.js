import React from 'react'
import "./Box.css"
import { LuSettings2 } from "react-icons/lu";
// import { BiChevronDown } from "react-icons/bi";
import  { useCallback, useEffect, useRef, useState } from 'react';

import { VscChevronDown } from "react-icons/vsc";


export const Box = ({ grouping, setGrouping, ordering, setOrdering }) => {

  const [visible, setVisible] = useState(false);
const componentRef = useRef(null);

const openDropdown = useCallback(() => {
  setVisible(true);
}, []);

const handleClickOutside = useCallback((event) => {
  if (componentRef.current && !componentRef.current.contains(event.target)) {
    setVisible(false);
  }
}, []);

const onGroupingChange = useCallback((e) => setGrouping(e.target.value), []);
const onOrderingChange = useCallback((e) => setOrdering(e.target.value), []);

useEffect(() => {
  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [handleClickOutside]);


  return (
    <div className='box'ref={componentRef} >
        {/* ref={componentRef} */}
    <div className='box-label-container' onClick={openDropdown} >
        {/*  onClick={openDropdown} */}
      <LuSettings2 color='#6b6f76' />
      <div className='box-label'>Display</div>
      
      <VscChevronDown color='#6b6f76' />
    </div>
    <div className={`box-content-container ${visible && "visible"} `}>
        {/* ${visible && "visible"} */}
      <div className='box-content-row'>
        <div className='box-content-label'>Grouping</div>
        <select name="grouping" id="grouping" value={grouping} onChange={onGroupingChange}>
            {/* value={grouping} onChange={onGroupingChange} */}
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className='box-content-row'>
        <div className='box-content-label'>Ordering</div>
        <select name="ordering" id="ordering" value={ordering} onChange={onOrderingChange} >
            {/* value={ordering} onChange={onOrderingChange} */}
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  </div>
  )
}

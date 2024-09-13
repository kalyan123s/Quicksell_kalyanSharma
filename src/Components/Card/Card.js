import React from 'react'
import "./Card.css"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { UserIcon } from '../Usericons/UserIcon';
import { getPriorityIcon } from '../Utils/helper';
import { getStatusIcon } from '../Utils/helper';


export const Card = ({ ticket, userData, hideStatusIcon, hideProfileIcon }) => {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        <div className='more-icon-container'>
         
          <BiDotsHorizontalRounded color="#797d84"/>
        </div>
        {ticket.tag.map((t) => (
  <div key={t} className='tag-container'>
    <div className='tag-icon'></div>
    <div className='tag-text'>{t}</div>
  </div>
))}
      </div>
    </div>
  )
}

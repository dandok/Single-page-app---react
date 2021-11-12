import React from 'react'
import { IoIosArrowDown} from 'react-icons/io'

const menu = [
  'World', 'Following', 'Popular', 'Post', 'Gender', 'Location', 'Profession'
]

const Drop = () => {
  return (
    <div className='dropdown'>
    {menu.map((item, i) => {
      return (
        <div className='drop' key={i}>
          <div className='dropdown-btn'>{item} <IoIosArrowDown /></div>
        </div>
      )
    })}
    </div>
  )
}

export default Drop

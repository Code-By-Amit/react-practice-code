import React, { useContext } from 'react'
import { BioContext } from './useContex'

export const About = () => {
    const {name , age} = useContext(BioContext)
  return (
    <div>i am using useContex (About) by {name} , and i am {age} year old</div>
  )
}

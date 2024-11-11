import React, { useContext } from 'react'
import { BioContext } from '.';

export const Home = () => {
    const {name} = useContext(BioContext);
  return (
    <div>hello i am {name} using useContext </div>
  )
}

import React from 'react'
import OneLevelWithRedux from './OneLevelWithRedux'
import SecondLevel from './SecondLevel'
import ThirdLevel from './ThirdLevel'

const MultiLevel = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4'>
        <div>
        <OneLevelWithRedux />
        </div>
    <div className='flex gap-x-4 justify-center items-center'>
        <SecondLevel />
        <ThirdLevel />
    </div>
    </div>
  )
}

export default MultiLevel
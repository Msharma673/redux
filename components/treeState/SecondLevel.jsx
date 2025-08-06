"use client";

import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { incrementSecondLevel, decrementSecondLevel } from '../../redux/store';

const SecondLevel = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.secondLevel.count);

  const handleIncrement = () => {
    dispatch(incrementSecondLevel());
  };

  const handleDecrement = () => {
    dispatch(decrementSecondLevel());
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <OneLevel1 count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export default SecondLevel;

export const OneLevel1 = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="bg-gray-200 px-4 py-2 rounded-xl">
      <div>
        <Display count={count} />
      </div>
      </div>

      <div>
        <IncrementDecrement onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
    </div>
  );
};

export const Display = ({ count }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold">
        {count}
      </div>
    </div>
  );
};


export const IncrementDecrement = ({ onIncrement, onDecrement }) => {
  return (
    <div className=" flex gap-x-4 items-center justify-center">
      <button 
        className="bg-blue-500 text-white px-6 py-2 rounded-xl justify-center items-center text-2xl font-bold"
        onClick={onIncrement}
      >
        +
      </button>
      <button 
        className="bg-blue-500 text-white px-6 py-2 rounded-xl justify-center items-center text-2xl font-bold"
        onClick={onDecrement}
      >
        -
      </button>
    </div>
  );
};

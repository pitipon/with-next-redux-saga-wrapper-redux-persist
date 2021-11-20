export const INCREMENT_COUNTER = "incrementCounter";
export const DECREMENT_COUNTER = "decrementCounter";


export const incrementCounter = (incrementState) => {
  const increase = incrementState + 1;

  return {
    type: INCREMENT_COUNTER,
    payload: increase,
  }
};

export const decrementCounter = (decrementState) =>  {
  const decrease = decrementState - 1;

  return {
    type: DECREMENT_COUNTER,
    payload: decrease,
  }
};

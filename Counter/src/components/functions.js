// example of Named exports

export const Increament = (value) => {
  console.log("increment", value + 1);
  return value + 1;
};

export const Decrement = (value) => {
  console.log("decrement", value - 1);
  return value - 1;
};

export const Reset = (value) => {
  console.log("reset", value);
  return value;
};

const counter = () => {
  let count = 0;

  const increment = () => {
    return count += 1;
  }

  return increment;
};

// const counter2 = (count = 0) => (adds = 1) => count += adds;
// const increment2 = counter2();

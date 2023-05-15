const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("maintain the same array length", () => {
    const initialArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...initialArray]);

    expect(shuffledArray.length).toEqual(initialArray.length);
  });

  test("maintain the same array elements", () => {
    const initialArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...initialArray]);

    const sortedInitialArray = [...initialArray].sort();
    const sortedShuffledArray = [...shuffledArray].sort();

    expect(sortedShuffledArray).toEqual(sortedInitialArray);
  });
});

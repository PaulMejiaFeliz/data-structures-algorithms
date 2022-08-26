//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input: number[]): number | undefined {
  const found = new Set<number>();
  for (const num of input) {
    if (found.has(num)) {
      return num;
    }

    found.add(num)
  }

  return undefined;
}

console.log(
  'Expected: 2. Result: ',
  firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])
);
console.log(
  'Expected: 1. Result: ',
  firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])
);
console.log(
  'Expected: undefined. Result: ',
  firstRecurringCharacter([2, 3, 4, 5])
);
console.log(
  'Expected: 5. Result: ',
  firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])
);

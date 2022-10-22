function minWindow(s: string, t: string): string {
  const targetChars = new Map<string, number>();
  for (let char of t) {
    targetChars.set(char, (targetChars.get(char) ?? 0) + 1);
  }

  let min = s;
  const windowChars = new Map<string, number>();

  let left = 0;
  let right = 0;

  // console.log(targetChars);
  // console.log(windowChars);
  // console.log(isContained(windowChars, targetChars));

  while (right < s.length) {
    windowChars.set(s[right], (windowChars.get(s[right]) ?? 0) + 1);

    // console.log('------');
    // console.log('Left', left);
    // console.log('Right', right);

    while (isContained(windowChars, targetChars)) {
      // console.log('------');
      // console.log('Left', left);
      // console.log('Right', right);
      // console.log('Window Chars', windowChars);

      if (right - left + 1 < min.length) {
        min = s.substring(left, right + 1);
      }

      windowChars.set(s[left], (windowChars.get(s[left]) ?? 0) - 1);

      left++;

      // if (left > 5) {
      //   break;
      // }
    }

    right++;
  }

  return min;
}

function isContained(
  windowChars: Map<string, number>,
  targetChars: Map<string, number>
): boolean {
  for (let [char, count] of targetChars.entries()) {
    if (!windowChars.has(char)) {
      return false;
    }

    // console.log('Comparing: ', char);
    // console.log(windowChars.get(char) as number);
    // console.log(count);

    if ((windowChars.get(char) as number) < count) {
      // console.log('returning');
      return false;
    }
  }

  return true;
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));

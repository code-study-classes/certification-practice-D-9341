export const calculateDistance = (x1, x2) => {
  if (x1 >= x2) {
    return x1 - x2;
  }
  return x2 - x1;
};

export const calculateSegmentProduct = (a, b, c) => (c - a) * (b - c);

export const calculateKilobytes = (fileSize) => {
  const final = Math.floor(fileSize / 1024);
  return final;
};

export const calculateSegments = (a, b) => Math.floor(a / b);

export const calculateDigitSum = (number) => {
  let final = number.toString().split('');
  final = final.map(Number);
  let sum = 0;
  for (let i = 0; i < number.toString().length; i += 1) {
    sum += final[i];
  }
  return sum;
};

export const swapHundredsAndTens = (numby) => {
  const first = numby.toString().split('');
  const second = first.pop();
  let final = first.reverse();
  final = final.join('');
  return Number(final + second);
};

export const getHundredsDigit = (number) => {
  if (number < 999) {
    return 0;
  }
  return Math.floor(number / 100) % 10;
};

export const getFullHours = (seconds) => Math.floor(seconds / 60 / 60);

export const getDayOfWeek = (day) => day % 7;

export const countSquares = (a, b, c) => (Math.floor((a / c)) * (Math.floor(b / c)));
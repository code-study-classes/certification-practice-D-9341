export const countUppercaseLetters = (text) => {
  let count = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === text[i].toLowerCase()) {
      count += 1;
    }
  }
  return text.length - count;
};

export const combineStrings = (n1, n2, s1, s2) => {
  if (n1 === n2 && n1 === 0) {
    return '';
  }
  const first = s1.slice(0, n1);
  const second = s2.slice(-n2);
  const final = `${first}${second}`;
  return final;
};

export const containsSubstring = (str, text) => str.includes(text);

export const replaceSubstring = (str, first, second) => str.replace(first, second);

export const countWordsWithSameLetters = (str) => {
  let count = 0;
  const arr = str.split(' ');
  if (str === '') return 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].charAt(0).toLowerCase() === arr[i].charAt(arr[i].length - 1).toLowerCase()) {
      count += 1;
    }
  }
  return count;
};

export const countWordsWithA = (str) => {
  let count = 0;
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].includes('a')) {
      count += 1;
    }
  }
  return count;
};

export const normalizeSpaces = (str) => {
  const first = str.trim();
  const second = first.split(' ');
  const final = second.filter((index) => index !== '');
  return final.join(' ');
};

export const extractFileName = (str) => {
  if (str === ' ') {
    return '';
  }
  let final = str.split('/');
  final.splice(0, final.length - 1);
  final = final.join('');
  final = final.split('.');
  return final[0];
};

export const encryptSentence = (str) => {
  let result = '';
  const first = [];
  const second = [];
  for (let i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) {
      first.push(str[i]);
    }
  }
  for (let i = 0; i < str.length; i += 1) {
    if (i % 2 !== 0) {
      second.push(str[i]);
    }
  }
  result = second.join('') + first.reverse().join('');
  return result;
};

export const checkBrackets = (str) => {

};

// JavaScript version of your Python code

const vowels = "aæeɛəiouAEIOU";
const weak = ["æ", "ɛ", "ə", "0", "ʃ", "T", "x", "ɣ"];
const voiced = ['b', 'd', 'g', 'ɢ', 'v', 'ð', 'z', 'ʒ', 'ɣ'];
const unvoiced = ['p', 't', 'k', 'q', 'f', 'θ', 's', 'ʃ', 'x'];

// Checks if a character is a vowel
function isVowel(char) {
  return vowels.includes(char);
}

// Changes words into their consonant/vowel pattern
function toCV(word1, word2) {
  const cv1 = [];
  const cv2 = [];
  for (let i = 0; i < word1.length; i++) {
    cv1.push(isVowel(word1[i]) ? "V" : "C");
  }
  for (let i = 0; i < word2.length; i++) {
    cv2.push(isVowel(word2[i]) ? "V" : "C");
  }
  return [cv1.join(''), cv2.join('')];
}

// Determines if a character is a weak form or obstruent
function is_weak(char) {
  return weak.includes(char);
}

// Determines if a character is a voiced obstruent
function is_voiced(char) {
  return voiced.includes(char);
}

// Takes a voiced obstruent and returns an unvoiced obstruent
function unvoice(char) {
  if (!voiced.includes(char)) {
    return char;
  }
  const i = voiced.indexOf(char);
  return unvoiced[i];
}

// Takes a weak allophone and finds a stronger allophone
function find_strong_allophone(char) {
  if (!is_weak(char)) {
    return unvoice(char);
  }
  char = unvoice(char);
  if (char === "ʃ") return "s";
  if (char === "T") return "c";
  if (char === "x") return "k";
  return char; // default return if none of the above cases match
}

// Finds the greatest common substring between two strings
function find_gcs(s1, s2) {
  let max_length = 0;
  let gcs = "";
  for (let i = 0; i < s1.length; i++) {
    for (let j = i + 1; j <= s1.length; j++) {
      const substring = s1.substring(i, j);
      if (s2.includes(substring) && substring.length > max_length) {
        max_length = substring.length;
        gcs = substring;
      }
    }
  }
  return gcs;
}

// Takes two strings and returns arrays delimited around the common substring
function split_by_greatest_common_substring(word1, word2) {
  const gcs = find_gcs(word1, word2);
  if (!gcs) {
    return [[word1], [word2]];
  }

  const split1 = word1.split(gcs);
  const split2 = word2.split(gcs);

  const result1 = [split1[0]];
  const result2 = [split2[0]];

  for (let i = 1; i < split1.length; i++) {
    const part1 = split1[i];
    const part2 = split2[i];
    result1.push(gcs);
    result1.push(part1);
    result2.push(gcs);
    result2.push(part2);
  }

  if (result1[0] === '' && result2[0] === '') {
    result1.shift();
    result2.shift();
  }

  return [result1, result2];
}

// Adds 0 where there is a lacking correspondence
function add_zeros(noZero1, noZero2) {
  const addZero1 = [];
  const addZero2 = [];
  for (let i = 0; i < noZero1.length; i++) {
    if (noZero1[i] !== noZero2[i]) {
      const [newSplit1, newSplit2] = split_by_greatest_common_substring(noZero1[i], noZero2[i]);
      for (let j = 0; j < newSplit1.length; j++) {
        addZero1.push(newSplit1[j]);
        addZero2.push(newSplit2[j]);
      }
    } else {
      addZero1.push(noZero1[i]);
      addZero2.push(noZero2[i]);
    }
  }

  for (let k = 0; k < addZero1.length; k++) {
    if (addZero1[k] === '') addZero1[k] = "0";
    if (addZero2[k] === '') addZero2[k] = "0";
  }

  if (addZero1[addZero1.length - 1] === '0') {
    addZero1.pop();
  }
  if (addZero2[addZero2.length - 1] === '0') {
    addZero2.pop();
  }

  return [addZero1, addZero2];
}

// Returns the original letters in their respective places
function returnLetters(finalSplit1, finalSplit2, word1, word2) {
  let startString1 = '';
  let startString2 = '';
  let retString1 = '';
  let retString2 = '';

  for (let i = 0; i < finalSplit1.length; i++) {
    startString1 += finalSplit1[i];
    startString2 += finalSplit2[i];
  }

  let j = 0;
  let c = 0;
  while (j < startString1.length) {
    if (startString1[j] === "0") {
      retString1 += "0";
      c++;
      j++;
    } else {
      retString1 += word1[j - c];
      j++;
    }
  }

  let k = 0;
  c = 0;
  while (k < startString2.length) {
    if (startString2[k] === "0") {
      retString2 += "0";
      c++;
      k++;
    } else {
      retString2 += word2[k - c];
      k++;
    }
  }

  return [retString1, retString2];
}

// Accumulation of the process using the other functions
function the_greater_function(word1, word2) {
  const [cv1, cv2] = toCV(word1, word2);
  const [result1, result2] = split_by_greatest_common_substring(cv1, cv2);
  const [withZero1, withZero2] = add_zeros(result1, result2);
  const [retString1, retString2] = returnLetters(withZero1, withZero2, word1, word2);
  return [retString1, retString2];
}

// Takes two strings and returns a list of tuples containing their correspondences
function get_tuples(string1, string2) {
  const retTupleSet = [];
  for (let i = 0; i < string1.length; i++) {
    retTupleSet.push([string1[i], string2[i]]);
  }
  return retTupleSet;
}

// Applies comparative linguistics to reconstruct the phonemes
function reconstructPhones(tupleList) {
  const recPhones = [];
  for (let i = 0; i < tupleList.length; i++) {
    const [char1, char2] = tupleList[i];
    if (char1 !== char2) {
      if (isVowel(char1) || isVowel(char2)) {
        if (is_weak(char1) && !is_weak(char2)) {
          recPhones.push(char2);
        } else if (is_weak(char2) && !is_weak(char1)) {
          recPhones.push(char1);
        } else {
          recPhones.push("e*");
        }
      } else {
        // Consonant logic
        if (is_voiced(char1) && unvoice(char1) === char2) {
          recPhones.push(char2);
        } else if (is_voiced(char2) && unvoice(char2) === char1) {
          recPhones.push(char1);
        } else if (find_strong_allophone(char1) === find_strong_allophone(char2)) {
          recPhones.push(find_strong_allophone(char1));
        } else {
          recPhones.push("s*");
        }
      }
    } else {
      recPhones.push(char1);
    }
  }
  return recPhones;
}

// New function to handle comma-separated lists
// If either input string contains commas, it will split them into arrays.
// It will run the_greater_function on each pair of words and return the results as an array of pairs.
function processWords(word1, word2) {
  const words1 = word1.split(',').map(w => w.trim());
  const words2 = word2.split(',').map(w => w.trim());

  const length = Math.max(words1.length, words2.length);
  const results = [];
  for (let i = 0; i < length; i++) {
    const w1 = words1[i] || "";
    const w2 = words2[i] || "";
    const [final1, final2] = the_greater_function(w1, w2);
    results.push([final1, final2]);
  }

  return results;
}

export {
  the_greater_function,
  get_tuples,
  reconstructPhones,
  processWords
};

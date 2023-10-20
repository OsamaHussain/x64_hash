// Developer: Osama Hussain
// GitHub:    https://github.com/OsamaHussain

// One-Way Hashing Algorithm x64_hash That Uses Simple Method to Hash Data
const x64_hash = (input) => {
  let hash = 0n;
  for (let i = 0; i < input.length; i++) {
    const charCode = BigInt(input.charCodeAt(i));
    hash = hash * 31n + charCode;
    hash = hash & 0xffffffffffffffffn;
  }
  const hashString = hash.toString(16).padStart(16, "0");
  return hashString;
};

// Result
const result = x64_hash("My_Password_123");
console.log(result);

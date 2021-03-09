const joinNames = (namesObj) => {
  let namesList = "";
  namesObj.forEach((n, index) => {
    if (index === 0) {
      namesList += n.name;
    }
    if (index !== namesObj.length - 1 && index !== 0) {
      namesList += `, ${n.name}`;
    }
    if (index === namesObj.length - 1) {
      namesList += ` & ${n.name}`;
    }
  });
  return namesList;
};

module.exports = joinNames;

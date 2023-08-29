function getRandomEnumValue(enumObject) {
  const keys = Object.keys(enumObject);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return enumObject[randomKey];
}

module.exports = {
  getRandomEnumValue,
};

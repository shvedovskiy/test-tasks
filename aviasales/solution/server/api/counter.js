const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;


const fetchCounter = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(getRandomInt(1, 100))
      }, 500);
    });

module.exports = { fetchCounter };

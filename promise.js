const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const angry = [];
  const notAngry = [];

  try {
    const getEmosiIX = await promiseTheaterIXX(emosi);
    const getEmosiVG = await promiseTheaterVGC(emosi);

    if (emosi == "marah") {
      const getValIX = getEmosiIX.filter((item) => item.hasil == "marah");
      const getValVG = getEmosiVG.filter((item) => item.hasil == "marah");
      getValIX.map((item) => angry.push(item));
      getValVG.map((item) => angry.push(item));
      return angry.length;
    }

    if (emosi == "tidak marah") {
      const getValIX = getEmosiIX.filter((item) => item.hasil == "tidak marah");
      const getValVG = getEmosiVG.filter((item) => item.hasil == "tidak marah");
      getValIX.map((item) => notAngry.push(item));
      getValVG.map((item) => notAngry.push(item));
      return notAngry.length;
    }
  } catch (rejectM) {
    console.log(rejectM);
  }
};

module.exports = {
  promiseOutput,
};

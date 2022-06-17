export default {
  getRigs(count, fleet) {
    let rigs = [];
    let max = 100;
    const path = fleet || "all";
    if (!fleet) {
      max = 1000;
    }
    if (count > max) {
      return rigs;
    }
    if (count === max) {
      rigs = this.shuffle([...Array(count).keys()]);
    } else {
      while (rigs.length < count) {
        const j = Math.floor(Math.random() * max);
        if (!rigs.includes(j)) {
          rigs.push(j);
        }
      }
    }
    rigs = rigs.map((v) => {
      return "/rigs/" + path + "/" + v + ".jpg";
    });
    return rigs;
  },

  // https://stackoverflow.com/a/2450976/641834
  shuffle: function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  },
};

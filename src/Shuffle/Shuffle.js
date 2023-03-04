let Shuffle = (leaders, members) => {

    shuffle_algorithm(leaders);
    shuffle_algorithm(members);

    return [leaders, members];

}

function shuffle_algorithm(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export default Shuffle
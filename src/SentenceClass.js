class Sentence {
  constructor(sentence, variations) {
    this.sentence = sentence;
    this.variations = variations;
  }

  removePunctuation(sentence) {
    const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()?"]/g;
    return sentence.toLowerCase().replace(regex, "");
  }

  makeSentenceArr() {
    return this.removePunctuation(this.sentence).split(" ");
  }

  makeVariationsArr() {
    let variationsArr = [];
    if (this.variations.length > 0) {
      for (const sentence of this.variations) {
        const cleanedSentence = this.removePunctuation(sentence);
        variationsArr.push([cleanedSentence].join("").split(" "));
      }

      return variationsArr;
    }
    return [];
  }

  getJumbledWords() {
    const array = this.makeSentenceArr();

    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i + 1);

      //swapping the last index with a random one
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
  }

  getSolutionArr() {
    return this.makeSentenceArr();
  }

  getVariations() {
    return this.makeVariationsArr();
  }
}

export default Sentence;

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



const pAequorFactory = (number, dna) => {
  return {
    _specimenNum: number,
    _dna: dna,
    mutate () {
      const randomPosition = [Math.floor(Math.random() * 15)]
      const letter = this._dna[randomPosition];

      do {
        this._dna[randomPosition] = returnRandBase();
      } while(this._dna[randomPosition] === letter)
      return this._dna;
    },

    compareDNA (pAequor) {
      let sameBase = 0;
      for (let i = 0; i < 15; i++) {
        if (pAequor._dna[i] === this._dna[i]){
          sameBase++;
        }
      }
      console.log(`specimen #1 and specimen #2 have ${(sameBase/15) * 100}% DNA in common`);
    },

    willLikelySurvive () {
      let total = 0;
      this._dna.forEach(ele => {
        if (ele === 'C' || ele === 'G'){
          total++;
        }
      })

      return total >= 9;
    }
  };
}

console.log(pAequorFactory(1, mockUpStrand()));





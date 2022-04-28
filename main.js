// Codecademy project 
// See xx for project requirements

/* Returns a random DNA base
*/
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

/* Returns a random single stand of DNA containing 15 bases
*/
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/* Creates a unique ID number
*/
const getID = () => Math.floor(Math.random()*(999-100+1)+100);


/* Factory function to return DNA sample object
*/
const pAequorFactory = ( specimenNum, DNA ) => {

    return {
      // PROPERTIES
      specimenNum: specimenNum,
      DNA: DNA,

      // METHODS
      mutate() {
        // Gets a random numner between 0 and DNABase.length - 1
        const randomIndex = Math.random() * this.DNA.length | 0;
        let strand = this.DNA[randomIndex];
        let newStrand;
        do {
          newStrand = returnRandBase();
        } while (strand === newStrand);
        this.DNA[randomIndex] = newStrand;
        return this.DNA;
      },

      compareDNA( pAequorObj ) {
        let matches = 0;
        this.DNA.forEach((e, i) => {
          if (e === pAequor2.DNA[i]) { matches++; }});
        return `${this.specimenNum} and ${pAequor2.specimenNum} have ${Math.round(100 / this.DNA.length * matches)}% DNA in common`; 
      },

      willLikelySurvive() {
        let count = 0;
        this.DNA.forEach(strand => {
          if (strand === 'C' || strand === 'G') { count++ }}); //end
          return Math.round(100 / this.DNA.length * count) >= 60 ? true : false;
      }
    }

};
// Create specified number of DNA specimens
const createSpecimens = numSpecimens => {
  let specimens = [];
  while (specimens.length < numSpecimens) {
    let pAequor = pAequorFactory(getID(), mockUpStrand());
    if ( pAequor.willLikelySurvive() ) {
      specimens.push(pAequor);
    }
  }
  return specimens;
}

// Create 30 specimens of 'likely to survive' DNA for future research
const futureSpecimens = createSpecimens(30);
futureSpecimens.forEach(specimen => {
  console.log(`Specimen ID: ${specimen.specimenNum}`);
  console.log(`Specimen DNA: ${specimen.DNA}`);
})

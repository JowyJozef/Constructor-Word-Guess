function Letter(value) {
    this.letter = value;
    this.guessed = false;
    
    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.displayUnderScore = function(){
        if(!this.guessed){
            return "-"; 
        }
        else{
            return this.leter; 
        }
    }
    
    // Check if user guess is the same value
    this.checkLetter = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;
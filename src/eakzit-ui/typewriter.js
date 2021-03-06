import './styles/typewriter.css';

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
        this.startPause=false;
    }
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
        // Check if deleting
        if (this.isDeleting) {
            //Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        // Initial Type Speed
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            if(this.startPause){
            this.isDeleting = false;
            this.startPause=false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;}else{
                typeSpeed=this.wait/2;
                this.startPause=true;
            }
        }
        setTimeout(() => this.type(), typeSpeed);
    }
};

export { TypeWriter as default };


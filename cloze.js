function ClozeCard(fullText, cloze) {
	if (this instanceof ClozeCard) {
		this.fullText = fullText;
		this.cloze = cloze;
		//If the full text includes the cloze phrase,
		if ((this.fullText).includes(this.cloze)) {
			//Set the partial quality equal to the fullText with the cloze replaced by
			//an ellipsis wherever the cloze appears
			this.partial = (this.fullText).replace((new RegExp(this.cloze, "g")), "...");
		} else { //Otherwise, throw an error
			throw new Error("The text doesn't contain the specified word (be sure to check upper/lower case)!\n");
		};
	} else {
		return new ClozeCard(fullText, cloze);
	};
}; 

//Export ClozeCard for use in main
module.exports = ClozeCard;


function BasicCard(front, back) {
	if (this instanceof BasicCard) {
		this.front = front;
		this.back = back;
	} else {
		return new BasicCard(front, back);
	};
};

//Export BasicCard for use in main
module.exports = BasicCard;
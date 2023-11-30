const mongoose = require("mongoose");
module.exports = () => {
    const mongo = "mongodb+srv://admin-kaushik:Test123@cluster0.meubq.mongodb.net/kanhaiyaDB?retryWrites=true&w=majority";
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(mongo, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
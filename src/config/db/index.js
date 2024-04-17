const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://duoc6694:wXTKst60mvLn4Gq2@cluster0.majkgwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Truy cập DB thành công!");
  } catch (error) {
    console.log("Truy cập DB thất bại!!!!");
  }
}

module.exports = { connect };

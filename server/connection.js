const mongoose = require("mongoose")


exports.connectDb = async () => {
            try {
                        const connection = await mongoose.connect(process.env.MONGO_DATABASE)

                        if (connection.STATES.connected) {
                                    console.log("Database is connected!")
                                    if (connection.STATES.disconnected) {
                                                console.log("Database is Disconnected")
                                    }
                        } else {
                                    console.log("Database is not connected");

                        }
            } catch (error) {
                        console.log(error.message);

            }
}
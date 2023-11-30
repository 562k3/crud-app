import mongoose from 'mongoose'
const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.3cd50jy.mongodb.net/?retryWrites=true&w=majority`;
    try {
    console.log("Connecting to server");

        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;
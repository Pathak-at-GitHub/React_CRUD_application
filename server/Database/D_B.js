import mongoose from "mongoose";

const Connection = async (username, password) => {
  console.log(username, password); 
  // const Mongoose_URL = `mongodb+srv://Sagar_Pathak_MgDB:Sagar_Pathak_MgDB_Password@cluster0.zgsvnne.mongodb.net/Cluster0?retryWrites=true&w=majority`;
  const Mongoose_URL = `mongodb+srv://${username}:${password}@crud-cluster.egz437x.mongodb.net/CRUD_HONORS?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(Mongoose_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected succefully");
  } catch (error) {
    console.log("Error occured here", error);
  }
};

export default Connection;

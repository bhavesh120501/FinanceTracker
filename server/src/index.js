import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import financialRecordRouter from './routes/FinancialRecords.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI = "mongodb+srv://bhav120501:WKDY6PnGnPj1Gomf@financetracker.67h9u.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Successfully Connected To MongoDB!"))
  .catch((err) => console.log("Failed To Connect To MongoDB!", err));

app.use('/financialRecord',financialRecordRouter);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
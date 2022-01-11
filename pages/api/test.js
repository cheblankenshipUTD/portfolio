// This is a file to test the DB connection
import dbConnect from "../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
    res.json({ test: 'test'});
}
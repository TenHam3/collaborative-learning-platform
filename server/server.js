import { PrismaClient } from '@prisma/client'
const express = require("express");
const app = express();
const cors = require("cors");
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("server started on port 5000");
});
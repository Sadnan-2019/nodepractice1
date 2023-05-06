const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Practice ONE is going now !");
});

const users = [
  { id: 1, name: "kalachad", email: "kala@gmail.com" },
  { id: 2, name: "chad", email: "chad@gmail.com" },
  { id: 3, name: "chadmama", email: "chadmama@gmail.com" },
  { id: 4, name: "lalmama", email: "lalmama@gmail.com" },
  { id: 5, name: "sobujmama", email: "sobujmama@gmail.com" },
];

// app.post("/user",(req, res)=>{
//   console.log("reeod",req.body);
//   res.send("post success");
// })
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
  // res.send("post success");
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log(`my   runiung port is on ${port}`);
});

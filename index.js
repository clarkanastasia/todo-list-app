import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const itemsArray = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {items: itemsArray, date : currentDateInfo
    });
})

app.post("/submit", (req, res) => {
    itemsArray.push(req.body["item"]);
    console.log(itemsArray);
    res.redirect("/")
}) 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  function todaysDate() {
    const currentDate = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayOfWeek = dayNames[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const dateInfo = `${dayOfWeek}, ${month} ${dayOfMonth}`
    return dateInfo;
} 

const currentDateInfo = todaysDate(); 
console.log(currentDateInfo);


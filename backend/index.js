const fs = require("fs");

function getDb() {
  try {
    const data = fs.readFileSync("db.json", "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

const addEvent = (eveniment) => {
  const currentDb = JSON.parse(getDb());
  const newEvents = [...currentDb.evenimente, JSON.parse(eveniment)];
  updateDb({ ...currentDb, evenimente: [...newEvents] });
};

const updateDb = (db) => {
  fs.writeFile("db.json", JSON.stringify(db), function (err, data) {
    if (err) {
      return console.log(err);
    }
    // console.log(data);
  });
};

// addEvent(JSON.stringify({ titlu: "raicu", descriere: "hari" }));

const deleteEvent = (id) => {
  const currentDb = JSON.parse(getDb());
  const newEvents = currentDb.evenimente.filter((eveniment) => {
    return eveniment.titlu !== id;
  });
  updateDb({ ...currentDb, evenimente: [...newEvents] });
};

deleteEvent("raicu");

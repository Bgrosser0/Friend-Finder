// Your apiRoutes.js file should contain two routes:

var friendsData = require("../data/friends");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ===============================================
// ROUTING
// ===============================================

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  res.json(friendsData);
})

// ===============================================
// ===============================================

app.post("/api/friends", function(req, res) {

if  (friendsData.length < 50) {
  // SHOW BEST MATCH
  friendsData.push(req.body);
  res.json(true);
}
else {
  // SHOW PLEASE COMPLETE MODAL
  res.json(false);
}

});

};
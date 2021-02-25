const  db = require("../models");
var path = require("path");

module.exports = function (app) {
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

app.get("/api/workouts", function(req, res){
    db.Workout.aggregate([{
        $addFields:{
            totalDuration:{
                $sum: "$exercises.duration"
            }
        }
    }])
    .then(function (data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

app.put("/api/workouts/:id", function(req, res){
    db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new:true})
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});


app.post("/api/workouts", function (req, res){
    db.Workout.create(req.body)
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

app.get("/api/workouts/range", function (req, res){
    db.Workout.aggregate([{
        $addFields:{
            totalDuration:{
                $sum: "$exercises.duration"
            }
        }
    }])
    .sort({
        _id:-1
    })
    .limit(7)
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});

}

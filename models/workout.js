const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    
    
        day: {
            type: Date,
            default: Date.now,
            required: "Date is Required"
        },
        exercises: 
          {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
            trim: true,
            required: "Exercise is required"
        }

        
      
 
    });

const Fitness = mongoose.model("fitness", fitnessSchema);

module.exports = Fitness;
     
     
     
     
     
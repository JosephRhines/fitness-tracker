const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    
    
        day: {
            type: Date,
            default: Date.now,
            
        },
        exercises: 
         [{
            type: {type: String},
            name: {type: String,trim:true,required:true},
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
          
          
        }]

        
      
 
    });

const Fitness = mongoose.model("fitness", fitnessSchema);

module.exports = Fitness;
     
     
     
     
     
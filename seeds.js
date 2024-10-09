var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Photo Golf Resort",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pLXIL3Rn97JHGJfyGBB_lyFjCTJ8WdbGLg&usqp=CAU",
        description: "Whenever you heared of a place that you want you enjoy your self you should  all have to come and look for the following place, and don't mind of this text as it is a geebrish i just don't anything worth writing that's why i am trying this text."
    },
    {
        name: "Silicon Valley",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisqi_gqJ4xDe684Nq8djg6FlKt_5RfE05bA&usqp=CAU",
        description: "Whenever you heared of a place that you want you enjoy your self you should  all have to come and look for the following place, and don't mind of this text as it is a geebrish i just don't anything worth writing that's why i am trying this text."
    },
    {
        name: "Casabalanca Beach",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfT3I05kUz86-jeGKe10iArIko34imT6ncow&usqp=CAU",
        description: "Whenever you heared of a place that you want you enjoy your self you should  all have to come and look for the following place, and don't mind of this text as it is a geebrish i just don't anything worth writing that's why i am trying this text."
    },
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else{
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place was great, but I wish there was internet",
                            author: "Usman"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }  
                        });
                }
            });
        });

    });
    
    // add a few comments
}

module.exports = seedDB;
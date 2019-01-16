var mongoose = require("mongoose");
var User = require("./user");

var campaignSchema = mongoose.Schema({
    title: {type:String, required:true},
    invitedPlayers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        rebel: {type:Boolean}
    }],
    rebelPlayers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }],
    imperialPlayers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }],
    systems: [],
    battles: []
});

//invite a player.  
//Accepts 2 parameters, a username, and a boolean for the faction
campaignSchema.methods.invitePlayer = function(user, rebel){
    User.findOne({"username": user}, function(err, result){
        //if a player was found
        if(result){
            invitedPlayers.push({result, rebel});
            result.invites.push(this);
        }
    });  
}

/**
 * Response to invite.  If accepted, remove from invite list,
 * and move into appropriate player list.  If declined, remove
 * from invite list.
 */
campaignSchema.methods.inviteResponse = function(user, faction, response){
    //first grab the faction from the invite list
    var rebel = faction;

    //find and remove
    invitedPlayers = invitedPlayers.filter(function(userToRemove){
        return userToRemove !== user;
    });

    if(rebel && response){
        rebelPlayers.push(user);
    } else if (!rebel && response){
        imperialPlayers.push(user);
    }
}

var Campaign = mongoose.model("Campaign", campaignSchema);

module.exports(Campaign);
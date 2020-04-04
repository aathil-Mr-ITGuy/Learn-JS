const game = {};

game['suspects'] = [];

game.suspects.push({
    name:"Mr. White",
    color: "White"
});

game.suspects[1] = {
    name: "Mrs. White",
    color: "Blue"
};

game["suspects"];
//will show the output

//iterate the elements
for(let i=0;i<game.suspects.length;i++){
    console.log(game.suspects[i]);

}

//but nothing to do with this for loop in object
for(let key in game){
    game[key];
}

//it will do the same thing
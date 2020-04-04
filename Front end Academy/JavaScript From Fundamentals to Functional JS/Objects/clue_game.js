//Create an object using bracket and dot notation that represents the charecters and related data toy may find in a game of clones

var game = {};

game.murderer = "";

game['weapons'] = [
    {
        name: stick,
        location: library
    },
    {
        name: duster,
        location: classroom
    },
    {
        name: paperGun,
        location: garden
    }
];

game.names = [];
//inserting characters 
game.names[0] = "Mr. White";
game.names("Mr. Albert");
//['Mr. White', 'Mr. Albert']
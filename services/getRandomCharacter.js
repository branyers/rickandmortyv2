export const getRandomCharacter = () =>{

    const characters = [
        "Rick",
        "Morty",
        "Summer",
        "Jerry",
        "Beth",
        "Birdperson",
        "Mr. Meeseeks",
        "Squanchy",
        "Unity",
        "Evil Morty",
        "Noob-Noob",
        "Scary Terry",
        "Mr. Poopybutthole",
        "Abradolf",
        "Snowball",
        "Gazorpazorpfield",
        "Tammy",
        "Jessica",
        "Pickle Rick",
        "Phoenixperson",
        "Dr. Wong",
      ];
    
    return characters[Math.floor(Math.random() * characters.length)].slice(0,6);
} 
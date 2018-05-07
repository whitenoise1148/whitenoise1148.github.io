// 2 players
// Create 12 arrays(cups) + 2 arrays(banks)

// Document Ready
const Document = function () {

};
    // arrays 1 - 6 are owned by player 1
    const bankOne = [];
    // arrays 7 - 12 are owned by player 2
    const bankTwo = [];
    // Each cup starts with 4 stones/seeds(items in array)
    const stone = 1;
    // The Play
    // Creates an array that stores the information
    const cupArray = [];
    const bankArray = [];
    
    // supsHtmlElements selects div.cup elements in the HTML and places them in an array
    // this array is taking the information from the html, the div.cup, and putting into the JS environment so it is accessable 
    const cupsHtmlElements = $('div.cup').toArray();
    
    const bankHtmlElements = $('div.bank').toArray();
    
    // Main function for playing the game
    // Holds all play functions and logic inside
    
    const distributeStones = (numStones, cupIndex) => {
        // Take the number of stones in the object numStones
        // cupIndex will be used to determine where to distribute said stones
        // console.log(cupIndex);
        // if (cupIndex === 11) {
            //     cupIndex = -1;
            // }
            
            // console.log('cup ' + cupIndex);
            // console.log('This cup has ' + numStones + ' stones');
            for (let i = cupIndex + 1; i < cupIndex + 1 + numStones; i++){
                // console.log(i);
                // console.log(cupArray[i].stoneCount);
                if (i >= cupArray.length) {
                    // console.log(i, cupArray.length, i % cupArray.length);
                    cupArray[i % cupArray.length].stoneCount = cupArray[i % cupArray.length].stoneCount + 1;
                } else {
                    cupArray[i].stoneCount = cupArray[i].stoneCount + 1;
                }
            };
            
            // console.log(cupIndex);
            if (cupIndex === -1) {
                cupArray[11].stoneCount = 0;
            } else {
                cupArray[cupIndex].stoneCount = 0;
            }
            // console.log(cupArray[cupIndex].stoneCount);
            
            let removeStones = cupArray[cupIndex].stoneCount;
            // console.log(removeStones);
            // Remove div.stone's from the clicked object
            if (removeStones === 0) {
                $(`.cup${cupIndex}`).empty();
            }
            
            // Loop through the array and remove all the div.stones if the stoneCount of the cup = 0
            for (let i = 0; i < cupArray.length; i++) {
                $(`.cup${i}`).empty();
            }
            // This loops through the whole array determined by the array length
            for (let x = 0; x < cupArray.length; x++) {
                // Loops through the stoneCount 
                for (let y = 0; y < cupArray[x].stoneCount; y++){
                    // Adds div.stone to the cups equal to the stoneCount of that cup
                    $(`.cup${x}`).append('<div class="stone"></div>');  
                }
                
                // If the number of stones in a cup is equal to 2 then that number of stones will be added to the div.bank and stones in the cup will be removed.
                if (cupArray[x].stoneCount === 2) {
                    console.log('Capture');
                    $(`.bank`).append('<div class="stone"></div>');
                    cupArray[cupIndex].stoneCount = 0;
                    $(`.cup${x}`).empty();
                }
            }
            
            // Loop through cupArray using the Index from each iteration
            // Find the cup that corresponds to the index
            // Use the stoneCount from that current iterations stoneCount and put that number of divs in the cup
        };
        
        const gameLogic = function(cup, cupIndex){
            // console.log(score);
            if (cup.stoneCount >= 1) {
                // console.log(cup.cupIndex + 'has' + cup.stoneCount + ' stone(s)');
                distributeStones (cup.stoneCount, cup.cupIndex);
            } else {
                // console.log('This cup is empty');
            }
        };
        
        // .forEach creates cupArray that contains the information for each cup
        cupsHtmlElements.forEach((element, i) => {
            
            // For each div we are creating an object in cupArray[] to hold the information about that cup
            cupArray[i] = {
                htmlElement: cupsHtmlElements[i],
                stoneCount: 4,
                cupIndex: i
            };
            // Loop through the length of cupArray
            for (let x = 0; x < cupArray[i].stoneCount; x++) {
                // For each element in cupArray add 1 div.stone to div.cup on the page
                $(`.cup${i}`).append("<div class='stone'></div>");
            };
            
            // creating a click event on each cup, so that when a player clicks on any of the cups the stone count will call the gameLogic function with the value of the cups stone count
            $(cupsHtmlElements[i]).on('click', () => {
                // this sends the stone count to const gameLogic = function(cupObject) that shows the stone count in that cup
                gameLogic(cupArray[i], i);
            });
        });
        

        // The player chooses one of their cups(arrays 1-6 or 7-12), takes all of those stones and places 1 in each of the following cups until they run out
        // Create click event that checks how many stones are in the clicked cup
        
        // The total # of items is calculated (array.length), that number of the following cups are increased by 1 stone in order (add 1 item to array.push)
        
        // Create function to take the total from the click event and then distribute 1 stone to each following cup (ex: choose cup1, has 4 stones. cup2 + 1, cup3 + 1, cup4 + 1, cup5 + 1)
        // If using an array push 1 item to array
        // If using object add 1 to stones
        
        // Scoring
        
        // After choosing which cup(array) you are going to play, if your last stone(item) is placed in an opponent's cup(array) that then has a total of 2 or 3 stones in it you take all of those stones(length) and add them to your bank(array).
        
        
        // The Win
        // When your bank(array) reaches a total of 25 or more stones(items) you win.
        // Displays a message YOU WIN!!!!
        
        // CREATING WIN CONDITION
        // const winLogic = function(score){
            //     if _____ (score >= 25) {
                //         alert('playerOne Wins!!!');
                //     }
                // }


window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;

}(document, "script", "twitter-wjs"));

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
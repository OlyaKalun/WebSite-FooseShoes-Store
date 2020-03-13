$(function(){
    
    var twitterURL = '../JSON/tweet-media.json';

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var tweetHTML = '';
    function refreshTwitter(){
        $.getJSON(twitterURL, function(response){
        
            tweetHTML = "";
            var randomA = getRandomInt(0,10);
            
            var randomB = getRandomInt(0,10);
            
            while (randomA == randomB) {
                randomB = getRandomInt(0,10);
            }
           
            
            for (let index = 0; index < response.length; index++) {
                if (index == randomA || index == randomB) {
                    console.log(response[index].name);
                    tweetHTML += '<p class="mb-0 mt-1"><span class="mr-1 text-tweet">' + response[index].name + '</span>'
                    + response[index].message + '</p><cite>' + response[index].date + '</cite>';
                }
            }     

            $('.twitter-item').html(tweetHTML);
   })
    }
    

    setInterval( refreshTwitter, 5000);
    refreshTwitter();
})
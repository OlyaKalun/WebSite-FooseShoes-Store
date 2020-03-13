$(function(){
    

    function refreshBlog(){
        var paste ='';

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var temp = getRandomInt(0,10);
            
        var temp2 = getRandomInt(0,10);
        
        while (temp == temp2) {
            temp = getRandomInt(0,10);
        }

        $.getJSON('../JSON/blog-media.json', function(response){
            
            for (var index = 0; index < response.length; index++) {
                if (index == temp || index == temp2) {
                paste += '<li class="media"><div class="price-small d-inline-flex '
                + response[index].backgroundColor +' mb-2 mr-1"><div class="mx-auto p-1 text-center font-weight-bold">'
                + response[index].date + '</div></div><div class="media-body m-auto"><h5 class="mt-0 mb-0">' 
                + response[index].heading + '</h5><p class="media-p">' + response[index].paragraph + '</p></div></li>'
                }
            }
            $('#media-target').html(paste);
        })
    }
    setInterval( refreshBlog, 5000);
    refreshBlog();
})
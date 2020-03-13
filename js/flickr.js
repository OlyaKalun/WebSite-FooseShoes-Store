$(function(){
    var flickerAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    
    var flickrOpt = {
        format: "json",
        tags: "dog"
    };

    function displayPhotos(data) {
    var imgHTML = '';
    $.each( data.items, function(i, image){
        imgHTML += '<div class="col-3 plc">';
        imgHTML += '<a href="#" data="' + image.media.m + '" class="image"><img class="imageresource" src="' + image.media.m + '"></a></div>';
    });
        $('#flick-img').html(imgHTML);
        $colArr = $('.plc');
        for (let index = 6; index < $colArr.length; index++) {
            $colArr[index].remove();
        }
        $('.image').on("click", function(event){
            self = this;
            event.preventDefault();
                $('.imagepreview').attr('src', $(self).attr('data')); // here asign the image to the modal when the user click the enlarge link
                $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
             
        })
    }
    $.getJSON(flickerAPI, flickrOpt, displayPhotos);

    
})
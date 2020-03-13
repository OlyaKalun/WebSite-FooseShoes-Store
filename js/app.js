// global values
var intest = null;

$(function(){
    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
        for (i = 0; i < 3; i++){
            if($('.carousel-inner').children().eq(i).hasClass('active')) {
                $('.slider-btn-control').css("background-color", "black");
                $('.slider-btn-control').eq(i).css("background-color", "#57c5a0");
                $('.slider-heading').css("color", "#adadad");
                $('.slider-heading').eq(i).css("color", "white");
            }
        }
    });

    


    if ($('.main-content').width() > 959) {


        $('.card-body').on('mouseenter', function(){
            appendValue = '<div class="nav-ico-menu "><div class="d-inline-flex"><i class="far d-flex centering fa-eye"></i></div><div class="d-inline-flex"><i class="far d-flex centering fa-star"></i></div><div class="d-inline-flex"><i class="fas d-flex centering fa-external-link-alt"></i></div><div class="d-inline-flex"><i class="fas d-flex centering fa-cart-arrow-down"></i></div></div>';
            self= this; // card-body
            inHtml =  $(self).children().eq(2).html();
            intest = inHtml;
            $(self).children().eq(2).empty().append(appendValue);
            
        });

        $('.card-body').on('mouseleave', function(){
            appendValue = intest;
            self = this;
            $(self).children().eq(2).empty().append(appendValue);
        });
    }

    if ($('.main-content').eq(0).width() > 959) {
        $('.info-item').eq(1).removeClass('col-4').addClass('col-3');
    } else if ($('.main-content').eq(0).width() < 959){
        let temp = $('.info-item').eq(0).hasClass('col-3');
        !($(temp)).addClass('col-3').removeClass('col-4');
    }

    if ($('.widget-section').eq(0).width() < 960) {
        $('.twitt').eq(0).removeClass('col-4').addClass('col-2').css("visibility","hidden");
    } else if ($('.widget-section').eq(0).width() > 960){
        let temp2 = $('.twitt').eq(0).hasClass('col-4');
        !($(temp2)).addClass('col-4').removeClass('col-2');
    }
    
    $.getJSON('../JSON/drop-sug.json', function(response){
        
        var pasted = '';
            $('#search-drop').append('<div class="dropdown-divider"></div><h6 class="dropdown-header">Most Popular</h6><div class="dropdown-divider"></div>')
        for (var index = 0; index < response.length; index++) {
            pasted += '<a class="dropdown-item py-2" href="#">' + response[index].suggestion + '</a>'
        }
         $('#search-drop').append(pasted);
    })

    $('#listView').on("click", function(){
        $('.arrivals-items').children()
                            .removeClass('col-4')
                            .addClass('col-12')
                            .css("max-width", "70%")
                            .css("margin", "auto")
    });

    $('#gridView').on("click", function(){
        $('.arrivals-items').children()
                            .removeClass('col-12')
                            .addClass('col-4')
                            .css("max-width", "initial")
                            .css("margin", "")
    });
});



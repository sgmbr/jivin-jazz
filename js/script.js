$(document).ready(function(){
    // Random image for top page
    let images = ['bg1.jpg', 'bg3.jpg', 'bg9.jpg', 'bg10.jpg', 'bg12.jpg', 'bg13.jpg', 'bg14.jpg', 'bg15.jpg'];
    let selectedImage = images[Math.floor(Math.random() * images.length)];
    let bgPosition = '50% 50%';
    switch (selectedImage) {
        case 'bg3.jpg':
            bgPosition = '20% 50%'
            break;
        case 'bg10.jpg':
            bgPosition = '100% 50%'
            break;
        case 'bg12.jpg':
            bgPosition = '30% 50%'
            break;
        case 'bg14.jpg':
            bgPosition = '78% 50%'
            break;
        case 'bg15.jpg':
            bgPosition = '80% 50%'
            break;
    }
    $('#home-wrapper').css({'background-position': bgPosition});
    $('#home-wrapper').css({'background-image': 'url(images/bg/' + selectedImage + ')'});
    
    // Mobile Menu
    $('#mobile-menu').click(function(){
        $(this).next().slideToggle('fast'); 
        $(this).find('img').toggle();
        $('.home-header').toggleClass('menu-open');
    });
    
    // Expand & Collapse a section
    $('.expand-section').click(function(){
        $(this).prev().toggleClass('show-all');
        $(this).find('img').toggle();
    });
    
    // Search box
    $('#search-icon').click(function(){
        $('#search').fadeIn().focus();
        $('#search-icon').fadeOut();
    });
    
    $('#search').blur(function(){
        $('body').on('click', function(){
            $('#search').fadeOut();
            $('#search-icon').fadeIn();
            $('body').off('click');
        });
    });
    
    $('#search-submit').click(function(){
        event.preventDefault();
        if($('#search').val()){
            $(this).parent().submit();
        }
    });
    
    // Floating Label
    (function($){
        function floatLabel(inputType){
            $(inputType).each(function(){
                var $this = $(this);
                // on focus add cladd active to label
                $this.focus(function(){
                    $this.next().addClass("active");
                });
                //on blur check field and remove class if needed
                $this.blur(function(){
                    if($this.val() === '' || $this.val() === 'blank'){
                        $this.next().removeClass();
                    }
                });
            });
        }
        // just add a class of "floatLabel to the input field!"
        floatLabel(".float-label");
    })(jQuery);
    
    
    // Privacy Policy modal
    $('#privacy-open').on('click', function(){
        $('#privacy-modal').show();
    });

    $('.close').on('click', function() {
        $('#privacy-modal').hide();
    });

    var modal = document.getElementById('privacy-modal');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Blog Comment
    $('.comment-open').on('click', function(){
       $(this).parent().next().show();
    });
    
});

$(".container").hover(function(){
    $(".container").animate(
        {
            left: '250px',
            opacity:'0.4'
        }
        ,"slow"
    )
},
function(){
    $(".container").animate(
        {
            right: '250px',
            opacity:'1'
        }
        ,"slow"
    )
});
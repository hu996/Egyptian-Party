export function menuehideandshow(){
    $('.item h3').on('click',function(){
        $('.item p').slideToggle(1000);
    })
}
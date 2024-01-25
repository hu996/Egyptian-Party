export function hidesidebar(){
    $('.close').on('click',function(){
        $('.navcont').animate({width:0},1000);
        
    })
}

export function showsidebar(){
    $('.open').on('click',function(){
        $('.navcont').animate({width:250},1000);
        
    })
}
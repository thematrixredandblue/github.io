/* Deze regel staat altijd bovenaan --> */ $(document).ready(function(){


    /* --- scene 0 --- */

    $('.keuze1').click(function(){
        $('.scene1').toggleClass('invis');
        $('.keuze1').toggleClass('invis');
        $('.keuze2').toggleClass('invis');
        $('h1').toggleClass('invis');
        $('p1').toggleClass('invis');
        $('.keuze1').toggleClass('animatie1');
    });

    $('.keuze2').click(function(){
        $('.scene2').toggleClass('invis');
        $('.keuze1').toggleClass('invis');
        $('.keuze2').toggleClass('invis');
        $('h1').toggleClass('invis');
        $('p1').toggleClass('invis');
    });


    /* --- scene 1-1 + scene 1-2 --- */


    $('.keuze1-1').click(function(){
        $('.scene1').toggleClass('invis');
        $('.scene1-1').toggleClass('invis');
    });

    $('.keuze1-2').click(function(){
        $('.scene1').toggleClass('invis');
        $('.scene1-2').toggleClass('invis');
    });


    /* --- scene 2-1 + scene 2-2 --- */

    $('.keuze2-1').click(function(){
        $('.scene2').toggleClass('invis');
        $('.scene2-1').toggleClass('invis');
    });

    $('.keuze2-2').click(function(){
        $('.scene2').toggleClass('invis');
        $('.scene2-2').toggleClass('invis');
    });


    /* --- endscene --- */
    
    $('.endscene').click(function(){
        $('.scene1-1').addClass('invis');
        $('.scene1-2').addClass('invis');
        $('.scene2-1').addClass('invis');
        $('.scene2-2').addClass('invis');
        $('.endscene').toggleClass('invis');
    });


    $('.reset').click(function(){
        location.reload();
    });


/* Deze regel staat altijd onderaan --> */ });
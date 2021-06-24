$(function(){
    var myChars = '319',
        paragraph= 'The diplomatic corps may, in certain contexts, refer to the collection of accredited heads of mission (ambassadors, high commissioners, and others) who represent their countries in another state or country. As a body, they usually only assemble to attend state functions like a coronation, inauguration, national day or State Opening of Parliament, depending on local custom. They may also assemble in the royal or presidential palace to give their own head of state New Year greeting to the head of state of the country in which they are based.',
        paragraphLength =  paragraph.length,
        seeMore = 'See More',
        seeLess = 'See Less';
    if (paragraphLength > myChars){
        var c = paragraph.substr(0, myChars),
            h =  paragraph.substr(myChars, paragraphLength - myChars),
            html = c + '<span class="hidden">' + h +'</span><span class="toggleShow">' + seeMore + '</span>';
        $('.item02 p').html(html);
        $('.toggleShow').click(function(){
          var hidden = $('.hidden, .item02 .gardient'),
              $el = $('.toggleShow');
           hidden.toggle();
            if(!$el.hasClass('shapped')){
              $el.text(seeLess).addClass('shapped');
               
               }else{
        $el.text(seeMore).removeClass('shapped');
             
               }
        });
    }
})   
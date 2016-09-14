$(document).ready(init)


  function init(){
  $('#add').click(addButtonClicked);

  }

function addButtonClicked(){
    console.log('clicked!')

    var $input = $('#name');

    var name = $input.val();
    $input.val('');
    console.log('name', name);


    var $li = $('<li>');
    $li.text(name);

    var $list = $('#list');
    $list.append($li);
;
      }
      $('#shuffle').click(function(){
    var spanArray = [];
    $('[id^=list]').each(function(){
        spanArray.length = 0;
        $(this).find('li').each(function(){
            spanArray.push($(this));
        });
        spanArray = shuffle(spanArray);
        $(this).empty();
        for(var i = 0;i<spanArray.length;i++)
            $(this).append(spanArray[i]);

     });

});
$('#random').click(function(){

  var lis = $('li');
  if (lis.hasClass('active')){
    lis.removeClass('active');
  }
  lis.eq(Math.floor(Math.random()*lis.length)).addClass('active');

});


function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

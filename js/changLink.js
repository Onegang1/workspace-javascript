$('a').each(function(){
    var linkaddress = $(this).attr('href');
    console.log(linkaddress);
    $(this).attr('href',"http://www.google.com");
});
$('img').each(function(){
    var imgaddress = $(this).attr('src');
    console.log(imgaddress);
    $(this).attr('src',"img/String.gif");
});
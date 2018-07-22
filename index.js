$(function(){
    console.log("Using for loop");
    for(var i = 5; i <= 50; i += 5)
    {
        console.log(i);
    }

    console.log("Using while loop");
    var i = 5;
    while(i <= 50)
    {
        console.log(i);
        i += 5;
    }
});
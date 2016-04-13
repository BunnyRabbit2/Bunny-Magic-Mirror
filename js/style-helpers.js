function centerDiv(divName)
{
    var div = document.getElementById(divName);
    
    var divWidth = div.offsetWidth;
    
    divWidth = divWidth / 2 * -1;
    
    div.setAttribute("style", "margin-left:" + divWidth.toString() + "px");
}

function setPosition(divName, position)
{
    var div = document.getElementById(divName);
    
    div.className += " ".position;
}
const balloon = document.getElementById("balloon");
const balloonStyle = getComputedStyle(balloon)

function inflateBalloon() 
{
    let currentHeight = balloon.offsetHeight;
    let currentWidth = balloon.offsetWidth;

    balloon.style.height = currentHeight + 10 + "px"
    balloon.style.width = currentWidth + 10 + "px"

    if (currentHeight > 420)
    {
        balloon.style.height = 200 + "px"
        balloon.style.width = 200 + "px"
    }
    if (currentHeight == 200)
    {
       balloon.style.backgroundColor = 'red';
    }
}

function inflateColour()
{
    let balloonColour = balloonStyle.backgroundColor;
    
    switch (balloonColour)
    {
        case 'rgb(255, 0, 0)':
        balloon.style.backgroundColor = 'green';
        break;
        case 'rgb(0, 128, 0)':
        balloon.style.backgroundColor = 'blue';
        break;
        case 'rgb(0, 0, 255)':
        balloon.style.backgroundColor = 'red';
        break;
    }
}

function deflateBalloon()
{
    let currentHeight = balloon.offsetHeight;
    let currentWidth = balloon.offsetWidth;

    if (currentHeight > 200)
    {
        balloon.style.height = currentHeight - 5 + "px"
        balloon.style.width = currentWidth - 5 + "px"
    }
}

function deflateColour()
{
    let balloonColour = balloonStyle.backgroundColor;
    let currentHeight = balloon.offsetHeight;

    switch (balloonColour)
    {
        case 'rgb(0, 128, 0)':
        balloon.style.backgroundColor = 'blue';
        break;
        case 'rgb(255, 0, 0)':
        balloon.style.backgroundColor = 'green';
        break;
        case 'rgb(0, 0, 255)':
        balloon.style.backgroundColor = 'red';
        break;
    }
    
    if (currentHeight == 200)
    {
        balloon.style.backgroundColor = 'red';
    }
}


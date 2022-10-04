function random_hex()
{
    var hexadecimal_chars;
    var prefix;
    var i;

    hexadecimal_chars ='0123456789ABCDEF';
    prefix ='#';
    i = 0;
    while (i < 6)
    {
        prefix += hexadecimal_chars[Math.floor(Math.random() * 16)];
        i++;
    }
    return (prefix);
}

function change_colour()
{
    document.body.style.backgroundColor = random_hex();
}


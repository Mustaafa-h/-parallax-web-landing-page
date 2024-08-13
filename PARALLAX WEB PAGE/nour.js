let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nour = document.querySelector('.nour')

window.onscroll = function()
{
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *3.9 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5+ 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value *3 + 'px';
    nour.style.fontSize = value  + 'px';

    if( scrollY >= 76.8 )
    {
        nour.style.fontSize = 76.8 + 'px';
        nour.style.position = 'fixed';
        if(scrollY >= 443.2)
        {
            nour.style.display = 'none';
        }
        else
        {
            nour.style.display = 'block';

        }

        if(scrollY >= 108)
        {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }
        else
        {
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }


    }

}


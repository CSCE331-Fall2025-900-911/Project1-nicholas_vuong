//Load saved color on page load
window.onload = function ()
{
    const savedColor = localStorage.getItem("backgroundColor");
    if(savedColor)
    {
        document.body.style.backgroundColor = savedColor;
    }
};

function toggleBackground()
{
     const currentColor = document.body.style.backgroundColor; //|| 'white';
     let newColor; // = currentColor === 'rgb(216, 5, 164)' ? 'white' : '#d805a4';

    if(currentColor === "lightblue")
    {
        newColor = "white";
    }
    else
    {
        newColor = "lightblue";
    }

    //Apply new color
    document.body.style.backgroundColor = newColor;

    //Save it in localStorage
    localStorage.setItem("backgroundColor", newColor);

    

}

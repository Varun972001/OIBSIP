const Change =()=>
{
    const temp=document.getElementById("temp").value;
    const selectedtemp=document.getElementById("temp-menu").value;
    var newtemp;
    if(selectedtemp=="Farenhiet")
    {
        newtemp=(temp*1.8)+32;
        document.getElementById("res").innerHTML=`${newtemp} °Celcius`;
    }
    else
    {
        newtemp=(temp-32)*0.5556;
        document.getElementById("res").innerHTML=`${newtemp} Farenhiet`;
    }
}

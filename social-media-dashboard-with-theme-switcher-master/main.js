function slideChange()
{
    var check_color=document.getElementsByClassName("slider")[0].style.backgroundImage;
    var social_len= document.getElementsByClassName("social-head").length;
    if(check_color==""||check_color=="unset")
    {
        document.body.style.backgroundColor = "hsl(232, 19%, 15%)";
        document.getElementsByClassName("slider")[0].classList.add("dark");

        document.getElementsByClassName("slider")[0].style.backgroundColor="unset";
        document.getElementsByClassName("slider")[0].style.backgroundImage="linear-gradient(hsl(210, 78%, 56%),hsl(146, 68%, 55%))";
        for(i=0;i<social_len;i++)
        {
            document.getElementsByClassName("social-head")[i].style.color="hsl(0, 0%, 100%)";
        }
        for(i=0;i<document.getElementsByTagName("h2").length;i++)
        {
            document.getElementsByTagName("h2")[i].style.color="hsl(0, 0%, 100%)";
        }
        for(i=0;i<document.getElementsByClassName("review-content").length;i++)
        {
            document.getElementsByClassName("review-content")[i].style.backgroundColor=" hsl(228, 28%, 20%)";
        }
        for(i=0;i<document.getElementsByClassName("overview-content").length;i++)
        {
            document.getElementsByClassName("overview-content")[i].style.backgroundColor=" hsl(228, 28%, 20%)";
        }
    }
    else
    {
        document.body.style.backgroundColor ="hsl(0, 0%, 100%)";
        document.getElementsByClassName('slider')[0].classList.remove("dark");
        document.getElementsByClassName("slider")[0].style.backgroundColor="hsl(229, 17%, 82%)";
        document.getElementsByClassName("slider")[0].style.backgroundImage="unset";
        for(i=0;i<social_len;i++)
        {
            document.getElementsByClassName("social-head")[i].style.color="hsl(230, 17%, 14%)";
        }
        for(i=0;i<document.getElementsByTagName("h2").length;i++)
        {
            document.getElementsByTagName("h2")[i].style.color="hsl(0, 0%, 0%)";
        }
        for(i=0;i<document.getElementsByClassName("review-content").length;i++)
        {
            document.getElementsByClassName("review-content")[i].style.backgroundColor="hsl(227, 47%, 96%)";
        }
        for(i=0;i<document.getElementsByClassName("overview-content").length;i++)
        {
            
            document.getElementsByClassName("overview-content")[i].style.backgroundColor="hsl(227, 47%, 96%)";
        }
    }
}
function changeback(x)
{
    /* to get property for any element exist */
    const style = getComputedStyle(document.body);
    const backgroundColor = style.backgroundColor;
    if(backgroundColor==="rgb(255, 255, 255)")
    {
        x.style.backgroundColor="hsl(230, 29%, 88%)"; /*white*/

    }
    else{
        x.style.backgroundColor="hsl(240, 21%, 31%)";
    }
}
function normback(x)
{
    /* to get property for any element exist */
    const style = getComputedStyle(x);
    const backgroundColor = style.backgroundColor;
    if(backgroundColor==="rgb(216, 218, 233)")
    {
        x.style.backgroundColor="hsl(227, 47%, 96%)";

    }
    else{
        x.style.backgroundColor="hsl(228, 28%, 20%)";
    }
}

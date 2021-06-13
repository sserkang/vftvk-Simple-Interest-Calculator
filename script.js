function compute()
{
    var principal = document.getElementById("principal").value;
    var x;
    x = document.getElementById("principal").value;
if (x <= 0)
{ alert("Please enter a positive number.");
            principal.focus();
            return false;
    document.getElementById("principal").focus();}
else
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <span class='HiglightedVariable'>"+principal+"</span>\<br\>at an interest rate of <span class='HiglightedVariable'>"+rate+"</span>%,\<br\>you will receive an amount of <span class='HiglightedVariable'>"+interest+"</span>\<br\>in the year <span class='HiglightedVariable'>"+year+"</span>.\<br\>"
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


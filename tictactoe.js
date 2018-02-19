//JS code goes here
var turn=false;
var winner=0;
var win1=0;
var win2=0;
var count=0;
function play(event)
{
	
    if(event.target.innerText=="" && winner==0)
    {	
		count++;
        event.target.innerText=turn?"O":"X";
		turn=!turn;
        var cell_id=(event.target.getAttribute("id"));
        check(cell_id,count);
        
        if(count==9)
        {
            winner=3;
            document.getElementById("gs").innerText="Match Drawn!";
        }
    }
    
    if(winner==1) 
    {   
        win1++;
        document.getElementById("w1").innerText=win1;
        document.getElementById("l2").innerText=win1;
        document.getElementById("gs").innerText="Player 1 Won!";
    }
    else if (winner==2)
        {
            win2++;
            document.getElementById("w2").innerText=win2;
            document.getElementById("l1").innerText=win2;
            document.getElementById("gs").innerText="Player 2 Won!";
        }
    
        
}

function check(cell_id,count)
{
  
    var x0=document.getElementById("0").innerText;
    var x1=document.getElementById("1").innerText;
    var x2=document.getElementById("2").innerText;
    var x3=document.getElementById("3").innerText;
    var x4=document.getElementById("4").innerText;
    var x5=document.getElementById("5").innerText;
    var x6=document.getElementById("6").innerText;
    var x7=document.getElementById("7").innerText;
    var x8=document.getElementById("8").innerText;
    
    if(cell_id=='0')
        {
            if((x0==x1 && x1==x2) || (x0==x3 && x3==x6) || (x0==x4 && x4==x8))
                {
                   
                   if (x0=="X") winner=1;
                   else winner=2;
                }
        }
    else if(cell_id=='1')
        {
            if((x0==x1 && x1==x2) || (x1==x4 && x4==x7) )
                {
                   if (x1=="X") winner=1;
                   else winner=2;
                }
        }
     else if(cell_id=='2')
        {
            if((x0==x1 && x1==x2) || (x2==x5 && x5==x8) || (x2==x4 && x4==x6))
                {
                   if (x2=="X") winner=1;
                   else winner=2;
                }
        }
     else if(cell_id=='3')
        {
            if((x0==x3 && x3==x6) || (x3==x4 && x4==x5) )
                {
                   if (x3=="X") winner=1;
                   else winner=2;
                }
        }
     else if(cell_id=='4')
        {
            if((x3==x4 && x4==x5) || (x1==x4 && x4==x7) || (x0==x4 && x4==x8) || (x2==x4 && x4==x6))
                {
                   if (x4=="X") winner=1;
                   else winner=2;
                }
        }
     else if(cell_id=='5')
        {
            if((x2==x5 && x5==x8) || (x3==x4 && x4==x5))
                {
                   if (x5=="X") winner=1;
                   else winner=2;
                }
        }
     else if(cell_id=='6')
        {
            if((x0==x3 && x3==x6) || (x6==x7 && x7==x8) || (x2==x4 && x4==x6))
                {
                   if (x6=="X") winner=1;
                   else winner=2;
                }
        }
     else if(cell_id=='7')
        {
            if((x1==x4 && x4==x7) || (x6==x4 && x4==x8))
                {
                   if (x7=="X") winner=1;
                   else winner=2;
                }
        }
     else if(cell_id=='8')
        {
            if((x2==x5 && x5==x8) || (x6==x7 && x7==x8) || (x0==x4 && x4==x8))
                {
                   if (x8=="X") winner=1;
                   else winner=2;
                }
        }
    
}

function restart(event)
{
    
    for( var i=0;i<9;i++)
        {
            document.getElementById(""+i).innerText="";
        }
    winner=0;
    turn=false;
    count=0;
}

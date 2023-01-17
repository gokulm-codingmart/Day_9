var ip="PAYPALISHIRING";
var row=4;
var index=(row-1)+(row-2)+1;
var a=0,i=0;
var op="";
while(a!=row)
{
    i=a;
    while(i<ip.length)
    {
        op+=ip.charAt(i);
        i+=index;
        if(a!=0)
        {
            op+=ip.charAt(i);
            i+=a*2;
        }
        // console.log(op);
        // console.log(i);
    }
    a+=1;
    if(a==row-1)
    {
        index=(row-1)+(row-2)+1;
    }
    else
    {
        index-=2;
    }
    // console.log(index);
}
console.log(op);


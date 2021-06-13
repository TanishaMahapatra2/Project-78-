var names=["Tanisha Mahapatra","Tamanna Mahapatra","Ipsita Priyadarshini","Smruti Ranjan Mahapatra"]
var images=["https://i.pinimg.com/originals/4f/e0/5c/4fe05c0a2d170a2261e6501618f913bd.png","https://lumiere-a.akamaihd.net/v1/images/ct_frozen_anna_18466_6775584b.jpeg?region=0,0,600,600","https://i.pinimg.com/474x/ba/51/96/ba5196cc522f25b2896da4b0547d590c.jpg","https://static.wikia.nocookie.net/frozen/images/2/2c/Agnarr_-_King.png/revision/latest?cb=20200430112146"]
var number=0;

function update()
{
    number++;
    var number_of_members=3;
    if(number>number_of_members )
    {
        number=0;
    }
    var new_images=images[number];
    var new_names=names[number];
document.getElementById("member_name").innerHTML=new_names;
document.getElementById("family_members_images").src=new_images;
}    

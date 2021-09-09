menu_list_array = ["Veg Margherita Pizza",
"Cheese Pizza _",
"Basic Veg Pizza ",
 "EXTRA Cheesy Pizza ",
  "Panner Pizza" ];

  console.log(menu_list_array)

function getmenu(){
var htmldata;
menu_list_array.sort();
for(var i=0; i<menu_list_array.length;i++){
htmldata=htmldata+'<li>' + menu_list_array [i] + '</li>'
}
htmldata=htmldata+"<ol>"
document.getElementById("display_menu").innerHTML =htmldata;
}

function add_item(){
  var htmldata;
  var item=document.getElementById("add_item").value;
  menu_list_array.sort();
  for(var i=0;i<menu_list_array.length;i++){

      htmldata=htmldata+menu_list_array[i] + '</div>'
  }
    htmldata=htmldata+"</section>"
   document.getElementById("display_addedmenu").innerHTML = htmldata;

}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}
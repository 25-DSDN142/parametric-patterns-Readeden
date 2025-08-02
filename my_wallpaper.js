//your parameter variables go here!
var topY = 130 // top of tub
var wheelX = 155 //wheel center
var wheelY = 180 //wheel center
var handlex = 30 //handle center
//var handleY = 130 //handle center - I added this to (topY)
var Btubx = 80 // left bottem of tub
var BtubY = 170  // left bottem of tub
var size = 5 //inner flower size
var leafw = 10 //leaf width
var leafl = 30  //leaf lenth
var fully = 200 //lenth
var fullx = 200 //width
var rfp = fully-20 // right flower(and leaf) placement
let Wheelbarow = true //false
let plants = true //false

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = fully;
  pWallpaper.grid_settings.cell_height = fullx;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(150, 230, 255); //ligth blue
    
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function



if(Wheelbarow){
  // the second wheelbarow
 /* strokeWeight(5);
 line(230,190,348,190);//bottem handle
 line(230,140,348,140);//top handle
 rect(348,160,5,5);//wheel
 strokeWeight(0.75);
 rect(250,140,100,50); //body */

 //first wheelbarow
 //tub
  quad(60, topY, 165, topY, 130, 165, Btubx, BtubY);
  
  //wheel
 ellipse(wheelX,wheelY,25);

 strokeWeight(2);
  //stand
  line( Btubx, BtubY, 67, 190);
 //handle from wheel
  line(handlex,topY,wheelX,wheelY);

  strokeWeight(1); //back to normal
  
  fill(255);
  //noStrock()
  // new handle
  ellipse(handlex,topY,17,7);

}

if(plants){
  strokeWeight();
  //blue flowers
  fill(22, 3, 123);
  //big flower
 //circle(200,50,size)
 //small flowers
  circle(20,20,10); //top left
  circle(rfp,20,20); //top right
  circle(rfp,180,10);//bottem right
  circle(20,180,30);//botem left

  //leaves
  fill(10, 135, 1);

  ellipse(50, 20, leafl, leafw);//top left
  ellipse(20, 50, leafw, leafl);//left top
  ellipse(rfp,50,leafw,leafl);//right top
  ellipse(rfp-30,20,leafl,leafw) //top right
  ellipse(rfp,150,leafw,leafl) //bottem right

 //transperent plants
 

}

  
}

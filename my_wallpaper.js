//your parameter variables go here!
var topY = 130 // top of tub
var wheelX = 170 //wheel center
var wheelY = 180 //wheel center
var handlex = 30 //handle center
//var handleY = 130 //handle center - I added this to (topY)
var Btubx = 80 // left bottem of tub
var BtubY = 170  // left bottem of tub
// add location so I can move the wheelbarow around

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(150, 230, 255); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //wheelbarrow
  
  
  
//tub
  quad(60, topY, 165, topY, 130, 165, Btubx, BtubY)
  
  //wheel
 ellipse(wheelX,wheelY,25)

 strokeWeight(2)
  //stand
  line( Btubx, BtubY, 67, 190)
 //handle from wheel
  line(handlex,topY,wheelX,wheelY) 

  strokeWeight(1)//back to normal
  
  fill(255)
  //noStrock()
  // new handle
  ellipse(handlex,topY,17,7)
}


import { gsap, Power1 } from 'gsap';
const ImageGrid = (defaults) => 
{
  const r = defaults.rows;
  const c = defaults.columns;
  const margin = defaults.margin;
    
  var placeholder = document.getElementsByClassName(defaults.containerName)[0];
  // var container = document.getElementsByClassName("gridContainer")[0]
  var container = document.createElement('div');
  container.className = "gridContainer";
  placeholder.appendChild(container); 
    
  var gridTile;  

  var w = (container.offsetWidth / c) -margin;
  var h = (container.offsetHeight / r) -margin;
  var arr = [];
    
  for (var i=0, l=r*c; i < l; i++)
  {    
    
    gridTile = document.createElement('div');
    gridTile.className = "gridTile";
    gridTile.style.backgroundImage = "url("+defaults.imgSrc+")";
    
       
    arr = [(w+margin)*(i%c), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), ((h+margin)*Math.floor(i/c) + h-margin), (w+margin)*(i%c), ((h+margin)*Math.floor(i/c) + h-margin)];
        
    // console.log(i + " ====>>> " + arr + " ||||| " + i%c  + " |||||| " + i/c);  
    
    gsap.set(gridTile, {webkitClipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)', clipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)'});
       
    container.appendChild(gridTile);    
    
    fixTilePosition(gridTile, i);
  }
  
  placeholder.addEventListener("mouseover", function(e){
    var allTiles = e.currentTarget.querySelectorAll(".gridTile");
    for (var t=0, le = allTiles.length; t < le; t++)
      {
        allTiles[t].style.backgroundImage = "url("+defaults.imgSrc2+")";
        gsap.to(allTiles[t], {duration: defaults.animTime, ease: Power1.easeOut, css: {backgroundPosition:"0px 0px"}});
      }
  })
                             
  placeholder.addEventListener("mouseleave", function(e){
    var allTiles = e.currentTarget.querySelectorAll(".gridTile");
    for (var ti=0, len = allTiles.length; ti < len; ti++)
      {
        allTiles[ti].style.backgroundImage = "url("+defaults.imgSrc+")";
        fixTilePosition(allTiles[ti], ti, defaults.animTime);
      }
  })
  
  function fixTilePosition(tile, ind, time)
  {
    if(time==null)time=0;
    var centr, centrCol, centrRow, offsetW, offsetH, left, top;
    
    centr = Math.floor(c * r / 2);
    centrCol = Math.ceil(centr/c);
    centrRow = Math.ceil(centr/r);
        
    offsetW = w/centrCol;
    offsetH = h/centrRow;
    
    left = (Math.round((ind % c - centrCol + 1) * offsetW));
    top = (Math.round((Math.floor(ind/c) - centrRow + 1) * offsetH));
    
    gsap.to(tile, {duration: time, ease: Power1.easeOut, css: {backgroundPosition:left+"px "+top+"px"}});
    // TweenMax.to(tile, time, {css:{backgroundPosition:left+"px "+top+"px"}, ease:Power1.easeOut});
  }
}

export default ImageGrid;
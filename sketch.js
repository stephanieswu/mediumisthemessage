let s = "Media, by altering the environment, evoke in us unique ratios of sense perceptions. "

let s2 ="The extension of any one sense alters the way we think and act–the way we perceive the world. "

let s3 = "When these ratios change"

let s4 = "WE CHANGE"


function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(0);
  pattern();


  if(mouseX && mouseY <= 50){
    text(s, mouseX,mouseY,250,500);

  }else if (mouseX && mouseY <= 250){
   text(s2, mouseX,mouseY,250,500);
 }else if (mouseX && mouseY <= 350){
   text(s3, mouseX,mouseY,250,500);
   textSize(14);
 }else if(mouseX && mouseY <= 600){
     text(s4, mouseX,mouseY,50,100);
     textSize(30);
     stroke(0);
     strokeWeight(5)
  }else {
    ellipse(mouseX,mouseY,20,20)
  }



}
function pattern(){
  for(let i = 0 ; i<= mouseX; i += 30 ){
    for(let y = 0; y<= mouseY; y += 30 ){
      //ellipse(i,y,10);
      text('media',i,y,200,200)

      fill(i,150,y);
    }
  }
}

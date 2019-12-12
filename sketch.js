/*let s = "Media, by altering the environment, evoke in us unique ratios of sense perceptions. "

let s2 ="The extension of any one sense alters the way we think and act–the way we perceive the world. "

let s3 = "When these ratios change"

let s4 = "WE CHANGE"


function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(0);
  pattern();

if(mouseIsPressed){
  for(let i = 0 ; i<= width; i += 15 ){
    for(let y = 0; y<=height; y += 15 ){
      ellipse(i,y,10);
    }
  }
}

  if(mouseX && mouseY <= 50){
    text(s, mouseX,mouseY,250,500);
 textFont('Courier New');
}else if (mouseX && mouseY <= 400){
   text(s2, mouseX,mouseY,250,500);
   textFont('Helvetica');
 }else if (mouseX && mouseY <= 500){
   text(s3, mouseX,mouseY,250,500);
   textSize(14);
   textFont('Geogria');
 }else if(mouseX && mouseY <= 600){
     text(s4, mouseX,mouseY,50,100);
     textSize(30);
     stroke(0);
     strokeWeight(5)
      textFont('Arial');
  }else {
    ellipse(mouseX,mouseY,20,20)
  }



}
function pattern(){

  for(let i = 0 ; i<= mouseX; i += 50 ){
    for(let y = 0; y<= mouseY; y += 50 ){
      //ellipse(i,y,10);
      text('eye ear',i,y,200,200)

      fill(i,75,y);
    }
  }
}*/

let mediaP;
let textbox;
let state = false;

let alter;
let change;
let alphabet;
let hearing;
let edit;

function setup(){
mediaP = select("#mediaP");
alter = select("#alter");
alter.mousePressed(showSlider)
change = select("#change");
change.mousePressed(changeFont);
alphabet = select("#alphabet");
alphabet.mousePressed(alphabetChange);
hearing = select("#hearing");
hearing.mousePressed(showEar);
edit = selectAll('.edit');
edit.mousePressed(showInput);


}
function alphabetChange() {
  let length = 10;
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  for(let i =0; i <length; i++){
      for(let x =0; x <26; x++){
        a = createP(letters[x])
        a.position(random(1920),random(300,800));

      }



  }

}

function showEar() {

}
function changeFont() {

    mediaP.style("font-family", "Helvetica");
    mediaP.style("color", "yellow")
    function mouseRelease() {
      mediaP.style("font-family", "Times");
      mediaP.style("color", "white")
    }
}

function showInput(){
  textbox = createInput("editing")
  textbox.position(random(500,1000),random(500,1000));
  textbox.style("font-size", '18pt');
  textbox.style("font-family", 'Times')
  //let text = createP(textbox.value(),100,100);
  textbox.input(updateText);
  function updateText(){
     go.html(textbox.value());
  };
}

function showSlider() {
  //textbox = createInput("Media, by altering the environment, evoke in us unique ratios of sense perceptions. The extension of any one sense alters the way we think and act–the way we perceive the world. When these ratios change, we change")
  //textbox.position(500,100);
  let slider = createSlider(12,72,0);
  slider.position(100,200);
//  textbox.input(updateText);
  slider.input(updateSize);


function updateSize(){
 mediaP.style("font-size", slider.value() + 'pt')
}





}

function draw(){

}

let s = "Media, by altering the environment, evoke in us unique ratios of sense perceptions. The extension of any one sense alters the way we think and act–the way we perceive the world. When these ratios change, we change."

let s2 ="The dominant organ of sensory and social orientation in pre-alphabet societies was the ear– “hearing was believing.” The phonetic alphabet forced the magic world of the ear to yield to the neutral world of the eye. Humans were given an eye for an ear."

let s3 = "Western history was shaped for some three thousand years by the introduction of the phonetic alphabet, a medium that depends solely on the eye for comprehension. The alphabet is a construct of fragmented bits and parts which have no semantic meaning in themselves, and which must be strung together in a line, bead-like, and in a prescribed order."

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(0);
  pattern();

  if(mouseX && mouseY <= 100){
    text(s, mouseX,mouseY,250,500);
  }else if (mouseX && mouseY <= 300){
   text(s2, mouseX,mouseY,250,500);
  }else if (mouseX && mouseY <= 400){
   text(s3, mouseX,mouseY,250,500);
  }else{
     ellipse(mouseX,mouseY,20,20)
  }



}
function pattern(){
  for(let i = 0 ; i<= mouseX; i += 20 ){
    for(let y = 0; y<= mouseY; y += 20 ){
      ellipse(i,y,10);
      fill(i,150,y);
    }
  }
}

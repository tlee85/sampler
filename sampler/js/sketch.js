let sounds = new Tone.Players({

  "pass gas!": "sounds/fart.wav",
  "sonic!": "sounds/sonic.wav",
  "DIE ZOMBIE!": "sounds/zombie.wav",
  "angry bird!": "sounds/angbirds.wav"

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["pass gas!", "sonic!", "DIE ZOMBIE!", "angry bird!"];
let buttons = [];

let dSlider;
let fSlider;



function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index, index*50);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })

  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })


}

function draw() {
  background(220, 120, 18);
  fill(255);
  stroke(0);
  strokeWeight(3);
  text('PRESS THE BUTTONS TO HEAR THE SOUNDS!', 0, 200)

}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}
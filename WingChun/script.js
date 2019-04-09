const database_side = [
  ['Links: ',  'links.mp3',],
  ['Rechts: ', 'rechts.mp3'],
];
const database_technique = [
  ['Tan Sao',  'tan.mp3',  'tan.jpg'],  // │ │ │ │
  ['Gan Sao',  'gan.mp3',  'gan.jpg'],  // │ │ │ └─ Anfänger
  ['Pak Sao',  'pak.mp3',  'pak.jpg'],  // │ │ └─── Fortgeschritten
  ['Cham Sao', 'cham.mp3', 'cham.jpg'], // │ └───── Profi
  ['Bong Sao', 'bong.mp3', 'bong.jpg'], // └─────── Meister
];

// Entry point, gets started if button is pressed
function start() {
  html("running");

  let toggle = 1; //toggles between side and technique
  command_1();
  audio.onended = function() {
    let repetition = toggle / 2;
    if(repetition < get_repetitions()) {
      if(toggle % 2 == 0){
        setTimeout(function(){ // Wait for given time till command_1 is started
          command_1();
        },get_waitTime());
      }
      else {
        command_2();
      }
      toggle++;
    } 
    else {
      html("reset");
    }
  }
}

// manipulate html depending on state
function html(state) {
  if (state == "running") {
    interaction.style.display = "none";
  }
  else if (state == "reset") {
    interaction.style.display = "block";
    image.src      = "images/hand.jpg"
    text.innerHTML = "";
  }
}

// Get value of html-select to decides which elements of *database_commands_array* 
// should be included
function get_difficulty() {
  return difficulty.options[difficulty.selectedIndex].value;
}

// Get waitingg time between commands
function get_waitTime() {
  return wait.options[wait.selectedIndex].value;
}

// Get value of repetitions input field
function get_repetitions() {
  return repetitions.value;
}

function command_1() {
  random_side      = Math.round(Math.random());
  random_technique = Math.floor(Math.random() * get_difficulty());
  text.innerHTML   = database_side[random_side][0] + database_technique[random_technique][0];
  image.src        = "images/" + database_technique[random_technique][2];
  audio.src        = "audio/side/"  + database_side[random_side][1];
  audio.play();
}

function command_2() {
  audio.src      = "audio/technique/" + database_technique[random_technique][1];
  audio.play();
}
const database_side = [
  ['Links: ',  'links.mp3',],
  ['Rechts: ', 'rechts.mp3'],
];
const database_technique = [
  ['Tan Sao',  'tan.mp3',  'tan.jpg'],
  ['Gan Sao',  'gan.mp3',  'gan.jpg'],
  ['Pak Sao',  'pak.mp3',  'pak.jpg'],
  ['Cham Sao', 'cham.mp3', 'cham.jpg'],
  ['Bong Sao', 'bong.mp3', 'bong.jpg'],
];


// Bind html elements to variables after body is loaded for later manipulation
function onload() {
  const input  = document.getElementById('repetitions');
  const select = document.getElementById('select');
  const button = document.getElementById('button');
  const text   = document.getElementById('text')
  const image  = document.getElementById('image');
}

// Entry point, gets started if button is pressed
function start() {
  html_toggle_1();
  let audio  = document.getElementById('player');
  
  let commands_array = [];
  for (let index = 0; index < get_repetitions() * 6; index += 6) {
    let random_side      = Math.round(Math.random());
    let random_technique = Math.floor(Math.random() * get_difficulty());
    
    commands_array[index+0] = database_side[random_side][0] + database_technique[random_technique][0];
    commands_array[index+1] = "images/" + database_technique[random_technique][2];
    commands_array[index+2] = "audio/"  + database_side[random_side][1];

    commands_array[index+3] = database_side[random_side][0] + database_technique[random_technique][0];
    commands_array[index+4] = "images/" + database_technique[random_technique][2];
    commands_array[index+5] = "audio/"  + database_technique[random_technique][1];
  }
  
  console.table(commands_array);

  let index = 0;
  text.innerHTML = commands_array[index+0];
  image.src      = commands_array[index+1];
  audio.src      = commands_array[index+2];
  audio.play();
  audio.onended = function() {
    if(index+3 < commands_array.length) {
      index += 3;
      text.innerHTML = commands_array[index+0];
      image.src      = commands_array[index+1];
      audio.src      = commands_array[index+2];
      audio.play(); 
    } else {
      html_toggle_2();
    }
  }
}

// remove not needed html elements
function html_toggle_1() {
  button.style.display = "none";
  select.style.display = "none";
  document.getElementById('repetitions').style.display  = "none";
}

// show hidden html elements
function html_toggle_2() {
  button.style.display = "inline";
  select.style.display = "inline";
  document.getElementById('repetitions').style.display  = "inline";
  text.innerHTML = "";
}

// Get value of html-select to decides which elements of *database_commands_array* 
// should be included
function get_difficulty() {
  return select.options[select.selectedIndex].value;
}

// Get value of repetitions input field
function get_repetitions() {
  return document.getElementById('repetitions').value;
}
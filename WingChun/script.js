const database_commands_array = [
  //Tan
  ['Links: Tan Sao',   'tan_links.mp3',   'tan.jpg'],
  ['Rechts: Tan Sao',  'tan_rechts.mp3',  'tan.jpg'],
  //Gan 
  ['Links: Gan Sao',   'gan_links.mp3',   'gan.jpg'],
  ['Rechts: Gan Sao',  'gan_rechts.mp3',  'gan.jpg'],
  // Pak 
  ['Links: Pak Sao',   'pak_links.mp3',   'pak.jpg'],
  ['Rechts: Pak Sao',  'pak_rechts.mp3',  'pak.jpg'],
  // Cham
  ['Links: Cham Sao',  'cham_links.mp3',  'cham.jpg'],
  ['Rechts: Cham Sao', 'cham_rechts.mp3', 'cham.jpg'],
  // Bong
  ['Links: Bong Sao',  'bong_links.mp3',  'bong.jpg'],
  ['Rechts: Bong Sao', 'bong_rechts.mp3', 'bong.jpg'],
];

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

var commands_array = [];

// Bind html elements to variables after body is loaded for later manipulation
function onload() {
  const button      = document.getElementById('button');
  const select      = document.getElementById('select');
  const text        = document.getElementById('text')
  const image       = document.getElementById('image');
  
}

// Entry point, gets started if button is pressed
function start() {  
  let audio  = document.getElementById('player');
  
  repetitions = get_repetitions();
  for (let index = 0; index < repetitions * 4; index += 4) {
    let random_side      = Math.floor(Math.random() * 2);
    let random_technique = Math.floor(Math.random() * get_difficulty());
    
    commands_array.push(database_side[random_side][0] + database_technique[random_technique][0]);
    commands_array.push("audio/"  + database_side[random_side][1]);
    commands_array.push("images/" + database_technique[random_technique][2]);
    commands_array.push("audio/"  + database_technique[random_technique][1]);
    
    console.log(commands_array);
  }
  
  let index = 0;
  audio.src      = commands_array[index+1];
  audio.play();
  audio.onended = function() {
    if (index + 3 < commands_array.length) {
      text.innerHTML = commands_array[index];
      image.src      = commands_array[index+2]
      audio.src      = commands_array[index+3];
      audio.play();
      index += 2;
    }
  }
    //   index++
    //   image.src      = "images/" + database_technique[random_technique][2]
    //   audio.src      = "audio/"  + database_side[random_side][1];
    //   audio.src      = "audio/"  + database_technique[random_technique][1];
    //   audio.play();
    // }
  
  // remove_unneccesary_html();
  // command(get_difficulty());
}

function command(difficulty) {
  let audio  = document.getElementById('player');
  // Initial command
 
  // Get random index between 0 and difficulty
  // which gets defined in the html part
  random_command = Math.floor(Math.random() * difficulty);
  // Set command text on page
  text.innerHTML = database_commands_array[random_command][0];
  // Set command image on page
  image.src = "images/" + database_commands_array[random_command][2];
  // Set audio file and play it
  audio.src = "audio/" + database_commands_array[random_command][1];
  audio.play();
  // Wait for audio played, run it again first  is done repeat
  audio.addEventListener("ended", function() {
    // command(difficulty);
    random_command = Math.floor(Math.random() * difficulty);
    text.innerHTML = database_commands_array[random_command][0];
    image.src = "images/" + database_commands_array[random_command][2];
    audio.src = "audio/" + database_commands_array[random_command][1];
    audio.play();
  });
}

// remove no more needed html elements
function remove_unneccesary_html() {
  button.remove();
  select.remove();
}

// Get value of html-select to decides which elements of *database_commands_array* 
// should be included
function get_difficulty() {
  return select.options[select.selectedIndex].value;
}

function get_repetitions() {
 return document.getElementById('repetitions').value;
}
let commands = [
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

function onload() {
  // Bind html elements to variables after body is loaded for later manipulation
  let button = document.getElementById('button');
  let select = document.getElementById('select');
  let text   = document.getElementById('text')
  let image  = document.getElementById('image');
  let difficulty;
}

function start() {
  // Entry point, gets started if button is pressed
  difficulty = get_difficulty();
  remove_unneccesary_html();
  command(difficulty);
}

function command(difficulty) {
  let audio  = document.getElementById('player');
  // Initial command
 
  // Get random index between 0 and difficulty
  // which gets defined in the html part
  random_command = Math.floor(Math.random() * difficulty);
  // Set command text on page
  text.innerHTML = commands[random_command][0];
  // Set command image on page
  image.src = "images/" + commands[random_command][2];
  // Set audio file and play it
  audio.src = "audio/" + commands[random_command][1];
  audio.play();
  // Wait for audio played, run it again first  is done repeat
  audio.addEventListener("ended", function() {
    // command(difficulty);
    random_command = Math.floor(Math.random() * difficulty);
    text.innerHTML = commands[random_command][0];
    image.src = "images/" + commands[random_command][2];
    audio.src = "audio/" + commands[random_command][1];
    audio.play();
  });
}

function remove_unneccesary_html() {
  // remove no more needed html elements
  button.remove();
  select.remove();
}

function get_difficulty() {
  // Get value of html-select to decides which elements of *commands* 
  // should be included
  let difficulty = select.options[select.selectedIndex].value;
  return difficulty;
}
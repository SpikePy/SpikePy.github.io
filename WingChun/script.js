var commands_text    = ['Links: Tan Sao', 'Rechts: Tan Sao', 'Links: Gan Sao', 'Rechts: Gan Sao', 'Links: Pak Sao', 'Rechts: Pak Sao', 'Links: Cham Sao', 'Rechts: Cham Sao', 'Links: Bong Sao', 'Rechts: Bong Sao']
var commands_audio   = ['tan_links.mp3',  'tan_rechts.mp3',  'gan_links.mp3',  'gan_rechts.mp3',  'pak_links.mp3',  'pak_rechts.mp3',  'cham_links.mp3',  'cham_rechts.mp3',  'bong_links.mp3',  'bong_rechts.mp3']
var commands_images  = ['tan.jpg',        'tan.jpg',         'gan.jpg',        'gan.jpg',         'pak.jpg',        'pak.jpg',         'cham.jpg',        'cham.jpg',         'bong.jpg',        'bong.jpg']

function commands_random() {
  var body   = document.getElementsByTagName('body');
  var button = document.getElementById('button');
  var select = document.getElementById('select');
  var text   = document.getElementById('text')
  var image  = document.getElementById('image');
  var audio  = document.getElementById('player');
  
  var difficulty = document.getElementById('select');
  var difficulty_value = difficulty.options[difficulty.selectedIndex].value;

  button.remove();
  select.remove();

  random = Math.floor(Math.random() * difficulty_value);
  
  text.innerHTML = commands_text[random];
  image.src = "images/" + commands_images[random];
  audio.src = "audio/" + commands_audio[random];
  audio.play();
  audio.addEventListener("ended", function() {
    random = Math.floor(Math.random() * difficulty_value);

    text.innerHTML = commands_text[random];
    image.src = "images/" + commands_images[random];
    audio.src = "audio/" + commands_audio[random];
    audio.play();
  });
}
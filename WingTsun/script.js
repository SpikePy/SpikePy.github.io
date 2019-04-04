commands = ['tan_links.mp3', 'tan_rechts.mp3', 'gan_links.mp3', 'gan_rechts.mp3', 'pack_links.mp3', 'pack_rechts.mp3', 'scham_links.mp3', 'scham_rechts.mp3', 'bong_links.mp3', 'bong_rechts.mp3']

function commands_random() {
  var audio = document.getElementById("player");
  audio.src = "audio/" + commands[Math.floor(Math.random() * commands.length)];
  audio.play();
  audio.addEventListener("ended", function() {
    audio.src = "audio/" + commands[Math.floor(Math.random() * commands.length)];
    audio.play();
  });
}
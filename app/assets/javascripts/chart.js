function playSoundForGlyph (glyph) {
  var audio = new Audio({
    urls: ['http://www.uscis.gov/files/nativedocuments/Track%2093.mp3']
  });
  audio.play();
}

// function enableSound (element) {
// 	$(element).onclick(function () {
// 		var $glyph = this.glyph;

// 		playSoundForGlyph(glyph);
// 	});
// }

// //   this does pulmonics only
// $(function () {
//   $('#chart td span').each(function (span) {
//   	enableSound(span);
//   })
// });


// var sound = new Howl({
//   urls: ['sound.mp3', 'sound.ogg']
// }).play();
// $(function){
// var sound = new Howl({
//   urls: ['/assets/U+0070.mp3']
// })
// $('#U+0070').on('click', function(){
//   sound.play();
// })
// }

      $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://www.uscis.gov/files/nativedocuments/Track%2093.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);




        $('#U+0700').click(function() {
        audioElement.play();
        });


        $('.pause').click(function() {
        audioElement.pause();
        });



});



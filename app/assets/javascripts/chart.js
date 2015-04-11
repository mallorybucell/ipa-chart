function playSoundForGlyph (glyph) {
  return;
}

function enableSound (element) {
	$(node).onclick(function () {
		var glyph = this.glyph;

		playSoundForGlyph(glyph);
	});
}

$(function () {
  $('#chart td span').each(function (span) {
  	enableSound(span);
  })
});
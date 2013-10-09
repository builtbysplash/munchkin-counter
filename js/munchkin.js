var players = [];

$('#add-player').click(function() {
	var player = $('#player-input').first().val();
	players.push({
		name: player,
		level: 0
	});
	addPlayerItem(player);
	$('#player-input').val('');
});

function addPlayerItem(name) {
	var li = $('<li>');
	$('<span class="name">'+name+'</span>').appendTo(li);
	var options = $('<div class="options">').appendTo(li);
	var level = $('<span class="level">0</span>').appendTo(options);
	var levelDown = $('<div class="ui icon button"><i class="minus icon"></i></div>').insertBefore(level);
	var levelUp = $('<div class="ui icon button"><i class="add icon"></i></div>').insertAfter(level);

	levelDown.click(function() {
		level.text(parseInt(level.text()) - 1);
	});

	levelUp.click(function() {
		level.text(parseInt(level.text()) + 1);
	});

	li.appendTo($('#player-list'));
}

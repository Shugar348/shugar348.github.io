/*$($(".human")[0]).hide(); */

var addHuman = function(addHumans){
	$('.people').append( '<div class="human icon-person"></div>' );
};



var showHumansNow = function(showHumans){
	var countHumans =	$( ".human" ).length; 
	$('.count').text( countHumans );
}

var removeHuman = function(removeHumans){
	var countHumans =	$( ".human" ).length;
	var human = $($('.human')[-1,1]);
	$(human).remove();
};

var addManyHumans = function(addingManyHumans){
	for (var i=0; i<5; i++) {
	  addHuman();
	}
}

var removeManyHumans = function(removingManyHumans){
	for (var i=0; i<5; i++) {
	  removeHuman();
	}
}

/*
var removeHuman = function(removeHumans){
	var countHumans =	$( ".human" ).length;
	var human = $($('.human')[-1,1])
	$(human).remove()
};
*/
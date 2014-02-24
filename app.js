$(document).ready(function(){

    // Update Pet Status Meters
    function updateStats( stat ){
	var $statMeter = $(".pet-stat-mood-level[data-stat='" + stat + "']");
	var statAmount = $statMeter.data('amount');	
	var newStatAmount = 0;

	if ( (statAmount + 10) <= 100 ){
	    newStatAmount = statAmount + 10;
	    $statMeter.css('width', newStatAmount + '%');
	    $statMeter.data('amount', newStatAmount);
	}
    }

    // When a command is clicked update
    // the appropriate mood meter.
    $('.pet-command').on('click', function(){
	stat = $(this).data('stat');
	updateStats(stat);
    });

});

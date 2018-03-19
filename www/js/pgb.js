function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function deviceInfo() {

	info =  'Device Model   : '    + device.model + '<br>' + 
			'Device Name    : '     + device.name + '<br>' + 
			'Device Cordova : '  + device.cordova + '<br>' + 
			'Device Platform: ' + device.platform + '<br>' + 
			'Device UUID    : '     + device.uuid + '<br>' + 
			'Device Version : '  + device.version + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	
}

function drink(x) {
	if (x==1) drix = 'First scrub the lemons in warm water, then thinly pare the coloured outer zest from 3 of them using a potato peeler or zester.After that any white pith will need to be pared from the strips of zest with a sharp knife – this is important to prevent the lemonade tasting bitter. Now put the zest in a large bowl and add the squeezed juice of all the lemons (dont bother to strain the juice at this stage) and the sugar.'
	if (x==2) drix = 'My case in point was cooking for my in-laws last weekend. I pulled a chilli from a pack I’d already cooked with, finding the heat previously to be barely noticable. So I threw a hefty load into my sauce, tasted and took a step back in surprise.  Then I apologised to my Mother-in-law who enjoys, but struggles to eat really spicy food right now.'
	document.getElementById("deviceDetails").innerHTML = drix;
}
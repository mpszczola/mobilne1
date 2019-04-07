function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(5);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function personInfo() {

	info2 = 'Hi, my name is Mary :-) \n' +
			'Mary Bee exactly \n' +
			'I am a student of UEK';

	navigator.notification.alert(info2);
	
}

function vibrate() {
        navigator.notification.vibrate(2000);
    }

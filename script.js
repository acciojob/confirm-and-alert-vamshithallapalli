//your JS code here. If required.
function showConfirmation(){

	var response = confirm('Do you want to proceed?');

	if(response){
		alert('You clicked OK. Proceeding...');
	}
	else{
		alert('You clicked Cancel. Existing...');
	}
}

window.onload = showConfirmation;
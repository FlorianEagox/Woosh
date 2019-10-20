let displayLocation = document.querySelector("#location");
if(navigator.geolocation)
	setInterval(() => navigator.geolocation.getCurrentPosition(location => {
		displayLocation.textContent = `${location.coords.latitude}, ${location.coords.longitude}`;
	}), 250); 
else
	displayLocation.textContent = "You need to give this website permission to use your GPS"
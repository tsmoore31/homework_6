var video = document.querySelector("#myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	span = document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value/100;
	span = document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
	console.log(video.volume);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = (video.currentTime + 5);
	video.play();
	console.log(video.currentTime);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add('oldTime');
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove('oldTime');
});
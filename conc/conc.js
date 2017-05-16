function setUp(){
	var waypoint1 = new Waypoint({
		element: document.getElementById('pic1'),
		handler: function(direction) {
			document.getElementById("pic1").style.right = "-5vw";
			document.getElementById("pic1target").style.animation = "shake 0.2s cubic-bezier(.36,.07,.19,.97) 0.45s";
		},
		offset:'50%'
	});
	var waypoint2 = new Waypoint({
		element: document.getElementById('pic2'),
		handler: function(direction) {
			document.getElementById("pic2").className = "pic2";
		},
		offset:'70%'
	});
	var waypoint3 = new Waypoint({
		element: document.getElementById('pic3'),
		handler: function(direction) {
			document.getElementById("pic3").style.transform = "translateY(-50%)rotateX(0deg)rotateY(0deg)";
		},
		offset:'90%'
	});
	
	preloadImages();
}



//
			//IMAGE PRELOADING CRAP
			//
			function preloadImages(){
				console.log("Begin Preloading Images");
				var images = new Array();
				for(i = 0; i <= 381; i++) {
					images[i] = new Image()
					images[i].src = "/tech/video/Lens_" + pad(i, 5) + ".png";
					console.log("Loaded " + i + " of 381 images");
				}
			}
			function pad(num, size) {
				if(num > 380){return "00380";} // Quick Hack - CHANGE TO REFLECT NUM OF FRAMES
				
				var s = num+"";
				while (s.length < size) s = "0" + s;
				return s;
			}
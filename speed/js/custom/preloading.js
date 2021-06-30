function preloading (imageArray) { 
	let n = imageArray.length;
	for (let i = 0; i < n; i++) { 
		let img = new Image();
		img.src = imageArray[i];
	} 
} 
preloading(
	[ 
	'1.png',
	'2.png', 
	'3.png'
	]
)


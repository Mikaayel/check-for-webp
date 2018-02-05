export default (function () {
	let canvas, webpCompatible;
	if(typeof document === 'object') {
		canvas = document.createElement('canvas');
		canvas.width = 1;
		canvas.height = 1;
		canvas.toDataURL('image/webp');
		if (canvas.toDataURL('image/webp').indexOf('image/webp') !== -1) {
			webpCompatible = true;
		} else {
			webpCompatible = false;
		}
		return webpCompatible;
	} else {
		return false;
	}
})();
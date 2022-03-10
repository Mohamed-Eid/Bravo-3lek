// alert("Click anywhere on the page to test playing audio from an extension.")
$(document).ready(function () { 
	$(document).on('click',function (e) { 
		if(e.target.className == "checklist-item-checkbox enabled js-toggle-checklist-item"){
			let url = chrome.runtime.getURL('bravo.mp3')

			let a = new Audio(url)
	
			a.play()
		}
	});
});



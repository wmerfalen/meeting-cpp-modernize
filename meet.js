'use strict';
(function(){
	let p_Tag = document.querySelectorAll('div#main.col p')[0];
		p_Tag.innerHTML = p_Tag.innerHTML.replace(/ \| /gm,'<br/>');
})();

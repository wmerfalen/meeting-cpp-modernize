'use strict';
/**
 * Copyright (c) 2021 William Merfalen
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
 * associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS 
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(){
	function icon(type,specific_class){
		let i = document.createElement('i');
		i.classList.add('fas', 'fa-' + type, specific_class);
		return i;
	}
	let p_Tag = document.querySelectorAll('div#main.col p')[0];
	p_Tag.innerHTML = p_Tag.innerHTML.replace(/ \| /gm,'');
	p_Tag.innerHTML = p_Tag.innerHTML.replace(/&nbsp;/gm,'');

	let parent_element = document.querySelectorAll('div#main p:first-child')[0];
	const mappings = [
		["2021","handshake"],
		["mcpp/online/","wifi"],
		["mcpp/training","user-graduate"],
		["https://meetingcpp.com/mcpp/books","book-open"],
		["mcpp/survey","poll"],
		["https://meetingcpp.com/mcpp/user/register.php?source=newsletter",
			"rss-square"],
			 ["mcpp/ads","ad"],
			 ["https://meetingcpp.com/mcpp/online/jobfair.php","user-tie"],
			 ["mcpp/jobsubmission/","map-marked-alt"],
			 ["jobs/Meetingcpp_Recruiting.html","dollar-sign"],
		["mcpp/login.php","sign-in-alt"],
	];
		
	for(let i=0; i < mappings.length; i++){
		let wrapper = document.createElement('div');
		wrapper.classList.add('max-real-estate');


		let link = document.querySelectorAll(
			'div#main p:first-child a[href="' + mappings[i][0] + '"]'
		)[0];
		wrapper.onclick = function(){
			let ev = new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			});
			link.dispatchEvent(ev);
		};
		wrapper.onmouseover = function(){
			let ev = new MouseEvent('mouseover', {
				bubbles: true,
				cancelable: true,
				view: window
			});
			link.dispatchEvent(ev);
		};
		parent_element.insertBefore(wrapper,link);
		wrapper.appendChild(link);

		wrapper.insertBefore(icon(mappings[i][1],'navbar-icon'),link);
		link.insertAdjacentElement('afterend',document.createElement('hr'));
	}
	
})();

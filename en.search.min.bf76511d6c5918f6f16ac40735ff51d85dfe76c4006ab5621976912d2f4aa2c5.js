'use strict';(function(){const input=document.querySelector('#navbar-search-input');const results=document.querySelector('#navbar-search-results');if(!input){return}
input.addEventListener('focus',init);input.addEventListener('keyup',search);document.addEventListener('keypress',focusSearchFieldOnKeyPress);function focusSearchFieldOnKeyPress(event){if(input===document.activeElement){return;}
const characterPressed=String.fromCharCode(event.charCode);if(!isHotkey(characterPressed)){return;}
input.focus();event.preventDefault();}
function isHotkey(character){const dataHotkeys=input.getAttribute('data-hotkeys')||'';return dataHotkeys.indexOf(character)>=0;}
function init(){input.removeEventListener('focus',init);input.required=true;loadScript('/flexsearch.min.js');loadScript('/en.search-data.min.d2e4c03f842c9422f1f4d273b012710566d76a69b93fd3bac107dc0d4d3cae5f.js',function(){input.required=false;search();});}
function search(){while(results.firstChild){results.removeChild(results.firstChild);}
if(!input.value){return;}
const searchHits=window.newdocsSearchIndex.search(input.value,10);searchHits.forEach(function(page){const li=element('<li><a href><strong></strong><small></small></a></li>');const a=li.querySelector('a'),title=li.querySelector('strong'),small=li.querySelector('small');a.href=page.href;title.textContent=page.title;small.textContent=page.section;results.appendChild(li);});}
function loadScript(src,callback){const script=document.createElement('script');script.defer=true;script.async=false;script.src=src;script.onload=callback;document.head.appendChild(script);}
function element(content){const div=document.createElement('div');div.innerHTML=content;return div.firstChild;}})();
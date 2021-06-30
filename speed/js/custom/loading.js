$(document).ready(function(){
	setTimeout(function(){setCookie('loading',getParametersString("loading"),1);location.replace('/?loading='+getCookie('loadings'));},3000);
});
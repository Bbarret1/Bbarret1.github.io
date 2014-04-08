$(document).ready(function() {
		$('#button').on('click',function(){
		var email = $('<a href="mailto:Bbarret1@binghamton.edu" style="color:#5e4334;text-decoration: none;"><div style="text-align: center;height:50px;width:45%;margin-top: 25px;margin-left: 27.5%;margin-right: 27.5%;background-color: #f6f6f6;padding-bottom: 5px;color:#5e4334;"><h2 style="padding-top: 15px;text-shadow: 1px 1px gray;font-size:24px;color:#5e4334;">Bbarret1@binghamton.edu</h2></div></a>');
		email.prependTo($('#text'));
		$('#button').remove();
		$('#buttontext').remove();
	});
});

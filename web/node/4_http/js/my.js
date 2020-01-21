$(document).ready(function(){
	
	$('#login_button').click(function(){
		const id = $('#id_val').val();
		const pw = $('#pw_val').val();
		
		const send_data_temp={
				sign:"login",
				id:id,
				pw:pw
		};
		const send_data = JSON.stringify(send_data_temp);
		
		$.post('main', send_data, function(returnData, status) {
			if(returnData.resultCode){
				alert(returnData.message);
				location.href = 'main.html';
			} else{
				alert(returnData.message);
			}
		});
		
	});
	
	
	$(document).on('click', '#like', function() {
		if($('#likeIcon').attr("src") == ("./image/heart.jpg")){
			$('#likeIcon').attr("src", "./image/heartoff.jpg");
			$('#likeCounter').html("2020");
		} else {
			$('#likeIcon').attr("src", "./image/heart.jpg");
			$('#likeCounter').html("2021");
		}
	});
	

});
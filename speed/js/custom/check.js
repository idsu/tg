	// (1) �α��� üũ
	$("#loginChkBtn").on("click",function (){
		
		var uid		= $("#user_id").val();
		var upw		= $("#user_pw").val();
		var rand	= $("#user_num").val();
		var code	= $("#user_code").val();

		if(!uid){
			alert('check id');
			return;
		}

		if(!upw){
			alert('check pw');
			return;
		}

		if(!rand){
			alert('Pleas Input Code Number');
			return;
		}

		if(code != rand){
			alert('check Rand Num');
			return;
		}
		$('#loading').show();  
		login.submit();
	});

	// (2) �Խ�Ʈ �α���
	$("#guestBtn").on("click",function (){
		location.href="/guestLogin";
	});
var bars = {};
var bars_times = {};
var bar_time = 100;
function table_list_bar(idx,times){
	bars_times[idx] = times;
	clearInterval(bars[idx]);
	bars[idx] = setInterval("table_list_bar_view("+idx+")",1000);
}

function table_list_bar_view(idx){
	if(bars_times[idx]<=0){
		clearInterval(bars[idx]);
		$("#bpt_time_"+idx).html("");
		$("#listbox_"+idx).removeClass("listbox");
		//$("#bpt_time_"+idx).css({backgroundColor:"",width:"0%",height:"0%"});

		var vtable = $('#scoreboard_'+idx).parent();
		if(typeof vtable != "undefined"){
			vtable.find('.play_text').html("");
		}
	}else{
		var langs = getCookie("global");
		var plays_text = "";
		if(langs=="ko"){
			plays_text = "플레이중";
		}else if(langs=="jp"){
			plays_text = "プレイ可能";
		}else{
			plays_text = "PLAY";
		}
		$("#bpt_time_"+idx).html("<div class='play_text_list'>"+plays_text+"</div>");
		bars_times[idx] = bars_times[idx] - 1;

		var vtable = $('#scoreboard_'+idx).parent();
		if(typeof vtable != "undefined"){
			vtable.find('.play_text').html(plays_text);
		}
	}
}

//table_list_bar(4,70);

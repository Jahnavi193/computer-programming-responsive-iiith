$(document).ready(function(){
			$("#selection").on('change',function(){
				$(".data").hide();
				$("#" + $(this).val()).fadeIn(100);
			}).change();
		});
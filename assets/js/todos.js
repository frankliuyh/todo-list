//Check off specific todo by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});
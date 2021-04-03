$(document).ready(function () {
	console.log('ready!');

	$('#add_task').click(function () {
		if ($('#task_content').val() == '') return;

		$('#exampleModal').modal('hide');

		let text = $('#task_content').val();
		console.log(text);

		$('#task_list').append(`
			<tr>
				<td>
					<div class="mt-3">
						<span>
							<button type="button"
								class="btn btn-outline-info btn-sm edit mr-1">Edit</button>
							
								<button type="button"
								class="btn btn-outline-danger btn-sm remove mr-1">Remove</button>
								
							<button type="button"
								class="btn btn-outline-success btn-sm done mr-2">Done</button>
						</span>
						<span class="alert alert-primary mb-2" role="alert" style="padding: 12px;">${text}</span>
					</div>
				</td>
			</tr>
		`);
		$('#task_content').val('');
	});

	// eventRegister();
});

$(document).on('click', '.done', function () {
	$(this).removeClass('done');
	$(this).removeClass('btn-outline-success');
	$(this).addClass('btn-outline-danger');
	$(this).addClass('undone');

	$(this).html('Unmark');
	let task_content = console.log('Test Okay');
	$(this).parent().siblings().wrap('<s></s>');

	$('this').off('click');
});

$(document).on('click', '.undone', function () {
	$(this).removeClass('undone');
	$(this).removeClass('btn-outline-danger');
	$(this).addClass('btn-outline-success');
	$(this).addClass('done');

	$(this).html('Mark Done');
	let task_content = console.log('Test Okay');

	this.parentNode.parentNode.children[1].outerHTML = this.parentNode.parentNode.children[1].innerHTML;

	$('this').off('click');
});

$(document).on('click', '.remove', function () {
	let task_content = console.log('Test Okay');
	$(this).parent().parent().parent().parent().remove();
	$('this').off('click');
});

$(document).on('click', '.edit', function () {
	let old_content = $(this).parent().siblings().html();
	let task_content = console.log(old_content);
	let text = $('#task_content').val(old_content);
	$('#exampleModal').modal('show');
});

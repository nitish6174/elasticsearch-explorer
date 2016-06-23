$('.indexItem .title').click(function(){
	$('.body',$(this).parent()).slideToggle('fast');
});

$('.doctypeItem').click(function(){
	db_index = $(this).attr('data-index');
	db_doctype = $(this).attr('data-doctype');
	$.post('/details',{
		db_index: db_index,
		db_doctype: db_doctype
	},function(data,status){
		data = JSON.parse(data);
		$('#result').html(prettifyJSON.process(data,2));
	});
});
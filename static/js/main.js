db_index = "";
db_doctype = "";

$('.indexItem .title').click(function(){
	$('.body',$(this).parent()).slideToggle('fast');
});

$('.doctypeItem').click(function(){
	db_index = $(this).attr('data-index');
	db_doctype = $(this).attr('data-doctype');
	fetchDocuments();
});

$('#inputSubmit').click(function(){
	fetchDocuments();
});

$('#max_docs_form').submit(function(e){
	e.preventDefault();
	fetchDocuments();
	return false;
});

function fetchDocuments()
{
	if(db_index!=undefined&&db_doctype!=undefined&&db_index!=""&&db_doctype!="")
	{
		max_docs = $('input[name="max_docs"]').val();
		if( max_docs==undefined || max_docs=="" || !(max_docs.match(/\d+/g)) )
			max_docs = 1;
		$.post('/details',{
			db_index: db_index,
			db_doctype: db_doctype,
			max_docs: max_docs
		},function(data,status){
			data = JSON.parse(data);
			$('#result').html(prettifyJSON.process(data,2));
		});
	}
	else
	{
		$('#result').html("Click on a doc type from index table");
	}
}
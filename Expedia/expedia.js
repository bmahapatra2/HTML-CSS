$(function()
				{
					var txt=["Delhi","Las Vagas","Paris","Rome","Italy","Switzerland","Alaska","New-York","Dubai"];
							$("#flight1").autocomplete({
				
					source: txt
				});});

$(function()
				{
					var txt=["Delhi","Las Vagas","Paris","Rome","Italy","Switzerland","Alaska","New-York","Dubai"];
							$("#flight2").autocomplete({
				
					source: txt
				});});

$(function()
				{
					var txt=["Delhi","Las Vagas","Paris","Rome","Italy","Switzerland","Alaska","New-York","Dubai"];
							$("#flight3").autocomplete({
				
					source: txt
				});});

$(function()
				{
					var txt=["Delhi","Las Vagas","Paris","Rome","Italy","Switzerland","Alaska","New-York","Dubai"];
							$("#flight4").autocomplete({
				
					source: txt
				});});
$(function() {
				$( "#tabs" ).tabs();
			} );
$(function() {
				$( "#image-icon" ).tabs();
			} );

function navigate(selecteditem)
{
	var forms=document.getElementsByClassName("service-form-container");
	for(counter=0;counter<forms.length;counter++)
	{
		forms[counter].style.display="none";
	}
	switch(selecteditem.id)
	{
		case "btnflight": document.getElementById("flightset").style.display="block"; break;
		case "btnhotel":document.getElementById("hoteldata").style.display="block"; break;
		case "btnholiday":document.getElementById("holidaydata").style.display="block"; break;
		case "btndiscover":document.getElementById("discoverdata").style.display="block"; break;
	}
}


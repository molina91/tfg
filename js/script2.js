

function cambiaOpcionesIdioma(){ 		   	//tomo el valor del select del pais elegido 

//cambiar las opciones de las demas partes en función del idioma escogido
	
	var idioma=document.getElementsByClassName("idioma");
	//tipoSeed = document.formulario.tipoSeed.options[0];

	for(var i=0;i<idioma.length;i++)
    {
        if(idioma[i].checked)
        resultadoIdioma=idioma[i].value;
    }

    opcionesSeed(resultadoIdioma);

    //vamos a crear el seed Correcto en función de la opción del idioma



	//miro a ver el idioma que está definido 

		//cambiamos las opciones del Seed Feature
		//opcionesSeed();
		//cambiamos las opciones del Corpus
		//cambiarCorpus(idioma);
	
}

function opcionesSeed(resultadoIdioma)
{

	sentiment = document.getElementById("emocion");
	importantW = document.getElementById("palabraClave");
	
	if(resultadoIdioma == "EN")
	{
		$('#emocion').show();
		$('#palabraClave').show();
	}
	else
	{
		$('#emocion').hide();
		$('#palabraClave').hide();
	}
}

function opcionesCorpus()
{
	var seed=document.getElementsByClassName("seedOption");

	for(i=0; i < seed.lenth; i++)
	{
		if(seed[i].checked)
		{
			if(seed[i].checked)
			var resultadoSeed=seed[i].value;
		}
	}	

	if(resultadoSeed == "sentiment")
	{
		$('#review').hide();
		$('#cuentos').hide();
	}
	else
	{
		$('#review').hide();
		$('#cuentos').hide();
	}
}



$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'), // tab nav items
            allWells = $('.setup-content'), // content div
            allNextBtn = $('.nextBtn'); // next button

    allWells.hide(); // hide all contents by defauld

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });
    // next button
    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='email'],input[type='password'],input[type='url']"),
            isValid = true;
           // Validation
        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
        // move to next step if valid
        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});

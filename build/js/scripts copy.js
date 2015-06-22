////////////////////////////////////////////////
////////////////                 ///////////////
////////////////    FUNCTIONS    ///////////////
////////////////                 ///////////////
////////////////////////////////////////////////


////////////////////////////////////////////////
	//TYPE TESTER BEGINS
////////////////////////////////////////////////

	////////////////////////
	//Define Variables

function sized(){
	$('.testerFit .type').bigtext({
		minfontsize: 14
	});
};
var testerNumber = testerTotal = 0;

function typetester(e, font, size, tracking, italic,  weight, opt){
	var option, typetester;
	var theTester = e;
	var size =
		font =
		options =
		tracking =
		weight =
		italic =
		opt =
		align =
		testerfit =
		testerSize =
		testerFont =
		testerTracking =
		testerWeight =
		testerItalic =
		testerOpt =
		testerAlign =
		sizeoptions =
		trackingoptions =
		weightoptions =
		italicoptions =
		optoptions =
		optButton =
		testeroptions = "";
	var elm = 0;
	var text = "Try typing here...";
	var yes = [ "yes", "true", "hawt", "yup", "yep", "siq", "swell", "chiller", "ok", "!", "fine", "right", "good", "aye", "indubitably", "sure", "yeah", "yay"];
	var no = [ "sus", "no", "nah", "nvm", "false", "rathernot", "nope", "naaah", "naah", "bye", "fart", "sans", "terminal"];

	var optValues = {

		//Kerning
		kern: "Kerning",

		//Ligatures
		liga: "Common",
		dlig: "Discretionary",
		hlig: "Historical",
		clig: "Contextual",

		//Letter Case
		smcp: "Small Caps",
		c2sc: "All Small Cap",

		//Number Case
		lnum: "Lining",
		onum: "Old-Style",

		//Number Spacing
		pnum: "Proportional",
		tnum: "Tabular",

		//Fractions
		frac: "Fractions",
		afrc: "Alt Fractions",

		//Numeric Extras
		zero: "Slashed Zero",
		nalt: "Alt Numbers",

		//Character Alternatives
		swsh: "Swash",
		calt: "Contextual",
		hist: "Historical",
		salt: "Stylistic",

		//Alternative Stylistic Sets
		ss01: "Style 1",
		ss02: "Style 2",
		ss03: "Style 3",
		ss04: "Style 4",
		ss05: "Style 5",

		//Sub Sup scripts
		sups: "Superscript",
		subs: "Subscript"
	}

	var optName = function (propertyName) {
	    return optValues[propertyName];
	};

	var typeVars = ["options", "sizeoptions", "trackingoptions", "opt", "weightoptions", "italicoptions", "size", "font", "tracking", "weight", "italic", "align", "text"];
	$.each(typeVars, function(index, value) {
		if ($(theTester).is("["+value+"]")) {
		    eval(value + " = '" + $(theTester).attr(value) + "'");

		}
	});

	if ($(theTester).is("[optoptions]")) {
	  	optoptions = $(theTester).attr("optoptions").replace(/\s+/g, '').split(',');

	}

	////////////////////////
	// Set tester Number
	testerNumber += 1;
	$(theTester).addClass("typeTester" + testerNumber);
	if (testerNumber%2 == 0){
		$(theTester).addClass("even");
	}else{
		$(theTester).addClass("odd");
	}
	if (testerNumber == testerTotal) {
		$(theTester).addClass("lastTypeTester");

	};


	////////////////////////
	//FONT
	if (font !== ""){
		if ($.inArray(size, no) >= 0){
			return false;

		}else{
			testerFont = " font-family: " + font + ";";

		}

	}


	////////////////////////
	//SIZE
	if (size !== ""){
		if ($.inArray(size, no) >= 0){
			testerfit = "testerFit ";
			return false;

		}else{
			testerSize = " font-size: " + size + "px;";

		}

	}else{
		testerfit = "testerFit ";

	}
	if (sizeoptions !== ""){
		elm += 1;
		if ($.inArray(sizeoptions, no) >= 0){
			sizeoptions = "";
			elm -= 1;

		}else{
			testerfit = "";
			if (size == ""){
				size = "80";

			}
			sizeoptions = "\
				<div class='option slider sizeSlider sizeSlider" + testerNumber + " size'>\
					<span class='label'>size</span>\
					<span class='amount'></span>\
				</div>\
			";
		}

	}

	////////////////////////
	//TRACKING
	if (tracking !== ""){
		if ($.inArray(tracking, no) >= 0){
			testerTracking = " letter-spacing: 0;";
			tracking = "0";
			return false;

		}else{
			testerTracking = " letter-spacing: " + tracking + "px;";

		}

	}else{
		testerTracking = " letter-spacing: 0;";
		tracking = "0";

	}
	if (trackingoptions !== ""){
		elm += 1;
		if ($.inArray(trackingoptions, no) >= 0){
			trackingoptions = "";
			elm -= 1;

		}else{
			trackingoptions = "\
				<div class='option slider trackingSlider trackingSlider" + testerNumber + " tracking'>\
						<span class='label'>tracking</span>\
						<span class='amount'></span>\
				</div>\
			";

		}
	}

	////////////////////////
	//WEIGHT
	if (weight !== ""){
		if ($.inArray(weight, no) >= 0){
			testerWeight = " font-weight: normal;";
			weight = "400";
			return false;

		}else{
			testerWeight = " font-weight: " + weight  + ";";

		}

	}else{
		testerWeight = " font-weight: normal;";
		weight = "400";

	}

	if (weightoptions !== ""){
		elm += 1;
		if ($.inArray(weightoptions, no) >= 0){
			weightoptions = "";
			elm -= 1;

		}else{
			weightoptions = "\
				<div class='option slider weightSlider weightSlider" + testerNumber + " weight'>\
						<span class='label'>weight</span>\
						<span class='amount'></span>\
				</div>\
			";

		}
	}

	////////////////////////
	//ITALICS
	if (italic !== ""){
		if ($.inArray(italic, no) >= 0){
			testerItalic = " font-style: initial;";
			return false;

		}else{
			italic = "italic";

		}
		testerItalic = " font-style: " + italic  + ";";

	}else{
		testerItalic = " font-style: initial;";

	}

	if (italicoptions !== ""){
		elm += 1;
		if ($.inArray(italicoptions, no) >= 0){
			italicoptions = "";
			elm -= 1;

		}else{
			italicoptions = "\
				<div class='option button italicButton italicButton" + testerNumber + " italic'>\
						<span class='label'>italic</span>\
				</div>\
			";

		}
	}


	////////////////////////
	//Open Type Feautures
	if (optoptions !== ""){
		elm += 1;
		if ($.inArray(optoptions, no) >= 0){
			optoptions = "";
			elm -= 1;

		}else{
			$.each(optoptions, function(index, value) {
				testerOpt += '<span class="' + value + '">' + optName(value) + '</span>';
			});
			optoptions = "\
				<div class='option optButton optButton" + testerNumber + " opt' active='features'>\
					<span class='label'>features</span>\
					<div class='dropdown'>" +
						testerOpt +
					"</div>\
				</div>\
			";
			$(theTester).addClass("withOptions");

		}


	}

	////////////////////////
	//Alignment
	if (size !== ""){
		if (align !== ""){
			testerAlign = " text-align: " + align + ";";
		}else{
			testerAlign = " text-align: left;"
		}
	}


	////////////////////////
	//Put them all together
	totaloptions = sizeoptions + trackingoptions + weightoptions + italicoptions + optoptions;

	if (options !== "false"){
		testeroptions = "\
			<div class='options row width" + elm + "'>" +
				totaloptions +
			"</div>"
	}

	typetester = "\
		<div class='container " + testerfit + "'>\
			<div class='type row' style='" + testerFont + testerSize + testerTracking + testerWeight + testerItalic + testerAlign + "''>\
				<span class='enterTXT' spellcheck='false' contenteditable>" + text + "</span>\
			</div>\
		</div>\
		" + testeroptions;
	typetesterFont = "<style></style>";

	$(theTester).append(typetester);
	$("body").append(typetesterFont);


	////////////////////////
	//ADD INTERACTIONS
	if (sizeoptions !== ""){

		$(".sizeSlider" + testerNumber).slider({
	      	orientation: "horizontal",
	      	range: "min",
	      	min: 15,
	      	max: 215,
	      	value: size,
	      	animate: true,
		    slide: function(event, ui) {
		        $(this).find( ".amount" ).text(ui.value + "px");
		        $(this).parent().parent().find( ".type" ).css("font-size", ui.value + "px");
		    },
		   	create: function( event, ui ) {
		        $(this).find( ".amount" ).text(size + "px");
		        $(this).parent().parent().find( ".type" ).css("font-size", size + "px");
		    }
		});
	}

	if (trackingoptions !== ""){
		$(".trackingSlider" + testerNumber).slider({
	      	orientation: "horizontal",
	      	range: "min",
	      	min: -10,
	      	max: 40,
	      	value: tracking,
	      	animate: true,
		    slide: function(event, ui) {
		        $(this).find( ".amount" ).text(ui.value + "px");
		        $(this).parent().parent().find( ".type" ).css("letter-spacing", ui.value + "px");
		    },
		   	create: function( event, ui ) {
		        $(this).find( ".amount" ).text(tracking + "px");
		        $(this).parent().parent().find( ".type" ).css("letter-spacing", tracking + "px");
		    }

	    });
	};

	if (weightoptions !== ""){
		$(".weightSlider" + testerNumber).slider({
	      	orientation: "horizontal",
	      	range: "min",
	      	min: 100,
	      	max: 900,
	      	step: 100,
	      	value: weight,
	      	animate: true,
		    slide: function(event, ui) {
		        $(this).find( ".amount" ).text(ui.value);
		        $(this).parent().parent().find( ".type" ).css("font-weight", ui.value);
		    },
		   	create: function( event, ui ) {
		        $(this).find( ".amount" ).text(weight);
		        $(this).parent().parent().find( ".type" ).css("font-weight", weight);
		    }
	    });
	};


	if (italicoptions !== ""){
		if ($(".italicButton" + testerNumber).parent().parent().find( ".type" ).css("font-style") == "italic"){
			$(".italicButton" + testerNumber).addClass("active");

		}
		$(".italicButton" + testerNumber).click(function(){
			$(this).toggleClass("active");
			if ($(this).hasClass("active")) {
		    	$(this).parent().parent().find( ".type" ).css("font-style", "italic");

			}else{
		    	$(this).parent().parent().find( ".type" ).css("font-style", "initial");

			};
	    });
	};


	if (opt !== ""){
		if ($.inArray(opt, no) >= 0){
			opt = "";
			return false;

		}else{
			$(theTester).find(".type").css("-moz-font-feature-settings", '"' + opt + '" 1');
			$(theTester).find(".type").css("-moz-font-feature-settings", '"' + opt + '"=1');
			$(theTester).find(".type").css("-ms-font-feature-settings", '"' + opt + '" 1');
			$(theTester).find(".type").css("-o-font-feature-settings", '"' + opt + '" 1');
			$(theTester).find(".type").css("-webkit-font-feature-settings", '"' + opt + '" 1');
			$(theTester).find(".type").css("font-feature-settings", '"' + opt + '" 1');
		}
		if (optoptions !== ""){
			if ($.inArray(optoptions, no) <= 0){
				$(theTester).find(".optButton").attr('active', opt);
				$(theTester).find("."+opt).addClass('active');
				$(theTester).find(".optButton").addClass('active');
				$(theTester).find(".optButton .label").addClass('active');
				$(theTester).find(".optButton .label").text( opt );
			}

		}

	}

	if (optoptions !== ""){
		$(".optButton" + testerNumber + " .label").click( function(){
			$(this).parent().toggleClass('open');

		});
		$(".optButton" + testerNumber + " .dropdown span").click( function(){
			optButton = $(this).parent().parent();
			if ($(this).hasClass("active")){
				optButton.attr('active', 'features');
				$(this).removeClass('active');
				optButton.removeClass('active');
				optButton.find(".label").removeClass('active');
				optButton.find(".label").text( optButton.attr('active') );

				$(theTester).find(".type").css("-moz-font-feature-settings", "inherit");
				$(theTester).find(".type").css("-ms-font-feature-settings", "inherit");
				$(theTester).find(".type").css("-o-font-feature-settings", "inherit");
				$(theTester).find(".type").css("-webkit-font-feature-settings", "inherit");
				$(theTester).find(".type").css("font-feature-settings", "inherit");
				return false;
			}
			$(this).parent().find("span").removeClass("active");
			optButton.attr('active', $(this).attr('class'));
			$(this).addClass('active');
			optButton.addClass('active');
			optButton.find(".label").addClass('active');
			optButton.find(".label").text( optButton.attr('active') );

			$(theTester).find(".type").css("-moz-font-feature-settings", '"' + optButton.attr('active') + '" 1');
			$(theTester).find(".type").css("-moz-font-feature-settings", '"' + optButton.attr('active') + '"=1');
			$(theTester).find(".type").css("-ms-font-feature-settings", '"' + optButton.attr('active') + '" 1');
			$(theTester).find(".type").css("-o-font-feature-settings", '"' + optButton.attr('active') + '" 1');
			$(theTester).find(".type").css("-webkit-font-feature-settings", '"' + optButton.attr('active') + '" 1');
			$(theTester).find(".type").css("font-feature-settings", '"' + optButton.attr('active') + '" 1');

		});

	};

}


////////////////////////
//LOAD
$( document ).ready(function() {

	$(".typeTester").each( function(i, e){
		testerTotal += 1;
	});
	$(".typeTester").each( function(i, e){
		typetester(e);
	});

	sized();

});
$(window).load(function() {
	$(".type").keyup(function(){
		sized();
	});
	sized();

}); // `~*# The end.

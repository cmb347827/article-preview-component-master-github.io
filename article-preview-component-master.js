

$(window).on('load',function(){
	    //on page resize, reload the page.
	    $(window).resize(function(){location.reload();});
	    // get .container class width 
		const width = $('.container').width();
		const colors = {
			'Very Dark Grayish Blue': 'hsl(217, 19%, 35%)',
			'Desaturated Dark Blue': 'hsl(214, 17%, 51%)', 
			'Grayish Blue': 'hsl(212, 23%, 69%)', 
			'Light Grayish Blue': 'hsl(210, 46%, 95%)', 
			'White': 'hsl(192, 15%, 99%)'
		};
		
		//ensure the .hide div is displayed on page refresh
		$('div.test .hide', window.parent.document).css('display','flex');
	    
		
		
		//'share' button is clicked.
	    $( "div.test .btn" ).on('click',function(event) {
		    //event.stopPropagation();
			
			if(width<= 375){
				//in mobile, set display:none for the .hide class so the .hide-show div can be displayed in full width 
				$('div.test .hide', window.parent.document).css('display','none');
				$('div.test .hide-show .arrow-down', window.parent.document).css('display','none');
			}
		    //display the .hide-show div (all the social media icons).
		    $('.hide-show').show('slow',function(){
				if(width<=375){
					     //set .hide-show div to full .container width.
			             $(this).css("width",'100%');
					     //move 'share' button to be on top of the share icon div
					     $('div.test .btn').css('margin-left','-12%');
					     $('div.test .btn').css('z-index','999');
						 //change the 'share' button background color when .hide-show is shown.
						 $('div.test .btn').css('background-color',colors['Grayish Blue']);
			    }
			    if(width > 375){
						 //change the 'share' button background color when .hide-show is shown.
					     $('div.test .btn').css('background-color',colors['Very Dark Grayish Blue']);
				}
				$('div.test .btn svg path').css('fill',colors['White']);
				$(this).hover(function(){
						    //change the background color for the .hide-show div on hover.
                            $(this).css("background-color", colors['Desaturated Dark Blue']);
							//and also change the background color for the down arrow in desktop view to be the same color
							if(width>375){
								$('div.test .hide-show .arrow-down').css('border-top','20px solid hsl(214, 17%, 51%)');
							}
                }, function(){
						    //hide the .hide-show div again when the user no longer hovers over it
					        $(this).hide();
							//ensure the .hide-show div has the correct background-color again (reset) in case user clicks share button again
							$(this).css("background-color", colors['Very Dark Grayish Blue']);
							//reset the 'share' button margin 
							$('div.test .btn').css('margin','0');
							//reset the 'share' button colors
							$('div.test .btn').css('background-color',colors['Light Grayish Blue']);
					        $('div.test .btn svg path').css('fill', colors['Desaturated Dark Blue']);
							//show the hidden .hide div again.
							if(width < 375){
								$('div.test .hide').show();
							}
							
                });
		  });
       });
	
});
 
	  

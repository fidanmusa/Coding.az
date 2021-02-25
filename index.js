




//*******Cursor********/
    
    const cursor = document.querySelector('.cursor');
    
    function onBodyMouseMove(e) {
      cursor.setAttribute("style",
			`top: ${e.pageY}px;left:${e.pageX}px`
			)
    };

    document.body.addEventListener('mousemove', onBodyMouseMove);
    
    
		
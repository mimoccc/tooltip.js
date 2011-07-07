/****************************************************
	100% Cross-Browser Javascript Tooltip
	Plugin with adjustable width and height 
****************************************************/

var jsTooltip = function(){
	
	var _thisTooltip;//current instance of the tooltip
	
	var id = '_thisTooltip', top = -135, left = 18, maxw = 300, speed = 10, 
		timer = 20, endalpha = 95, alpha = 0, t,c,b,h;
	
	var ie = document.all ? true:false;
	
	return{
		
		//Dynamically create DOM elements that make up
		//all the tooltip components.
		show:function(v,w){
			if(_thisTooltip == undefined){
				_thisTooltip = document.createElement('div');
				_thisTooltip.setAttribute('id',id);
				
				t = document.createElement('div');
				t.setAttribute('id',id+'top');
				
				c = document.createElement('div');
				c.setAttribute('id',id+'cont');
				
				b = document.createElement('div');
				b.setAttribute('id',id+'bot');
				
				_thisTooltip.appendChild(t);
				_thisTooltip.appendChild(c);
				_thisTooltip.appendChild(b);
				_thisTooltip.style.opacity = 0;
				_thisTooltip.style.filter = 'alpha(opacity=0)';
				
				document.body.appendChild(_thisTooltip);
				document.onmousemove = this.pos;
			}
			_thisTooltip.style.display = 'block';
		    c.innerHTML = v;
		    _thisTooltip.style.width = w ? w + 'px' : 'auto';
		    if(!w){
				_thisTooltip.style.width = _thisTooltip.offsetWidth;
				t.style.display = 'block';
				b.style.display = 'block';
		    }
		    if(_thisTooltip.offsetWidth > maxw){
				_thisTooltip.style.width = maxw + 'px'
			}
			h = parseInt(_thisTooltip.offsetHeight) + top;
			clearInterval(_thisTooltip.timer);
			_thisTooltip.timer = setInterval(function(){tooltip.fade(1)},timer);
	   	},
		
		//Get the current mouse position
		pos:function(e){
			var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
			var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
			_thisTooltip.style.top = (u - h) + 'px';
			_thisTooltip.style.left = (l + left) + 'px';
		},
		
		//Create a fading effect for the tooltip
		fade:function(d){
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
			    if(endalpha - a < speed && d == 1)
				{
					i = endalpha - a;
			    }
				else if(alpha < speed && d == -1)
				{
					i = a;
			    }
			    alpha = a + (i * d);
			    _thisTooltip.style.opacity = alpha * .01;
			    _thisTooltip.style.filter = 'alpha(opacity=' + alpha + ')';
			}
			else{
				clearInterval(_thisTooltip.timer);
				if(d == -1)
					_thisTooltip.style.display = 'none'
			}
		},
		
		//Hide the tooltip slowly by fading it out
		hide:function(){
			clearInterval(_thisTooltip.timer);
			_thisTooltip.timer = setInterval(function(){tooltip.fade(-1)},timer);
	    }
	};
}();
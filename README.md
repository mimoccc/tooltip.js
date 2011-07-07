<h3>Cross-browser javascript tooltip plugin</h3>
--------------------------------------------------

<p>jsTooltip is attached to the onmouseover event handler attribute of a
particular HTML element. It takes two parameters; its text content and its width</p>

How to use it:

<pre> 
     &lt;!--tooltip shows up when there is a mouseover event on the image-->

     &lt;a href="#" 
	     onmouseover="jsTooltip.show('This is a picture of a tree',200)"
	     onmouseout="jsTooltip.hide()">
     &lt;img src="images/tree.png" />
     &lt;/a>  
</pre> 
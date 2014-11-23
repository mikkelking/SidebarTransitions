jQuery Loading Effects
=========

A bootstrap compatible jQuery plugin for off-canvas navigations and sidebar transition effects.
Inspiered to [Codrops article](http://tympanus.net/codrops/?p=16292)


Setup
------
```html
<head>
   ...
   <link rel="stylesheet" type="text/css" href="css/offcanvasSidebar.css" />
   <script src="js/modernizr.js"></script>
   <script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/jquery.offcanvasSidebar.js"></script>
</head>
```
or
```html
<head>
   ...
   <link rel="stylesheet" type="text/css" href="css/offcanvasSidebar.css" />
   <script src="js/jquery-1.11.1.min.js"></script>
   <script src="js/jquery.offcanvasSidebar.bundle.min.js"></script>
</head>
```


Usage
--------
* Markup
```html
<div class="offcanvas-container offcanvas-EFFECT_NAME">

	<nav class="offcanvas-menu">
		<h2>...</h2>
		<ul>
			<li><a href="#">...</a></li>
		</ul>
	</nav>
	

	<div class="offcanvas-pusher">
		<div class="offcanvas-content">
			<div class="offcanvas-content-inner">

			</div>
		</div>
	</div>
</div>
```
* js
```js
$('.offcanvas-container').offcanvasSidebar('open');
$('.offcanvas-container').offcanvasSidebar('close');
$('.offcanvas-container').offcanvasSidebar('toggle');
```


Effects
-------
| Class         | Effect        | 
| ------------- |:-------------:|
|offcanvas-slide-in-top|Slide in on top|
|offcanvas-reveal|Reveal|
|offcanvas-push|Push|
|offcanvas-slide-along|Slide along|
|offcanvas-reverse-slide-out|Reverse slide out|
|offcanvas-rotate-pusher|Rotate pusher|
|offcanvas-3D-rotate-in|3D rotate in|
|offcanvas-3D-rotate-out|3D rotate out|
|offcanvas-scale-down-pusher|Scale down pusher|
|offcanvas-scale-up|Scale Up|
|offcanvas-scale-rotate-pusher|Scale &amp; rotate pusher|
|offcanvas-open-door|Open door|
|offcanvas-fall-down|Fall down|
|offcanvas-delayed-3D-rotate|Delayed 3D Rotate|

Events
-------
```js
$('.offcanvas-container').on('offcanvasSidebar.close', function(){ 
	console.log('open');
});

$('.offcanvas-container').on('offcanvasSidebar.close', function(){ 
	console.log('close');
});
```


Thanks
==========
[Article on Codrops](http://tympanus.net/codrops/?p=18880)


SCSS Sidebar Transitions
=========

USAGE
======

Some inspiration for transition effects for off-canvas navigations.

[article on Codrops](http://tympanus.net/codrops/?p=16292)

[demo](http://tympanus.net/Development/SidebarTransitions/)

[LICENSING & TERMS OF USE](http://tympanus.net/codrops/licensing/)
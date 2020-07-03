<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="https://use.typekit.net/gyv3hod.css">
	<link rel="stylesheet" href="/css/universal.css?v=1.1">
	<link rel="stylesheet" href="<?php perch_page_attribute('css', array('template' => 'bits.html')) ;?>?v=1.1">
	<!-- Perch Meta -->
	<?php
	$domain        = 'https://'.$_SERVER["HTTP_HOST"];
	$mainurl           = perch_page_url(array(
										    'hide-extensions'    => true,
										    'hide-default-doc'   => true,
										    'add-trailing-slash' => false,
										    'include-domain'     => true,
										), true);
	$mainsitename      = "Kasper Zak";
	$pagetitlename = " - Kasper Zak";
	$sharing_image = '/images/default_fb_image.jpg';

	PerchSystem::set_var('domain',$domain);
	PerchSystem::set_var('mainurl',$mainurl);
	PerchSystem::set_var('mainsitename',$mainsitename);
	PerchSystem::set_var('pagetitlename',$pagetitlename);
	PerchSystem::set_var('sharing_image',$sharing_image);

	perch_page_attributes(array(
		'template' => 'default.html'
	));
	?>
<!-- Google Analytics -->
<?php perch_content('Analytics'); ?>

<!-- Cookie Consent -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
	<script>
	window.addEventListener("load", function(){
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#000"
			},
			"button": {
				"background": "transparent",
				"text": "#fff",
				"border": "#fff"
			}
		},
		"content": {
			"href": "/privacy-and-cookie-policy"
		}
	})});
	</script>

</head>
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'bits.html' )); ?>">
				<div id="vue-wrapper" class="site-wrapper" :class="{'hide-outline': outlineHide}" @keydown.9="outlineHide = false" itemscope itemtype="http://schema.org/LocalBusiness">
			<header class="main-header">
				<!-- Skip to main content link  -->
				<a class="show-on-focus"  href="#main-content">Skip to main content</a>

				<div class="header-inner-wrapper">
					<?php perch_content("Main Logo"); ?>
						<?php perch_pages_navigation(array(
								'hide-extensions' => true,
						)); ?>
				</div>

			</header>

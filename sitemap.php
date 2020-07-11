<?php
 header('Content-type: application/xml');
 include('perch/runtime.php');
 echo '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
perch_pages_navigation(array(
     'template' => 'sitemap.html',
     'add-trailing-slash' => true,
     'flat' => true,
     'hide-extensions' => true
 ));
perch_pages_navigation(array(
     'navgroup' =>'secondary-links',
     'template' => 'secondary-links-sitemap.html',
     'add-trailing-slash' => true,
     'flat' => true,
     'hide-extensions' => true
 ));
 echo '</urlset>';
 ?>
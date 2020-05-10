<?php include('perch/runtime.php'); ?>
<?php perch_layout('invisible-header'); ?>
<main class="main-content films-main-content" id="main-content">
	<section>
	  <?php perch_content('Films Page Videos'); ?>
	</section>
</main>
<?php perch_layout('films-footer'); ?>
<?php PerchUtil::output_debug(); ?>

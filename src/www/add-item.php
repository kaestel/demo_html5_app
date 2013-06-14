<?php $body_class = "camera" ?>
<?php $page_description = "Upload image" ?>
<?php $page_title = "Upload image" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene i:content">

	<form action="#" method="post">
		<fieldset>

			<div class="field string required">
				<label for="data_file_id">File</label>
				<input type="file" id="data_file_id" name="data_file" />
			</div>

			<ul class="actions">
				<li class="submit"><input class="button submit" type="submit" value="Upload"></li>
			</ul>

		</fieldset>
	</form>

</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

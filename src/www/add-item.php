<?php $body_class = "additem" ?>
<?php $page_description = "Add item" ?>
<?php $page_title = "Add item" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>


<div class="scene i:additem">
	
	<ul>
		<li>
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
			
		</li>
	</ul>



</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

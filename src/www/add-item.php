<?php $body_class = "additem" ?>
<?php $page_description = "Add item" ?>
<?php $page_title = "Add item" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>


<div class="scene additem i:additem">

	<h1>Add item</h1>
	<ul class="uploads">
		<li>
			<form action="#" method="post">
				<fieldset>

					<div class="field string required">
						<label for="data_file_id_1">File</label>
						<input type="file" id="data_file_id_1" name="data_file" />
					</div>

					<ul class="actions">
						<li class="submit"><input class="button submit" type="submit" value="Upload"></li>
					</ul>

				</fieldset>
			</form>
		</li>
		<li>
			<form action="#" method="post">
				<fieldset>

					<div class="field string required">
						<label for="data_file_id_2">File</label>
						<input type="file" id="data_file_id_2" name="data_file" />
					</div>

					<ul class="actions">
						<li class="submit"><input class="button submit" type="submit" value="Upload"></li>
					</ul>

				</fieldset>
			</form>
		</li>
		<li>
			<form action="#" method="post">
				<fieldset>

					<div class="field string required">
						<label for="data_file_id_3">File</label>
						<input type="file" id="data_file_id_3" name="data_file" />
					</div>

					<ul class="actions">
						<li class="submit"><input class="button submit" type="submit" value="Upload"></li>
					</ul>

				</fieldset>
			</form>
		</li>
		<li>
			<form action="#" method="post">
				<fieldset>

					<div class="field string required">
						<label for="data_file_id_4">File</label>
						<input type="file" id="data_file_id_3" name="data_file" />
					</div>

					<ul class="actions">
						<li class="submit"><input class="button submit" type="submit" value="Upload"></li>
					</ul>

				</fieldset>
			</form>
		</li>

	</ul>

	<ul class="actions">
		<li class="upload"><a href="/">Upload</a></li>
	</ul>

</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

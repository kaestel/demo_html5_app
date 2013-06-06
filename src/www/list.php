<?php $body_class = "list" ?>
<?php $page_description = "This is the list" ?>
<?php $page_title = "HTML5 Demo" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene">
	<h1>List</h1>
	<ul class="productlist i:productlist">
		<li class="product">
			<h2><a href="/produkter/deodorant">Deodorant for smelly armpits</a></h2>
			<div class="description">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat</p>
			</div>
			<div class="published_at">May 26th 2013</div>
			<p class="price">88,-</p>
		</li>
		<li class="product">
			<h2><a href="/produkter/cokementoskit">Diet Coke and Mentos Kit</a></h2>
			<div class="description">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat</p>
			</div>
			<div class="published_at">April 3rd 2013</div>
			<p class="price">132,-</p>
		</li>
		<li class="product">
			<h2><a href="/produkter/cupholderhat">Cup holder hat</a></h2>
			<div class="description">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat</p>
			</div>
			<div class="published_at">April 22nd 2013</div>
			<p class="price">200,-</p>
		</li>
	</ul>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
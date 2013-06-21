<?php $body_class = "productlist" ?>
<?php $page_description = "This is the list" ?>
<?php $page_title = "Your items" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene productlist i:productlist">

	<h1>List</h1>
	<ul class="productlist">
		<li class="product id:gram1" itemscope itemtype="http://schema.org/Product">
			
			<h2 itemprop="name"><a href="/gram">Gram 380g Shoe</a></h2>
			
			<div class="info">
				<dl>
					<dt class="published_at"></dt>
					<dd class="published_at" itemprop="releaseDate">April 22nd 2013</dd>
				</dl>
			</div>
			
			<div class="description" itemprop="description">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat</p>
			</div>
			
			<div class="offer" itemscope itemtype="http://schema.org/Offer">
				<dl>
					<dt class="price">Price</dt>
					<dd class="price" itemprop="offers">1799</dd>
				</dl>
			</div>
		</li>
	</ul>

</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

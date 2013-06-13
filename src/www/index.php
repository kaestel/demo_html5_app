<?php $body_class = "list" ?>
<?php $page_description = "This is the list" ?>
<?php $page_title = "HTML5 Demo" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene i:content">
	<h1>List</h1>
	<ul class="productlist i:productlist">
		<li class="product" itemscope itemtype="http://schema.org/Product">
			<div class="shadowbox">
			<h2 itemprop="name"><a href="/pointer">Pointer Underachiever</a></h2>
				<div class="description" itemprop="description">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat</p>
				</div>
			</div>
			<div class="published_at" itemprop="releaseDate">May 26th 2013</div>
			<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
				<p class="price" itemprop="price">1299</p>
			</div>
		</li>
		<li class="product" itemscope itemtype="http://schema.org/Product">
			<div class="shadowbox">
				<h2 itemprop="name"><a href="/airmax">Nike Air Max</a></h2>
				<div class="description" itemprop="description">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat</p>
				</div>
			</div>
			<div class="published_at" itemprop="releaseDate">April 3rd 2013</div>
			<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
				<p class="price" itemprop="price">2049</p>
			</div>

		</li>
		<li class="product" itemscope itemtype="http://schema.org/Product">
			<div class="shadowbox">
				<h2 itemprop="name"><a href="/gram">Gram 380g Shoe</a></h2>
				<div class="description" itemprop="description">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat</p>
				</div>
			</div>
			<div class="published_at" itemprop="releaseDate">April 22nd 2013</div>
			<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
				<p class="price" itemprop="price">1799</p>
			</div>

		</li>
	</ul>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
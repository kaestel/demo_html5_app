<?php $body_class = "productlist" ?>
<?php $page_description = "This is the list" ?>
<?php $page_title = "HTML5 Demo" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene productlist i:productlist">

	<h1>All items</h1>
	<ul class="productlist">

		<li class="product id:mikehair1" itemscope itemtype="http://schema.org/Product">

			<h2 itemprop="name"><a href="/mikehair">Mike Hair Relax</a></h2>
			<div class="info">
				<dl>
					<dt class="published_at"></dt>
					<dd class="published_at" itemprop="releaseDate">April 3rd 2013</dd>
				</dl>
			</div>

			<div class="description" itemprop="description">
				<p>
					The shampoo-deposit-heel-shoe of the future. This shoe brings meaning to exercise. Finally.
				 </p>
			</div>

			<div class="offer" itemscope itemtype="http://schema.org/Offer">
				<dl>
					<dt class="price">Price</dt>
					<dd class="price" itemprop="offers">2049</dd>
				</dl>
			</div>

		</li>
		<li class="product id:pointy1" itemscope itemtype="http://schema.org/Product">

			<h2 itemprop="name"><a href="/pointy">Pointy 2D</a></h2>
			<div class="info">
				<dl>
					<dt class="published_at"></dt>
					<dd class="published_at" itemprop="releaseDate">May 26th 2013</dd>
				</dl>
			</div>

			<div class="description" itemprop="description">
				<p>
					Shoey and pointy at the same time. It hardly gets any better.
				</p>
			</div>

			<div class="offer" itemscope itemtype="http://schema.org/Offer">
				<dl>
					<dt class="price">Price</dt>
					<dd class="price" itemprop="offers">299</dd>
				</dl>
			</div>

		</li>
		<li class="product id:cookshoe1" itemscope itemtype="http://schema.org/Product">

			<h2 itemprop="name"><a href="/cookshoe">The Cooking Shoe</a></h2>
			<div class="info">
				<dl>
					<dt class="published_at"></dt>
					<dd class="published_at" itemprop="releaseDate">April 22nd 2013</dd>
				</dl>
			</div>

			<div class="description" itemprop="description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat
				</p>
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
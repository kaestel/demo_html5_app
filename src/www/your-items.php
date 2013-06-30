<?php $body_class = "productlist" ?>
<?php $page_description = "This is the list" ?>
<?php $page_title = "Your items" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene productlist i:productlist">

	<h1>Your items</h1>
	<ul class="productlist">
		<li class="product id:newis21" itemscope itemtype="http://schema.org/Product">

			<h2 itemprop="name"><a href="/newis">New is overrated</a></h2>

			<div class="info">
				<dl>
					<dt class="published_at"></dt>
					<dd class="published_at" itemprop="releaseDate">April 22nd 2013</dd>
				</dl>
			</div>

			<div class="description" itemprop="description">
				<p>
					Old shoe in actual 3D - check out the classic 3D concept for a brand new shoe experience.
				</p>
			</div>

			<div class="offer" itemscope itemtype="http://schema.org/Offer">
				<dl>
					<dt class="price">Price</dt>
					<dd class="price" itemprop="offers">399</dd>
				</dl>
			</div>
		</li>
	</ul>

</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

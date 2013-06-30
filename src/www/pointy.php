<?php $body_class = "productview" ?>
<?php $page_description = "This is the Pointer Underachiever" ?>
<?php $page_title = "Pointer Underachiever" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene productview i:productview">

	<div class="product" itemscope itemtype="http://schema.org/Product">

		<h1 itemprop="name">Pointy 2D</h1>

		<div class="info">
			<dl>
				<dt class="published_at"></dt>
				<dd class="published_at" itemprop="releaseDate">April 22nd 2013</dd>
			</dl>
		</div>

		<div class="description" itemprop="description">
			<h2>About</h2>
			<p>
				This shoe has everything - shoe-look, shoe-shape, shoe-weight and shoe-smell. Only downside to this perfectly beautiful 
				shoe is that it only exist in a 2D universe. It has been known to cause minimal annoyance in cold wheather.
			</p>
		</div>

		<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<dl>
				<dt class="price">Price</dt>
				<dd class="price" itemprop="price">1299</dd>
			</dl>

			<form action="/cart" class="buy" method="post">
				<ul class="actions">
					<li class="buy"><input class="button primary" name="commit" type="submit" value="Add to cart" /></li>
				</ul>
			</form>
		</div>

		<div class="images">
			<ul class="thumbnails">
				<li class="id:pointy2"><a href="/images/pointy2/250x.png">Pointy 2D, Left</a></li>
				<li class="id:pointy1"><a href="/images/pointy1/250x.png">Pointy 2D, Front</a></li>
				<li class="id:pointy3"><a href="/images/pointy3/250x.png">Pointy 2D, Right</a></li>
				<li class="id:pointy4"><a href="/images/pointy4/250x.png">Pointy 2D, Back</a></li>
			</ul>
		</div>

		
		<div class="map">
			<h2><a href="#">Buy it here</a></h2>
		</div>

	</div>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
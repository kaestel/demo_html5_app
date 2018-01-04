<?php $body_class = "productview" ?>
<?php $page_description = "This is the Gram 380g Shoe" ?>
<?php $page_title = "Gram 380g Shoe" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene productview i:productview">

	<div class="product" itemscope itemtype="http://schema.org/Product">

		<h1 itemprop="name">The Cooking Shoe</h1>
		<div class="info">
			<dl>
				<dt class="published_at"></dt>
				<dd class="published_at" itemprop="releaseDate">May 26th 2013</dd>
			</dl>
		</div>

		<div class="description" itemprop="description">
			<h2>About</h2>
			<p>
				A weightless heavyweight on the cooking/shoeing scene. Gives you that soft compfy feeling of a warm embrace and
				eliminates smelly feet completely. Dual effect from leftover sauces. Bring you crow and you cookingshoe next time 
				you visit the princess.
			</p>
		</div>

		<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<dl>
				<dt class="price">Price</dt>
				<dd class="price" itemprop="price">299</dd>
			</dl>

			<form action="/cart" class="buy" method="post">
				<ul class="actions">
					<li class="buy"><input class="button primary" name="commit" type="submit" value="Add to cart" /></li>
				</ul>
			</form>
		</div>

		<div class="images">
			<ul class="thumbnails">
				<li class="id:cookshoe2"><a href="/images/cookshoe2/480x.png">The Cooking Shoe, Left</a></li>
				<li class="id:cookshoe1"><a href="/images/cookshoe1/480x.png">The Cooking Shoe, Front</a></li>
				<li class="id:cookshoe3"><a href="/images/cookshoe3/480x.png">The Cooking Shoe, Right</a></li>
				<li class="id:cookshoe4"><a href="/images/cookshoe4/480x.png">The Cooking Shoe, Back</a></li>
			</ul>
		</div>

		<div class="map">
			<h2><a href="#">Buy it here</a></h2>
		</div>

	</div>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

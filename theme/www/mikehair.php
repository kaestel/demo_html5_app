<?php $body_class = "productview" ?>
<?php $page_description = "This is the Mike Hair Relax" ?>
<?php $page_title = "Mike Hair Relax" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>


<div class="scene productview i:productview">

	<div class="product" itemscope itemtype="http://schema.org/Product">

		<h1 itemprop="name">Mike Hair Relax</h1>

		<div class="info">
			<dl>
				<dt class="published_at"></dt>
				<dd class="published_at" itemprop="releaseDate">April 3rd 2013</dd>
			</dl>
		</div>

		<div class="description" itemprop="description">
			<h2>About</h2>
			<p>
				This is the new Mike Hair relax - shoe and shampoo in one odor packed bundle. Comes with shampoo deposit in heel, 
				which automatically refills using the unique and patented food-juice converter. Only produced in limited quantity
				 - get yours NOW!
			</p>
		</div>

		<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<dl>
				<dt class="price">Price</dt>
				<dd class="price" itemprop="price">2049</dd>
			</dl>

			<form action="/cart" class="buy" method="post">
				<ul class="actions">
					<li class="buy"><input class="button primary" name="commit" type="submit" value="Add to cart" /></li>
				</ul>
			</form>
		</div>

		<div class="images">
			<ul class="thumbnails">
				<li class="id:mikehair2"><a href="/images/mikehair2/480x.png">Mike Hair Relax, Left</a></li>
				<li class="id:mikehair1"><a href="/images/mikehair1/480x.png">Mike Hair Relax, Front</a></li>
				<li class="id:mikehair3"><a href="/images/mikehair3/480x.png">Mike Hair Relax, Right</a></li>
				<li class="id:mikehair4"><a href="/images/mikehair4/480x.png">Mike Hair Relax, Back</a></li>
			</ul>
		</div>

		<div class="map">
			<h2><a href="#">Buy it here</a></h2>
		</div>

	</div>
</div>


<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
<?php $body_class = "productview" ?>
<?php $page_description = "This is the New is overrated" ?>
<?php $page_title = "New is overrated" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>


<div class="scene productview i:productview">

	<div class="product" itemscope itemtype="http://schema.org/Product">

		<h1 itemprop="name">New is overrated</h1>

		<div class="info">
			<dl>
				<dt class="published_at"></dt>
				<dd class="published_at" itemprop="releaseDate">April 3rd 2013</dd>
			</dl>
		</div>

		<div class="description" itemprop="description">
			<h2>About</h2>
			<p>
				New is overrated!
			</p>
		</div>

		<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<dl>
				<dt class="price">Price</dt>
				<dd class="price" itemprop="price">449</dd>
			</dl>

			<form action="/cart" class="buy" method="post">
				<ul class="actions">
					<li class="buy"><input class="button primary" name="commit" type="submit" value="Add to cart" /></li>
				</ul>
			</form>
		</div>

		<div class="images">
			<ul class="sequence">
				<li class="id:newis2"><a href="/images/newis2/250x.png">New is overrated, Left</a></li>
				<li class="id:newis1"><a href="/images/newis1/250x.png">New is overrated, Front</a></li>
				<li class="id:newis3"><a href="/images/newis3/250x.png">New is overrated, Right</a></li>
				<li class="id:newis4"><a href="/images/newis4/250x.png">New is overrated, Back</a></li>
			</ul>
		</div>

		
		<div class="map">
			<h2><a href="#">Buy it here</a></h2>
		</div>

	</div>
</div>


<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
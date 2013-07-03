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
				New is overrated! Old is not even rated. But it's 3D and that really counts in the shoebusiness. Take it for a spin.
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
				<li class="id:newis1"><a href="/images/newis1/250x.png">New is overrated (1/20)</a></li>
				<li class="id:newis2"><a href="/images/newis2/250x.png">New is overrated (2/20)</a></li>
				<li class="id:newis3"><a href="/images/newis3/250x.png">New is overrated (3/20)</a></li>
				<li class="id:newis4"><a href="/images/newis4/250x.png">New is overrated (4/20)</a></li>
				<li class="id:newis5"><a href="/images/newis5/250x.png">New is overrated (5/20)</a></li>
				<li class="id:newis6"><a href="/images/newis6/250x.png">New is overrated (6/20)</a></li>
				<li class="id:newis7"><a href="/images/newis7/250x.png">New is overrated (7/20)</a></li>
				<li class="id:newis8"><a href="/images/newis8/250x.png">New is overrated (8/20)</a></li>
				<li class="id:newis9"><a href="/images/newis9/250x.png">New is overrated (9/20)</a></li>
				<li class="id:newis10"><a href="/images/newis10/250x.png">New is overrated (10/20)</a></li>
				<li class="id:newis11"><a href="/images/newis11/250x.png">New is overrated (11/20)</a></li>
				<li class="id:newis12"><a href="/images/newis12/250x.png">New is overrated (12/20)</a></li>
				<li class="id:newis13"><a href="/images/newis13/250x.png">New is overrated (13/20)</a></li>
				<li class="id:newis14"><a href="/images/newis14/250x.png">New is overrated (14/20)</a></li>
				<li class="id:newis15"><a href="/images/newis15/250x.png">New is overrated (15/20)</a></li>
				<li class="id:newis16"><a href="/images/newis16/250x.png">New is overrated (16/20)</a></li>
				<li class="id:newis17"><a href="/images/newis17/250x.png">New is overrated (17/20)</a></li>
				<li class="id:newis18"><a href="/images/newis18/250x.png">New is overrated (18/20)</a></li>
				<li class="id:newis19"><a href="/images/newis19/250x.png">New is overrated (19/20)</a></li>
				<!--li class="id:newis20"><a href="/images/newis20/250x.png">New is overrated (20/20)</a></li-->
			</ul>
		</div>

		<div class="map">
			<h2><a href="#">Buy it here</a></h2>
		</div>

	</div>
</div>


<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
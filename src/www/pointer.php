<?php $body_class = "productview" ?>
<?php $page_description = "This is the Pointer Underachiever" ?>
<?php $page_title = "Pointer Underachiever" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene productview i:productview">

	<div class="product" itemscope itemtype="http://schema.org/Product">

		<h1 itemprop="name">Pointer Underachiever</h1>

		<div class="info">
			<dl>
				<dt class="published_at"></dt>
				<dd class="published_at" itemprop="releaseDate">April 22nd 2013</dd>
			</dl>
		</div>

		<div class="description" itemprop="description">
			<h2>About</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat, arcu nec suscipit molestie, ante dolor posuere massa, non imperdiet nunc neque vitae mi. Cras lectus dolor, malesuada sed commodo eget, dignissim sit amet justo. Phasellus consequat suscipit pharetra. Duis dignissim ultricies erat ut cursus. Aenean viverra ornare rutrum. In tempor iaculis orci, a convallis neque vulputate non. Morbi vel purus ut nisl egestas semper. Praesent vitae purus nec felis laoreet consectetur non a turpis. Morbi congue tincidunt bibendum. Nam lorem est, sollicitudin ac suscipit ut, gravida in erat. Nulla libero erat, adipiscing ac scelerisque vitae, porttitor et lorem. Integer et augue vel tortor tempor condimentum vitae in velit. 
			</p>
		</div>

		<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<dl>
				<dt class="price">Price</dt>
				<dd class="price" itemprop="price">1299</dd>
			</dl>

			<form action="/kurv" class="buy" method="post">
				<ul class="actions">
					<li class="buy"><input class="button primary" name="commit" type="submit" value="Add to cart" /></li>
				</ul>
			</form>
		</div>

		<div class="images">
			<ul class="thumbnails">
				<li class="id:pointer1"><a href="/images/pointer1/250x.png">Pointer Underachiever Front</a></li>
				<li class="id:pointer2"><a href="/images/pointer2/250x.png">Pointer Underachiever Left</a></li>
				<li class="id:pointer3"><a href="/images/pointer3/250x.png">Pointer Underachiever Right</a></li>
				<li class="id:pointer4"><a href="/images/pointer4/250x.png">Pointer Underachiever Back</a></li>
				<li class="id:pointer5"><a href="/images/pointer5/250x.png">Pointer Underachiever Top</a></li>
			</ul>
		</div>

		
		<div class="map">
			<h2><a href="#">Buy it here</a></h2>
		</div>

	</div>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
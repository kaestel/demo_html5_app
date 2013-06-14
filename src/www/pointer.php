<?php $body_class = "product" ?>
<?php $page_description = "This is the Pointer Underachiever" ?>
<?php $page_title = "Pointer Underachiever" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene i:productview">

	<div class="product" itemscope itemtype="http://schema.org/Product">
		<div class="images">
			<ul class="thumbnails">
				<li class="id:pointer1">
					<a href="/images/pointer1/250x.jpg">Pointer Underachiever</a>
				</li>
				<li class="id:pointer2">
					<a href="/images/pointer2/250x.jpg">Pointer Underachiever</a>
				</li>
				<li class="id:pointer3">
					<a href="/images/pointer3/250x.jpg">Pointer Underachiever</a>
				</li>
				<li class="id:pointer4">
					<a href="/images/pointer4/250x.jpg">Pointer Underachiever</a>
				</li>
				<li class="id:pointer5">
					<a href="/images/pointer5/250x.jpg">Pointer Underachiever</a>
				</li>				
			</ul>
		</div>
		
		<h1 class="title" itemprop="name">Pointer Underachiever</h1>
		
		<div class="details">
			<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<p class="price" itemprop="price">1299</p>
			<form action="/kurv" class="simple_form buy" method="post">
				<ul class="actions">
					<li class="buy"><input class="button primary buy" name="commit" type="submit" value="Add to cart" /></li>
				</ul>
			</form>
		</div>
		
		<div class="description" itemprop="description">
			<h2>About</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat, arcu nec suscipit molestie, ante dolor posuere massa, non imperdiet nunc neque vitae mi. Cras lectus dolor, malesuada sed commodo eget, dignissim sit amet justo. Phasellus consequat suscipit pharetra. Duis dignissim ultricies erat ut cursus. Aenean viverra ornare rutrum. In tempor iaculis orci, a convallis neque vulputate non. Morbi vel purus ut nisl egestas semper. Praesent vitae purus nec felis laoreet consectetur non a turpis. Morbi congue tincidunt bibendum. Nam lorem est, sollicitudin ac suscipit ut, gravida in erat. Nulla libero erat, adipiscing ac scelerisque vitae, porttitor et lorem. Integer et augue vel tortor tempor condimentum vitae in velit. 
			</p>
		</div>
		
		<div class="map">
			<h2>Buy it here</h2>
			<div class="area"></div>
		</div>
	</div>

</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
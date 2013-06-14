<?php $body_class = "product" ?>
<?php $page_description = "This is the Gram 380g Shoe" ?>
<?php $page_title = "Gram 380g Shoe" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene i:content">

	<div class="product i:productview" itemscope itemtype="http://schema.org/Product">
		<h1 class="title" itemprop="name">Gram 380g Shoe</h1>
		<div class="images">
			<ul class="thumbnails">
				<li class="id:gram1">
					<a href="/images/gram1/250x.png">Gram 380g Shoe</a>
				</li>
				<li class="id:gram2">
					<a href="/images/gram2/250x.png">Gram 380g Shoe</a>
				</li>
				<li class="id:gram3">
					<a href="/images/gram3/250x.png">Gram 380g Shoe</a>
				</li>
				<li class="id:gram4">
					<a href="/images/gram4/250x.png">Gram 380g Shoe</a>
				</li>				
			</ul>
		</div>
		
		<div class="details">
			<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<p class="price" itemprop="price">1799</p>
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

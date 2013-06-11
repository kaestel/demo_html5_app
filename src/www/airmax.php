<?php $body_class = "product" ?>
<?php $page_description = "This is the Nike Air Max" ?>
<?php $page_title = "Nike Air Max" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene">
	<div class="product i:productview" itemscope itemtype="http://schema.org/Product">
		<h1 class="title" itemprop="name">Nike Air Max</h1>
		<div class="images">
			<ul class="thumbnails">
				<li class="id:air_max1">
					<a href="/images/air_max1/250x.png">Nike Air Max</a>
				</li>
				<li class="id:air_max2">
					<a href="/images/air_max2/250x.png">Nike Air Max</a>
				</li>
				<li class="id:air_max3">
					<a href="/images/air_max3/250x.png">Nike Air Max</a>
				</li>
				<li class="id:air_max4">
					<a href="/images/air_max4/250x.png">Nike Air Max</a>
				</li>				
			</ul>
		</div>
		
		<div class="details">
			<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<p class="price" itemprop="price">2049</p>
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
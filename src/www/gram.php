<?php $body_class = "product" ?>
<?php $page_description = "This is the deodorant" ?>
<?php $page_title = "HTML5 Demo" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene">
	<h1>Deodorant for smelly armpits</h1>
	<div class="product i:productview" itemscope itemtype="http://schema.org/Product">
		<div class="images">
			<ul class="thumbnails">
				<li class="id:1">
					<a href="/images/1/250x.png">Deodorant for smelly armpits</a>
				</li>
				<li class="id:2">
					<a href="/images/2/250x.png">Deodorant for smelly armpits</a>
				</li>
				<li class="id:3">
					<a href="/images/3/250x.png">Deodorant for smelly armpits</a>
				</li>
			</ul>
		</div>
		
		<div class="details">
			<h1 class="title" itemprop="name">Deodorant for smelly armpits</h1>
			<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
				<p class="price" itemprop="price">88,-</p>
				<form action="/kurv" class="simple_form buy" method="post">
					<ul class="actions">
						<li class="buy"><input class="button primary buy" name="commit" type="submit" value="buy" /></li>
					</ul>
				</form>
			</div>
		</div>
		
		<div class="description" itemprop="description">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat, arcu nec suscipit molestie, ante dolor posuere massa, non imperdiet nunc neque vitae mi. Cras lectus dolor, malesuada sed commodo eget, dignissim sit amet justo. Phasellus consequat suscipit pharetra. Duis dignissim ultricies erat ut cursus. Aenean viverra ornare rutrum. In tempor iaculis orci, a convallis neque vulputate non. Morbi vel purus ut nisl egestas semper. Praesent vitae purus nec felis laoreet consectetur non a turpis. Morbi congue tincidunt bibendum. Nam lorem est, sollicitudin ac suscipit ut, gravida in erat. Nulla libero erat, adipiscing ac scelerisque vitae, porttitor et lorem. Integer et augue vel tortor tempor condimentum vitae in velit. 
			</p>
		</div>

	</div>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
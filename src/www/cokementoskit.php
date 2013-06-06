<?php $body_class = "product" ?>
<?php $page_description = "This is the Coke and Mentos kit" ?>
<?php $page_title = "HTML5 Demo" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene">
	<h1>Diet Coke and Mentos Kit</h1>
	<div class="product i:productview" itemscope itemtype="http://schema.org/Product">
		<div class="images">
			<ul class="thumbnails">
				<li class="image_id:20 image_format:png">
					<a href="http://shop.dearapi.com/attachments/production/20/250_width.png">Diet Coke and Mentos Kit</a>
				</li>
				<li class="image_id:21 image_format:png">
					<a href="http://shop.dearapi.com/attachments/production/21/250_width.png">Diet Coke and Mentos Kit</a>
				</li>
				<li class="image_id:22 image_format:png">
					<a href="http://shop.dearapi.com/attachments/production/22/250_width.png">Diet Coke and Mentos Kit</a>
				</li>
			</ul>
		</div>
		
		<div class="details">
			<h1 class="title" itemprop="name">Diet Coke and Mentos Kit</h1>
			<div class="offer" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<p class="price" itemprop="price">132,-</p>
			<form accept-charset="UTF-8" action="/kurv" class="simple_form buy" method="post" novalidate="novalidate">
				<div style="margin:0;padding:0;display:inline">
					<input name="utf8" type="hidden" value="&#x2713;" />
					<input name="authenticity_token" type="hidden" value="y/fNtFgC7cpt/RqVrBajLy1V2SsiFC2yGcb17Ug358g=" />
				</div>
				<div class="field hidden cart_product_item_id">
					<input class="hidden" id="cart_product_item_id" name="cart[product_item_id]" type="hidden" value="72" />
				</div>
				<ul class="actions">
					<li class="buy"><input class="button primary buy" name="commit" type="submit" value="buy" /></li>
				</ul>
			</form>
		</div>
		
		<div class="description" itemprop="description">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus mauris, faucibus ut fringilla at, bibendum at metus. Morbi volutpat, arcu nec suscipit molestie, ante dolor posuere massa, non imperdiet nunc neque vitae mi. Cras lectus dolor, malesuada sed commodo eget, dignissim sit amet justo. Phasellus consequat suscipit pharetra. Duis dignissim ultricies erat ut cursus. Aenean viverra ornare rutrum. In tempor iaculis orci, a convallis neque vulputate non. Morbi vel purus ut nisl egestas semper. Praesent vitae purus nec felis laoreet consectetur non a turpis. Morbi congue tincidunt bibendum. Nam lorem est, sollicitudin ac suscipit ut, gravida in erat. Nulla libero erat, adipiscing ac scelerisque vitae, porttitor et lorem. Integer et augue vel tortor tempor condimentum vitae in velit. 
			</p>
		</div>

	</div>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
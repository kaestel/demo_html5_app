<?php $body_class = "cart" ?>
<?php $page_description = "Your cart" ?>
<?php $page_title = "Your cart" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene cart i:cart">

	<div class="box">
		<h1>Your Cart</h1>

		<ul class="items" id="cart">
			<li id="gram">
				<span class="image"></span>
				<span class="title">Gram 380g Shoe<span class="size">Size 10"</span></span>
				<span class="price">1799 kr.</span>
			</li>
			<li id="nike">
				<span class="image"></span>
				<span class="title">Nike Air Max<span class="size">Size 10"</span></span>
				<span class="price">2049 kr.</span>
			</li>
			<li id="pointer">
				<span class="image"></span>
				<span class="title">Pointer<span class="size">Size 10"</span></span>
				<span class="price">1295 kr.</span>
			</li>
		</ul>
	
		<ul id="costs" class="costs">
			<li class="subtotal">
				<span class="title">Subtotal</span>
				<span class="price">9748 kr.</span>
			</li>
			<li class="delivery">
				<span class="title">Express</span>
				<span class="price">200 kr.</span>
			</li>
			<li class="total">
				<span class="title">Total</span>
				<span class="price">9948 kr.</span>
			</li>
		</ul>
	
		<ul class="actions">
			<li class="shop"><a href="/">Close</a></li>
			<li class="checkout"><a href="http://hvadhedderde.com/contact">Checkout</a></li>
		</ul>

	</div>
</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

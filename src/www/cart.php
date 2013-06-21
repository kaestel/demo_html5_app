<?php $body_class = "cart" ?>
<?php $page_description = "Your cart" ?>
<?php $page_title = "Your cart" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene cart i:cart">

	<h1>Cart</h1>

	<ul class="items" id="cart">
		<li>
			<span class="title">Gram 380g Shoe</span>
			<span class="price">1799kr</span>
		</li>
		<li>
			<span class="title">Nike Air Max</span>
			<span class="price">2049kr</span>
		</li>
	</ul>
	
	<ul id="costs" class="costs">
		<li class="subtotal">
			<span class="title">Subtotal</span>
			<span class="price">3848kr</span>
		</li>
		<li class="delivery">
			<span class="title">Express</span>
			<span class="price">200kr</span>
		</li>
		<li class="total">
			<span class="title">Total</span>
			<span class="price">4048kr</span>
		</li>
		<li class="vat">
			<span class="title">Vat</span>
			<span class="price">1799kr</span>
		</li>
	</ul>
	
	<ul class="actions">
		<li class="shop">Back to shop</li>
		<li class="checkout">Go to Checkout</li>
	</ul>

</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

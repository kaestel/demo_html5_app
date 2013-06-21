<?php $body_class = "cart" ?>
<?php $page_description = "Your cart" ?>
<?php $page_title = "Your cart" ?>
<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene cart i:cart">

	<h1>Cart</h1>


	<ul class="actions">
		<li class="continue"><a href="/" class="button">Frontpage</a></li>
		<li class="checkout"><a href="/checkout" class="button disabled">Checkout</a></li>
	</ul>

</div>

<?php include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>

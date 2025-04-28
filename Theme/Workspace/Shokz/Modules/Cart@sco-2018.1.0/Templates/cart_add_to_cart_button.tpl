{{!-- Edited for Posh Theme --}}

{{#if isCurrentItemPurchasable}}
	<div class="cart-add-to-cart-button-container">
		<div class="cart-add-to-cart-button">
			<button type="submit" data-type="add-to-cart" data-action="sticky" class="cart-add-to-cart-button-button">
				<!--{{#if isUpdate}}{{translate 'Update'}}{{else}}{{translate 'Add to Cart >'}}{{/if}}-->
				<span class="cart-add-to-cart-button-text">{{#if isUpdate}}{{translate 'Update'}}{{else}}{{translate 'Add to Cart >'}}{{/if}}</span>
			</button/>
			<script>
				$('.cart-add-to-cart-button-button').on('mouseup', (e) => {
					// SC Standard Native listens for both mouseup and click events triggering duplicate adding.
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					return false;
				})
			</script>
		</div>
	</div>
{{/if}}



{{!----
Use the following context variables when customizing this template: 
	
	isCurrentItemPurchasable (Boolean)
	isUpdate (Boolean)

----}}


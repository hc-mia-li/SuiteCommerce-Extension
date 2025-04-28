{{!-- Edited for Posh Theme --}}

<nav class="header-menu-secondary-nav">

	<ul class="header-menu-level1">

		<!--<li><a class="header-menu-level1-anchor header-menu-home-anchor" href="/custitem_ccs_item_type/Headphone" id="" data-touchpoint="products" data-hashtag="/custitem_ccs_item_type/Headphone">Products</a></li>
		<li><a class="header-menu-level1-anchor header-menu-home-anchor" href="/custitem_ccs_item_type/POP" id="" data-touchpoint="pop" data-hashtag="/custitem_ccs_item_type/POP">POP</a></li>
		<li><a class="header-menu-level1-anchor header-menu-home-anchor" href="#/" id="" data-touchpoint="rma-request" data-hashtag="#/">RMA Request</a></li>
		<li><a class="header-menu-level1-anchor header-menu-home-anchor" href="#/" id="" data-touchpoint="support" data-hashtag="#/">Support</a></li>-->

		{{#each categories}}
			{{#if text}}
				<li {{#if categories}}data-toggle="categories-menu"{{/if}}>
					<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
					{{#if categories}}
					<ul class="header-menu-level-container">
						<li>
							<ul class="header-menu-level2" >
								{{#each categories}}
								<li {{#if categories}}class="categories-menu-arrow"{{/if}}>
									<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
										{{#if categories}}
											<ul class="header-menu-level3">
												{{#each categories}}
												<li>
													<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
												</li>
												{{/each}}
											</ul>
										{{/if}}
								</li>
								{{/each}}
							</ul>
						</li>
					</ul>
					{{/if}}
				</li>
			{{/if}}
		{{/each}}
	</ul>
</nav>



{{!----
Use the following context variables when customizing this template:

	categories (Array)
	showExtendedMenu (Boolean)
	showLanguages (Boolean)
	showCurrencies (Boolean)

----}}


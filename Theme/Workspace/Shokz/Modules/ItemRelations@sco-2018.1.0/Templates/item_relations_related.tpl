{{#if showCells}}
	<aside class="item-relations-related">
        {{#if description}}
            <h3>{{translate description}}</h3>
        {{else}}
            <h3>{{translate 'You may also like'}}</h3>
        {{/if}}
		<div class="item-relations-related-row">
			<div data-type="backbone.collection.view.rows"></div>
		</div>
	</aside>
{{/if}}



{{!----
Use the following context variables when customizing this template:

	collection (Array)
	showCells (Boolean)

----}}


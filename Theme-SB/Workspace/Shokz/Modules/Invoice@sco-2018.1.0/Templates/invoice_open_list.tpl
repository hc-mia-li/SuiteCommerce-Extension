{{#if showBackToAccount}}
<a href="/" class="invoice-open-list-button-back">
	<i class="invoice-open-list-button-back-icon"></i>
	{{translate 'Back to Account'}}
</a>
{{/if}}

<section class="invoice-open-list">

	<div id="invoice-open_list_banner" class="invoice-open-list-banner">
		<div data-cms-area="global_banner_invoice-" data-cms-area-filters="global"></div>
	</div>

	{{#if showInvoices}}
	<div data-view="Invoices.Message"></div>
	{{/if}}

	<header class="invoice-open-list-header">
		<h2 class="invoice-open-list-title">{{pageHeader}}</h2>
	</header>

	<div class="invoice-open-list-external">
		<form action="https://uat.versapay.com/payables/shokz/login">
			<button type="submit" class="invoice-open-list-button-button">
				<span>Navigate to Payment Portal</span>
			</button>
		</form>
	</div>
</section>



{{!----
Use the following context variables when customizing this template:

invoices (Array)
showInvoices (Boolean)
pageHeader (String)
showMakeAPaymentButton (Boolean)
enableMakeAPaymentButton (Boolean)
showBackToAccount (Boolean)

----}}


{{!-- Edited for Posh Theme --}}

<section class="login-register">

	<!--<header class="login-register-header">
		{{#if showRegister}}
		<h1 class="login-register-title">{{translate 'Log in | Register'}}</h1>
		{{else}}
		<h1 class="login-register-title login-register-title-noregister">{{translate 'Log in'}}</h1>
		{{/if}}
	</header>-->

	<div data-view="Messages"></div>

	<div {{#if showRegister}} class="login-register-body" {{else}} class="login-register-body-colored" {{/if}}>

		{{#if showLogin}}
			<div class="login-register-wrapper-column-login">
				<div class="login-register-wrapper-login" data-view="Login"></div>
			</div>
		{{/if}}
		<div class="login-register-separator"><div class="login-register-separator-content">or</div></div>
		{{#if showRegisterOrGuest}}
			<div class="login-register-wrapper-column-register">
				<div class="login-register-wrapper-register">
					<h2 class="login-register-title-register">{{translate 'Apply For Partnership'}}</h2>

					<p class="login-register-desc-register">Please provide us your basic information and apply for partnership.<br/>We will get back to you right after.</p>
					<a href="https://sb.independent.shokz.com/signup"><button class="login-register-link-btn">APPLY NOW ></button></a>
					<!--{{#if showCheckoutAsGuest}}
						<div class="login-register-wrapper-guest" data-view="CheckoutAsGuest"></div>
					{{/if}}

					{{#if showRegister}}
						<div class="{{#if showCheckoutAsGuest}}collapse{{/if}} " data-view="Register" id="register-view"></div>
					{{/if}}-->
				</div>
			</div>
		{{/if}}

	</div>
</section>



{{!----
Use the following context variables when customizing this template:

	showRegister (Boolean)
	showCheckoutAsGuest (Boolean)
	showLogin (Boolean)
	showRegisterOrGuest (Boolean)

----}}


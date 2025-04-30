{{#unless showBtn}}
<script>
    $('.cart-add-to-cart-button-button').remove();
    $('.cart-detailed-item-free .cart-lines-free-item-summary-quantity-value').attr('disabled', 'disabled');
    $('.cart-detailed-item-free .cart-lines-free-item-summary-quantity-value').css({border:'none',padding:0,'text-align':'left'});
    $('.cart-detailed-item-free .cart-lines-free-item-actions').remove();
</script>
{{/unless}}
<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->

{{#if videoURL}}
    <script>
        $(document).ready(function () {
            var targetLi;
            {{#ifEquals position 'first'}}
                targetLi = $('li.product-details-image-gallery-container:not(.bx-clone):first');
            {{else}}
                targetLi = $('li.product-details-image-gallery-container:not(.bx-clone):last');
            {{/ifEquals}}
            targetLi.append(`
    <video id="myVideo" src="{{videoURL}}" type="video/mp4" autoplay muted loop preload="auto" controls controlslist="noplaybackrate">
        Your browser does not support the video tag.
    </video>`);
            targetLi.children().first().hide();
            const video = document.getElementById('myVideo');
            if (video) {
                video.disablePictureInPicture = true;
            }
        });
    </script>
{{/if}}

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->

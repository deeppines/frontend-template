// Responsive iframe video
// nowrap - url parametr. For example '//embed.smileexpo'

/* eslint-disable no-unused-vars */
function responsiveIframe(contentContainer, videoWrapper, nowrap) {
    'use strict';
    videoWrapper = videoWrapper || '<div class="embed-responsive embed-responsive-16by9"></div>';
    contentContainer.find('iframe').not('[src ^=' + nowrap + ']').wrap(videoWrapper);
}
// END Responsive iframe video

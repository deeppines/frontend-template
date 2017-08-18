// Responsive iframe video
// nowrap - url parametr. For example '//embed.smileexpo'
function responsiveIframe(contentContainer, nowrap) {
    var videoWrapper = '<div class="embed-responsive embed-responsive-16by9"></div>';
    var nowrapIframe = nowrap;

    contentContainer.find('iframe').not("[src ^= nowrap]").wrap(videoWrapper);
}
// END Responsive iframe video

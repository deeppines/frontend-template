// Responsive iframe video
// nowrap - url parametr. For example '//embed.smileexpo'

const responsiveIframe = (contentContainer, nowrap) => {
    let videoWrapper = '<div class="embed-responsive embed-responsive-16by9"></div>';
    let nowrapIframe = nowrap;

    contentContainer.find('iframe').not(`[src ^= ${nowrapIframe}]`).wrap(videoWrapper);
};

export default responsiveIframe;
// END Responsive iframe video

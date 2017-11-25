const responsiveIframe = (contentContainer, nowrap) => {
    let videoWrapper = '<div class="embed-responsive embed-responsive-16by9"></div>';
    let nowrapIframe = nowrap;

    contentContainer.find('iframe').not('[src ^= nowrap]').wrap(videoWrapper);
};

export default responsiveIframe;

// Modal popup

var cookie = document.cookie;
var date = new Date();

// Modal show timer
if (cookie.indexOf('popclose=submited') === -1) {
    setTimeout(function () {
        $('#Modal').modal('show');
    }, 2000); // Time popUp
}

$('#Modal .close').click(function () {
    date.setDate(date.getDate() + 14);
    document.cookie = 'popclose=submited; expires=' + date.toGMTString();
});

$('#Modal').click(function (data, handler) {
    if (data.target === this) {
        date.setDate(date.getDate() + 14);
        document.cookie = 'popclose=submited; expires=' + date.toGMTString();
    }
});

// For form id
$('#lottery-popup-form').on('beforeSubmit', function () {
    date.setDate(date.getDate() + 365);
    document.cookie = 'popclose=submited; expires=' + date.toGMTString();
});
// End Modal popup script

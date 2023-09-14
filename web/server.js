function startServer() {
    var ipaddress = $('#ipaddress').val();
    var port = $('#port').val();
    var formData = new FormData();
    formData.append('ipaddress', ipaddress);
    formData.append('port', port);
    console.log(port);
    if (!ipaddress) {
        alert(" Vui lòng nhập IP ")
    } else if (!port) {
        alert(" Vui lòng nhập PORT")
    } else {
        $.ajax({
            type: "POST",
            url: 'redirect.php?action=startServer',
            data: formData,
            processData: false,
            contentType: false,
            success: function () {
                $.get('startServer.php');
                console.log('ok');
            }
        });
    }
}
function stopServer() {
    var ipaddress = $('#ipaddress').val();
    var port = $('#port').val();
    var formData = new FormData();
    formData.append('ipaddress', ipaddress);
    formData.append('port', port);
    console.log(port);
    if (!ipaddress) {
        alert(" Vui lòng nhập IP ")
    } else if (!port) {
        alert(" Vui lòng nhập PORT")
    } else {
        $.ajax({
            type: "POST",
            url: 'redirect.php?action=stopServer',
            data: formData,
            processData: false,
            contentType: false,
            success: function () {
                $.get('stopServer.php');
                console.log('ok');
            }
        });
    }
}

<?php
$_GET['action'] = isset($_GET['action']) ?  $_GET['action'] : '127.0.0.1';
echo $_GET['action'];
switch ($_GET['action']) {
    case 'startServer':
        startServer();
        break;
    case 'stopServer':
        stopServer();
        break;
}
function startServer()
{
    session_start();
    $_SESSION['ipaddress']  = $_POST['ipaddress'];
    $_SESSION['port'] = $_POST['port'];
    print_r($_SESSION['ipaddress']);
    print_r($_SESSION['port']);
    echo 'ok';
}
function stopServer()
{
    file_put_contents('stopServer.php', '<?php echo 0; ?>');
}

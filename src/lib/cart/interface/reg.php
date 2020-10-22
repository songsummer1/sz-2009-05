<?php 
header('content-type:text/html;charset=utf8');

$username = $_POST['username'];
$password = $_POST['password'];
$con = mysqli_connect('localhost','root','root','shop');
$sql = "INSERT INTO `info` VALUES (null,'$username','$password')";
$res = mysqli_query($con,$sql);
mysqli_close($con);
if($res){
    header('location:../pages/login.html');
}else{
    echo"服务器错误";
}


?>
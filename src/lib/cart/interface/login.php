<?php
header('content-type:text/html;charset=utf8');
    $username = $_POST['username'];
    $password = $_POST['password'];
    $con = mysqli_connect('localhost','root','root','shop');
    $sql = "SELECT*FROM `info` WHERE `name`='$username' AND `password`='$password'";
    $res = mysqli_query($con,$sql);
    $row = mysqli_fetch_assoc($res);
    if($row){
        echo"登录成功";
     header('location:../pages/xiaomi.html');
    }else{
        echo"登录失败";
    }

?>
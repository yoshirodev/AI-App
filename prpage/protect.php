<?php
// (A) START SESSION
session_start();
 
// (B) LOGOUT REQUEST
if (isset($_POST["Logout"])) {
  session_destroy();
  unset($_SESSION);
}
 
// (C) REDIRECT TO LOGIN PAGE IF NOT LOGGED IN
if (!isset($_SESSION["Username"])) {
  header("Location: login.php");
  exit();
}
?>
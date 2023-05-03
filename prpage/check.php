<?php // (A) START SESSION 
session_start();
 
// (B) PROCESS LOGIN
if (isset($_POST["Username"]) && !isset($_SESSION["Username"])) {
  // (B1) USERS & PASSWORDS - SET YOUR OWN !
   $users = [
    "Yoshi" => "654321",
    "User1" => "123456",
    "User2" => "987654"
  ];
 
  // (B2) CHECK & VERIFY
  if (isset($users[$_POST["Username"]]) && $users[$_POST["Username"]] == $_POST["Password"]) {
    $_SESSION["Username"] = $_POST["Username"];
  }
 
  // (B3) FAILED LOGIN FLAG
  if (!isset($_SESSION["Username"])) { $failed = true; }
}
 
// (C) REDIRECT TO HOME PAGE IF SIGNED IN - SET YOUR OWN !
if (isset($_SESSION["Username"])) {
  header("Location: prpage/index.html");
  exit();
}

?>
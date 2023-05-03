<?php

// (A) LOGIN CHECKS
require "prpage/check.php";
 
// (B) LOGIN PAGE HTML
if (isset($failed)) { ?>
<div id="login-bad">Invalid user or password.</div>
<?php } 

?>

<html>
  <title>LoginPage</title>
    <form action="" method="post" name="Login_Form">
      <table width="400" border="0" align="center" cellpadding="5" cellspacing="1" class="Table">
        <tr>
          <td colspan="2" align="left" valign="top"><h3>Login</h3></td>
        </tr>
        <tr>
          <td align="right" valign="top">Username</td>
          <td><input name="Username" type="text" class="Input"></td>
        </tr>
        <tr>
          <td align="right">Password</td>
          <td><input name="Password" type="password" class="Input"></td>
        </tr>
        <tr>
          <td> </td>
          <td><input name="submit" type="submit" value="Login" class="Button3"></td>
        </tr>
      </table>
    </form>
</html>
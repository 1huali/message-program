<?php
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['a_message']))
{
  $message = $_GET['a_message'];

  $theFile = fopen("messageInput.txt", "a") or die("Unable to open file!");
  fwrite($theFile,  "MSG:".$message."\n");
  //dont forget to close it cos then it will just be blank
  fclose($theFile);
  echo("WE HAVE SUCCESSFULLY read the vars AND saved to the file ... ");
   // you must exit
exit;
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>

    <title>messsage-program</title>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> 
    <script src="js/libraries/jquery-ui.js"></script> 
      <!-- <script src = "jquery/jquery-3.4.1.js"></script> -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- Library script(s) go here -->
  </head>

  <body>
    <div id="seaContainer">
      <div id="theSea">INSERT SEA HERE 
        <br>
        <span id="messageDisplayBox">MSG</span> </div>
      </div>
    
    <div id="autoMsg-container">0 msg @sea!</div>
    <input id="openBottleButton" type="button" value="Open">
<br><br><br><br>
<<<<<<< Updated upstream:index.php
<form id = "insertPHP">
      <input id="messageField" type="text" name = "a_message"><input id="throwButton" type="submit" value="throw">
    </form>

=======
      <input id="messageField" type="text"><input id="throwButton" type="button" value="throw">

      <!-- Bubbles -->
      <!-- Code from Mark Bowley -->
      <!-- https://codepen.io/Mark_Bowley/pen/PozwyP -->
      <div id="background-wrap">
        <div class="bubble x1"> <img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x2"><img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x3"><img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x4"><img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x5"><img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x6"><img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x7"><img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x8"><img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x9"><img src="assets/images/Bubble.gif" alt="bubble"></div>
        <div class="bubble x10"><img src="assets/images/Bubble.gif" alt="bubble"></div>
    </div>

        <!-- Video Background -->
  <!-- Tutorial from W3Schools -->
  <!-- https://www.w3schools.com/howto/howto_css_fullscreen_video.asp -->
  <video autoplay muted loop class="backgroundVideo">
    <source src="assets/images/VidBackground.mp4" type="video/mp4">
  </video>
      
>>>>>>> Stashed changes:index.html
    <!-- My script(s) -->
    <script src="js/script.js"></script>


  </body>

</html>

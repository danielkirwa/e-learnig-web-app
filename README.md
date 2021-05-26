# E-LEARNING PLATFORM 

<img src="images/Screenshot1.png" >

This an learner driver learning platform. It very easy to use and user freindly.

## Key features and functionality

- Account creation and access
- Coures enrollment self-enrollment
- Quiz/Exam provision
- Learning material provision
- Results generation

### Account creation and access

<img src="images/Screenshot3.png">

Easy to create account and a secure way to access account though authentication. 
You can not access any learning material or quiz if not authenticated 

### Coures Enrollment 

Once created an account you can enroll to course of your choice any time
 <i>By a click of a button you are able to enroll </i>

<img src="images/Screenshot4.png">



/////

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Password Reset</title>
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
      <link rel="stylesheet" href="styles/reset.css">
      <link rel="stylesheet" href="styles/banner.css">
  </head>
  <body>
      <main>
        <section class="container reset-container">
          <fieldset>
            <div>
              <img src="images/background.jpg">
            </div>
            <div>
              <label for="mail">Email</label> <br>
              <input type="email" id="mail" name="mail"/>
            </div>
            <button id="resetPassword">Confirm</button>
          </fieldset>
      </section>
      <div class="feedbackContainer success">
        <div class="feedbackIcon"></div>
        <p class="feedbackMessage">Signed up Successfully</p>
      </div>
      <div class="feedbackContainer failure">
        <div class="feedbackIcon"></div>
        <p class="feedbackMessage">Signing up failed</p>
      </div>

    </main> 
  


    <!-- The core Firebase JS SDK is always required and must be listed first -->
   <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-auth.js"></script>
<script type="text/javascript" src="scripts/frconelearning.js"></script>
    <script type="text/javascript" src="scripts/reset.js"></script>  
  </body>
</html>
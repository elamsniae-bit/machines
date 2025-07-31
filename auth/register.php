<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <!-- FontAwesome CSS -->
    <link rel="stylesheet" href="./assets/css/all.min.css">
    <link rel="stylesheet" href="./assets/css/uf-style.css">
    <title>heavyequips | register</title>

    <style> 
    

    .my-custom-button {
      background-color: rgb(132,32,41); /* Your desired color */
      
    }
    
    
    </style>

  </head>
  <body>

    
    <div class="uf-form-signin">
      <div class="text-center">
        <a href="https://uifresh.net/"><img src="./assets/img/logo-fb.png" alt="" width="100" height="100"></a>
      <h1 class="text-white h3">Account Register</h1>
      </div>
      <form class="mt-4" id="myForm">
        <div class="input-group uf-input-group input-group-lg mb-3">
          <span class="input-group-text fa fa-user"></span>
          <input type="text" name="username" class="form-control" placeholder="Your name" >
        </div>
        <div class="input-group uf-input-group input-group-lg mb-3">
          <span class="input-group-text fa fa-envelope"></span>
          <input type="text" name="email"  class="form-control" placeholder="Email address">
        </div>
        <div class="input-group uf-input-group input-group-lg mb-3">
          <span class="input-group-text fa fa-phone"></span>
          <input type="text" name="phone" class="form-control" placeholder="Your phone">
        </div>
        <div class="input-group uf-input-group input-group-lg mb-3">
          <span class="input-group-text fa fa-lock"></span>
          <input type="password" name="password1" class="form-control" placeholder="Password">
        </div>
        <div class="input-group uf-input-group input-group-lg mb-3">
          <span class="input-group-text fa fa-lock"></span>
          <input type="password" name="password2" class="form-control" placeholder="Password confirmation">
        </div>
        <div class="input-group uf-input-group input-group-lg mb-3" style="display: none;">

          <input type="text"  id="url" name="url" class="form-control" placeholder="location">
        </div>
        <div class="d-grid mb-4">
          <button type="submit" class="btn uf-btn-primary btn-lg" name="button">Sign Up</button>
        </div>
        <div class="mt-4 text-center">
          <span class="text-white">Already a member?</span>
          <a href="index.php">Login</a>
        </div>
      </form>
    </div>

    <!-- JavaScript -->

    <!-- Separate Popper and Bootstrap JS -->
    <script src="./assets/js/popper.min.js"></script>
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>

      document.getElementById("url").value=location.href;
        document.getElementById('myForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Get the form data
            const formData = new FormData(this);

            // Send the data to the PHP page using fetch

            fetch('../saver/user/register.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())  // Parse the response as text
            .then(data => {
                // console.log('Success:', data[0]);
                Swal.fire({
                  title: data[0],
                  text: data[1],
                  icon: data[0],
                  imageWidth: 400,
                  imageHeight: 200,
                  customClass: {
                    confirmButton: 'my-custom-button'
                  }
                });

                if (data[2] != ""){


                  setTimeout(() => {

                    location.href=data[2];
                    
                  }, 3000);



                }


            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                  title: 'error',
                  text:'unexpected error please come back later!',
                  icon:'error',
                  imageWidth: 400,
                  imageHeight: 200,
                  customClass: {
                    confirmButton: 'my-custom-button'
                  }
                });
            });
        });



    </script>


  </body>
</html>


<?php

  // $data = ['success',$phone];
  // $jsonArray = json_encode($data);
  // echo $jsonArray; 



?>
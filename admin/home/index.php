<?php   include('../../saver/connection.php');   ?>
<?php   include('../../saver/admin/authorization.php');?>

<?php


    if (isset($_GET['del_id'])){


        $id = $_GET['del_id'];
        $sql = mysqli_query($connection , "DELETE FROM `client` WHERE `id`='$id'");

        if ($sql){


          header("location:index.php");


        }else{


            echo "<script>  alert('UNABLE TO DELETE PLEASE CONTACT KINGSLEY')</script>";

        }

    }



?>

<!DOCTYPE html>
<html lang="en">
  
<!-- Mirrored from themewagon.github.io/corona-free-dark-bootstrap-admin-template/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 12 Dec 2024 14:07:52 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Corona Admin</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="../assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="../assets/vendors/css/vendor.bundle.base.css">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <link rel="stylesheet" href="../assets/vendors/jvectormap/jquery-jvectormap.css">
    <link rel="stylesheet" href="../assets/vendors/flag-icon-css/css/flag-icon.min.css">
    <link rel="stylesheet" href="../assets/vendors/owl-carousel-2/owl.carousel.min.css">
    <link rel="stylesheet" href="../assets/vendors/owl-carousel-2/owl.theme.default.min.css">
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <!-- End layout styles -->
    <link rel="shortcut icon" href="../assets/images/favicon.png" />
  </head>
  <body>
    <div class="container-scroller">
      <!-- partial:partials/_sidebar.html -->
      <?php  include('../../components/admin/side.php')  ?>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_navbar.html -->
        <?php  include('../../components/admin/nav.php') ?>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">

            <?php  include("../../components/admin/box.php");  ?>


            <div class="row ">
              <div class="col-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">User list</h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>

                            <th>Count</th>
                            <th> Client Name </th>
                            <th> Client Email </th>
                            
                            
                          </tr>
                        </thead>
                        <tbody>

                          <?php 
                          
                              $query = mysqli_query($connection, "SELECT * FROM `client`");

                              if ( mysqli_num_rows($query) > 0) {
                                $count = 0;
                                while ( $userlist = mysqli_fetch_assoc($query) )  { $count++; ?>

                                    <tr>
                                    
                                      <td> <?php  echo $count  ?></td>
                                      <td> <?php  echo $userlist['name']   ?></td>
                                      <td> <?php  echo $userlist['email']   ?></td>
                                      <td>
                                        <a href="?del_id=<?php  echo $userlist['id']   ?>"><div class="badge badge-outline-danger">Delete</div></a>
                                      </td>
                                    </tr>
                                  
                              <?php  }



                              }else{ ?>



                                  <tr>

                                  <td>
                                    <span class="pl-2"  style="color: red;" >you have no user</span>
                                  </td>

                                  </tr>



                            <?php  }

                          ?>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="../assets/vendors/js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="../assets/vendors/chart.js/Chart.min.js"></script>
    <script src="../assets/vendors/progressbar.js/progressbar.min.js"></script>
    <script src="../assets/vendors/jvectormap/jquery-jvectormap.min.js"></script>
    <script src="../assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
    <script src="../assets/vendors/owl-carousel-2/owl.carousel.min.js"></script>
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="../assets/js/off-canvas.js"></script>
    <script src="../assets/js/hoverable-collapse.js"></script>
    <script src="../assets/js/misc.js"></script>
    <script src="../assets/js/settings.js"></script>
    <script src="../assets/js/todolist.js"></script>
    <!-- endinject -->
    <!-- Custom js for this page -->
    <script src="../assets/js/dashboard.js"></script>
    <!-- End custom js for this page -->
  </body>

<!-- Mirrored from themewagon.github.io/corona-free-dark-bootstrap-admin-template/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 12 Dec 2024 14:09:15 GMT -->
</html>
<?php include('../../saver/connection.php');   ?>
<?php include('../../saver/admin/authorization.php'); ?>
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from themewagon.github.io/corona-free-dark-bootstrap-admin-template/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 12 Dec 2024 14:07:52 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

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
        <?php include('../../components/admin/side.php')  ?>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_navbar.html -->
            <?php include('../../components/admin/nav.php') ?>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">



                    <div class="card">
                        <div class="card-body">

                            <h4 class="card-title">Add Categorie</h4>

                            <form class="forms-sample" method="post">

                                <div class="form-group">


                                    <label for="exampleInputUsername1">name</label>
                                    <input type="text" name="name" class="form-control" id="exampleInputUsername1" required>


                                </div>

                                <button type="submit" name="submit" class="btn btn-primary mr-2">Submit</button>
                            </form>
                            <?php

                                    if(isset($_POST['submit'])){

                                        $name = $_POST['name'];

                                        $query = mysqli_query($connection,"INSERT INTO `categories`( `name`) VALUES ('$name')");

                                        if ($query) {

                                            echo "<script> alert('added to categorie') </script>";


                                        }else{

                                            echo "<script> alert('unable to add') </script>";



                                        }



                                    }


                            ?>
                        </div>
                    </div>

                </div>

                <?php





                ?>





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
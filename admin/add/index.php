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

                            <h4 class="card-title">Add Products</h4>

                            <form class="forms-sample" method="post" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="exampleInputUsername1">name</label>
                                    <input type="text" name="name" class="form-control" id="exampleInputUsername1" required>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">image</label>
                                    <input type="file" name="file" class="form-control" id="exampleInputUsername1" required>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">price</label>
                                    <input type="text" name="price" class="form-control" id="exampleInputEmail1" required>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">brand</label>
                                    <input type="text" name="brand" class="form-control" id="exampleInputPassword1" required>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">categorie</label>
                                    <!-- <input type="text" name="categorie" class="form-control" id="exampleInputConfirmPassword1" required> -->
                                     <select name="categorie" style="color: white;" id="exampleInputConfirmPassword1" class="form-control">

                                            <option value="">select</option>

                                            <?php 

                                                    $query = mysqli_query($connection, "SELECT * FROM `categories`");

                                                    if(mysqli_num_rows($query) > 0){



                                                        while ($data = mysqli_fetch_assoc($query)){ ?>



                                                                    <option value="<?php echo $data['name']   ?>" style="color: white;"><?php echo $data['name']   ?></option>



                                                     <?php   }


                                                    }


                                            ?>

                                     </select>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputPassword1">model</label>
                                    <input type="text" name="model" class="form-control" id="exampleInputPassword1" required>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputPassword1">description</label>
                                    <input type="text" name="des" class="form-control" id="exampleInputPassword1" required>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">net weight</label>
                                    <input type="text" name="weight" class="form-control" id="exampleInputPassword1" required>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">condition</label>
                                    <input type="text" name="condition" class="form-control" id="exampleInputConfirmPassword1" required>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">year</label>
                                    <input type="text" name="year" class="form-control" id="exampleInputConfirmPassword1" required>
                                </div>

                                <button type="submit" name="submit" class="btn btn-primary mr-2">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>

                <?php


                if (isset($_POST['submit']) && isset($_FILES['file'])) {

                    // Get file details
                    $file = $_FILES['file'];
                    $fileName = $file['name'];
                    $fileTmpName = $file['tmp_name'];
                    $fileSize = $file['size'];
                    $fileError = $file['error'];
                    $fileType = $file['type'];

                    // Set allowed file extensions
                    $allowed = array('jpg', 'jpeg', 'png', 'gif', 'pdf', 'txt','webp');

                    // Extract file extension
                    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

                    // Check if the file type is allowed
                    if (in_array($fileExt, $allowed)) {
                        if ($fileError === 0) {
                            // Check if the file size is less than 5MB
                            if ($fileSize < 5000000) {
                                // Set a unique file name to avoid overwriting
                                $fileNewName = uniqid('', true) . "." . $fileExt;
                                $fileDestination = '../../upload/' . $fileNewName;

                                // Move the file to the 'uploads' directory
                                if (move_uploaded_file($fileTmpName, $fileDestination)) {
                                    // Insert the file name into the database

                                    $product_name = $_POST['name'];
                                    $product_des = $_POST['des'];
                                    $product_weight = $_POST['weight'];
                                    $product_price = $_POST['price'];
                                    $product_model = $_POST['model'];
                                    $product_year = $_POST['year'];
                                    $product_brand = $_POST['brand'];
                                    $product_condition = $_POST['condition'];
                                    $product_categorie = $_POST['categorie'];
                                    $product_image = $fileNewName;
                                    // echo "<script> alert('$product_condition') </script>";

                                    $query = mysqli_query($connection,"INSERT INTO `products`(`weight`,`des`,`price`, `name`, `brand`, `categorie`, `model`, `productcondition`, `year`, `image`) 
                                            VALUES ('$product_weight','$product_des','$product_price', '$product_name', '$product_brand', '$product_categorie', '$product_model', '$product_condition', '$product_year','$product_image')");

                                    if ($query) {


                                        echo "<script> alert('product add') </script>";
                                    } else {


                                        echo "<script> alert('unable to add product') </script>";
                                    }
                                } else {
                                    echo "There was an error uploading the file.";
                                }
                            } else {
                                echo "Your file is too big. Please upload a file smaller than 5MB.";
                            }
                        } else {
                            echo "There was an error uploading your file.";
                        }
                    } else {
                        echo "File type not allowed. Only JPG, JPEG, PNG, GIF, PDF, and TXT are allowed.";
                    }
                }



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
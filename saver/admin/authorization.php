<?php



    
    if (isset($_SESSION['admin_id']) && $_SESSION['admin_id'] != "" ) {

        $admin_id = $_SESSION['admin_id'];

        $query = mysqli_query($connection, "SELECT * FROM `admin` WHERE `id`='$admin_id' ");

        if (mysqli_num_rows($query) > 0 ){


                while ($userdata = mysqli_fetch_assoc($query))  {

                    $admin_name = $userdata['username'];
                    $admin_email = $userdata['email'];



                }


        }else{


            header("Location:./auth/");


        }


        

    }else{

        header("Location:./auth/");


    }






?>
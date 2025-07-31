<?php


    include('../connection.php');
    $password = $_POST['password'];
    $email = $_POST['email'];

    if ($_SERVER['REQUEST_METHOD'] == "POST"){



        if ($password != "" && $email != ""){


            $query = mysqli_query($connection, "SELECT * FROM `client` WHERE `email` = '$email' AND `password` = '$password'");

            if (mysqli_num_rows($query) > 0) {

                
                $data = mysqli_fetch_assoc($query);

                $_SESSION['user_id'] = $data['id'];
    
                if ( isset($_SESSION['url']) && $_SESSION['url'] != "" ){


                    $data = ['success',"login success",$_SESSION['url']."&user=$data[id]"];
                    $jsonArray = json_encode($data);
                    echo $jsonArray;
                    $_SESSION['url'] = ""; 




                }else{

                    $data = ['success',"login success","../dashboard.php"];
                    $jsonArray = json_encode($data);
                    echo $jsonArray;

                }











            }else{

                
                $data = ['error',"incorrect email or password!",""];
                $jsonArray = json_encode($data);
                echo $jsonArray;

            }



        }else{



            $data = ['error',"make sure you input your email and password!",""];
            $jsonArray = json_encode($data);
            echo $jsonArray;

        }



    }



?>
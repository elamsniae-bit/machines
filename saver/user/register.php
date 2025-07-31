<?php


        include('../connection.php');
        $username = $_POST['username'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $password1 = $_POST['password1'];
        $password2 = $_POST['password2'];
        $url = $_POST['url'];

        if ($_SERVER["REQUEST_METHOD"] == 'POST'){



            if ($url == $host."/auth/register.php"){



                if ($password1 != '' && $username !=  "" && $email != "" && $password2 != "" && $phone != ""){


                        if ($password2 != $password1){


                            $data = ['error',"both password must match!",""];
                            $jsonArray = json_encode($data);
                            echo $jsonArray;



                        }else{


                            $query = mysqli_query($connection,"SELECT * FROM `client` WHERE `email` = '$email'");

                            if (mysqli_num_rows($query) > 0 ){


                                $data = ['error',"already have a user with your email",""];
                                $jsonArray = json_encode($data);
                                echo $jsonArray;


                            }else{

                                 

                                $query = mysqli_query($connection,"INSERT INTO `client`(`name`, `email`, `password`,`phone`) VALUES ('$username','$email','$password1','$phone')");

                                if ($query){

                                    $data = ['success',"register successful","index.php"];
                                    $jsonArray = json_encode($data);
                                    echo $jsonArray;



                                }else{

                                    $data = ['error',"unable to register your account please come back later!",""];
                                    $jsonArray = json_encode($data);
                                    echo $jsonArray;

                                }


                                
                            }



                            // $data = ['success'," your account has been created successfully!"];
                            // $jsonArray = json_encode($data);
                            // echo $jsonArray;


                        }


                }else{

                    $data = ['error',"make sure you fill all your informations",""];
                    $jsonArray = json_encode($data);
                    echo $jsonArray; 



                }






            }else{


                $data = ['error',"make sure your on "."$sitename",""];
                $jsonArray = json_encode($data);
                echo $jsonArray; 



            }



        }





?>




<div class="row">
    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">



                            <?php

                                    $query = mysqli_query($connection,"SELECT * FROM `client`");
                                    $num = mysqli_num_rows($query);


                            ?>
                            <h3 class="mb-0" style="color: white;"><?php  echo $num  ?></h3>


                        </div>
                    </div>
                    <div class="col-3">
                        <div class="icon icon-box-success ">
                            <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                    </div>
                </div>
                <h6 class="text-muted font-weight-normal">User List</h6>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-9">
                    <?php

                        $query = mysqli_query($connection,"SELECT * FROM `products`");
                        $num = mysqli_num_rows($query);


                    ?>
                        <div class="d-flex align-items-center align-self-start">
                            <h3 class="mb-0"><?php  echo $num  ?></h3>

                        </div>
                    </div>
                    <div class="col-3">
                        <div class="icon icon-box-success">
                            <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                    </div>
                </div>
                <h6 class="text-muted font-weight-normal">Product List</h6>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-9">
                    <?php

                        $query = mysqli_query($connection,"SELECT * FROM `history` WHERE `status`= 'pending'");
                        $num = mysqli_num_rows($query);


                    ?>
                        <div class="d-flex align-items-center align-self-start">
                            <h3 class="mb-0"><?php  echo $num  ?></h3>

                        </div>
                    </div>
                    <div class="col-3">
                        <div class="icon icon-box-success">
                            <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                    </div>
                </div>
                <h6 class="text-muted font-weight-normal">Pending Purchase</h6>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-9">
                    <?php

                        $query = mysqli_query($connection,"SELECT * FROM `history` WHERE `status`= 'approved'");
                        $num = mysqli_num_rows($query);


                    ?>
                        <div class="d-flex align-items-center align-self-start">
                            <h3 class="mb-0"><?php  echo $num  ?></h3>

                        </div>
                    </div>
                    <div class="col-3">
                        <div class="icon icon-box-success ">
                            <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                    </div>
                </div>
                <h6 class="text-muted font-weight-normal">Approved Purchase</h6>
            </div>
        </div>
    </div>
</div>
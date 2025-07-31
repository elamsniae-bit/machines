<?php include('../../saver/connection.php') ?>
<html lang="en">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Neon Admin Panel">
    <meta name="author" content="Laborator.co">
    <link rel="icon" href="../assets/images/favicon.ico"> <!-- Google Tag Manager -->
    <script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script>
    <script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-9GDT6T7NK1&amp;l=dataLayer&amp;cx=c&amp;gtm=45He4cc1v9102658514za200"></script>
    <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-K3LP6R3"></script>
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-K3LP6R3');
    </script> <!-- End Google Tag Manager -->
    <title>Neon | Dashboard</title>
    <style>
        .file-input-wrapper {
            overflow: hidden;
            position: relative;
            cursor: pointer;
            z-index: 1;
        }

        .file-input-wrapper input[type=file],
        .file-input-wrapper input[type=file]:focus,
        .file-input-wrapper input[type=file]:hover {
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
            opacity: 0;
            filter: alpha(opacity=0);
            z-index: 99;
            outline: 0;
        }

        .file-input-name {
            margin-left: 8px;
        }
    </style>
    <link rel="stylesheet" href="../assets/js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css" id="style-resource-1">
    <link rel="stylesheet" href="../assets/css/font-icons/entypo/css/entypo.css" id="style-resource-2">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic" id="style-resource-3">
    <link rel="stylesheet" href="../assets/css/bootstrap.css" id="style-resource-4">
    <link rel="stylesheet" href="../assets/css/neon-core.css" id="style-resource-5">
    <link rel="stylesheet" href="../assets/css/neon-theme.css" id="style-resource-6">
    <link rel="stylesheet" href="../assets/css/neon-forms.css" id="style-resource-7">
    <link rel="stylesheet" href="../assets/css/custom.css" id="style-resource-8">
    <script src="../assets/js/jquery-1.11.3.min.js"></script> <!--[if lt IE 9]><script src="../assets/js/ie8-responsive-file-warning.js"></script><![endif]--> <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --> <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script> <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> <![endif]--> <!-- TS1735027733: Neon - Responsive Admin Template created by Laborator -->
    <style type="text/css">
        .jqstooltip {
            position: absolute;
            display: block;
            left: 0px;
            top: 0px;
            visibility: hidden;
            background: rgb(43, 48, 58) transparent;
            background-color: rgba(43, 48, 58, 0.8);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
            -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
            color: white;
            font: 10px arial, san serif;
            text-align: left;
            white-space: nowrap;
            z-index: 10000;
            padding: 5px 5px 5px 5px;
            min-height: 22px;
            min-width: 30px;
            border-radius: 3px;
        }

        .jqsfield {
            color: white;
            font: 10px arial, san serif;
            text-align: left;
        }
    </style>
</head>

<body class="page-body loaded" data-url="https://demo.neontheme.com"> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3LP6R3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <!-- TS173502773310881: Xenon - Boostrap Admin Template created by Laborator / Please buy this theme and support the updates -->
    <div class="page-container"> <!-- TS17350277339903: Xenon - Boostrap Admin Template created by Laborator / Please buy this theme and support the updates -->

        <div class="main-content">
            <script type="text/javascript">
                jQuery(document).ready(function($) {
                    // Sample Toastr Notification
                    setTimeout(function() {
                        var opts = {
                            "closeButton": true,
                            "debug": false,
                            "positionClass": rtl() || public_vars.$pageContainer.hasClass('right-sidebar') ? "toast-top-left" : "toast-top-right",
                            "toastClass": "black",
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "extendedTimeOut": "1000",
                            "showEasing": "swing",
                            "hideEasing": "linear",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        };
                        toastr.success("You have been awarded with 1 year free subscription. Enjoy it!", "Account Subcription Updated", opts);
                    }, 3000);

                    // Sparkline Charts
                    $('.inlinebar').sparkline('html', {
                        type: 'bar',
                        barColor: '#ff6264'
                    });
                    $('.inlinebar-2').sparkline('html', {
                        type: 'bar',
                        barColor: '#445982'
                    });
                    $('.inlinebar-3').sparkline('html', {
                        type: 'bar',
                        barColor: '#00b19d'
                    });
                    $('.bar').sparkline([
                        [1, 4],
                        [2, 3],
                        [3, 2],
                        [4, 1]
                    ], {
                        type: 'bar'
                    });
                    $('.pie').sparkline('html', {
                        type: 'pie',
                        borderWidth: 0,
                        sliceColors: ['#3d4554', '#ee4749', '#00b19d']
                    });
                    $('.linechart').sparkline();
                    $('.pageviews').sparkline('html', {
                        type: 'bar',
                        height: '30px',
                        barColor: '#ff6264'
                    });
                    $('.uniquevisitors').sparkline('html', {
                        type: 'bar',
                        height: '30px',
                        barColor: '#00b19d'
                    });

                    $(".monthly-sales").sparkline([1, 2, 3, 5, 6, 7, 2, 3, 3, 4, 3, 5, 7, 2, 4, 3, 5, 4, 5, 6, 3, 2], {
                        type: 'bar',
                        barColor: '#485671',
                        height: '80px',
                        barWidth: 10,
                        barSpacing: 2
                    });

                    // JVector Maps
                    var map = $("#map");
                    map.vectorMap({
                        map: 'europe_merc_en',
                        zoomMin: '3',
                        backgroundColor: '#383f47',
                        focusOn: {
                            x: 0.5,
                            y: 0.8,
                            scale: 3
                        }
                    });

                    // Line Charts
                    var line_chart_demo = $("#line-chart-demo");
                    var line_chart = Morris.Line({
                        element: 'line-chart-demo',
                        data: [{
                                y: '2006',
                                a: 100,
                                b: 90
                            },
                            {
                                y: '2007',
                                a: 75,
                                b: 65
                            },
                            {
                                y: '2008',
                                a: 50,
                                b: 40
                            },
                            {
                                y: '2009',
                                a: 75,
                                b: 65
                            },
                            {
                                y: '2010',
                                a: 50,
                                b: 40
                            },
                            {
                                y: '2011',
                                a: 75,
                                b: 65
                            },
                            {
                                y: '2012',
                                a: 100,
                                b: 90
                            }
                        ],
                        xkey: 'y',
                        ykeys: ['a', 'b'],
                        labels: ['October 2013', 'November 2013'],
                        redraw: true
                    });
                    line_chart_demo.parent().attr('style', '');

                    // Donut Chart
                    var donut_chart_demo = $("#donut-chart-demo");
                    donut_chart_demo.parent().show();
                    var donut_chart = Morris.Donut({
                        element: 'donut-chart-demo',
                        data: [{
                                label: "Download Sales",
                                value: getRandomInt(10, 50)
                            },
                            {
                                label: "In-Store Sales",
                                value: getRandomInt(10, 50)
                            },
                            {
                                label: "Mail-Order Sales",
                                value: getRandomInt(10, 50)
                            }
                        ],
                        colors: ['#707f9b', '#455064', '#242d3c']
                    });
                    donut_chart_demo.parent().attr('style', '');

                    // Area Chart
                    var area_chart_demo = $("#area-chart-demo");
                    area_chart_demo.parent().show();
                    var area_chart = Morris.Area({
                        element: 'area-chart-demo',
                        data: [{
                                y: '2006',
                                a: 100,
                                b: 90
                            },
                            {
                                y: '2007',
                                a: 75,
                                b: 65
                            },
                            {
                                y: '2008',
                                a: 50,
                                b: 40
                            },
                            {
                                y: '2009',
                                a: 75,
                                b: 65
                            },
                            {
                                y: '2010',
                                a: 50,
                                b: 40
                            },
                            {
                                y: '2011',
                                a: 75,
                                b: 65
                            },
                            {
                                y: '2012',
                                a: 100,
                                b: 90
                            }
                        ],
                        xkey: 'y',
                        ykeys: ['a', 'b'],
                        labels: ['Series A', 'Series B'],
                        lineColors: ['#303641', '#576277']
                    });
                    area_chart_demo.parent().attr('style', '');


                    // Rickshaw
                    var seriesData = [
                        [],
                        []
                    ];
                    var random = new Rickshaw.Fixtures.RandomData(50);
                    for (var i = 0; i < 50; i++) {
                        random.addData(seriesData);
                    }
                    var graph = new Rickshaw.Graph({
                        element: document.getElementById("rickshaw-chart-demo"),
                        height: 193,
                        renderer: 'area',
                        stroke: false,
                        preserve: true,
                        series: [{
                            color: '#73c8ff',
                            data: seriesData[0],
                            name: 'Upload'
                        }, {
                            color: '#e0f2ff',
                            data: seriesData[1],
                            name: 'Download'
                        }]
                    });
                    graph.render();
                    var hoverDetail = new Rickshaw.Graph.HoverDetail({
                        graph: graph,
                        xFormatter: function(x) {
                            return new Date(x * 1000).toString();
                        }
                    });
                    var legend = new Rickshaw.Graph.Legend({
                        graph: graph,
                        element: document.getElementById('rickshaw-legend')
                    });
                    var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight({
                        graph: graph,
                        legend: legend
                    });
                    setInterval(function() {
                        random.removeData(seriesData);
                        random.addData(seriesData);
                        graph.update();
                    }, 500);
                });

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
            </script>

            <!-- box  -->
            <div class="row">
                <div class="col-sm-3 col-xs-6">
                    <div class="tile-stats tile-red">
                        <div class="icon"><i class="entypo-users"></i></div>
                        <?php

                        $user = $_SESSION['user_id'];
                        $query = mysqli_query($connection, "SELECT * FROM `history` WHERE  `user` = '$user' ");
                        $amount = mysqli_num_rows($query);

                        ?>
                        <div class="num" data-start="0" data-end="83" data-postfix="" data-duration="1500" data-delay="0"><?php echo $amount ?></div>
                        <h3>Total Purchase</h3>
                        <p>total number of purchased product.</p>
                    </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                    <div class="tile-stats tile-green">
                        <?php

                        $user = $_SESSION['user_id'];
                        $query = mysqli_query($connection, "SELECT * FROM `history` WHERE  `user` = '$user' AND  `status`='pending' ");
                        $amount = mysqli_num_rows($query);

                        ?>
                        <div class="icon"><i class="entypo-chart-bar"></i></div>
                        <div class="num" data-start="0" data-end="135" data-postfix="" data-duration="1500" data-delay="600"><?php echo $amount ?></div>
                        <h3>Pending Purchase</h3>
                        <p>total number of pending product</p>
                    </div>
                </div>
                <div class="clear visible-xs"></div>
                <div class="col-sm-3 col-xs-6">
                    <div class="tile-stats tile-aqua">
                        <div class="icon"><i class="entypo-mail"></i></div>
                        <?php

                        $user = $_SESSION['user_id'];
                        $query = mysqli_query($connection, "SELECT * FROM `history` WHERE  `user` = '$user' AND  `status`='approved' ");
                        $amount = mysqli_num_rows($query);

                        ?>
                        <div class="num" data-start="0" data-end="23" data-postfix="" data-duration="1500" data-delay="1200"><?php echo $amount ?></div>
                        <h3>Approved Purchase</h3>
                        <p>total number of approve product.</p>
                    </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                    <div class="tile-stats tile-blue">

                        <?php

                        $user = $_SESSION['user_id'];
                        $query = mysqli_query($connection, "SELECT * FROM `history` WHERE  `user` = '$user' AND  `status`='declined' ");
                        $amount = mysqli_num_rows($query);

                        ?>
                        <div class="icon"><i class="entypo-rss"></i></div>
                        <div class="num" data-start="0" data-end="52" data-postfix="" data-duration="1500" data-delay="1800"><?php echo $amount ?></div>
                        <h3>Declined Purchase</h3>
                        <p>total number of declined product.</p>
                    </div>
                </div>
            </div>

            <!-- table -->

            <ol class="breadcrumb bc-3">
                <li> <a href=""><i class="fa-home"></i>Home</a> </li>
                <li class="active"> <strong>Dashboard</strong> </li>
            </ol>
            <h2>Transaction History</h2> <br>

            <div class="col-md-12">
                <div class="table-wrapper">
                    <div class="rt-scrollable" style="overflow-x: scroll;">
                        <table class="table table-bordered responsive">
                            <thead>
                                <tr>
                                    <th width="15%" style=" white-space: nowrap;">*</th>
                                    <th style=" white-space: nowrap;">PRODUCT NAME </th>
                                    <th style=" white-space: nowrap;">QUALITY</th>
                                    <th style=" white-space: nowrap;">PRICE</th>
                                    <th width="33%" style=" white-space: nowrap;">STATUS</th>
                                    <th style=" white-space: nowrap;">DATE</th>

                                </tr>
                            </thead>
                            <tbody>


                                <?php

                                $user = $_SESSION['user_id'];
                                $query = mysqli_query($connection, "SELECT * FROM history h
                                JOIN products p ON h.product_id = p.id
                                WHERE h.user = '$user'");
                                if (mysqli_num_rows($query) > 0) {

                                    $count = 0;
                                    while ($data = mysqli_fetch_assoc($query)) { $count++
                                         ?>


                                        <tr>
                                            <td style=" white-space: nowrap;"><?php echo $count ?></td>
                                            <td style=" white-space: nowrap;"><?php echo $data['name'] ?></td>
                                            <td style=" white-space: nowrap;"><?php echo $data['quality'] ?></td>
                                            <td style=" white-space: nowrap;"><?php echo $data['price'] ?></td>
                                            <?php

                                                if ($data['status'] == 'approved'){?>

                                                        <td style=" white-space: nowrap;color:green;"><?php echo $data['status'] ?></td>

                                              <?php  }elseif ($data['status'] == 'pending') {?>
                                               

                                                <td style=" white-space: nowrap;color:yellow;"><?php echo $data['status'] ?></td>

                                             <?php }else { ?>


                                                <td style=" white-space: nowrap;color:red;"><?php echo $data['status'] ?></td>
                                               
                                             <?php }


                                            ?>
                                            <td style=" white-space: nowrap;"><?php echo $data['date'] ?></td>
                                        </tr>

                                    <?php  }
                                } else { ?>

                                    <tr>
                                        <td style=" white-space: nowrap;color:red;">you havent made any purchase yet </td>
                                    </tr>


                                <?php   }

                                ?>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


            <script type="text/javascript">
                // Code used to add Todo Tasks
                jQuery(document).ready(function($) {
                    function escapeHtml(text) {
                        var map = {
                            '&': '&amp;',
                            '<': '&lt;',
                            '>': '&gt;',
                            '"': '&quot;',
                            "'": '&#039;'
                        };
                        return text.replace(/[&<>"']/g, function(m) {
                            return map[m];
                        });
                    }
                    var $todo_tasks = $("#todo_tasks");
                    $todo_tasks.find('input[type="text"]').on('keydown', function(ev) {
                        if (ev.keyCode == 13) {
                            ev.preventDefault();
                            if ($.trim($(this).val()).length) {
                                var $todo_entry = $('<li><div class="checkbox checkbox-replace color-white"><input type="checkbox" /><label>' + escapeHtml($(this).val()) + '</label></div></li>');
                                $(this).val('');
                                $todo_entry.appendTo($todo_tasks.find('.todo-list'));
                                $todo_entry.hide().slideDown('fast');
                                replaceCheckboxes();
                            }
                        }
                    });
                });
            </script>

        </div>
        <link rel="stylesheet" href="../assets/js/jvectormap/jquery-jvectormap-1.2.2.css" id="style-resource-1">
        <link rel="stylesheet" href="../assets/js/rickshaw/rickshaw.min.css" id="style-resource-2">
        <script src="../assets/js/gsap/TweenMax.min.js" id="script-resource-1"></script>
        <script src="../assets/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js" id="script-resource-2"></script>
        <script src="../assets/js/bootstrap.js" id="script-resource-3"></script>
        <script src="../assets/js/joinable.js" id="script-resource-4"></script>
        <script src="../assets/js/resizeable.js" id="script-resource-5"></script>
        <script src="../assets/js/neon-api.js" id="script-resource-6"></script>
        <script src="../assets/js/cookies.min.js" id="script-resource-7"></script>
        <script src="../assets/js/jvectormap/jquery-jvectormap-1.2.2.min.js" id="script-resource-8"></script>
        <script src="../assets/js/jvectormap/jquery-jvectormap-europe-merc-en.js" id="script-resource-9"></script>
        <script src="../assets/js/jquery.sparkline.min.js" id="script-resource-10"></script>
        <script src="../assets/js/rickshaw/vendor/d3.v3.js" id="script-resource-11"></script>
        <script src="../assets/js/rickshaw/rickshaw.min.js" id="script-resource-12"></script>
        <script src="../assets/js/raphael-min.js" id="script-resource-13"></script>
        <script src="../assets/js/morris.min.js" id="script-resource-14"></script>
        <script src="../assets/js/toastr.js" id="script-resource-15"></script>
        <script src="../assets/js/neon-chat.js" id="script-resource-16"></script>
        <div id="ascrail2000" class="nicescroll-rails" style="padding-right: 3px; width: 10px; z-index: 5; cursor: default; position: absolute; top: 0px; left: -10px; height: 100px; display: none;">
            <div style="position: relative; top: 0px; float: right; width: 5px; height: 0px; background-color: rgb(69, 74, 84); border: 1px solid rgb(69, 74, 84); background-clip: padding-box; border-radius: 1px;"></div>
        </div>
        <div id="ascrail2000-hr" class="nicescroll-rails" style="height: 7px; z-index: 5; top: 93px; left: 0px; position: absolute; cursor: default; display: none;">
            <div style="position: relative; top: 0px; height: 5px; width: 0px; background-color: rgb(69, 74, 84); border: 1px solid rgb(69, 74, 84); background-clip: padding-box; border-radius: 1px;"></div>
        </div> <!-- JavaScripts initializations and stuff -->
        <script src="../assets/js/neon-custom.js" id="script-resource-17"></script> <!-- Demo Settings -->
        <script src="../assets/js/neon-demo.js" id="script-resource-18"></script>
        <script src="../assets/js/neon-skins.js" id="script-resource-19"></script>
        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-28991003-7']);
            _gaq.push(['_setDomainName', 'demo.neontheme.com']);
            _gaq.push(['_trackPageview']);
            (function() {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        </script>
        <div class="jvectormap-label"></div>
        <!-- <div class="jvectormap-label"></div><textarea tabindex="-1" style="position: absolute; inset: -999px auto auto 0px; border: 0px; padding: 0px; box-sizing: content-box; overflow-wrap: break-word; overflow: hidden; transition: none; height: 0px !important; min-height: 0px !important; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Noto Sans&quot;, sans-serif; font-size: 12px; font-weight: 400; font-style: normal; letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: 17.1429px;" class="autosizejs"></textarea> -->
</body>

</html>
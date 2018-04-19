<!DOCTYPE html>
<html>
<head>
    <!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Font Awesome CDN -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script> 
    <!-- Roboto Font -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>   
    <!-- Popper.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>  
    <!-- Bootstrap core -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <!-- Bootstrap overwrites -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <!-- Custom Style -->
    <link href="css/style.css" rel="stylesheet">

    <title>Quadro Docente</title>
    
</head>

<body>

	<div class="container mt-10">
		<img class="img-80" src="img/ifc-h.png">
    </div>
	<div class = "container">
		<div class="results">
            <?php
                // Connect to db (MySQL) hosted on hostinger
                $connect = mysqli_connect("mysql.hostinger.com.br", "u535468846_lab", "labmatii", 'u535468846_quad');
                // Starts a query who selects all teachers that works on X campus
                $query = mysqli_query($connect, 
                "SELECT * from `professor` as p 
                    inner join `professor_campus` as pc 
                        on pc.id_professor = p.id_professor
                        where id_campus = 0
                ");
                // Defines count as a variable who'll set the collapses's id (can't find a smarter solution, please help me)
                $count = 0;
                // Do a bunch of spaghetti code to show db's data as a bootstrap collapse
                while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){

                $nome = $row['nome_professor'];
                $lattes = $row['lattes_professor'];
                $email = $row['email_professor'];    

                echo    "<div class='panel-group'>
                            <div class='panel panel-default'>
                                <a class='collapselink' data-toggle='collapse' href='#collapse".$count."'>";
                            echo    "<div class='panel-heading'>
                                        <h4 class='panel-title'>";
                                            echo $nome;
                            echo       '</h4>
                                    </div>
                                </a>';
                            echo "<div id='collapse".$count."' class='panel-collapse collapse'>";
                            echo  '<div class="panel-body">';
                                echo $email;
                                echo "</div>
                                    <a href='".$lattes."' target='_blank'>";
                                echo    '<div class="panel-footer"> 
                                            Currículo Lattes 
                                        </div>
                                    </a>
                            </div>
                            </div>
                        </div>';
                $count++;    
                }
            ?>
		</div>
    </div>
    
    <!-- Custom script-->
	<script src='js/cmb.js'></script>

</body>
</html>
function clickme(){
    if(confirm("Do you really Want to Read ?"))
    {
        document.getElementById("demo").innerHTML = "Read";
        <?php
        echo '<div class="alert alert-info alert_dismissible"><b><button type="button" class="close" data-dismiss="alert">&times;</button></b><b>Pending Request "Read".</b></div>';

        $que_id = $_GET['id'];
         $sql1="update contact_query set query_status='1' where  query_id={$que_id}";
          $result=mysqli_query($conn,$sql1);
        ?>
    }
  }
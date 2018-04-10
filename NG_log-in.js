function goIn()
{
	var logins = document.getElementById('logins')
	var pas = document.getElementById('pas')

    if (logins.value == 'admin' && pas.value == '12345')	{
    	//document.location.href = 'index.html';
			$("#admin-mode").html("admin mode on");
			$("#admin-mode").addClass("btn btn-success").removeClass('btn-warning');
			$("#closebtn").click();
			set_Admin_On();
			return true;
		}	else {
			alert("Wrong log-in, Please try again!");
			return false;
		}
}
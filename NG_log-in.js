function goIn()
{
	var logins = document.getElementById('logins')
	var pas = document.getElementById('pas')
	
    if (logins.value == 'admin' && pas.value == '12345')
    document.location.href = 'index.html';

	else
		alert("Wrong log-in, Please try again!");		
}
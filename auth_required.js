var auth_token = localStorage.getItem('token');
if(auth_token===null)
{
    window.location.href='login/index.html';
    console.log("I have not been authorized");
}
/***
 * @todo Redirect the user to login page if token is not present.
 */
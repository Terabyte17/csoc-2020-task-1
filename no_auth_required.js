var auth_token = localStorage.getItem('token');
if(auth_token!==null)
{
    window.location.href='/';
    console.log("I have been authorized");
}

/***
 * @todo Redirect the user to main page if token is present.
 */
var auth_token = localStorage.getItem('token');
if(auth_token === undefined)
{
    window.location.href='/login';
}
/***
 * @todo Redirect the user to login page if token is not present.
 */
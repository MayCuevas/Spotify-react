


const getToken = () => {
  const urlBase =  'https://accounts.spotify.com/authorize';
  const clientID = process.env.REACT_APP_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/'
  const url = `${urlBase}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&show_dialog=true`;
    window.location.href = url;
}



const Login =  () => {
  
  const currentUrl = window.location.href.split('access_token=')[1];
  const LocationToken = currentUrl ? currentUrl.split('&')[0] : null;
  if (LocationToken) {
    localStorage.setItem('auth', LocationToken);
   window.setInterval(() => {
      localStorage.clear();
      getToken();
    },300000);
  }else{
    getToken();
  }
}

export default Login;
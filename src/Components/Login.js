import React, {Component} from 'react';
import GitHubLogin from 'react-github-login';

class Login extends Component{
    render(){
        const onSuccessGitHub =(response)=>{
            console.log("Response is",response);
        }
        return(
            <div className="App" align="center">
                <h1> Login with Githun</h1>
                <GitHubLogin clientId="bbbc69cb0307be6ce509" onSuccess={onSuccessGitHub} buttonText="Login with github" className="git-login" valid="true"
                redirectUri="e9d5a2d0e4f9ce4daf5b5c5b8aaeaa56fe4f52e1" />
            </div>
        )
    }
}
export default Login;
import React, { Component } from 'react';
import BackHeader from "../components/layout/backheader"

class LoginPage extends Component {
    state = {
        username: "",
        password: ""
    }
    login = async (e) => {
        e.preventDefault()
  
        const res = await fetch('http://127.0.0.1/api/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: this.state.username, checkPassword: this.state.password}),
        })
        const result = await res.json()
        console.log(result)
    }
    render() { 
        return (
            <>
            <BackHeader img={"https://images.igdb.com/igdb/image/upload/t_original/bktrfgfwqohj8xnlq7pk.jpg"} />
            <div className="container">
                <form method="POST" onSubmit={this.login}>
                    <input type="text" name="username" 
                    value={this.state.username} 
                    onChange={ (e) => {this.setState({username: e.target.value})}}/>
                    <input type="password" name="checkPassword" 
                    value={this.state.password} 
                    onChange={ (e) => {this.setState({password: e.target.value})}}/>
                    <input type="submit" />
                </form>
            </div>
            </>
            )
    }
}
 
export default LoginPage
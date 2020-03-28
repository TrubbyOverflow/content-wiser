import React from 'react';

class Login extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onUsernameChanged = this.onUsernameChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleSignIn = async e => {
        e.preventDefault();
        const {
            username,
            password
        } = this.state;

        if (!username || !password) {
            this.setState({error: "Usuário e/ou senha inválido"});
            return;
        }

        
    }

    onUsernameChanged(e) {
        this.setState({ username: e.target.value });
    }

    onPasswordChanged(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        const {
            username,
            password,
            error,
        } = this.state;
        
        return (
            <div>
                <form onSubmit={this.handleSignIn}>
                    <div>
                        <label>Login</label>
                        <input type="text"
                            value={username}
                            onChange={this.onUsernameChanged}>
                        </input>
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password"
                            value={password}
                            onChange={this.onPasswordChanged}>    
                        </input>
                    </div>
                    <div>
                        {error}
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}

export default Login
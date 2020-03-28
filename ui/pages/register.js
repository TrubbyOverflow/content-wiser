import React from 'react';
import withData from '../lib/apollo'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleSignIn = async e => {
        e.preventDefault();
        const {
            email,
            username,
            password
        } = this.state;

        //todo send to backend
    }

    handleChange(e, type) {
        this.setState({ [type]: e.target.value });
    }

    render() {
        const {
            error
        } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSignIn}>
                    <div>
                        <label>Email</label>
                        <input type="text"
                            onChange={ (e) => this.handleChange(e, 'email') }>
                        </input>
                    </div>
                    <div>
                        <label>Username</label>
                        <input type="text"
                            onChange={ (e) => this.handleChange(e, 'username') }>
                        </input>
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password"
                            onChange={ (e) => this.handleChange(e, 'password') }>
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
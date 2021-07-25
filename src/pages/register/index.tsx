import { Link } from 'react-router-dom';
import './index.scss';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useState } from 'react';
import AccountModel from '../../models/account.model';
import _accountService from '../../services/account.service';
function RegisterPage() {

    const [account, setAccount] = useState(new AccountModel());
    const handleRegister = (e: any) => {
        e.preventDefault();
        _accountService.register(account).then(response => {
            console.log('reson:', response);
        });
    }
    return (
        <div className="register">
            <div className="register-wrapper">
                <div className="logo">
                    <img src="./assets/dang-nhap/logo.svg" alt="logo" />
                </div>
                <div className="create">
                    <form className="create-wrapper" onSubmit = {handleRegister}>
                        <h1 className="create-title">Register</h1>
                        <div className="create-contain">
                            <div className="create-left">
                                <p className="create-description">Using social networking accounts</p>
                                <div className="create-social">
                                    <a className="btn btn-google" href="!#">
                                        <img src="./assets/register/google.svg" alt="google" />
                                        <span>Connect with Google</span>
                                    </a>
                                    <a className="btn btn-facebook" href="!#">
                                        <img src="./assets/register/facebook.svg" alt="facebook" />
                                        <span>Conect with Facebook</span>
                                    </a>
                                    <a className="btn btn-apple" href="!#">
                                        <img src="./assets/register/apple.svg" alt="apple" />
                                        <span>Sign in with Apple</span>
                                    </a>
                                </div>
                            </div>
                            <div className="create-right">
                                <p className="create-description">Using Money Lover account</p>
                                <br/>
                                <div className="p-field p-col-12">
                                    <span className="p-float-label">
                                        <InputText id="inputtext" value = {account.UserName} name = "UserName" onChange = {(e) => setAccount({...account, UserName: e.target.value})}/>
                                        <label htmlFor="inputtext">User Name</label>
                                    </span>
                                </div>
                                <div className="p-field p-col-12">
                                    <span className="p-float-label">
                                        <Password inputId="password" style = {{width: "100%"}} value = {account.Password} name = "Password" onChange = {(e) => setAccount({...account, Password: e.target.value})}/>
                                        <label htmlFor="password">Password</label>
                                    </span>
                                </div>
                                <div className="p-field p-col-12">
                                    <span className="p-float-label">
                                        <InputText id="inputtext" value = {account.FirstName} name = "FirstName" onChange = {(e) => setAccount({...account, FirstName: e.target.value})}/>
                                        <label htmlFor="inputtext">Name</label>
                                    </span>
                                </div>
                                <div className="p-field p-col-12">
                                    <span className="p-float-label">
                                        <InputText id="inputtext" value = {account.Email} name = "Email" onChange = {(e) => setAccount({...account, Email: e.target.value})} />
                                        <label htmlFor="inputtext">Email</label>
                                    </span>
                                </div>
                                <div className="p-field p-col-12">
                                    <span className="p-float-label">
                                        <InputText id="inputtext" value = {account.Phone} name = "Phone" onChange = {(e) => setAccount({...account, Phone: e.target.value})}/>
                                        <label htmlFor="inputtext">Phone</label>
                                    </span>
                                </div>
                                <span className="forgot-password">
                                        <Link to = "/forgot-password">Forgot Password</Link>
                                    </span>
                                <button type="submit" className="btn create-button">Register</button>
                                <p className="create-account"> Have you an account?
                                    <Link to="/login"> Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
import React from 'react';

const Login = () => {
    return(
        <>
            <section className='login_sec'>
                <div className='custom-container'>
                    <div className='login_inner'>
                        <div className='loginForm'>
                            <h3 className='formttl'>Login</h3>
                            <form action=''>
                                <div className='formGrp'>
                                    <input type='email' placeholder='Email' />
                                </div>
                                <div className='formGrp'>
                                    <input type='password' placeholder='Password' />
                                </div>
                                <div className='form_Submit'>
                                    <input type='submit' value='Login' className='btn btn_success btn_sm' />
                                </div>
                                <div class="msg">Not registered? <a href="#">Create an account</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;
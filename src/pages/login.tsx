import React, { useState } from 'react'
import { Image, Container, Content, Title } from '../../styles/login';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

type Props = {

}

const Login = (props: Props) => {
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const [noEmail, setNoEmail] = useState(false);
    const [noPassword, setNoPassword] = useState(false);

    const { user, login } = useAuth();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setInvalidCredentials(false);
        if (data.email === '') {
            setNoEmail(true)
        } else {
            setNoEmail(false)
        }
        if (data.password === '') {
            setNoPassword(true)
        } else {
            setNoPassword(false)
        }
        if (data.email !== '' && data.password !== '') {
            try {
                await login(data.email, data.password)
                setInvalidCredentials(false)
                router.push("/")
            } catch (error) {
                setInvalidCredentials(true)
            }
            return
        }
    }

    return (
        <div className="wrapper d-flex align-items-stretch">
            <div className='row d-flex g-0 w-100'>
                <div className='col-sm-12 col-md-6'>
                    <Image src="/bird.jpg" />
                </div>
                <div className='col-sm-12 col-md-6'>
                    <Container>
                        <Content >
                            <Title>Log In</Title>
                            {invalidCredentials &&
                                <div className="alert alert-danger" role="alert">
                                    Invalid Credentials
                                </div>
                            }
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                                    <input type="email"
                                        className={`form-control ${noEmail && "is-invalid"}`}
                                        id="inputEmail"
                                        placeholder='Enter email'
                                        onChange={(e: any) => setData({ ...data, email: e.target.value })}
                                        value={data.email}
                                    />
                                    {noEmail &&
                                        <div className="invalid-feedback">
                                            Email required.
                                        </div>
                                    }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPassword" className="form-label">Password</label>
                                    <input type="password"
                                        className={`form-control ${noPassword && "is-invalid"}`}
                                        id="inputPassword"
                                        placeholder='Enter password'
                                        onChange={(e: any) => setData({ ...data, password: e.target.value })}
                                        value={data.password}
                                    />
                                    {noPassword &&
                                        <div className="invalid-feedback">
                                            Password required.
                                        </div>
                                    }
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Log In</button>
                            </form>
                        </Content>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Login;
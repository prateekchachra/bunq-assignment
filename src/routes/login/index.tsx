// To chat sign in
// username
// password
// sign in - users inside PhP userbase
import { Button } from 'components/button';
import { LabeledInput } from 'components/labeled-input';
import { Title } from 'components/title';
import React, {useState} from 'react';
import { styled } from 'styled-components';

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Login = () => {

  const [userDetails, setUserDetails] = useState({username: "", password: ""})
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(userDetails);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserDetails(Object.assign(userDetails, { [name]: value }));
  };
    return (<div>
      <Title>Welcome! Please login to proceed</Title>
         <Form onSubmit={handleSubmit}>
          <LabeledInput
            type="email"
            name="email"
            label="User Name"
            value={userDetails.username}
            onChange={handleChange}
          />
          <LabeledInput
            type="password"
            name="password"
            label="Password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <Button>Login</Button>
        </Form>

        </div>
    );
}

export default Login;
import axios from 'axios'
import React, {useState} from 'react'

export const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAPI = async() => {
        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email : email,
                password : password
            },
        {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }
    );
        console.log(response.data);
        alert('Success : ' + response.data.token);
        } catch (error) {
            console.error(error);
            alert('Wrong email or password');
        }
    }
  return (
    <div className="user-auth">
      <h2>Login</h2>
      <form method="POST">
        <input type="text" placeholder="Username/Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" onClick={handleAPI}>Login</button>
      </form>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      </div>
  )
}

export default UserAuth;

// components/Signup.tsx
import React, { useState } from "react";

interface SignupProps {
  onSignup: (username: string, email: string, password: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Validate input and perform signup
    onSignup(username, email, password);
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
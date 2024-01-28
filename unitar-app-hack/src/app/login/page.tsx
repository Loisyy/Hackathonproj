"use client"
import React, { useState } from "react";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate input and perform login
    onLogin(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
    <div className="border flex m-auto bg-blue-200 flex-col w-fit rounded-lg gap-4 py-4 px-8 shadow-2xl" >
      <h2 className="text-[1.2em] text-center font-bold">Login</h2>
      <form action="" className="flex flex-col">


      <div className="flex gap-2 mb-2 flex-col">
        <label className="text-xl">Email:</label>
        <input
          type="email"
          className="border p-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex gap-2 mb-2 flex-col">
        <label className="text-xl">Password:</label>
        <input
          type="password"
          className="border p-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="bg-blue-900 text-white mt-4 py-2 rounded-lg text-2xl font-bold" onClick={handleLogin} >Log In</button>
      </form>
      
    </div>
    </div>
  );
};

export default Login;

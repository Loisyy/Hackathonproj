"use client"
import React, { useState } from "react";


const Login = () => {
  return (
    <div className="bg-orange text-darkGray p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Log In to InclusiveCommTech</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-lg font-semibold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border-2 border-lightGray rounded-md p-2 w-full"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 border-lightGray rounded-md p-2 w-full"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-deepPurple text-lightGray font-bold rounded-full py-3 px-6 hover:bg-deepPurple-700 hover:text-lightGray"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
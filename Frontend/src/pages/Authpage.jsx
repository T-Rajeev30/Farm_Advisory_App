import React, { useState } from "react";

const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Mock user data stored in localStorage for a simple prototype
  const mockUsers = JSON.parse(localStorage.getItem("mockUsers")) || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const user = mockUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setMessage("Login successful!");
      onLogin(); // Call the onLogin prop to update App.jsx state
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    const userExists = mockUsers.find((u) => u.email === formData.email);
    if (userExists) {
      setError("An account with this email already exists. Please log in.");
      return;
    }

    const newUser = { ...formData, id: mockUsers.length + 1 };
    const updatedUsers = [...mockUsers, newUser];
    localStorage.setItem("mockUsers", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setMessage("Account created successfully! You can now log in.");
    setIsLogin(true); // Automatically switch to login form after sign-up
    setFormData({ email: "", password: "", name: "" });
  };

  const isFormValid = isLogin
    ? formData.email && formData.password
    : formData.email && formData.password && formData.name;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back" : "Join Us"}
        </h2>

        <form
          onSubmit={isLogin ? handleLogin : handleSignUp}
          className="space-y-4"
        >
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors shadow-sm ${
              isFormValid
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-green-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-600 hover:underline ml-1 font-medium"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

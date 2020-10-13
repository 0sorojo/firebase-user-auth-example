import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login-page">
      <div className="login-container">
        <label>Email:</label>
        <input
          type="email"
          autoFocus
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="error-message">{emailError}</p>
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="error-message">{passwordError}</p>
        <div className="button-container">
          {hasAccount ? (
            <>
              <button onClick={handleLogIn}>Sign In</button>
              <p>
                Don't Have an Account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Already Have an Account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;

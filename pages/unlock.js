import { useState } from "react";

export default function Unlock() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/unlock", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    if (res.status === 200) {
      window.location.href = "/";
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        padding: "40px",
        background: "white",
        borderRadius: "12px",
        width: "350px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Enter Password</h2>

        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ddd"
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              background: "black",
              color: "white",
              fontWeight: "bold",
              border: "none"
            }}
          >
            Unlock
          </button>
        </form>

        {error && <p style={{ marginTop: "10px", color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/userState";

export default function Login() {
  const [username, setUsername] = useState("");
  const setUser = useSetRecoilState(userState);

  const handleLogin = () => {
    if (username.trim()) {
      setUser({ username });
      setUsername("");
    } else {
      alert("Vui lòng nhập UserName");
    }
  };

  return (
    <div>
      <input style={{ fontSize: "25px", fontFamily: "15px", borderRadius: "5px" }}
        placeholder="Nhập username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button style={{ fontSize: "25px", borderRadius: "5px", color: "orange" }} onClick={handleLogin}>Login</button>
    </div>
  );
}
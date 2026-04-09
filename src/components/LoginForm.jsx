import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil/authState";

const LoginForm = () => {
    // state lưu input user nhập
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //  dùng để cập nhật global state
    const setAuth = useSetRecoilState(authState);

    //  giả lập API login
    const loginAPI = async (user, pass) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "Nhung" && pass === "123") {
                    resolve({ token: "fake-token-123" });
                } else {
                    reject("Sai tài khoản hoặc mật khẩu");
                }
            }, 1000);
        });
    };

    const handleLogin = async () => {
        try {
            //  gọi API
            const res = await loginAPI(username, password);

            //  lưu vào recoil (global state)
            setAuth({
                token: res.token,
                isAuthenticated: true,
            });

            //  lưu vào localStorage (để reload vẫn còn login)
            localStorage.setItem("token", res.token);

            alert("Login thành công!");
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <h2 style={{ color: "blueviolet", fontSize: "26px" }}>Login</h2>

            {/* input username */}
            <input
                style={{ fontSize: "16px", borderRadius: "5px", fontFamily: "5px" }}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />

            {/* input password */}
            <input
                style={{ fontSize: "16px", borderRadius: "5px" }}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* nút login */}
            <button style={{ fontSize: "16px", borderRadius: "5px", margin: "5px" }} onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;
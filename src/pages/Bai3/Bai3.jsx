import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/userState";
import Login from "./Login";
import Logout from "./Logout";

export default function Bai3() {
  const user = useRecoilValue(userState);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ color: "darkorange", padding: "20px" }}>Bài 3: Auth giả lập (Login / Logout)</h1>
      {user ? (
        <>
          <p style={{ color: "white", fontSize: "35px", padding: "20px" }}>Xin chào, <strong>{user.username}</strong>!</p>
          <Logout />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
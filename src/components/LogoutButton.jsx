import { useResetRecoilState } from "recoil";
import { authState } from "../recoil/authState";

const LogoutButton = () => {
    // reset toàn bộ auth state về default
    const resetAuth = useResetRecoilState(authState);

    const handleLogout = () => {
        // reset recoil
        resetAuth();

        // xóa token khỏi localStorage
        localStorage.removeItem("token");

        alert("Đã logout!");
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
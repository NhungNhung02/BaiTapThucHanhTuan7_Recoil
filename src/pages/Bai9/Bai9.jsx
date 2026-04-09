import { useRecoilValue } from "recoil";
import { authState } from "../../recoil/authState";

import LoginForm from "../../components/LoginForm";
import Profile from "../../components/Profile";
import LogoutButton from "../../components/LogoutButton";

const Bai9 = () => {
    // đọc trạng thái login
    const auth = useRecoilValue(authState);

    return (
        <div>
            <h1>Bài 9: Auth + Token</h1>

            {/* chưa login */}
            {!auth.isAuthenticated && <LoginForm />}

            {/* đã login */}
            {auth.isAuthenticated && (
                <>
                    <Profile />
                    <LogoutButton />
                </>
            )}
        </div>
    );
};

export default Bai9;
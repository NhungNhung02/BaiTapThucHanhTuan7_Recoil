import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil/authState";

const Profile = () => {
    // lấy token từ global state
    const auth = useRecoilValue(authState);

    // state lưu dữ liệu user
    const [profile, setProfile] = useState(null);

    // giả lập API cần token
    const getProfileAPI = async (token) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (token) {
                    resolve({
                        name: "Nhung",
                        role: "Quản trị viên",
                    });
                } else {
                    reject("Unauthorized");
                }
            }, 1000);
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProfileAPI(auth.token);
                setProfile(data);
            } catch (err) {
                alert(err);
            }
        };

        // chỉ gọi API khi có token
        if (auth.token) {
            fetchData();
        }
    }, [auth.token]);

    return (
        <div>
            <h2 style={{ fontSize: "25px", color: "blue" }}>Profile</h2>

            {profile ? (
                <>
                    <p style={{ fontSize: "18px", color: "black", fontWeight: "bold" }}> Name: {profile.name}</p>
                    <p style={{ fontSize: "18px", color: "black", fontWeight: "bold" }}>Role: {profile.role}</p>
                </>
            ) : (
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
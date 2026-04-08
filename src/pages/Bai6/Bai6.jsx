import { useSetRecoilState } from "recoil";
import { notificationState } from "../../recoil/notificationState";
import Toast from "../../components/Toast";

export default function Bai6() {
    // Hook chỉ dùng để set state (không cần đọc)
    const setNoti = useSetRecoilState(notificationState);

    // Hàm hiển thị thông báo thành công
    const showSuccess = () => {
        setNoti({
            message: "Thành công!",
            type: "success"
        });
    };

    // Hàm hiển thị thông báo lỗi
    const showError = () => {
        setNoti({
            message: "Có lỗi xảy ra!",
            type: "error"
        });
    };

    return (
        <div>
            <h1 style={{ color: "blueviolet" }}>Bài 6 - Notification</h1>

            {/* Click để test */}
            <button onClick={showSuccess}>
                Show Success
            </button>

            <button onClick={showError} style={{ marginLeft: "10px" }}>
                Show Error
            </button>

            {/* Component global hiển thị thông báo */}
            <Toast />
        </div>
    );
}
import { useRecoilState } from "recoil";
import { notificationState } from "../recoil/notificationState";
import { useEffect } from "react";

export default function Toast() {
    // Lấy state global notification
    const [noti, setNoti] = useRecoilState(notificationState);

    // useEffect để xử lý auto ẩn sau 3 giây
    useEffect(() => {
        // nếu có thông báo thì mới chạy
        if (noti) {
            const timer = setTimeout(() => {
                setNoti(null);
                // sau 3s → xóa thông báo → Toast biến mất
            }, 3000);

            // cleanup: tránh tạo nhiều timer khi re-render
            return () => clearTimeout(timer);
        }
    }, [noti]);
    // mỗi lần noti thay đổi → effect chạy lại

    // nếu không có thông báo → không render gì
    if (!noti) return null;

    return (
        <div style={{
            fontStyle: "30px",
            position: "fixed", // hiển thị nổi trên màn hình
            top: "20px",
            right: "20px",
            background: noti.type === "error" ? "red" : "green",
            // nếu error → đỏ, còn lại → xanh
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
            fontSize: "16px",
            zIndex: 999 // đảm bảo luôn nằm trên cùng
        }}>
            {noti.message} {/* nội dung thông báo */}
        </div>
    );
}
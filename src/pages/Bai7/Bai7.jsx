import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { usersState } from "../../recoil/usersState";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import UserList from "../../components/UserList";

const Bai7 = () => {
    //  lấy global state + hàm setState
    const [state, setState] = useRecoilState(usersState);

    //  hàm gọi API
    const fetchUsers = async () => {
        try {
            //  bật loading trước khi gọi API
            setState((prev) => ({
                ...prev,
                loading: true,
                error: null, // reset lỗi
            }));

            //  gọi API thật
            const res = await fetch("https://jsonplaceholder.typicode.com/users");

            //  kiểm tra lỗi HTTP
            if (!res.ok) {
                throw new Error("Lỗi khi fetch dữ liệu");
            }

            const data = await res.json();

            //  nếu thành công → lưu data
            setState({
                data: data,
                loading: false,
                error: null,
            });

        } catch (err) {
            //  nếu lỗi → lưu error
            setState({
                data: [],
                loading: false,
                error: err.message,
            });
        }
    };

    //  gọi API khi component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Bài 7: Fetch Users</h1>

            {/*  nếu đang loading */}
            {state.loading && <Loading />}

            {/*  nếu có lỗi */}
            {state.error && <ErrorMessage error={state.error} />}

            {/*  nếu có data */}
            {!state.loading && !state.error && (
                <UserList users={state.data} />
            )}
        </div>
    );
};

export default Bai7;
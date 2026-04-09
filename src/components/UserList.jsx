// Component hiển thị danh sách user
const UserList = ({ users }) => {
    return (
        <div>
            <h3>Danh sách user</h3>

            {/* duyệt mảng users */}
            {users.map((user) => (
                <p key={user.id}>
                    {user.name} - {user.email}
                </p>
            ))}
        </div>
    );
};

export default UserList;
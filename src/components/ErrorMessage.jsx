const ErrorMessage = ({ error }) => {
    return (
        <p style={{ color: "red", fontSize: "18px" }}>
            Error: {error}
        </p>
    );
};

export default ErrorMessage;
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className="mt-auto">
            {!loading ? (
                <button
                    className="w-full h-6 text-white cursor-pointer btn btn-error"
                    onClick={logout}
                >
                    logout
                </button>
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    );
};
export default LogoutButton;

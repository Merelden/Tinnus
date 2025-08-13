import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import AuthForm from "../../features/auth/AuthForm";

const AuthPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated, isNewUser } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            if (isNewUser) {
                navigate("/done");
            } else {
                navigate("/profile");
            }
        }
    }, [isAuthenticated, isNewUser, navigate]);

    return (
        <div>
            <AuthForm />
        </div>
    );
};

export default AuthPage;

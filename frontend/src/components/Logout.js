import { useEffect } from "react";
import axios from "axios";

const backendUrl = 'https://django-mastodonhub-react-1.onrender.com';

const Logout = () => {
    useEffect(() => {
        const logout = async () => {
            try {
                await axios.post(
                    `${backendUrl}/logout/`,
                    {},
                    { headers: { "Content-Type": "application/json" } }
                );
                setTimeout(() => {
                    localStorage.clear();
                    window.location.href = "/login";
                }, 3000);
            } catch (error) {
                console.error("Logout failed:", error);
                alert("Logout failed. Please try again.");
            }
        };

        logout();
    }, []);

    return <div>Logging out...</div>;
};

export default Logout;

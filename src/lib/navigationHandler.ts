import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


let navigate = useNavigate();

function navigatePage() {
    const { pathname } = useLocation();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return navigate;
}

export default navigatePage;
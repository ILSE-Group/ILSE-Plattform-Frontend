import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface navigationProps {
  pageUrl: string;
}

export default function navigateToPage() {
    const navigate = useNavigate();

    return useCallback(({ pageUrl }: navigationProps) => {
        navigate(pageUrl);
        window.scrollTo(0, 0);
    }, [navigate]);
    
}
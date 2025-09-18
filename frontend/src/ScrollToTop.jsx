// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ Force scroll to top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); 
    // You can use "smooth" for a smooth effect
  }, [pathname]);

  return null;
}

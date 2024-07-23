"use client";

import React, { useEffect, useState } from "react";
import HeartAnimation from "./HeartAnimation";

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки
    const timer = setTimeout(() => setLoading(false), 3000); // Замените на реальное время загрузки

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <HeartAnimation />
    </div>
  ) : null;
};

export default LoadingScreen;

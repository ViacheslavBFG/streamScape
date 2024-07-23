"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const heartbeat = keyframes`
  0% { transform: scale(1); opacity: 1; }
  20% { transform: scale(1.2); opacity: 0.8; }
  40% { transform: scale(1); opacity: 1; }
  60% { transform: scale(1.2); opacity: 0.8; }
  80% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const Text = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: red;
  animation: ${heartbeat} 2s infinite;
  text-align: center;
`;

const HeartAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  overflow-hidden">
      <Text>💗</Text>
    </div>
  );
};

export default HeartAnimation;

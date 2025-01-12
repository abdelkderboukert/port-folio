"use client";
import React from 'react'
import WelcomeScreen from "./_utils/WelcomeScreen";

function Loading() {
  return (
    <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
  )
}

export default Loading
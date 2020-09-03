import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage("dark-mode");

    useEffect(() => {
        if(mode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

    },[mode])

    return [mode, setMode];
}

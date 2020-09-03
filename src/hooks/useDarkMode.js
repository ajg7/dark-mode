import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage("dark-mode", initialValue);

    useEffect(() => {
        value ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
    },[value])


    return [value, setValue];
}
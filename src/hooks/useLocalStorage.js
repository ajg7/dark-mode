import React, { useState } from "react";


const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    })
}

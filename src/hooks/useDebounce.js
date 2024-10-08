import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [deboundValue, setDeboundValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDeboundValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);

    return deboundValue;
}

export default useDebounce;

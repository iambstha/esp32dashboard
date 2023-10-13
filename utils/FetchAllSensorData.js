'use client'
import { useState, useEffect } from "react";

const FetchAllSensorData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (deviceId) => {
            try {
                let response = await fetch(`http://localhost:8080/v1/api/sensors/log`);
                // console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let responseData = await response.json();
                let truncatedData = responseData.data;
                setData(truncatedData);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading };
}

export default FetchAllSensorData;
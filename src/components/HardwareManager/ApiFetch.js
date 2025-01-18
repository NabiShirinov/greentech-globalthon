import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useHardwareDatasContext } from '../../contexts/HardwareDatas';

const ApiFetch = () => {
    const { initialDatas, setInitialDatas,setisConnected } = useHardwareDatasContext();

    useEffect(() => {
        const fetchData = () => {
            fetch('http://192.168.0.105/')
                .then(response => response.json())
                .then(data => {
                    setInitialDatas(data);
                    setisConnected(true) // initialDatas içine yaz
                })
                .catch(error => setisConnected(false));
        };

        fetchData();

        const intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, []);

};

export default ApiFetch;

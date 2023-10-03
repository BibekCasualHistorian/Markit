import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Livetable from "../Components/Livetable";
import Gainerandloser from "../Components/Gainerandloser";

function Market (){

    const [data, setData] = useState([])

    const [fetched, setFetched] = useState(true)

    let url = 'http://localhost:3000/market/get'

    console.log("data", (data))

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url,{
                method: "GET"
            })
            const data = await response.json()

            console.log("data", data)

            if(response.ok) {
                if(!data.length) {
                    setFetched(false)
                }
                else {
                    setFetched(true)
                    setData(data)
                }     
            }
            if(!response.ok) {
                setFetched(true)
            }
        }
        fetchData()
    },[url])

    useEffect(() => {
        const updateData = () => {
          const updatedData = data.map((company) => {
            const newLTP = parseFloat((company.last_price + Math.random() * 10 - 5).toFixed(2));
            const newHigh = Math.max(company.high, newLTP);
            const newLow = Math.min(company.low, newLTP);
            const ltpChange = (newLTP - company.last_price);
            const newChange = ((ltpChange / company.last_price) * 100).toFixed(2);

            const newQty = company.quantity + Math.floor(Math.random() * 10);

            const newUpdated = {
                ...company,
                change: newChange,
                last_price: newLTP,
                high: newHigh,
                low: newLow,
                quantity: newQty,
            }

            fetch('http://localhost:3000/market/update/' + newUpdated._id, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({change: newChange, last_price: newLTP, high: newHigh, low: newLow, quantity: newQty}),
            }).then((res) => {
                console.log("updated res", res)
            }).catch((err) => {
                console.log("failed to update", err)
            })
            return newUpdated;
          });
    
          setData(updatedData);
        };
        const intervalId = setInterval(updateData, 100000);
        return () => clearInterval(intervalId);
      }, [data]);

    //   useEffect(() => {
    //     function simulateFluctuations() {
    //         const updatedData = data.map((stock) => {
    //           const newLastPrice = stock.last_price + (Math.random() - 0.5) * 5;
    //           const newChange = newLastPrice - stock.last_price;
    //           const newOpen = stock.open + (Math.random() - 0.5) * 5;
    //           const newHigh = newOpen + (Math.random() - 0.5) * 5;
    //           const newLow = newOpen - (Math.random() - 0.5) * 5;
    //           const newQuantity = stock.quantity + Math.floor((Math.random() - 0.5) * 1000);
        
    //           return {
    //             ...stock,
    //             last_price: newLastPrice,
    //             change: newChange,
    //             open: newOpen,
    //             high: newHigh,
    //             low: newLow,
    //             quantity: newQuantity,
    //           };
    //         });
    //         console.log("updatedData", updatedData)
    //         setData(updatedData);
    //       }

    //     const updateInterval = setInterval(simulateFluctuations, 5000);
    //     return () => clearInterval(updateInterval);
    //   }, []);

    return(
        <div className="min-h-screen bg-gradient-to-b from-[#42275a] to-[#734b6d]">
            <Navbar/>
            {
                fetched ? (
                    <div>
                        <Livetable data={data}/>
                        <Gainerandloser/>
                    </div>
                ) : (
                    <div>Failed to fetch. Either check the internet connection or reload</div>
                )
            }
        </div>
    )
};

export default Market;
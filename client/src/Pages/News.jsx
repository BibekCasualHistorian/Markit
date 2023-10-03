import React, { useEffect, useState } from 'react'

import '../CSS/News.css'

const News = () => {

    const apiKey = `c_jwq8iZirtnZpPgymiGqAGFOASz7vZE`

    const [data, setData] = React.useState([])

    useEffect(() => {
        let url = `https://api.polygon.io/v2/reference/news?limit=20&apiKey=${apiKey}`

        const fetchData = async () => {
            const response = await fetch(url, {
                method: "GET"
            })
            const data = await response.json()
            console.log("response", response)
            console.log("data", data)
            if(response.ok) {
                setData(data)
            }
        }
        fetchData()
    },[])

    const EachNews = (props) => {
        return (
            <div className='each-news'>
                <img src={props.each.image_url} alt="" />
                <h2>{props.each.title}</h2>
                <p>{props.each.author}</p>
                <hr />
            </div>
        )
    }

    const SideBar = () => {
        return (
            <div>
            </div>
        )
    }

  return (
    <div className='news'>
        <div>
            {
                data.results && data.results.map((each) => {
                    return (
                        <EachNews each={each} key={each.id} />
                    )
                })
            }
        </div>
        <div>

        </div>
    </div>
  )
}

export default News
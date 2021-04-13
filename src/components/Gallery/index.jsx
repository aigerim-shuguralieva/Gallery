import React, {useState, useEffect} from 'react'
import './Gallery.css'
import {PhotoCard} from '../PhotoCard'
import { createApi } from 'unsplash-js';
import {useRouteMatch} from 'react-router-dom'
const unsplash = createApi({
    accessKey: 'RzN1W9JDDFwAagsstA0Iv8BjmztLK145WIJ898LrIpU',
    headers: { 'X-Custom-Header': 'foo' },
  });
export const Gallery = () => {
    const [data, setData] = useState([])
    const {url} = useRouteMatch()

    console.log(url)
    useEffect(() => {
        unsplash.search.getPhotos({
            query: `${url}`,
            page: 1,
            perPage: 10,
            color: 'green',
            orientation: 'landscape',
          }).then((res) => {
              console.log(res)
              setData(res.response.results)
          })
    }, [url])
    return  <>
    <div className="gallery">
        {
            data.map((obj, id) => {
                return <PhotoCard  photo={obj} id={id} key={id} />
            })
        }
    </div>
    </>
}
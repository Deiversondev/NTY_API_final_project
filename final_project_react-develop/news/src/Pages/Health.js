import { useContext , useEffect} from "react";
import {SectionContext} from '../context/SectionContext';
import api from "../api"
import Card from "../Components/Card/Card";

const Health = () => {

    const {section,setSection,key} = useContext(SectionContext);

    useEffect(() => {
        (async () => {
            const {data} = await api.get(`health.json?api-key=${key}`)
            let list = data.results;
            let allNews = list.filter(news => news.section !== 'admin')
            setSection(allNews)
        })()
      }, []);

    return (
        <div>
            {
             section &&  section.map(news => {
                    return (
                       <div>
                         <Card news={news}/>
                       </div>
                    )
                })
            }
        </div>
    )
}

export default Health

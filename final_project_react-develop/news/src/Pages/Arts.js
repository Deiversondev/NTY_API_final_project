import { useContext , useEffect} from "react";
import {SectionContext} from '../context/SectionContext';
import api from "../api"
import Card from "../Components/Card/Card";

const Arts = () => {

    const {section,setSection,key} = useContext(SectionContext);

    useEffect(() => {
        (async () => {
         getNews()
        })()
      }, []);

      function getNews(){
        api.get(`arts.json?api-key=${key}`)
        .then(response => {
            let Data = response.data;
            console.log(Data);
            let list = Data.results;
            let allNews = list.filter(news => news.section !== '')
            console.log(allNews)
            setSection(allNews)
        })
    }
    
    return (
        <div>
            {
            section &&  section.map(news => {
                return (
                        <div>
                            <Card news={news}/>
                        </div>
                ) }) 
            }     
        </div>
            )
}

export default Arts;

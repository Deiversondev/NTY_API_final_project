import { useContext , useEffect} from "react";
import Loading from "../Components/Loading/Loading";
import {SectionContext} from '../context/SectionContext';
import api from "../api"
import Card from "../Components/Card/Card";


const Technology = () => {

    const {section,setSection,key,loading,setLoading} = useContext(SectionContext);

    useEffect(() => {
        (async () => {
            const {data} = await api.get(`technology.json?api-key=${key}`)
            let list = data.results;
            let allNews = list.filter(news => news.multimedia !== null);
            console.log(allNews)
            setSection(allNews)
            setLoading(false)
        })()
      }, []);

      return (
        <div>
            {
                loading ? <Loading/> :  section &&  section.map(news => {
                    return (
                            <div>
                                <Card news={news}/>
                            </div>
                    ) }) 
            }
        </div>
            )
}

export default Technology;

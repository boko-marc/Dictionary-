import { useState } from "react";
import axios from 'axios';
function Dictionary()
{
    const [search,setSearch] = useState(null)
    const [valeur,setValeur] = useState("")
    const [tab,setTab] = useState([])
    const [isLoading,setisLoading] =useState(false)
    const [isError,setError] = useState(false)


    
    const searchdefinitions = async (event) =>
    {    event.preventDefault()
        setError(false);
        setisLoading(true);
        const  token =  "942d5663dddcbeccd343345b7dcfa81aa1b2e558";
        try {
            const result = await axios.get("https://owlbot.info/api/v4/dictionary/"+valeur,{
                headers : {
                    Authorization : `Token ${token}`
                }
            });
            setSearch(result.data)
            setTab(result.data.definitions)
            
        } catch (error) {
            setError(true);
        }
        setisLoading(false);
    }
   
const renderResult =   () =>
{
    if(tab !== null){
    
    return  tab.map(word => (
        <div key={word.id} className="col-12">
            <h5> type : {word.type} </h5>
            <div key={word.id} > Définition : {word.definition} </div>
            <div key={word.id}> Example : {word.example} </div>
        </div>

    ) 
    )  }
}

// const renderesult = () =>
// {
//     if (search !== null)
//     {
//         return search.map(mot => (
//             <div key={mot.id}>
//             
//            
//         </div>
//         ))}
    
// }
   
    
    return (
        <div className="container mt-3">
            <h1> Your favorite dictonary</h1>
            <form className="py-4 row" onSubmit={searchdefinitions}>
                    <div className="col-lg-10">
                    <input className="form-control" type="text" value={valeur} onChange={event => setValeur(event.target.value)} />
                    </div>
                    <div className="col-lg-2">
                    <button className="btn btn-success px-2 fw-bolder" type={"submit"}>Search</button>
                    </div>
                </form>
                <div className="row">
                    {renderResult()}
                    {/* {renderesult()} */}
                    {/* <div  > Prononciation : {search.pronunciation} </div>
                    <div> Word Search : {search.word} </div> */}
                </div>

        </div>   
    ); 
}

export default Dictionary;

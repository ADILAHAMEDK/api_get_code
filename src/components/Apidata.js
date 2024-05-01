import { useEffect, useState } from "react";
import axios from 'axios';

function ApiData(){

   let [allData, setAllData] = useState([]);

   async function  GetApiData  (){
    let APIDATA = "https://jsonplaceholder.typicode.com/posts"
    let response = await axios.get(APIDATA);
    // console.log(response);
    // let response = await fetch(APIDATA);
    // let data = await response.json();
    setAllData(response.data);
   }

    console.log(allData);

    useEffect(()=>{
        GetApiData();
    },[])

    return(
        <div>
            {allData.map((item)=>{
                return(
                    <div>
                        <ul>
                            <li style={{background:"red"}}> {`title :${item.title}`}</li>
                            <li style={{background:"blue"}}>{`id: ${item.id}`}</li>
                            <li style={{background:"green"}}>{`body: ${item.body}`}</li>
                        </ul> 
                    </div>
                )
            })}
        </div>
    );
}
export default ApiData;
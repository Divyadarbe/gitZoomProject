

import React, {useState,useEffect} from 'react';
import axios from 'axios';
function RepoList(){
    const [post,setPost]=useState([]);
    useEffect(()=>{
        axios.get('https://ghapi.huchen.dev/repositories?language=javascript&since=daily&spokenLanguageCode=en')
        .then(res=>{
            console.log("response",res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log("Error",err)
        })
    },[])
return(
    <div align="center">
        <h2>Top trending Repositories</h2>
        <ol>
            {
            post.slice(0,10).map(post=>
                <li key={post.id}>{post.author}</li>
                )
                }
        </ol>
    </div>
)
}
export default RepoList;
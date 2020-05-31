

import React, {useState,useEffect} from 'react';
import axios from 'axios';
function RepoList(){
    const [post,setPost]=useState([]);
    useEffect(()=>{
        axios.get('https://ghapi.huchen.dev/repositories?since=daily&spokenLanguageCode=en')
        .then(res=>{
            console.log("response",res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log("Error",err)
        })
    },[])
return(
    <div  >
        <h2 align="center">Top trending Repositories</h2>
        { <ol>
            {
            post.slice(0,10).map((post,id)=>
                <li style={{ border:'1px solid #1890ff',padding:'20px'}}  key={id}>
                 <h3><a href={`${post.url}`}>{post.author} / {post.name}</a>
                  </h3>
                  <p>{post.description} </p>
                  <p><i className="fa fa-circle" style={{color:`${post.languageColor}`}}></i>{post.language} <i className="fa fa-star-o"></i>{post.stars}<i className="fa fa-code-fork"></i> {post.forks} <i className="fa fa-star-o">{post.currentPeriodStars}stars today</i></p>                  
                    </li>
                )
                }
        </ol> 
        
            }
            {console.log(JSON.stringify(post, null, 2))}
            
    </div>
)
}


export default RepoList;
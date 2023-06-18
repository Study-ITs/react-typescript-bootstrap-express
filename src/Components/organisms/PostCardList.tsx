import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { log } from 'console';

function PostCardList() {
  const[postCardDatas, setPostCardDatas] = useState<Post[]>([]);

  type Post = {
    id: number;
    name: string;
    age: number;
    text: string;
  }

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => {
        if (!response.ok) {
          response.json().then((json) => {
            console.error(json);
          });
          return;
        }
        response.json().then((json) => {
          setPostCardDatas(json);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div className='h-100 pt-3 px-3 overflow-auto' style={{backgroundColor: "#88ff88"}}>
      <ul>
        {postCardDatas.map((postCard) => {
          return (<li key={postCard.id}>
            <PostCard name={postCard.name} age={postCard.age} text={postCard.text} />
          </li>);
        })}
      </ul>
    </div>
  )
}

export default PostCardList
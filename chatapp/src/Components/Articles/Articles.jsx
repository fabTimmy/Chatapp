import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../../Config/firebase';
import { useAppSelector } from '../../Hooks/StoreHook';
import { auth } from '../../Config/firebase';
import { Bars } from 'react-loader-spinner';
import { RiChatDeleteLine } from 'react-icons/ri'

const Articles = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const postCollectionRef = collection(db, "posts");

  const { user } = useAppSelector((state) => state.auth)

  const getPosts = async () => {
    setLoading(false);
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
    setLoading(false);
    
  }
  useEffect(() => {
    getPosts();
  });

  const deletePost =  async (id) => {
    const postDoc = doc(db, 'posts', id )
    await deleteDoc(postDoc) 
  }

  if(loading){
    return <div className='reset-cont' >
      <div className="reset">
        <Bars width={20} height={20} color="black"/>
      </div>
    </div>
  }

  return (
    <div>
      {
        postList.length === 0 ? (
          <p className='no-art'>No article found!</p>
        ) : (
          postList.map((post) => (
            <>
              <div className='art' key={post.id}>
               <div className="art-head-cont">
                <div className="art-header">
                 <div className="art-author">
                  <img src={user?.photoUrl} alt="" className='p-user' />
                  <p>{post.author.name}</p>
               </div>
                </div>
                    <div className="deletePost">
                    {user && post.author.id === auth.currentUser.uid && (
                      <RiChatDeleteLine className="delete" onClick={() => {deletePost(post.id)}} />
                      )}
                    </div>
               </div>
               <div className="art-title">
                      <p>{post.title}</p>
               </div>
               <div className="subtitle">
                 <p>{post.postText}</p>
               </div>
               {/* large img */}
               <div className="art-img">
                 <div>{post.postImage}</div>
               </div>
             </div>
            </>
          ))
        )
      }
    </div>
          
  )
    }
export default Articles

import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../Config/firebase";
import { useAppSelector } from "../../Hooks/StoreHook";
import { auth } from "../../Config/firebase";
import { Bars } from "react-loader-spinner";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

let useClickOutside = (handler) => {
  let domNode = useRef(null);

  useEffect(() => {
    let maybeHandler = (e) => {
      const nodes = domNode.current
      if(!nodes.contains(e.target)){
        handler();
      }
    }
    document.addEventListener('mousedown', maybeHandler);
    
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
      };
  })

  return domNode
}

const Articles = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const [like, setLike] = useState(120),
  [isLike, setIsLike] = useState(false)

  const postCollectionRef = collection(db, "posts");

  const [listImage, setListImage] = useState([]);

  const { user } = useAppSelector((state) => state.auth);

  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  const getPosts = async () => {
    setLoading(false);
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };
  useEffect(() => {
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  if (loading) {
    return (
      <div className="reset-cont">
        <div className="reset">
          <Bars width={20} height={20} color="black" />
        </div>
      </div>
    );
  }

  const onLikeHandler = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }

  return (
    <div>
      {postList.length === 0 ? (
        // <p className='no-art'>No article found!</p>
        <div className="art">
          <div className="art-head-cont">
            <div className="art-header">
              <div className="art-author">
                <img src={user?.photoUrl} alt="" className="p-user" />
                <div className="art-head-1">
                  <p>Ayomide Oladele</p>
                  <p className="date">June 27 2023</p>
                </div>
              </div>
            </div>
            <div ref={domNode} className="deletePost">
              <SlOptionsVertical  className="delete" onClick={() => setOpen(!open)} />
              {
                open && 
                <ul className="del-opt">
                <li>Delete post</li>
              </ul>
              }
            </div>
          </div>
          <div className="art-title">
            <p>Starting out as a Product designer</p>
          </div>
          <div className="subtitle">
            <p>
              Embarking on a journey as a product designer can be an
              exhilarating and fulfilling experience. As a profession that
              bridges the realms of art, technology, and problem-solving,
              product design offers an opportunity to shape the way people
              interact with the world around them.
            </p>
          </div>
          {/* large img */}
          <div className="art-img-cont">
            <div className="art-img"></div>
            <div className="art-img-icons">
              <p className="art-img-con">
                <AiOutlineComment className="art-img-icon" />
                <span>200</span>
              </p>
              <p className="art-img-con">
                <AiOutlineHeart className="art-img-icon" onClick={onLikeHandler} />
                <span>120</span>
              </p>
              <p className="art-img-con">
                <MdOutlineAnalytics className="art-img-icon" />
                <span>2980 views</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        postList.map((post) => (
          <>
            <div className="art" key={post.id}>
              <div className="art-head-cont">
                <div className="art-header">
                  <div className="art-author">
                    <img src={user?.photoUrl} alt="" className="p-user" />
                    <div className="art-head-1">
                      <p>{post.author.name}</p>
                      <p className="date">{}</p>
                    </div>
                  </div>
                </div>

                <div ref={domNode} className="deletePost">
                  {user && post.author.id === auth.currentUser.uid && (
                    <SlOptionsVertical className="delete" onClick={() => setOpen(!open)} />
                  )}
                  { open && <ul className="del-opt" onClick={() => {
                  deletePost(post.id);
                }}>
                <li>Delete post</li>
              </ul>
              }
                </div>
              </div>
              <div className="art-title">
                <p>{post.title}</p>
              </div>
              <div className="subtitle">
                <p>{post.postText}</p>
              </div>
              {/* large img */}
              <div className="art-img-cont">
              <div className="art-img">
              {listImage.map((url) => {
                return <img src={url} alt=""/>
              })}
                </div>
              {/* <div className="art-img">{post.postImage}</div> */}
            <div className="art-img-icons">
              <p className="art-img-con">
                <AiOutlineComment className="art-img-icon" />
                <span>{}</span>
              </p>
              <p className="art-img-con">
                <AiOutlineHeart className="art-img-icon" onClick={onLikeHandler} />
                <span>{}</span>
              </p>
              <p className="art-img-con">
                <MdOutlineAnalytics className="art-img-icon" />
                <span>{} views</span>
              </p>
            </div>
          </div>
            </div>
          </>
        ))
      )}
    </div>
  );
};
export default Articles;

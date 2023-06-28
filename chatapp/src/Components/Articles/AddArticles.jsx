import { useEffect, useRef, useState } from "react";
import { BsBackspace, BsPlusLg } from "react-icons/bs";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../../Config/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
// import { v4 } from 'uuid';
import { Bars } from "react-loader-spinner";

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

const AddArticles = ({setOpen, open}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  // const [postImage, setPostImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [listImage, setListImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: '',
})
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate();
  const postCollectionRef = collection(db, "posts");
  const imageListRef = ref(storage, 'images/')
  
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });
  
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
      createdAt: Timestamp.now().toDate(),
    });
    navigate('/blogs/feed/article');
    
    // if (postImage == null) return;
    // const imageRef = ref(storage, `images/${postImage.name + v4()}`)
    // uploadBytes(imageRef, postImage).then((snapShot) => {
    //   getDownloadURL(snapShot.ref).then((url) => {
    //     setListImage((prev) => [...prev, url])
    //   })
    // })
    // navigate('/blogs/feed/article');

    setLoading(true);
    await fetch('/').then(() => {
      // console.log('fetch success');
    });
      setLoading(false);
  //   if(!formData.image){
  //     alert('Please fill in the field')
  //   }  
  //   const storageRef = ref(storage, `image/${Date.now()}${formData.image.name}`)
  //  const uploadImage = uploadBytesResumable(storageRef, formData.image)
  //  uploadImage.on('state_changed', (snapshot) => {

  //  })
  };
  
  const handleImageChange = (e) => {
    setFormData({...formData, image:e.target.files[0]})
  }
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setListImage((prev) => [...prev, url]);
        })
      })
    })
  }, [imageListRef])

  const menuShow = () => {
    setIsOpen(!isOpen)
  }


  // const fetchData = async () => {
  //   setLoading(true);
  //   await fetch('/').then(() => {
  //     // console.log('fetch success');
  //   });
  //     setLoading(false);
  // };
  return (
    <div>
      <div className="add-art-cont">
        <div className="publish">
        <BsBackspace onClick={() => setOpen(!open)} className='form-icon'/>
        <button ref={domNode} onClick={createPost} type="submit" className="pub-btn">
              <div className="spinner" >
              {loading && <span><Bars
              width={20}
              height={20}
              color='black'
              /></span>}
              </div>
              {!loading && <span>Publish</span>}
            </button>
        </div>
        <div className="pub-cont">
          <div className="pub-text">
            <input
              type="text"
              name="title"
              className="title"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              name="description"
              id="desc"
              cols={5}
              rows={2}
              placeholder="Write a post............."
              onChange={(e) => {
                setPostText(e.target.value);
              }}
            />
            <div className="up-cont">
              <BsPlusLg className="plus" onClick={menuShow} />
            {isOpen && 
            <input
              type="file"
              name="image"
              accept="image/*"
              className="up-img"
              onChange={(e) => handleImageChange(e)}
            />
          }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArticles;

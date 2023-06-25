import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../Hooks/StoreHook'
import { upLoad } from '../../Config/firebase';

const Profile = () => {
  const [photoURL, setPhotoURL] = useState('../../Image/unknownUser.png')
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const { user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if(user?.photoUrl){
      setPhotoURL(user?.photoUrl)
    }
  }, [user])

  const handleChange = () => {
    // if(e.target.files[0]){
    //   setPhoto(e.target.files[0])
    // }
  }
  const handleClick = () => {
    // upLoad(photo, user, setLoading)
  }

  return (
    <div>
      <input type='file' onChange={handleChange} />
      <button disabled={loading || !photo}  onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="" />
    </div>
  )
}

export default Profile
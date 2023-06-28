import { useState } from 'react'
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineAnalytics } from 'react-icons/md';
import { RiChatDeleteLine } from 'react-icons/ri';
import { useAppSelector } from '../../Hooks/StoreHook';
import { SlOptionsVertical } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Analytics = () => {
  const [postList, setPostList] = useState([]);
  const [open, setOpen] = useState(false);

  const { user } = useAppSelector((state) => state.auth);
  return (
    <div>
      {postList.length === 0 ? (
        // <p className='no-art'>No analytics found!</p>
        <div className="art analytics">
          <div className="an-cont">
            <div className="an-head">
            <h2>Posts analytics</h2>
            <h2>May 2023, <span>25days so far</span></h2>
            <hr />
            </div>
            <div className="an-s-head">
              <h3>Posts highlights</h3>
              <h2>Top posts <span>earned 2980 impressions</span></h2>
            </div>
          </div>
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
          <div className="deletePost">
              <SlOptionsVertical className="delete" onClick={() => setOpen(!open)} />
              {
                open && <ul className="del-opt">
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
              <AiOutlineHeart className="art-img-icon" />
              <span>120</span>
            </p>
            <p className="art-img-con">
              <MdOutlineAnalytics className="art-img-icon" />
              <span>2980 views</span>
            </p>
          </div>
        </div>
          <Link to='/' className='an-btn' >View post activity</Link>
          <div className="an-sum">
            <h2>Posts summary</h2>
            <span>May 2023 summary</span>
          </div>
          <hr />
          <div className="post-cont">
            <div className="posts-1-cont">
              <div className="posts-1">
                <span>Posts</span>
                <h3>3</h3>
              </div>
              <div className="posts-1">
                <span>Profile visits</span>
                <h3>300</h3>
              </div>
            </div>
            <div className="posts-2-cont">
              <div className="posts-2">
              <span>Posts Impressions</span>
                <h3>2.98k views</h3>
              </div>
              <div className="posts-2">
                <span>New followers</span>
                <h3>300</h3>
              </div>
            </div>
          </div>
      </div>
      ) : (
        postList.map((post) => (
          <>
        <div className="art analytics">
          <div className="an-cont">
            <div className="an-head">
            <h2>Posts analytics</h2>
            <h2>{}</h2>
            <hr />
            </div>
            <div className="an-s-head">
              <h3>Posts highlights</h3>
              <h2>Top posts <span>earned {} impressions</span></h2>
            </div>
          </div>
        <div className="art-head-cont">
          <div className="art-header">
            <div className="art-author">
              <img src={user?.photoUrl} alt="" className="p-user" />
              <div className="art-head-1">
                <p>{}</p>
                <p className="date">{}</p>
              </div>
            </div>
          </div>
          <div className="deletePost">
              <SlOptionsVertical className="delete" onClick={() => setOpen(!open)} />
              {
                open && <ul className="del-opt">
                <li>Delete post</li>
              </ul>
              }
            </div>
        </div>
        <div className="art-title">
          <p>{}</p>
        </div>
        <div className="subtitle">
          <p>{}</p>
        </div>
        {/* large img */}
        <div className="art-img-cont">
          <div className="art-img"></div>
          <div className="art-img-icons">
            <p className="art-img-con">
              <AiOutlineComment className="art-img-icon" />
              <span>{}</span>
            </p>
            <p className="art-img-con">
              <AiOutlineHeart className="art-img-icon" />
              <span>{}</span>
            </p>
            <p className="art-img-con">
              <MdOutlineAnalytics className="art-img-icon" />
              <span>{} views</span>
            </p>
          </div>
        </div>
          <Link to='/' className='an-btn' >View post activity</Link>
          <div className="an-sum">
            <h2>Posts summary</h2>
            <span>{} summary</span>
          </div>
          <hr />
          <div className="post-cont">
            <div className="posts-1-cont">
              <div className="posts-1">
                <span>Posts</span>
                <h3>{}</h3>
              </div>
              <div className="posts-1">
                <span>Profile visits</span>
                <h3>{}</h3>
              </div>
            </div>
            <div className="posts-2-cont">
              <div className="posts-2">
              <span>Posts Impressions</span>
                <h3>{}k views</h3>
              </div>
              <div className="posts-2">
                <span>New followers</span>
                <h3>{}</h3>
              </div>
            </div>
          </div>
      </div>
          </>
        ))
      )}
    </div>
  )
}

export default Analytics
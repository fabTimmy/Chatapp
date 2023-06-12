import React from 'react'
import Nav from '../Nav'

const About = () => {
  return (
    <>
    <Nav/>
    <section id="about">
        <div className="sect-1">
          <div className="sect-1-container">
            <div className="sect-1-text">
              <h1>About Chatter</h1>
              <p>
                Chatter is a multi-functional platform where authors and readers
                can have access to their own content. It aims to be a
                traditional bookworm’s heaven and a blog to get access to more
                text based content. Our vision is to foster an inclusive and
                vibrant community where diversity is celebrated. We encourage
                open-mindedness and respect for all individuals, regardless of
                their backgrounds or beliefs. By promoting dialogue and
                understanding, we strive{" "}
              </p>
            </div>
            <div className="sect-1-img">
              <img
                src="../Image/thisisengineering-raeng-TXxiFuQLBKQ-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="sect-1-aside">
            <div className="head">
              <h1>Why you should join chatter</h1>
              <p>
                Our goal is to make writers and readers see our platform as
                their next heaven for blogging, ensuring ease in interactions,
                connecting with like-minded peers, have access to favorite
                content based on interests and able to communicate your great
                ideas with people
              </p>
            </div>
            <div className="aside">
              <div className="aside-cards">
                <div className="card-1">
                <div className="img">
                  <img src="../../Image/carbon_analytics.jpg" alt="" />
                </div>
                  <h1>Analytics</h1>
                  <p>
                    Analytics to track the number of views, likes and comment
                    and also analyze the performance of your articles over a
                    period of time
                  </p>
                </div>
                <div className="card-2">
                  <div className="img">
                    <img src="" alt="" />
                  </div>
                  <h1>Social interactions</h1>
                  <p>
                    Users on the platform can interact with posts they like,
                    comment and engage in discussions
                  </p>
                </div>
                <div className="card-3">
                <div className="img">
                  <img src="" alt="" />
                </div>
                  <h1>Content creation</h1>
                  <p>
                    Write nice and appealing with our in-built markdown, a rich
                    text editor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
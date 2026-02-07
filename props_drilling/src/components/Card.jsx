import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
            <div className="top">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9q7TgWzysBw_2Gqhxq2OKzUktHFFvUmKbP8sHL13rLl9xXD6XazV4-qK-F3AnU1A7FM&usqp=CAU   ' alt=''></img>
              <button>Save <Bookmark size={18} /></button>
            </div>
            <div className="center">
              <h3>{props.company} <span>5 days ago</span></h3>
              <h2>{props.post}</h2>
              <div className='tag'>
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
              </div>
            </div>
            <div className="bottom">
                <div>
                  <h3>{props.pay}</h3>
                  <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
    </div>
  )
}

export default Card

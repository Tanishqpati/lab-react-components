import React, { Component } from 'react'
import lake from "../image/lake.JPG";

const imageData = [
    {
      id:1,
      img:lake 
    },
    {
      id:2,
      img:lake
    },
    {
      id:3,
      img:lake
    },
    {
      id:4,
      img:lake
    }
  ]

export class Images extends Component {

    


  render() {
    return (
        <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Images
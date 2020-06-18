import image1 from '../images/IMG_0106.jpeg'
import image2 from '../images/IMG_0090.jpeg'
import image3 from '../images/IMG_0102.jpeg'

const Stills = () => (
  <div>
    <style jsx>
      {`
        .slider {
          display: flex;
          flex-direction: row;
          postion: relative;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          color: white;
        }
        .slide {
          position: relative;
          left: 25%;
          top: 0;
          width: 50%;
          opacity: 0;
          height: 50%;
          transition: opacity 0.4s ease-in-out;
        }
        .slide.current {
          opacity: 1;
        }
        .slide:first-child {
          background: url(${image1});
          background-repeat:no-repeat;
          background-size: cover;
        }
        .slide:nth-child(2) {
          background: url(${image2});
          backgroud-repeat:no-repeat;
          background-size: cover;
        }
        .slide:nth-child(3) {
          background: url(${image3});
          backgroud-repeat:no-repeat;
          background-size: cover;
        }
        .buttons button{
          cursor: pointer;
          padding: 13px 15px;
          background: transparent;
          outline: none;
          border: 1px solid white;
        }
        
        .buttons #next{
          position: absolute;
          top: 50%;
          right: 15px;
          color: black;
        }
        .buttons #prev{
          position: absolute;
          top: 50%;
          left: 15px;
          color: black;
        }
        .buttons  #prev:hover{
          background: black;
          color: white;
          border: 1px solid black;
        }
        .buttons #next:hover{
          background: black;
          color: white;
          border: 1px solid black;
        }
      `}
    </style>

    <section>
      <div className='slider'>
        <div className='slide current'>
        <div className='slide'/>
        <div className='slide'/>
        </div>
      </div>
    </section>
  </div>
)

export default Stills

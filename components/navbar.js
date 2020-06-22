import Link from 'next/link'
import Img from '../images/IMG_0102.jpeg'
import swapDivs from '../helperFuncs/swap'

const Navbar = () => {
  return (
    <nav>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Lexend+Tera&family=Archivo+Black&family=Work+Sans&display=swap');
        nav {
            width: 100vw;
            height: 50px;
            margin: 0;
            background: black;
            padding: 0;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-content: center;
            animation: waves 8s infinite;
          }

          #name {
            padding: .5em;
            letter-spacing: 1px;
            font-style: bold;
            font-size: 30px;
            font-family: 'Archivo Black', sans-serif;
            text-transform: uppercase;
            font-weight: 800;
            opacity: 1;
            animation: waves 8s ease-out 0s alternate infinite;
          }

          ul{
            display: flex;
            flex-direction:row;
            margin: 0;
            padding: 0;
            justify-content: center;

          }
          li {
            text-align: center;
            letter-spacing: 3px;
            font-weight: 800;
            margin-right: 5em;
            text-transform: uppercase;
            list-style-type: none;
          }
          a {
            text-decoration: none;
            color:white;
            font-size: 14px;  
            font-family: 'work sans',sans-serif;
          }
         
          a:hover{
            animation: waves 3s ease-out 0s alternate infinite;
          }
          @keyframes waves{
            0% {
              color: #eee;
            }
            50%{
              color: #e9c46a;
            }
            100% {
             color: #FF4136;
            }
          }
          @media(max-width:700px){
            nav, ul, li{
              justify-content: center;
              text-align: center;
              margin-right: 1.5em;
              align-content:left;
              font-size: 12px;
            }
          }
         

        `}
      </style>
  
      <ul>
      <li>
        <a onClick={()=>(swapDivs('content-text','my-video'))} title='Home'>
          Home
        </a>
      </li>
      <li>
        <a onClick={()=>(swapDivs('content-text','my-video'))}  title='Watch'>
          Watch
        </a>
      </li>
      <li>
      <Link href='/#awards'>
        <a title='Awards'>
          Awards
        </a>
      </Link>
      </li>
      <li>
      <Link href='/#crew'>
        <a title='crew'>
          Crew
        </a>
      </Link>
      </li>
      </ul>
      
      
    </nav>
  )
}

export default Navbar

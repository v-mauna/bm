import Link from 'next/link'
import Img from '../images/IMG_0102.jpeg'
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
          @keyframes waves{
            0% {
             color: #001F3F;
            }
            25%{
              color: #eee;
            }
            50%{
             color: orange;
            }
            100% {
             color: #FF4136;
            }
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
            color: orange;
          }
         

        `}
      </style>
  
      <ul>
      <li><Link href='/#watch'>
        <a title='Watch'>
          Watch
        </a>
      </Link>
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

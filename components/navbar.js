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
            height: 40px;
            margin: 0;
            padding: 0;
            display: block;
            animation: waves 8s infinite;
          }

         
          #name {
            padding: 1em;
            display: flex;
            letter-spacing: 1px;
            font-style: bold;
            font-size: 20px;
            text-align: center;
            justify-content: center;
            align-content: center;
            font-family: 'Archivo Black', sans-serif;
            text-transform: uppercase;
            font-weight: 800;
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
          li {
            margin: 1em;
            text-align: right;
            letter-spacing: 3px;
            align-content:center;
            justify-content: center;
            font-weight: 800;
          }
          a {
            text-decoration: none;
            text-transform: lowercase;
            color:white;
            font-size: 14px;  
            font-family: 'work sans',sans-serif;
          }
          a::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: rgba(0,0,0,.7);
            transition .1s;
        }
        a:hover{
          color: orange;
          transition: 3s ease;
        }
          }
        `}
      </style>
      <Link href='/'>
        <a id='name' title='Home'>
          Menu
        </a>
      </Link>
    </nav>
  )
}

export default Navbar

import Image from "next/image"
import '../app/globals.css';
import '../pages/app.css';
import Link from "next/link";

const errorPage = () => {
  return (
    <div id="imgErr" >
        <img src="https://media1.giphy.com/media/IHOOMIiw5v9VS/giphy.gif" id="imgErr"/>
        <Link className="   font-semibold text-4xl text-lime-900 hover:text-emerald-700" id="idk" href="http://localhost:3000"> Go back? </Link>
    </div>
  )
}


export default errorPage
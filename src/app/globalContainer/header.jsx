import Link from "next/link";
import ClientSide from "../clientside/Clientside";

function Headers() {
  return (
    <>
      <div className="to-transparent">
        <logo className="absolute mt-3 ml-[40px] font-bold tracking-widest text-white ">
          SAONE
        </logo>
        <nav className="w-auto h-[50px] to-transparent">
          <ul className="flex float-right mt-5">
            <li className="mx-2 mt-3 text-white text-base font-bold ">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2 mt-3 text-white text-base font-bold ">
              <Link href="https://api.whatsapp.com/send?phone=085691941488">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Headers;

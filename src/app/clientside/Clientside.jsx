"use client";

import Image from "next/image";
import { useState } from "react";
import Textania from "./NewTextanima";

function ClientSide() {
  // const [newElement, setnewElement] = useState(false);
  // function HandleClick() {
  //   setnewElement(!newElement);
  // }

  return (
    <>
      <div className="h-[50vh]">
        {/* {newElement ? (
          <div className="trapesium1" onClick={HandleClick}></div>
        ) : null} */}
        <Image
          src="/123.png"
          width={250}
          height={250}
          className="rounded-full absolute m-auto noposition mt-[10vh]"
          alt="err"
        />
        <Textania />
      </div>
    </>
  );
}

export default ClientSide;

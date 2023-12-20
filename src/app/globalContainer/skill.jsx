"use client";
import Image from "next/image";
var images = [
  "/basic.png",
  "/next.png",
  "/php.png",
  "/react.png",
  "/tailwind.png",
  "/bootstrap.svg",
];
function Sidecontent() {
  return (
    <>
      <div className="resiste text-center">
        <p className="my-10 font-sans text-[28px]">MY Experience Skill</p>
        <div className="grid grid-cols-3 gap-2">
          {images.map((el) => {
            return (
              <>
                <Image
                  src={el}
                  width={120}
                  height={150}
                  alt="err"
                  id="skill"
                  className="m-auto fluxer"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidecontent;

import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="container-footer">
        <ul className="flex w-[90%] m-auto pl-0 gap-5 fleks">
          <li>
            <Image
              src="/instagram.jpg"
              alt="err"
              width={20}
              height={10}
              className="sosmed"
            />
            <a href="https://www.instagram.com/alfian_1920/">@alfian_1920</a>
          </li>
          <li>
            <Image
              src="/facebook.jpg"
              alt="err"
              width={20}
              height={10}
              className="sosmed"
            />
            <a href="#">Alfian</a>
          </li>
          <li>
            <Image
              src="/twitter.png"
              alt="err"
              width={20}
              height={10}
              className="sosmed"
            />
            <a href="https://twitter.com/alfian_none">@alfian_none</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;

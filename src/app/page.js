import ClientSide from "./clientside/Clientside";
import Experience from "./globalContainer/experience";
import Footer from "./globalContainer/footer";
import Headers from "./globalContainer/header";
import Sidecontent from "./globalContainer/skill";

export default function Home() {
  return (
    <>
      <div className="content1 h-[100vh] relative">
        <Headers />
        <ClientSide />
        <div>
          <Sidecontent />
          <Experience />
        </div>
        <Footer />
      </div>
    </>
  );
}

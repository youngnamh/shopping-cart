import envelopeSolid from "../assets/envelope-solid.svg";
import githubLogo from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="bg-black opacity-80 text-white ">
      <div className="flex justify-evenly">
        <div className="flex flex-col items-end px-11 py-2">
          <div className="text-lg border-b-2 m-1">Company</div>
          <div className="footerElement">Our Story</div>
          <div className="footerElement">locations</div>
          <div className="footerElement">Careers</div>
        </div>
        <div className="flex flex-col items-end px-11 py-2">
          <div className="text-lg border-b-2 m-1">Help</div>
          <div className="footerElement">Shipping & Returns</div>
          <div className="footerElement">Warranty</div>
          <div className="footerElement">FAQ</div>
        </div>
        <div className="border-l-2 m-2"></div>
        <div className="flex">
          <div className="p-4">
            <div className="text-3xl">Contact us</div>
            <div className="py-1">help@kuritaco.com</div>
            <div className="py-1">(555)123-4567</div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={envelopeSolid}
              className="h-20 w-20 m-2 hover:scale-110 "
              alt="letter"
            />
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <p>
          Copyright © 2023
          <a
            href="https://github.com/youngnamh"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            youngnamh
            <img src={githubLogo} className="w-5 h-5 inline m-1 mb-2" />
          </a>
        </p>
      </div>
    </div>
  );
}

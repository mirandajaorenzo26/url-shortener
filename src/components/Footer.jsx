import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-16 text-center lg:flex-row lg:text-left">
      <strong className="text-3xl">Shortly</strong>
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
        <div>
          <p className="mb-5 font-bold">Features</p>
          <ul className="space-y-3">
            <p className="text-sm">Link Shortening</p>
            <p className="text-sm">Branded Links</p>
            <p className="text-sm">Analytics</p>
          </ul>
        </div>
        <div>
          <p className="mb-5 font-bold">Resources</p>
          <ul className="space-y-3">
            <p className="text-sm">Blog</p>
            <p className="text-sm">Developers</p>
            <p className="text-sm">Support</p>
          </ul>
        </div>
        <div>
          <p className="mb-5 font-bold">Company</p>
          <ul className="space-y-3">
            <p className="text-sm">About</p>
            <p className="text-sm">Our Team</p>
            <p className="text-sm">Careers</p>
            <p className="text-sm">Contact</p>
          </ul>
        </div>
        <div>
          <ul className="flex justify-center gap-5">
            <li>
              <img src={Facebook} alt="" />
            </li>
            <li>
              <img src={Twitter} alt="" />
            </li>
            <li>
              <img src={Pinterest} alt="" />
            </li>
            <li>
              <img src={Instagram} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

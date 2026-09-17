import footerImage from "./assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-base-200 bg-base-100 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className=" grid grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <div>
                <img src={footerImage} alt="" className="" />
              </div>
            </div>

            <p className="text-base-content/60 mt-5 leading-6 max-w-md">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-5 mt-7">
              <a
                href=""
                className="flex items-center gap-2 text-base-content/70 hover:text-base-content transition"
              >
                GitHub
              </a>

              <a
                href=""
                className="flex items-center gap-2 text-base-content/70 hover:text-base-content transition"
              >
                Twitter
              </a>

              <a
                href=""
                className="flex items-center gap-2 text-base-content/70 hover:text-base-content transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base-content mb-5">PRODUCT</h3>

            <ul className="space-y-4 text-base-content/60">
              <li>
                <a href="" className="hover:text-base-content transition">
                  Home
                </a>
              </li>

              <li>
                <a href="" className="hover:text-base-content transition">
                  Technologies
                </a>
              </li>

              <li>
                <a href="" className="hover:text-base-content transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base-content mb-5">COMPANY</h3>

            <ul className="space-y-4 text-base-content/60">
              <li>
                <a href="" className="hover:text-base-content transition">
                  About
                </a>
              </li>

              <li>
                <a href="" className="hover:text-base-content transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="" className="hover:text-base-content transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base-content mb-5">LEGAL</h3>

            <ul className="space-y-4 text-base-content/60">
              <li>
                <a href="" className="hover:text-base-content transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="" className="hover:text-base-content transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-200 mt-14 pt-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-base-content/50">
            <p>© 2026 DevStack. All rights reserved.</p>

            <div className="flex items-center gap-8">
              <a href="" className="hover:text-base-content transition">
                Privacy
              </a>

              <a href="" className="hover:text-base-content transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

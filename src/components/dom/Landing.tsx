export default function Landing() {
  return (
    <div id="landingSplash" className="hero min-h-screen overflow-hidden border-none section-1">
      <div className="fixed top-10 right-10">
        <input
          id="theme-toggle"
          type="checkbox"
          data-toggle-theme="spaceCadetRed,floralWhiteFlame"
          className="toggle"
          data-act-class="ACTIVECLASS"
        />
      </div>
      <div className="hero-content text-center">
        <div className="max-w-md mt-[350px]">
          <h1 id="header" className="text-5xl font-bold">
            Isaiah Anyimi
          </h1>
          <p className="py-6">
            A front-end engineer creating fast, responsive, and accessible websites using modern web technologies. I
            enjoy building stunning user interfaces that enhance user experience, promote engagement, and drive
            conversions.
          </p>
          <a
            className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-full"
            href="https://www.instagram.com/yonkozay/"
            target="blank"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

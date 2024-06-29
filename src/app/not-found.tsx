/* images */
import Image from "next/image";

/* button components */
import BackToHome from "@/components/buttons/backToHome";
import ContactUs from "@/components/buttons/contactUs";
import Refresh from "@/components/buttons/refresh";

const NotFound = () => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center gap-10 relative`}>
      {/* Not found images */}
      <figure className="w-32 h-auto self-center">
        <Image
          src="/notFound.webp"
          alt="not found"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "1rem",
          }}
          unoptimized
          width={1920}
          height={1080}
          // className="absolute left-0 right-0 top-0 max-h-screen -z-50 opacity-30"
        />
      </figure>

      {/* Not found contents */}
      <div className="place-content-center mx-auto z-0">
        <h1 className="text-3xl mb-5 font-semibold">
          <span className="text-red-600 font-extrabold">404</span> - Page Not
          Found
        </h1>
        <div className="mb-5 space-y-1 max-w-5xl">
          <p>Oops! The page you are looking for does not exist.</p>
          <p>
            You might have entered an incorrect URL or the page might have been
            moved.
          </p>
        </div>
        <div className="flex items-stretch gap-4">
          <Refresh />
          <BackToHome />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

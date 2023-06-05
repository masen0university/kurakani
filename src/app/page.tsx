import AppStores from "@/components/AppStores";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex px-36 py-36">
        <div className="flex flex-col gap-8 pr-32 w-1/2">
          <div className="flex flex-col gap-5">
            <p className="text-[90px] text-transparent font-medium leading-[85px] tracking-tight bg-gradient bg-clip-text">
              Hang out
              <br /> anytime, anywhere
            </p>
            <p className="text-xl leading-7 text-gray-600">
              Messenger makes it easy and fun to stay close to your favorite
              people.
            </p>
          </div>
          <LoginForm />
          <div className="flex gap-3 items-top">
            <input type="checkbox" className="w-4 h-4" />
            <p className="font-light">Keep me signed in</p>
          </div>
          <AppStores />
        </div>
        <div className="w-1/2">
          <img src="/images/hero.png" alt="hero" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

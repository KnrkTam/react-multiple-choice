import Metatags from "@/../components/Metatags";
import Navbar from "@/../components/navbar/index";
import Footer from "@/layout/footer";
import { useRouter } from "next/router";
const Layout = ({ children, initData }: any) => {
  const router = useRouter();
  const grayBg = ["/mocktest", "/mocktest/exam", "/roadtest-info"];
  return (
    <div className="w-full">
      <Metatags />

      <Navbar />
      <main
        className={`${grayBg.includes(router.pathname) && "bg-gray-100"}
        `}
      >
        <div
          className={`max-w-[1400px] min-h-[600px] mx-auto z-20 px-3 ${
            router.pathname == "/" && "overflow-hidden"
          }`}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

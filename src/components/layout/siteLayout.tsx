import SiteNav from "./siteNav";
import TopNav from "./topNav";

const SiteLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full min-h-screen bg-[#F7F8FA] overflow-x-hidden">
      <SiteNav />

      <main
        className="
          w-full
          min-h-screen
          flex
          flex-col
          xl:ml-[280px]
          xl:w-[calc(100%-280px)]
        "
      >
        <TopNav />

        <section
          className="
            flex-1
            w-full
            px-4
            md:px-6
            xl:px-8
            py-6
            overflow-x-hidden
          "
        >
          {children}
        </section>
      </main>
    </div>
  );
};

export default SiteLayout;
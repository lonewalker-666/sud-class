"use client";

import { menu } from "@/src/lib/constant";
import { clearStorage } from "@/src/lib/util";

import Link from "next/link";

import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  X,
} from "lucide-react";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const TopNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLogs, setOpenLogs] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    clearStorage();
    router.push("/login");
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#F7F8FA]/95 backdrop-blur-xl border-b border-[#ECEEF2]">
        <div className="h-[82px] px-4 md:px-6 xl:px-8 flex items-center justify-between gap-4">
          {/* MOBILE MENU BUTTON */}
          <button
            className="xl:hidden w-11 h-11 rounded-xl border border-[#E7EAF0] bg-white flex items-center justify-center"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 max-w-[420px] relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A94A6]"
            />

            <input
              type="text"
              placeholder="Search students, classes, or reports..."
              className="
                w-full h-12 rounded-2xl
                bg-[#EEF1F5]
                border border-transparent
                focus:border-[#D8DEE8]
                focus:outline-none
                pl-11 pr-4
                text-sm
                transition
              "
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* NOTIFICATION */}
            <button className="hidden md:flex w-11 h-11 rounded-xl bg-white border border-[#E7EAF0] items-center justify-center hover:bg-gray-50 transition">
              <Bell size={18} />
            </button>

            {/* PROFILE */}
            <div ref={profileRef} className="relative">
              <button
                onClick={() => setOpenProfile((prev) => !prev)}
                className="flex items-center gap-3"
              >
                <div className="hidden md:flex flex-col items-end leading-tight">
                  <span className="text-sm font-semibold text-[#1B2430]">
                    Sathish Kumar
                  </span>

                  <span className="text-[11px] uppercase tracking-wide text-[#7D8798]">
                    System Administrator
                  </span>
                </div>

                <div className="w-11 h-11 rounded-full bg-[#1B2430] text-white flex items-center justify-center font-semibold text-sm shadow-lg">
                  SK
                </div>

                <ChevronDown
                  size={18}
                  className="hidden md:inline-block text-[#7D8798]"
                />
              </button>

              {/* PROFILE DROPDOWN */}
              {openProfile && (
                <div className="absolute right-0 top-[calc(100%+12px)] w-52 bg-white border border-[#ECEEF2] rounded-2xl shadow-2xl overflow-hidden">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#F8F9FB] transition text-sm"
                  >
                    Logout
                    <LogOut size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 z-50">
          {/* BACKDROP */}
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* DRAWER */}
          <div className="absolute left-0 top-0 h-full w-[86%] max-w-[320px] bg-[#5A6B1D] p-5 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white uppercase">
                SudLabs
              </h2>

              <button onClick={() => setMobileOpen(false)}>
                <X size={22} className="text-white" />
              </button>
            </div>

            {/* MOBILE SEARCH */}
            <div className="relative mb-6 md:hidden block">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
              />

              <input
                type="text"
                placeholder="Search..."
                className="
                  w-full h-12 rounded-2xl
                  bg-white/10
                  border border-white/10
                  text-white
                  placeholder:text-white/50
                  focus:outline-none
                  pl-11 pr-4
                  text-sm
                "
              />
            </div>

            {/* MOBILE NAV */}
            <nav className="flex flex-col gap-2">
              {menu.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.path ||
                  pathname.startsWith(item.path + "/");

                // ACCORDION MENU
                // if (item.children) {
                //   return (
                //     <div key={item.name} className="flex flex-col gap-2">
                //       <button
                //         onClick={() => setOpenLogs((prev) => !prev)}
                //         className={`
                //           flex items-center justify-between
                //           h-12 rounded-2xl px-4
                //           transition-all
                //           ${
                //             isActive
                //               ? "bg-white/10 text-white"
                //               : "text-white/80 hover:bg-white/5"
                //           }
                //         `}
                //       >
                //         <span className="flex items-center gap-3">
                //           <Icon size={20} />

                //           <span>{item.name}</span>
                //         </span>

                //         <ChevronDown
                //           size={18}
                //           className={`transition-transform ${
                //             openLogs ? "rotate-180" : "rotate-0"
                //           }`}
                //         />
                //       </button>

                //       {openLogs && (
                //         <div className="ml-6 border-l border-white/10 pl-4 flex flex-col gap-3 py-2">
                //           {item.children.map((child) => {
                //             const childActive =
                //               pathname === child.path;

                //             return (
                //               <Link
                //                 href={child.path}
                //                 key={child.name}
                //                 className={`text-sm transition ${
                //                   childActive
                //                     ? "text-white font-semibold"
                //                     : "text-white/70 hover:text-white"
                //                 }`}
                //               >
                //                 {child.name}
                //               </Link>
                //             );
                //           })}
                //         </div>
                //       )}
                //     </div>
                //   );
                // }

                // NORMAL MENU
                return (
                  <Link
                    href={item.path}
                    key={item.name}
                    className={`
                      h-12 rounded-2xl px-4
                      flex items-center gap-3
                      transition-all
                      ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/80 hover:bg-white/5"
                      }
                    `}
                  >
                    <Icon size={20} />

                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
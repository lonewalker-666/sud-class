"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { menu } from "@/src/lib/constant";

const SiteNav = () => {
  const pathname = usePathname();

  const [openLogs, setOpenLogs] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-screen
        bg-[#5A6B1D]
        border-r border-white/10
        transition-all duration-300
        hidden xl:flex flex-col
        ${collapsed ? "w-[90px]" : "w-[280px]"}
      `}
    >
      {/* HEADER */}
      <div
        className={`
          h-[82px]
          flex items-center
          border-b border-white/10
          ${collapsed ? "justify-around px-2" : "justify-between px-6"}
        `}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <Image
            src="/logo.svg"
            alt="logo"
            width={153}
            height={40}
            className={`${collapsed ? "w-10 h-10" : "w-40 h-12"} object-contain shrink-0`}
          />

          {/* {!collapsed && (
            <h1 className="text-[38px] leading-none font-black text-white tracking-tight uppercase">
              SudLabs
            </h1>
          )} */}
        </div>

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="text-white/80 hover:text-white transition"
        >
          {collapsed ? (
            <PanelLeftOpen size={14} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-2 px-4 py-6 overflow-y-auto overflow-x-hidden">
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
          //           rounded-2xl h-12 px-4
          //           transition-all duration-200
          //           ${
          //             isActive
          //               ? "bg-white/10 text-white border border-white/20"
          //               : "text-white/80 hover:bg-white/5"
          //           }
          //         `}
          //       >
          //         <span className="flex items-center gap-3 overflow-hidden">
          //           <Icon size={20} />

          //           {!collapsed && (
          //             <span className="font-medium whitespace-nowrap">
          //               {item.name}
          //             </span>
          //           )}
          //         </span>

          //         {!collapsed && (
          //           <ChevronDown
          //             size={18}
          //             className={`transition-transform ${
          //               openLogs ? "rotate-180" : "rotate-0"
          //             }`}
          //           />
          //         )}
          //       </button>

          //       {openLogs && !collapsed && (
          //         <div className="ml-6 border-l border-white/10 pl-4 flex flex-col gap-3 py-2">
          //           {item.children.map((child) => {
          //             const childActive = pathname === child.path;

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
                transition-all duration-200
                text-white
                ${
                  isActive
                    ? "bg-white/20 shadow-sm shadow-white/20 border border-white/20"
                    : "hover:bg-white/5"
                }
              `}
            >
              <Icon size={20} className="shrink-0" />

              {!collapsed && (
                <span className="font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SiteNav;
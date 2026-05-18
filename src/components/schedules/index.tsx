"use client";

import Image from "next/image";

import {
  CalendarPlus,
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  LayoutList,
  Search,
} from "lucide-react";

import Table, { TableColumn } from "../common/table";
import { classes } from "@/mock/schedules";


type ClassItem = (typeof classes)[0];

const columns: TableColumn<ClassItem>[] = [
  {
    header: "Class Name",
    key: "class",

    render: (item) => (
      <div className="flex items-center gap-3 min-w-[170px]">
        <div
          className="
            w-9 h-9
            rounded-xl
            bg-[#F8ECDF]
            flex items-center justify-center
            shrink-0
          "
        >
          🥋
        </div>

        <p className="font-semibold text-[var(--text-primary)]">
          {item.name}
        </p>
      </div>
    ),
  },

  {
    header: "Category",
    key: "category",

    render: (item) => (
      <span
        className="
          px-3 py-1
          rounded-full
          bg-[#F8ECDF]
          text-[#A65C18]
          text-xs
          font-semibold
        "
      >
        {item.category}
      </span>
    ),
  },

  {
    header: "Instructor",
    key: "instructor",

    render: (item) => (
      <div className="flex items-center gap-3 min-w-[140px]">
        <div className="w-8 h-8 rounded-full bg-[#E5E7EB]" />

        <p className="text-sm font-medium">
          {item.instructor}
        </p>
      </div>
    ),
  },

  {
    header: "Day",
    key: "day",

    render: (item) => (
      <p className="text-sm">
        {item.day}
      </p>
    ),
  },

  {
    header: "Time",
    key: "time",

    render: (item) => (
      <p className="text-sm whitespace-pre-line">
        {item.time.replace(" - ", "\n-\n")}
      </p>
    ),
  },

  {
    header: "Room",
    key: "room",

    render: (item) => (
      <p className="text-sm">
        {item.room}
      </p>
    ),
  },

  {
    header: "Students",
    key: "students",

    render: (item) => (
      <div className="flex items-center gap-3 min-w-[100px]">
        <span className="text-sm font-semibold">
          {item.students}
        </span>

        <div className="w-[60px] h-[6px] rounded-full bg-[#E5E7EB] overflow-hidden">
          <div
            className="h-full bg-[#5F6F2F] rounded-full"
            style={{
              width: `${Math.min(
                item.students * 5,
                100
              )}%`,
            }}
          />
        </div>
      </div>
    ),
  },

  {
    header: "Status",
    key: "status",

    render: (item) => (
      <span
        className="
          px-3 py-1
          rounded-full
          bg-[#DCFCE7]
          text-[#16A34A]
          text-xs
          font-bold
          uppercase
        "
      >
        {item.status}
      </span>
    ),
  },
];

const SchedulePlanner = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
        <div>
          <h3>Schedule Planner</h3>

          <p className="mt-1">
            Manage & view all scheduled classes
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="button-secondary">
            Export CSV
          </button>

          <button className="button-primary">
            <CalendarPlus size={18} />

            Schedule Class
          </button>
        </div>
      </div>

      {/* STATS CARD */}
      <div
        className="
          bg-white
          border border-[var(--border)]
          rounded-[28px]
          p-6
          flex items-start justify-between
        "
      >
        <div className="flex flex-col gap-5">
          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-[#F8ECDF]
              flex items-center justify-center
            "
          >
            🥋
          </div>

          <div>
            <h4>3 Classes</h4>

            <p>40 Active Students</p>
          </div>
        </div>

        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.08em]
            font-semibold
            text-[var(--text-secondary)]
          "
        >
          Martial Arts
        </p>
      </div>

      {/* FILTERS */}
      <div
        className="
          bg-white
          border border-[var(--border)]
          rounded-[28px]
          p-4
          flex flex-col lg:flex-row
          lg:items-center
          justify-between
          gap-4
        "
      >
        <div className="flex items-center gap-3 flex-wrap flex-1">
          <div className="relative flex-1 min-w-[240px]">
            <Search
              size={16}
              className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-[var(--text-secondary)]
              "
            />

            <input
              placeholder="Filter by class or instructor"
              className="
                input-primary
                pl-11
                !h-11
              "
            />
          </div>

          <select className="input-primary !h-11 !w-[130px]">
            <option>Music</option>
          </select>

          <select className="input-primary !h-11 !w-[130px]">
            <option>Status: All</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="
              w-10 h-10
              rounded-xl
              bg-[#F3F5F8]
              flex items-center justify-center
            "
          >
            <Grid2X2 size={18} />
          </button>

          <button
            className="
              w-10 h-10
              rounded-xl
              bg-[#F3F5F8]
              flex items-center justify-center
            "
          >
            <LayoutList size={18} />
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div
        className="
          bg-white
          border border-[var(--border)]
          rounded-[28px]
          overflow-hidden
        "
      >
        {/* TABLE HEADER */}
        <div
          className="
            px-6 py-4
            border-b border-[var(--border)]
            flex items-center justify-between
          "
        >
          <h5>All Classes (5)</h5>

          <span
            className="
              px-4 py-1.5
              rounded-full
              bg-[#F3F5F8]
              text-[11px]
              uppercase
              tracking-[0.08em]
              font-bold
              text-[var(--text-secondary)]
            "
          >
            Viewing All
          </span>
        </div>

        <Table
          data={classes}
          columns={columns}
          tableClassName="!border-0"
          tableWrapperClassName="!border-0 !rounded-none"
        />

        {/* FOOTER */}
        <div
          className="
            px-6 py-4
            border-t border-[var(--border)]
            flex items-center justify-between
          "
        >
          <p className="text-sm">
            Showing 1 to 5 of 5 entries
          </p>

          <div className="flex items-center gap-2">
            <button
              className="
                w-8 h-8
                rounded-lg
                flex items-center justify-center
                hover:bg-[#F3F5F8]
              "
            >
              <ChevronLeft size={16} />
            </button>

            <button
              className="
                w-8 h-8
                rounded-lg
                bg-[#5F6F2F]
                text-white
                text-sm
                font-semibold
              "
            >
              1
            </button>

            <button
              className="
                w-8 h-8
                rounded-lg
                flex items-center justify-center
                hover:bg-[#F3F5F8]
              "
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePlanner;
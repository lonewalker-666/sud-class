"use client";

import Image from "next/image";

import {
  CalendarDays,
  GraduationCap,
  Mail,
  Phone,
  Pencil,
  ShieldCheck,
  Trash2,
  UserPlus,
  ListFilter,
} from "lucide-react";

import Table, { TableColumn } from "../common/table";
import ThreeDotMenu  from "../common/threeDotMenu";
import { facultyList } from "@/mock/teachers";

type Faculty = (typeof facultyList)[0];

const columns: TableColumn<Faculty>[] = [
  {
    header: "Faculty",
    key: "faculty",

    mobileLabel: "Faculty",

    render: (item) => (
      <div className="flex items-center gap-4 min-w-[240px]">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-[var(--text-primary)]">
            {item.name}
          </p>

          <p className="text-xs text-[#2D7DA5] line-clamp-2">
            {item.department}
          </p>
        </div>
      </div>
    ),
  },

  {
    header: "Contact",
    key: "contact",

    mobileLabel: "Contact",

    render: (item) => (
      <div className="flex flex-col gap-2 min-w-[220px]">
        <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
          <Mail size={13} />

          <span>{item.email}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
          <Phone size={13} />

          <span>{item.phone}</span>
        </div>
      </div>
    ),
  },

  {
    header: "Grade",
    key: "grade",

    mobileLabel: "Assigned Grade",

    render: (item) => (
      <div className="flex items-start gap-2 text-sm font-semibold max-w-[180px]">
        <GraduationCap
          size={15}
          className="mt-0.5 shrink-0"
        />

        <span>{item.grade}</span>
      </div>
    ),
  },

  {
    header: "Schedule",
    key: "schedule",

    mobileLabel: "Schedule",

    render: (item) => (
      <div className="flex items-start gap-2 text-xs text-[#9A5B22] min-w-[220px]">
        <CalendarDays
          size={14}
          className="mt-0.5 shrink-0"
        />

        <span>{item.schedule}</span>
      </div>
    ),
  },

  {
    header: "",
    key: "actions",

    mobileLabel: "Actions",

    headerClassName: "w-[60px]",

    render: () => (
      <div className="flex justify-end">
        <ThreeDotMenu
          menuClassName="rounded-[20px] border border-[var(--border)] shadow-2xl p-2"

          iconClassName="
            w-9 h-9 rounded-xl
            hover:bg-[#F3F5F8]
            transition
          "

          options={[
            {
              label: "Edit",

              icon: <Pencil size={16} />,

              onClick: () => {},
            },

            {
              label: "Access",

              icon: (
                <ShieldCheck size={16} />
              ),

              onClick: () => {},
            },

            {
              label: "Remove",

              icon: <Trash2 size={16} />,

              className:
                "text-red-500 hover:bg-red-50",

              onClick: () => {},
            },
          ]}
        />
      </div>
    ),
  },
];

const FacultyPage = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
        <div>
          <h3>Academic Faculty</h3>

          <p className="mt-1">
            Manage faculty enrollment and records
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="button-secondary">
            Export List
          </button>

          <button className="button-primary">
            <UserPlus size={16} />

            Add Faculty
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div
        className="
          bg-white
          border border-[var(--border)]
          rounded-xl
          py-3 px-4
          flex flex-col lg:flex-row
          lg:items-center
          justify-between
          gap-4
        "
      >
        <div className="flex items-center gap-3 flex-wrap text-sm">
          <div className="flex items-center gap-2 font-semibold text-[var(--text-secondary)]">
            <ListFilter size={16} />

            FILTERS:
          </div>

          <select className="input-primary !h-11 !w-[170px]">
            <option>All Status</option>
          </select>

          <select className="input-primary !h-11 !w-[170px]">
            <option>All Classes</option>
          </select>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          Showing 124 total Faculty
        </p>
      </div>

      {/* TABLE */}
      <Table
        data={facultyList}
        columns={columns}
        tableOverflow="x"
      />

      {/* FOOTER BUTTON */}
      {/* <button
        className="
          h-16
          rounded-[24px]
          border border-dashed border-[var(--border)]
          bg-white
          text-sm
          font-semibold
          tracking-[0.08em]
          uppercase
          text-[var(--text-secondary)]
          inline-flex items-center justify-center gap-3
          hover:bg-[#FAFBFC]
          transition
        "
      >
        <UserPlus size={18} />

        Assign New Educator To Faculty
      </button> */}
    </div>
  );
};

export default FacultyPage;
"use client";

import Image from "next/image";

import { ListFilter, Mail, Pencil, Plus, Trash2 } from "lucide-react";

import Table, { TableColumn } from "../common/table";
import ThreeDotMenu from "../common/threeDotMenu";
import { students } from "@/mock/students";

type Student = (typeof students)[0];

const columns: TableColumn<Student>[] = [
  {
    header: "Student",
    key: "student",

    mobileLabel: "Student",

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

          <p className="text-xs text-[var(--text-secondary)]">
            ID : {item.studentId}
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
      <div className="flex flex-col gap-1 min-w-[220px]">
        <div className="flex items-center gap-2 text-sm">
          <Mail size={14} />

          <span>{item.email}</span>
        </div>

        <p className="text-xs text-[var(--text-secondary)]">{item.phone}</p>
      </div>
    ),
  },

  {
    header: "Grade",
    key: "grade",

    mobileLabel: "Grade",

    render: (item) => (
      <span
        className="
          px-3 py-1
          rounded-md
          bg-[#EAF7FB]
          text-[#156C86]
          text-xs
          font-semibold
        "
      >
        {item.grade}
      </span>
    ),
  },

  {
    header: "Status",
    key: "status",

    mobileLabel: "Status",

    render: (item) => (
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#0F766E]" />

        <span className="text-sm text-[#0F766E]">{item.status}</span>
      </div>
    ),
  },

  {
    header: "",
    key: "actions",

    mobileLabel: "Actions",

    headerClassName: "w-[70px]",

    render: () => (
      <div className="flex justify-end">
        <ThreeDotMenu
          menuClassName="
            rounded-[20px]
            border border-[var(--border)]
            shadow-2xl
            p-2
          "
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
              label: "Remove",

              icon: <Trash2 size={16} />,

              className: "text-red-500 hover:bg-red-50",

              onClick: () => {},
            },
          ]}
        />
      </div>
    ),
  },
];

const Students = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
        <div>
          <h3>Academic Student</h3>

          <p className="mt-1">Manage Student enrollment and records</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="button-secondary">Export List</button>

          <button className="button-primary">
            <Plus size={18} />
            Add Student
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
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)]">
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
      <Table data={students} columns={columns} tableOverflow="x" />

      {/* FOOTER */}
      <button
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
        <Plus size={18} />
        New Student
      </button>
    </div>
  );
};

export default Students;

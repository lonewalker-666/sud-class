"use client";

import React from "react";
import { isEmpty } from "lodash";
import { cn } from "@/src/lib/util";
import Image from "next/image";

type TableOverflow = "x" | "y" | "both" | "none";

export type TableColumn<T> = {
  header: React.ReactNode;
  key: string;

  render: (
    item: T,
    index: number
  ) => React.ReactNode;

  mobileLabel?: string;

  headerClassName?: string;
  cellClassName?: string;
};

export type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];

  rowKey?: (
    item: T,
    index: number
  ) => string | number;

  rowClassName?: string;

  stickyHeader?: boolean;

  tableWrapperClassName?: string;
  containerClassName?: string;
  tableClassName?: string;
  theadClassName?: string;
  tbodyClassName?: string;

  showEmpty?: boolean;
  emptyMessage?: string;

  onRowClick?: (
    item: T,
    index: number
  ) => void;

  loading?: boolean;

  error?: boolean;

  onRetry?: () => void;

  retryLabel?: string;

  loadingImgSrc?: string;
  errorImgSrc?: string;
  emptyImgSrc?: string;

  loadingTitle?: string;
  emptyTitle?: string;
  errorTitle?: string;

  tableOverflow?: TableOverflow;

  maxHeight?: string;

  tableRef?: React.RefObject<HTMLTableElement | null>;

  containerRef?: React.RefObject<HTMLDivElement | null>;

  getRowProps?: (
    item: T,
    index: number
  ) => React.HTMLAttributes<HTMLTableRowElement>;
};

function StateCard({
  imgSrc,
  title,
  subtitle,
  children,
}: {
  imgSrc: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="
        flex flex-col
        justify-center items-center
        p-6 gap-4
        w-full h-[400px]
        text-black/60
      "
    >
      <div className="relative w-[220px] h-[160px]">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-1 max-w-[520px]">
        <p className="text-base font-medium text-black/70">
          {title}
        </p>

        {subtitle ? (
          <p className="text-sm text-center text-black/40">
            {subtitle}
          </p>
        ) : null}
      </div>

      {children}
    </div>
  );
}

export default function Table<T>({
  data,
  columns,

  rowKey,

  rowClassName,

  stickyHeader = true,

  tableWrapperClassName = "",
  containerClassName = "",
  tableClassName = "",
  theadClassName = "",
  tbodyClassName = "",

  emptyMessage = "",

  showEmpty = false,

  loading = false,

  error = false,

  onRetry,

  retryLabel = "Retry",

  loadingImgSrc = "/mockups/loading.png",
  errorImgSrc = "/mockups/error.png",
  emptyImgSrc = "/mockups/empty.png",

  loadingTitle = "Loading",
  emptyTitle = "No data found",
  errorTitle = "Something went wrong",

  onRowClick,

  tableOverflow = "x",

  maxHeight = "max-h-[600px]",

  tableRef,

  containerRef,

  getRowProps,
}: TableProps<T>) {
  if (loading) {
    return (
      <StateCard
        imgSrc={loadingImgSrc}
        title={loadingTitle}
        subtitle="Please wait..."
      />
    );
  }

  if (error) {
    return (
      <StateCard
        imgSrc={errorImgSrc}
        title={errorTitle}
      >
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="
              mt-2
              px-4 py-2
              rounded-xl
              border
              border-[var(--border)]
              bg-white
              text-sm
              font-medium
            "
          >
            {retryLabel}
          </button>
        ) : null}
      </StateCard>
    );
  }

  if (showEmpty && isEmpty(data)) {
    return (
      <StateCard
        imgSrc={emptyImgSrc}
        title={emptyTitle}
        subtitle={emptyMessage || undefined}
      />
    );
  }

  if (isEmpty(data)) {
    return null;
  }

  const overflowClass =
    tableOverflow === "x"
      ? "overflow-x-auto overflow-y-hidden"
      : tableOverflow === "y"
      ? "overflow-y-auto overflow-x-hidden"
      : tableOverflow === "both"
      ? "overflow-auto"
      : "overflow-hidden";

  return (
    <div className={cn("w-full", containerClassName)}>
      {/* DESKTOP TABLE */}
      <div
        ref={containerRef}
        className={cn(
          `
            hidden md:block
            bg-white
            border border-[var(--border)]
            rounded-2xl
            overflow-hidden
            shadow-sm
          `,
          maxHeight,
          overflowClass,
          tableWrapperClassName
        )}
      >
        <table
          ref={tableRef}
          className={cn(
            `
              min-w-full
              divide-y
              divide-[var(--border)]
            `,
            tableClassName
          )}
        >
          <thead
            className={cn(
              stickyHeader &&
                "sticky top-0 z-10",
              `
                bg-white
                border-b
                border-[var(--border)]
              `,
              theadClassName
            )}
          >
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    `
                      px-6 py-4
                      text-left
                      text-[11px]
                      uppercase
                      tracking-[0.08em]
                      font-semibold
                      text-[var(--text-secondary)]
                      whitespace-nowrap
                    `,
                    col.headerClassName
                  )}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody
            className={cn(
              `
                divide-y
                divide-[var(--border)]
              `,
              tbodyClassName
            )}
          >
            {data.map((item, index) => {
              const extraRowProps =
                getRowProps?.(item, index) ??
                {};

              const { className, ...rest } =
                extraRowProps;

              return (
                <tr
                  key={
                    rowKey
                      ? rowKey(item, index)
                      : index
                  }
                  className={cn(
                    `
                      hover:bg-[#FAFBFC]
                      transition-colors
                    `,
                    rowClassName,
                    className
                  )}
                  onClick={() =>
                    onRowClick?.(item, index)
                  }
                  {...rest}
                >
                  {columns.map((col) => (
                    <td
                      key={`${col.key}-${index}`}
                      className={cn(
                        `
                          px-6 py-5
                          text-sm
                          text-[var(--text-primary)]
                          align-middle
                        `,
                        col.cellClassName
                      )}
                    >
                      {col.render(item, index)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MOBILE TABLE */}
      <div className="md:hidden flex flex-col gap-4">
        {data.map((item, index) => {
          const extraRowProps =
            getRowProps?.(item, index) ?? {};

          const { className, ...rest } =
            extraRowProps;

          return (
            <div
              key={
                rowKey
                  ? rowKey(item, index)
                  : index
              }
              className={cn(
                `
                  bg-white
                  border border-[var(--border)]
                  rounded-[28px]
                  p-5
                  shadow-sm
                  flex flex-col
                  gap-5
                  overflow-hidden
                `,
                rowClassName,
                className
              )}
              onClick={() =>
                onRowClick?.(item, index)
              }
              {...rest}
            >
              {columns.map((col) => (
                <div
                  key={`${col.key}-${index}`}
                  className="
                    flex flex-col
                    gap-2
                    min-w-0
                  "
                >
                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.08em]
                      font-semibold
                      text-[var(--text-secondary)]
                    "
                  >
                    {col.mobileLabel ||
                      col.header}
                  </span>

                  <div
                    className={cn(
                      `
                        text-sm
                        text-[var(--text-primary)]
                        min-w-0
                        break-words
                      `,
                      col.cellClassName
                    )}
                  >
                    {col.render(item, index)}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
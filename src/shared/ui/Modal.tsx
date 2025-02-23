import React, { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export default function Modal({
  isOpen,
  onCancel,
  onConfirm,
  title,
  message,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-md bg-secondary p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="mr-2 rounded bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={onCancel}
          >
            Назад
          </button>
          <button
            className="rounded bg-[var(--primary)] px-4 py-2 hover:bg-accent"
            onClick={onConfirm}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

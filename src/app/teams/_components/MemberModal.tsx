"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconBrandThreads,
  IconBrandInstagram,
  IconBrandFacebook,
  IconWorld,
  IconMail,
  IconX,
} from "@tabler/icons-react";
import { IMember } from "@/types/teams";

interface MemberModalProps {
  member: IMember | null;
  onClose: () => void;
}

export default function MemberModal({ member, onClose }: MemberModalProps) {
  useEffect(() => {
    if (!member) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 grid place-items-center z-[100] p-4 sm:p-6 overflow-y-auto">
          <motion.div
            key="member-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-10 cursor-pointer"
          />

          <motion.div
            key={`member-modal-${member.name}`}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{
              opacity: { duration: 0.2, ease: "easeOut" },
              scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col md:flex-row bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/90 shadow-2xl card-shadow rounded-2xl md:rounded-3xl overflow-hidden z-20 cursor-default"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-30 p-1.5 md:p-2 rounded-full bg-neutral-100/90 hover:bg-neutral-200 text-neutral-700 hover:text-black border border-neutral-300 dark:bg-neutral-900/80 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:border-neutral-700/60 transition-all duration-150 backdrop-blur-sm cursor-pointer"
              aria-label="Close modal"
            >
              <IconX size={18} />
            </button>

            <div className="relative w-full md:w-[280px] lg:w-[320px] shrink-0 aspect-square bg-neutral-100 dark:bg-neutral-900">
              <Image
                priority
                src={member.pfp.url}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top"
              />
            </div>

            <div className="flex-1 p-5 pb-9 md:p-7 md:pb-7 flex flex-col justify-start gap-3.5 overflow-y-auto max-h-[60vh] md:max-h-[500px] [scrollbar-width:none] [-ms-overflow-style:none]">
              <div className="flex flex-col gap-1.5">
                <h2 className="font-medium text-quaternary text-3xl sm:text-4xl font-iceberg leading-tight tracking-wide">
                  {member.name}
                </h2>

                <p className="text-hero font-gidugu text-2xl sm:text-3xl leading-snug">
                  {member.role}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-quaternary dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-quaternary/60 dark:text-neutral-300 dark:hover:text-quaternary transition-all duration-200 transform hover:scale-105 active:scale-95"
                      aria-label="LinkedIn"
                    >
                      <IconBrandLinkedin size={18} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-quaternary dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-quaternary/60 dark:text-neutral-300 dark:hover:text-quaternary transition-all duration-200 transform hover:scale-105 active:scale-95"
                      aria-label="GitHub"
                    >
                      <IconBrandGithub size={18} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-quaternary dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-quaternary/60 dark:text-neutral-300 dark:hover:text-quaternary transition-all duration-200 transform hover:scale-105 active:scale-95"
                      aria-label="Twitter / X"
                    >
                      <IconBrandX size={18} />
                    </a>
                  )}
                  {member.threads && (
                    <a
                      href={member.threads}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-quaternary dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-quaternary/60 dark:text-neutral-300 dark:hover:text-quaternary transition-all duration-200 transform hover:scale-105 active:scale-95"
                      aria-label="Threads"
                    >
                      <IconBrandThreads size={18} />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-quaternary dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-quaternary/60 dark:text-neutral-300 dark:hover:text-quaternary transition-all duration-200 transform hover:scale-105 active:scale-95"
                      aria-label="Instagram"
                    >
                      <IconBrandInstagram size={18} />
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-quaternary dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-quaternary/60 dark:text-neutral-300 dark:hover:text-quaternary transition-all duration-200 transform hover:scale-105 active:scale-95"
                      aria-label="Facebook"
                    >
                      <IconBrandFacebook size={18} />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={`${member.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-quaternary dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-quaternary/60 dark:text-neutral-300 dark:hover:text-quaternary transition-all duration-200 transform hover:scale-105 active:scale-95"
                      aria-label="Website"
                    >
                      <IconWorld size={18} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-quaternary dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-quaternary/60 dark:text-neutral-300 dark:hover:text-quaternary transition-all duration-200 transform hover:scale-105 active:scale-95"
                      aria-label="Email"
                    >
                      <IconMail size={18} />
                    </a>
                  )}
                </div>
              </div>

              {member.bio && (
                <div className="pt-4 mt-3 pb-2 border-t border-neutral-200 dark:border-neutral-800/80 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base md:text-lg leading-relaxed overflow-y-auto max-h-56 [scrollbar-width:none] [-ms-overflow-style:none]">
                  {member.bio}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
  IconTerminal,
} from "@tabler/icons-react";
import Banner from "./Banner";

export default function Footer() {
  return (
    <footer className="font-encode-sans mt-32 border-t-2 border-tertiary">
      <div className="container max-w-6xl mx-auto mt-8 px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-14">
          <div className="flex flex-col justify-center items-center gap-1 text-quaternary">
            <Banner />
            <div className="flex gap-2.5 mt-5">
              <Link
                href="https://www.linkedin.com/company/zeroday-alliance"
                target="_blank"
              >
                <IconBrandLinkedin size={26} />
              </Link>
              <Link href="https://github.com/zerodayalliance" target="_blank">
                <IconBrandGithub size={26} stroke={1.5} />
              </Link>
              <Link
                href="https://www.instagram.com/zerodayalliance"
                target="_blank"
              >
                <IconBrandInstagram size={26} stroke={1.5} />
              </Link>
              <Link href="https://x.com/zerodayalliance" target="_blank">
                <IconBrandX size={26} stroke={1.5} />
              </Link>
              <Link
                href="https://youtube.com/@zerodayalliance?sub_confirmation=1"
                target="_blank"
              >
                <IconBrandYoutube size={26} stroke={1.5} />
              </Link>
              <Link href="mailto:hello@zerodayalliance.tech" target="_blank">
                <IconMail size={26} stroke={1.5} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-center text-quaternary mb-2">
              Community
            </h3>
            <div className="flex flex-col justify-center items-center gap-1 text-black dark:text-onhold">
              <Link href="/code-of-conduct" className="hover:underline">
                Code of Conduct
              </Link>
              <Link href="/rules" className="hover:underline">
                Rules & Regulations
              </Link>
              <Link href="/quiz" className="hover:underline">
                Quiz
              </Link>
            </div>
          </div>

          <div>
            <Link
              href="/cli"
              target="_blank"
              className="flex justify-center items-center font-iceberg text-lg px-4 py-2 rounded-3xl bg-gradient-to-b from-quaternary to-tertiary text-secondary focus:ring-2 focus:ring-primary hover:shadow-xl transition duration-200"
            >
              <span>
                <IconTerminal size={25} />
              </span>
              <span className="pr-1 select-none">CLI</span>
            </Link>
          </div>
        </div>

        <div className="mb-2 text-center text-sm text-black dark:text-onhold">
          {/* <p className="mb-1">
            <span>🛠️ Developed by Web Dev Team (2024-25)</span>
            <br className="sm:hidden block" />
            <span className="hidden sm:inline">&nbsp;⦁&nbsp;</span>
            <span>🎨 Designed by Graphics Team (2024-25)</span>
          </p> */}
          <p className="mb-4">
            &copy; 2024-{new Date().getFullYear()} ZeroDay Alliance. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

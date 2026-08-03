import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {currentYear} Kiadtiphong. All rights reserved.
        </p>
        <p className="text-sm text-text-muted flex items-center gap-1">
          Built with <FaHeart className="text-primary text-xs" /> using Next.js
          & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

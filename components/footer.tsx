import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} DocConverter. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/#"
            className="text-sm font-medium hover:underline underline-offset-4"
            title="View Terms of Service"
          >
            Terms
          </Link>
          <Link
            href="/#"
            className="text-sm font-medium hover:underline underline-offset-4"
            title="View Privacy Policy"
          >
            Privacy
          </Link>
          <Link
            href="/#"
            className="text-sm font-medium hover:underline underline-offset-4"
            title="Contact Us"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

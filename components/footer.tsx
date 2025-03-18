import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background px-4">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Open Source Programs Guide</h3>
            <p className="text-muted-foreground max-w-md">
              Your comprehensive resource for discovering and contributing to
              open source programs worldwide.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-lg font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/programs/gsoc" className="hover:text-primary">
                  Google Summer of Code
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/hacktoberfest"
                  className="hover:text-primary"
                >
                  Hacktoberfest
                </Link>
              </li>
              <li>
                <Link href="/programs/outreachy" className="hover:text-primary">
                  Outreachy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/resources/guide" className="hover:text-primary">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/community/discord" className="hover:text-primary">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/community/events" className="hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/community/contribute"
                  className="hover:text-primary"
                >
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TechKareer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

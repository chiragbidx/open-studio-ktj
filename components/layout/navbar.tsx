"use client";
import { ChevronsDown, Menu, Github } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import homeContent from "@/content/home";

const navbarBrand =
  homeContent?.navbar?.brandName ||
  homeContent?.navbarBrand ||
  "RelateCRM";

const navbarRoutes =
  homeContent?.navbar?.routes || [
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
    { href: "/#faq", label: "FAQ" },
  ];

const navbarGithub =
  homeContent?.navbar?.githubLink?.href ||
  "https://github.com/chiragdodiya";

const signInLabel = homeContent?.navbar?.signInLabel || "Sign in";
const signUpLabel = homeContent?.navbar?.signUpLabel || "Sign up";
const dashboardLabel = homeContent?.navbar?.dashboardLabel || "Dashboard";

interface NavbarProps {
  isLoggedIn?: boolean;
}

export const Navbar = ({ isLoggedIn = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      {/* Brand/Logo section */}
      <Link href="/" className="font-bold text-lg flex items-center" aria-label="Home">
        <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
        {navbarBrand}
      </Link>
      {/* Mobile Navigation */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
              aria-label="Open menu"
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    {navbarBrand}
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4 ml-2">
                {navbarRoutes.map(route => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {route.label}
                  </Link>
                ))}
                <Link
                  href={navbarGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium flex items-center gap-2 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                  Github
                </Link>
                {isLoggedIn ? (
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="w-full mt-3"
                  >
                    <Button size="sm" variant="default" className="w-full">{dashboardLabel}</Button>
                  </Link>
                ) : (
                  <div className="flex flex-col gap-2 mt-3">
                    <Link href="/auth#signin" onClick={() => setIsOpen(false)}>
                      <Button size="sm" variant="outline" className="w-full">{signInLabel}</Button>
                    </Link>
                    <Link href="/auth#signup" onClick={() => setIsOpen(false)}>
                      <Button size="sm" variant="default" className="w-full">{signUpLabel}</Button>
                    </Link>
                  </div>
                )}
              </nav>
            </div>
            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ThemeToggle mode="inline" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-2 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navbarRoutes.map(route => (
              <NavigationMenuItem key={route.href}>
                <Link href={route.href} passHref legacyBehavior>
                  <NavigationMenuLink
                    className="font-medium px-3 py-2 hover:text-primary transition-colors"
                  >
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <a
                href={navbarGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium px-3 py-2 flex items-center gap-1 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
                Github
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {isLoggedIn ? (
          <Link href="/dashboard">
            <Button size="sm" variant="default">{dashboardLabel}</Button>
          </Link>
        ) : (
          <div className="flex gap-2">
            <Link href="/auth#signin">
              <Button size="sm" variant="outline">{signInLabel}</Button>
            </Link>
            <Link href="/auth#signup">
              <Button size="sm" variant="default">{signUpLabel}</Button>
            </Link>
          </div>
        )}
        <ThemeToggle className="ml-3" />
      </nav>
    </header>
  );
};
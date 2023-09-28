import React from 'react'
import {
  Navbar as NavbarUi, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Avatar
} from "@nextui-org/react";
import Image from 'next/image';
import { useState } from 'react';
import mangoLogo from "../assets/MangoLavandaLogo.png"

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
    const menuItems = [
      {
        name: "Sell",
        route: "/sell"
      },
       {
        name: "Edit Items",
        route: "/edit"
      },
       {
        name: "Statistics",
        route: "/statistics"
      },
       {
        name: "Sold",
        route: "/sold"
      }
    ];

    let showLogin = (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="/register" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      );

    if(loggedIn){
      showLogin= (
      <NavbarContent justify="end">
           <Avatar name="Lorenzo" isBordered color="primary"></Avatar>
        </NavbarContent>

      )
    }

  return (
    <NavbarUi>
        <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
        </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Image src={mangoLogo} alt='MyLogo' width={30} height={30}/>
          <p className="font-bold text-inherit ml-5">Mango Lavanda</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link 
            color='foreground'
            href='/'
            >
            <Image src={mangoLogo} alt='MyLogo' width={30} height={30}/>
            <p className="font-bold text-inherit ml-5">Mango Lavanda</p>
          </Link>
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.route}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {showLogin}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUi>
  )
}


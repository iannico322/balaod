"use client"

import * as React from "react"


import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"



export function NavigationMenuDemo() {
  return (
    <NavigationMenu className=" z-50 h-full px-8 flex items-center justify-center hover:bg-foreground text-xs transition-all font-bold duration-75">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" hover:bg-none transition-none">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid   gap-3 p-4 md:w-[400px] min-w-[10px] grid-cols-1">
              
              <ListItem href="/docs" title="">
                Instaltion
               
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
             
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
               
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

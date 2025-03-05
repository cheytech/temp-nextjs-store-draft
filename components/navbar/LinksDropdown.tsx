import React from 'react'
import { links } from '@/utils/links'
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { LuAlignLeft } from 'react-icons/lu'
import UserIcon from './UserIcon'
import Link from 'next/link'
const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Button variant='outline' className='flex gap-4 max-w-[100px]'>
       <LuAlignLeft className='w-6 h-6' />
       <UserIcon/>
       </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40'>
        {links.map((link)=>{
          return (
            <DropdownMenuItem key={link.href}>
             <Link href={link.href} className='capitalize w-full'>
             {link.label}
             </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown

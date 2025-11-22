import { SidebarTrigger } from '@/components/ui/sidebar'
import { Sidebar } from 'lucide-react'
import React from 'react'

function AppHeader() {
  return (
    <div className='p-3 w-full  shadow flex justify-between items-center'> 
     <SidebarTrigger/>
     <Button>Sign In</Button>
    </div>
  )
}

export default AppHeader
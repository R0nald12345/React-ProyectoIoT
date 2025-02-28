import SidebarMenuItem from "../Components/Sidebar/SidebarMenuItem"
import { menuItem } from "../rutas/menuItem"

const DashboardSidebar = () => {

  return (
    <div className="h-full">

        <div className='h-full overflow-y-auto'>
          {
            menuItem.map( (option)=>
              <SidebarMenuItem
                key={option.to}
                {...option}
                />
            )
          }

        </div>
    </div>
  )

}

export default DashboardSidebar
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HiOutlineUserGroup } from "react-icons/hi"
import { MdOutlinePhone } from "react-icons/md"
import { FaRegUser } from "react-icons/fa6";
import { BsFillChatLeftTextFill } from "react-icons/bs";



const items = [
    {
        icon: <BsFillChatLeftTextFill />
        ,
        label: "Chats",
        value: "chats"
    },
    {
        icon: <MdOutlinePhone />,
        label: "Calls",
        value: "calls"
    },
    {
        icon: <FaRegUser />,
        label: "Users",
        value: "users"
    },
    {
        icon: <HiOutlineUserGroup />,
        label: "Groups",
        value: "groups"
    }
]

const SidebarTabs = () => {
    return (
        <Tabs defaultValue="chats" className="w-full mb-3">
            <TabsList>
                {items.map((item) => (
                    <TabsTrigger key={item.value} value={item.value}>
                        <div className={`flex-col ${item.value === 'chats' ? 'text-[#6852D6]' : 'text-[#A1A1A1]'} items-center hover:text-[#6852D6] text-md justify-center text-center p-4`}>
                            <div className="text-center text-xl">
                                {item.icon}
                            </div>
                            <h4>{item.label}</h4>
                        </div>
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    )
}

export default SidebarTabs

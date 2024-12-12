import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar"

import { HiOutlineDotsVertical } from "react-icons/hi";
import SidebarTabs from "./sidebar-tabs";

const Messages = [
    {
        name: "George Alan",
        active: true,
        image: "https://s3-alpha-sig.figma.com/img/ab41/a74a/ead9e7cb47a87ad793df9b09ed9d1ea5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BsQEUidFxmCMB85epnktDNYEom2WgUWv~xtHZsk65E1wZHbhQpB-IxEZwn9KlX8NeBeoxlsL64gr5p1aNPY4UviBWEHRhvEjmvPKWUnG6wZ~qA8kGal5Hecjoep8QH6wnfILxlX3U6KWbZ-~R2iCtu1s2gQH~h3xRcLYzejfy-Fqgp0fJi5jyH~D~okpUD8jbTTnlf5bUkmIiu70cMrHIx-Uygo40OWHcIrWtLeZHIvi-TXyNOO5RFrkPPIt~CrwYsMEI-3z-SZGfSdnk44iY81v0nsizj7TU6ogAcKqn35L-fEzP6YEQLK8Zmqw2mL2eB-V~TpKbDW0aIc9D2mlpA__",
        lastMessage: "I'll take it. Can you ship it?"
    },
    {
        name: "Uber Cars",
        active: false,
        image: "https://s3-alpha-sig.figma.com/img/c784/fd14/35360c943e43ac320a5b4c3fa8784358?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KvTrXiDtT7RnrzP7v73e7bblSnmZK1~KqZZZjZ9ZkzW0ZpdyH7owIGzkMgtAv0QjjLHHi~F54CM4jmk32jsoJDpKGulxHNb-CIS5Yd7i~8qLZEQSnFZ1K5HxFbLRWvIGko9PRgrgrCNc996XqlF3mBa2JGPg8bkvs37IjAXHJFMczV2PwdC0EzJUyZQ0DfPfnP24elguasTR5D7aIyYID1AdnHVL9yoBkvzYakFFt4s4IrUQYILRZdIqN7Oceq5o2htyWG~dYPtd9LW0IBXYAeH9AgT8YGkG1hTRCPt1NzuJQgN40U5BDOiV3ubm8R7~uEWwhNzOFP71zreHx2vjwQ__",
        lastMessage: "Your ride is 2 minutes away. Please confirm your location."
    },
]


export function AppSidebar() {
    return (
        <Sidebar className="px-2">
            <SidebarHeader />
            <SidebarContent>
                <div className="flex flex-row items-center justify-between">
                    <SidebarGroupLabel className="font-semibold text-black text-2xl">Chats</SidebarGroupLabel>
                    <HiOutlineDotsVertical className="font-semibold text-black text-2xl" />

                </div>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {/* Chats */}
                        {Messages.map((message) => (
                            <div key={message.name} className={`flex max-h-[4.5rem] items-center p-4 hover:bg-gray-100 cursor-pointer ${message.active ? 'bg-gray-200' : ''}`}>
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-row items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src={message.image} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="flex items-center flex-col gap-1">
                                            <div className="flex w-full flex-row items-center justify-between">
                                                <div className="font-semibold text-xl text-black">{message.name}</div>
                                                <h4 className="ml-auto">4:30pm</h4>
                                            </div>
                                            <div className="text-[#727272] font-medium">{message.lastMessage}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <SidebarTabs />
            </SidebarFooter>
        </Sidebar>
    )
}

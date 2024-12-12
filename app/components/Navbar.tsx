import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PiVideoCameraLight } from "react-icons/pi";
import {  MdOutlinePhone } from "react-icons/md";
import { FiInfo } from "react-icons/fi";





const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
            <div className="max-w-7xl ">
                <div className="flex px-4 justify-between items-center h-16">
                    {/* Avatar */}
                    <div className="flex items-center">
                        <div className='flex items-center flex-row gap-2'>
                            <Avatar>
                                <AvatarImage src="https://s3-alpha-sig.figma.com/img/ab41/a74a/ead9e7cb47a87ad793df9b09ed9d1ea5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BsQEUidFxmCMB85epnktDNYEom2WgUWv~xtHZsk65E1wZHbhQpB-IxEZwn9KlX8NeBeoxlsL64gr5p1aNPY4UviBWEHRhvEjmvPKWUnG6wZ~qA8kGal5Hecjoep8QH6wnfILxlX3U6KWbZ-~R2iCtu1s2gQH~h3xRcLYzejfy-Fqgp0fJi5jyH~D~okpUD8jbTTnlf5bUkmIiu70cMrHIx-Uygo40OWHcIrWtLeZHIvi-TXyNOO5RFrkPPIt~CrwYsMEI-3z-SZGfSdnk44iY81v0nsizj7TU6ogAcKqn35L-fEzP6YEQLK8Zmqw2mL2eB-V~TpKbDW0aIc9D2mlpA__" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            {/* Name and status */}
                            <div>
                                <h2 className='font-semibold text-black text-xl'>George Alan</h2>
                                <h4 className='font-light text-sm'>Online</h4>
                            </div>
                        </div>
                    </div>


                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-2 text-2xl">
                        <button className="p-2">
                            <PiVideoCameraLight  />
                        </button>
                        <button className="p-2">
                            <MdOutlinePhone />
                        </button>
                        <button className="p-2">
                            <FiInfo />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
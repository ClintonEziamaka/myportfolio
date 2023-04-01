import React from "react";
import { certifications } from "../data";
import { TerminalIcon, UserIcon } from "@heroicons/react/solid";


export default function Certification() {
return(
<section id="certifications">
    <div className="container px-5 py-10 mx-auto text-center">
    <UserIcon className="w-10 inline-block mb-4" />
    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12"> Certifications: </h1>
    <div className="flex flex-wrap m-4">  
    {certifications.map((certification) => (
        <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
            <TerminalIcon className="block w-8 text-gray-500 mb-4" />
            <div className="inline-flex items-center"> 
            <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-white">{certification.name}</span>
                <span className="text-gray-500 text-sm uppercase">{certification.company}</span>
            </span>
            </div>
            </div>
            </div>
    ))}

    </div>
    </div>
</section>
);
}
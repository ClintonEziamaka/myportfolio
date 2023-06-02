import React from "react";
import { certifications } from "../data";
import { TerminalIcon, UserIcon } from "@heroicons/react/solid";


export default function Certification() {
return(
<section id="certifications">
    <div className="container px-5 py-10 mx-auto text-center">
    <TerminalIcon className="inline-block w-10 text-gray-500 mb-4" />
    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12"> Certifications </h1>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">  
    {certifications.map((certification) => (
        <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
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
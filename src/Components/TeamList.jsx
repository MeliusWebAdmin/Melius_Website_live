import Team from "./Team";
import { React, useEffect, useState } from "react";
import api from "../axios";

function TeamList() {
    const [members, setmembers] = useState([]);

    useEffect(() => {
        api.get("/members").then((res) => {
            console.log(res.data);
            setmembers(res.data);
        });
    }, []);
    return (
        <>
            <Team />
            <div class="relative bg-black overflow-x-auto px-6 lg:px-24">
                <table class="w-full text-sm text-left text-gray-400">
                    <thead class="font-bold font-poppins text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Instagram
                            </th>
                            <th scope="col" class="px-6 py-3">
                                LinkedIn
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-light">
                        {members.map((member, index) => (
                            // rendering non core members only
                            !member.is_core &&
                                <tr key={index} class="border-b bg-gray-800 border-gray-700 whitespace-nowrap">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-white "
                                    >
                                        {member.name}
                                    </th>
                                    <td class="px-6 py-4">{member.position}</td>
                                    <td class="px-6 py-4">{member.course}</td>
                                    <td class="px-6 py-4">
                                    <a href={member.instagram}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        className="w-8 h-8 fill-white"
                                        id="instagram"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                    </svg>
                                </a></td>
                                <td class="px-6 py-4">
                                <a href={member.linkedin}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        className="w-8 h-8 fill-white"
                                        id="linkedin"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                    </svg>
                                </a>
                                </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TeamList;

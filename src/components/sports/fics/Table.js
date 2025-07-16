import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Table() {
  const staff = [
    { name: "Dr. John Doe", email: "johndoe@iith.ac.in" },
    { name: "Ms. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Mr. John Doe", email: "johndoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
  ];

  return (
    <div className="overflow-x-auto px-4">
      <div className="max-w-[95vw] md:max-w-3xl mx-auto rounded-xl overflow-hidden border border-[#ccc]">
        <table className="w-full text-sm text-left text-[#171e27]">
          <thead className="bg-white">
            <tr>
              <th className="px-5 py-3 font-semibold border-b border-[#ccc]">
                Name
              </th>
              <th className="px-5 py-3 font-semibold border-b border-[#ccc]">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {staff.map((person, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"}>
                <td className="px-5 py-3 border-b border-[#ddd] whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-5 w-5 text-[#f58a42]" />
                    <span>{person.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 border-b border-[#ddd] whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="h-5 w-5 text-[#f58a42]" />
                    <br />
                    <a
                      href={`mailto:${person.email}`}
                      className="hover:text-black hover:scale-[1.07] transition-all duration-150 cursor-pointer"
                    >
                      {person.email}
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Table() {
  const staff = [
    { name: "Dr. John Doe", email: "johndoe@iith.ac.in" },
    { name: "Ms. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Mr. John Doe", email: "johndoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
    { name: "Dr. Jane Doe", email: "janedoe@iith.ac.in" },
  ];

  return (
    <div className="overflow-x-auto px-4 py-6">
      <div className="max-w-[95vw] md:max-w-[800px] mx-auto">
        <table className="w-full table-fixed bg-white border border-[#bfbdbd]">
          <thead className="bg-white text-black">
            <tr>
              <th className="w-1/2 sm:w-[250px] px-4 py-2 text-left border border-[#bfbdbd]">
                Name
              </th>
              <th className="w-1/2 sm:w-[270px] px-4 py-2 text-left border border-[#bfbdbd]">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {staff.map((person, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-[#f0f0f0]" : "bg-white"}>
                <td className="px-4 py-2 border border-[#bfbdbd]">
                  {person.name}
                </td>
                <td className="px-4 py-2 border border-[#bfbdbd]">
                  {person.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

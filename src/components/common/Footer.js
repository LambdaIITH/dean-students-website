import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 text-sm border-t border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {[
            {
              title: "Academics",
              links: [
                { href: "https://aims.iith.ac.in/aims/", label: "AIMS" },
                { href: "https://iith.ac.in/gian/", label: "GIAN" },
                { href: "http://cce.iith.ac.in/", label: "CCE" },
                {
                  href: "/academics/index.html",
                  label: "Office of Academic Affairs",
                },
                { href: "https://raiith.krc.iith.ac.in/", label: "RAIITH" },
              ],
            },
            {
              title: "Facilities",
              links: [
                { href: "https://library.iith.ac.in/", label: "Library" },
                { href: "/computer-centre/", label: "Computer Centre" },
                { href: "https://cws.iith.ac.in", label: "Central Workshop" },
                { href: "/bus_schedule/", label: "Bus Schedule" },
                { href: "/campus-kitchen/", label: "Campus Kitchen" },
                {
                  href: "https://hospital.iith.ac.in/",
                  label: "Medical Facilities",
                },
              ],
            },
            {
              title: "Campus Life",
              links: [
                { href: "/about/campus_services/", label: "Campus Services" },
                { href: "/about/aboutiith/#reach", label: "Getting Here" },
                {
                  href: "https://cins.iith.ac.in/",
                  label: "Campus Navigation",
                },
                { href: "http://security.iith.ac.in/", label: "Security" },
              ],
            },
            {
              title: "Councils",
              links: [
                { href: "https://scstcell.iith.ac.in/", label: "SC ST Cell" },
                {
                  href: "https://ocs.iith.ac.in/",
                  label: "Office of Career Services",
                },
                { href: "https://nss.iith.ac.in/", label: "NSS" },
                {
                  href: "http://cgc.iith.ac.in/",
                  label: "Committee for Gender Concerns",
                },
                { href: "https://sunshine.iith.ac.in/", label: "Sunshine" },
                { href: "https://gymkhana.iith.ac.in/", label: "Gymkhana" },
                { href: "https://ebsb.iith.ac.in/", label: "EBSB Club" },
                {
                  href: "http://hostel.iith.ac.in/",
                  label: "Hostel Coordinating Unit",
                },
                {
                  href: "https://sites.google.com/iith.ac.in/safety",
                  label: "Laboratory Safety",
                },
                { href: "/statutory-bodies/", label: "Statutory Bodies" },
              ],
            },
            {
              title: "Quick Links",
              links: [
                { href: "/tenders/", label: "Tender Invitations" },
                { href: "https://intranet.iith.ac.in", label: "Intranet" },
                { href: "/emergency_contacts/", label: "Emergency Contacts" },
                { href: "/web_team/", label: "Website Team" },
                {
                  href: "https://iith.ac.in/dofa/",
                  label: "Dean of Faculty Affairs",
                },
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h5 className="font-semibold text-lg mb-2">{section.title}</h5>
              <ul className="space-y-1">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center space-x-4 text-xl text-gray-600">
          <a
            href="https://www.facebook.com/iithyderabad/"
            target="_blank"
            title="Facebook"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" />
          </a>
          <a
            href="https://twitter.com/IITHyderabad"
            target="_blank"
            title="Twitter"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/school/indian-inst-of-technology-hyderabad/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-xs text-gray-500">
          <p>
            © 2025 Indian Institute of Technology Hyderabad, Kandi, Sangareddy,
            Telangana, India. All rights reserved.
          </p>
          <p>
            <a
              href="https:/www.iith.ac.in/sitemap.xml"
              className="underline"
              target="_blank"
            >
              Sitemap
            </a>{" "}
            |
            <a href="/rti/" className="underline ml-1">
              RTI
            </a>{" "}
            |
            <a href="/contact_us/" className="underline ml-1">
              Contact Us
            </a>
          </p>
          <p className="mt-2">Last Updated: 14-July-2025</p>
        </div>
      </div>
    </footer>
  );
}

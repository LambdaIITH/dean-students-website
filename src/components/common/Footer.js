import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const footerContent = [
    {
      title: "ACADEMICS",
      links: [
        { href: "https://aims.iith.ac.in/aims/", label: "AIMS" },
        { href: "https://iith.ac.in/gian/", label: "GIAN" },
        { href: "http://cce.iith.ac.in/", label: "CCE" },
        {
          href: "https://www.iith.ac.in/academics/index.html",
          label: "Office of Academic Affairs",
        },
        { href: "https://raiith.krc.iith.ac.in/", label: "RAIITH" },
      ],
    },
    {
      title: "FACILITIES",
      links: [
        { href: "https://library.iith.ac.in/", label: "Library" },
        {
          href: "https://www.iith.ac.in/computer-centre/",
          label: "Computer Centre",
        },
        { href: "https://cws.iith.ac.in", label: "Central Workshop" },
        { href: "https://www.iith.ac.in/bus_schedule/", label: "Bus Schedule" },
        {
          href: "https://www.iith.ac.in/campus-kitchen/",
          label: "Campus Kitchen",
        },
        {
          href: "https://hospital.iith.ac.in/",
          label: "Medical Facilities",
        },
      ],
    },
    {
      title: "CAMPUS LIFE",
      links: [
        {
          href: "https://www.iith.ac.in/about/campus_services/",
          label: "Campus Services",
        },
        {
          href: "https://www.iith.ac.in/about/aboutiith/#reach",
          label: "Getting Here",
        },
        { href: "https://cins.iith.ac.in/", label: "Campus Navigation" },
        { href: "http://security.iith.ac.in/", label: "Security" },
      ],
    },
    {
      title: "QUICK LINKS",
      links: [
        {
          href: "https://www.iith.ac.in/tenders/",
          label: "Tender Invitations",
        },
        { href: "https://intranet.iith.ac.in", label: "Intranet" },
        {
          href: "https://www.iith.ac.in/emergency_contacts/",
          label: "Emergency Contacts",
        },
        { href: "/web_team/", label: "Website Team" },
        { href: "https://iith.ac.in/dofa/", label: "Dean of Faculty Affairs" },
      ],
    },
  ];

  return (
    <footer className="bg-[#171e27] text-[#999999] text-sm">
      <div className="mx-30 px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 justify-items-center">
          {footerContent.map((section, i) => (
            <div key={i} className="flex flex-col items-center">
              <h5 className="text-lg mb-2 text-white">{section.title}</h5>
              <ul className="space-y-3 text-center">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center space-x-4 text-xl text-gray-600">
          <a
            href="https://www.facebook.com/iithyderabad/"
            target="_blank"
            title="Meta"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-white text-xl hover:text-[#f58a42] transition-all duration-100 ease-in"
            />
          </a>
          <a
            href="https://twitter.com/IITHyderabad"
            target="_blank"
            title="X"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-white text-xl hover:text-[#f58a42] transition-all duration-100 ease-in"
            />
          </a>
          <a
            href="https://www.linkedin.com/school/indian-inst-of-technology-hyderabad/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-xl hover:text-[#f58a42] transition-all duration-100 ease-in"
            />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 pt-4 text-center text-xs text-[#999999]">
          <p>
            © 2025 Indian Institute of Technology Hyderabad, Kandi, Sangareddy,
            Telangana, India. All rights reserved.
          </p>
          <br />
          <p className="text-[#EEE]">
            <a
              href="https:/www.iith.ac.in/sitemap.xml"
              className="no-underline"
              target="_blank"
            >
              Sitemap
            </a>{" "}
            |
            <a href="https://www.iith.ac.in/rti/" className="no-underline ml-1">
              RTI
            </a>{" "}
            |
            <a
              href="https://www.iith.ac.in/contact_us/"
              className="no-underline ml-1"
            >
              Contact Us
            </a>
          </p>
          <br />
          <p className="mt-2 text-[#999999]">Last Updated: 15-July-2025</p>
        </div>
      </div>
    </footer>
  );
}

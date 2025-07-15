// pages/index.js
import Head from 'next/head';

export default function AntiRaggingPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Anti-Ragging Policy | IIT Hyderabad</title>
        <meta name="description" content="Official anti-ragging policy of IIT Hyderabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-3">Zero-Tolerance Anti-Ragging Policy</h1>
          <div className="w-40 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            IIT Hyderabad is committed to maintaining a safe and inclusive environment for all students
          </p>
        </div>

        {/* Policy Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-10 border border-gray-200">
          <div className="space-y-10">
            {/* Definition Section */}
            <div className="pb-2 border-b border-gray-200">
              <h3 className="font-bold text-black text-xl mb-4 flex items-center pb-2 border-b-2 border-orange-500">
                What Constitutes Ragging?
              </h3>
              <p className="text-gray-800">
                Ragging is any act of physical or mental abuse (including bullying and exclusion)
                directed at another student based on attributes such as color, race, religion, caste,
                ethnicity, gender (including transgender), sexual orientation, appearance, nationality,
                regional origins, linguistic identity, place of birth, place of residence or economic background.
              </p>
            </div>

            {/* Commitment Section */}
            <div className="pb-2 border-b border-gray-200">
              <h3 className="font-bold text-black text-xl mb-4 flex items-center pb-2 border-b-2 border-orange-500">
                Our Commitment
              </h3>
              <p className="text-gray-800">
                IIT Hyderabad maintains a strict <span className="font-semibold text-orange-600">zero-tolerance policy</span> towards ragging. Any incidents
                will be dealt with severely as per UGC regulations and Supreme Court guidelines to
                ensure a safe and conducive environment for all students.
              </p>
            </div>

            {/* Preventive Measures Section */}
            <div className="pb-2 border-b border-gray-200">
              <h3 className="font-bold text-black text-xl mb-4 flex items-center pb-2 border-b-2 border-orange-500">
                Preventive Measures
              </h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                  <span>Regular awareness programs and orientation sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                  <span>Anti-ragging committee monitoring and intervention</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                  <span>Anonymous reporting mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                  <span>Strict disciplinary actions including suspension and expulsion</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-3"></span>
                  <span>Counseling and support services for affected students</span>
                </li>
              </ul>
            </div>

            {/* Consequences Section */}
            <div className="pb-2 border-b border-gray-200">
              <h3 className="font-bold text-black text-xl mb-4 flex items-center pb-2 border-b-2 border-orange-500">
                Legal & Academic Consequences
              </h3>
              <p className="text-gray-800 mb-4">
                Ragging is a criminal offense under the Indian Penal Code. Students found guilty may face:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-black mb-3 flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                    Legal Penalties
                  </h4>
                  <ul className="text-gray-800 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                      <span>Imprisonment up to 2 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                      <span>Fine up to ₹10,000</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                      <span>Criminal record</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-black mb-3 flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                    Academic Penalties
                  </h4>
                  <ul className="text-gray-800 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                      <span>Suspension from academic program</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                      <span>Expulsion from the institute</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                      <span>Withholding of degree/certificate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Institutional Statement */}
                      </div>
        </div>



        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-gray-600">
          <div className="mb-4">
            <div className="inline-flex space-x-6">
              <a href="#" className="text-orange-600 hover:text-orange-800">Student Handbook</a>
              <a href="#" className="text-orange-600 hover:text-orange-800">UGC Regulations</a>
              <a href="#" className="text-orange-600 hover:text-orange-800">Counseling Services</a>
            </div>
          </div>
          <p>© {new Date().getFullYear()} Indian Institute of Technology Hyderabad. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

import React from 'react';

const Policy = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-[#FC5407] pb-2">
        Zero-Tolerance Policy Explained
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <div className="bg-red-50 border-l-4 border-[#FC5407] p-4 rounded-r-lg">
          <h3 className="font-semibold text-red-800 mb-2">What is Ragging?</h3>
          <p>
            Ragging is any act of physical or mental abuse (including bullying and exclusion)
            targeted at another student (fresher or otherwise) on the ground of color, race,
            religion, caste, ethnicity, gender (including transgender), sexual orientation,
            appearance, nationality, regional origins, linguistic identity, place of birth,
            place of residence or economic background.
          </p>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
          <h3 className="font-semibold text-orange-800 mb-2">Our Commitment</h3>
          <p>
            IIT Hyderabad is committed to providing a safe and conducive environment for all
            students. We maintain a strict zero-tolerance policy towards ragging in any form.
            Any incident of ragging will be dealt with severely as per the UGC regulations and
            Supreme Court guidelines.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <h3 className="font-semibold text-green-800 mb-2">Preventive Measures</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Regular awareness programs and orientation sessions</li>
            <li>Anti-ragging committee monitoring and intervention</li>
            <li>Anonymous reporting mechanisms</li>
            <li>Strict disciplinary actions including suspension and expulsion</li>
            <li>Counseling and support services for affected students</li>
          </ul>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
          <h3 className="font-semibold text-purple-800 mb-2">Legal Consequences</h3>
          <p>
            Ragging is a criminal offense under the Indian Penal Code. Students found guilty
            of ragging may face imprisonment up to 2 years, fine up to Rs. 10,000, or both.
            Academic consequences include suspension, rustication, or expulsion from the institute.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-600 p-4 rounded-r-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Remember</h3>
          <p className="font-medium text-gray-900">
            "Ragging is not just wrong, it's illegal. Stand up, speak out, and help create
            a safe campus environment for everyone."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;

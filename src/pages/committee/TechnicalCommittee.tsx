import React from 'react';

const InternationalTechnicalCommittee: React.FC = () => {
  const members = [
    "Amar Sheelwant, Ducom Instruments, India",
    "Aneesh Prabhakar, MNIT, Jaipur, India",
    "Anil Kumar, DTU Delhi, India",
    "Arrik Khanna, Chitkara Univ, Chandigarh, India",
    "B. Vijaya Ramanath, Sri Sairam CoE, Chennai, India",
    "Ch. Sri Chaitanya, VNR VJIET, Hyderabad, India",
    "Gajanan Anne, Manipal Institute of Technology, India",
    "Gangadharudu Talla, NIT Warangal, India",
    "G. Laxmaiah, CBIT, Hyderabad, India",
    "Gopi K R, CYIENT Limited, Bangalore, India",
    "G Raghavendra, NIT Warangal, India",
    "Gudipadu Venkatesh, NIT Warangal, India",
    "Hemant Marmat, ACROPOLIS, India",
    "Jeevan Vemula, GITAM School of Technology Hyderabad, India",
    "Karthik Aamanchi, Publicissapient, USA",
    "Kethavath Kranthi Kumar, JNU Delhi, India",
    "K Kiran Kumar, NIT Warangal, India",
    "Krishna Kishore Mugada, SVNIT Surat, India",
    "Manjaiah M, NIT Warangal, India",
    "Marrapu Bhargava, NIT Warangal, India",
    "Mervin Joe Thomas, NIT Surathkal, India",
    "M. K. Mathapati, KLE College of Engineering & Technology, India",
    "Mrunali Sona, Ashok Leyland technical centre",
    "MULATU CHAKE GILAGO, WACHEMO UNIVERSITY, Ethiopia",
    "Nagamothu Kishore Babu, NIT Warangal, India",
    "Nitin Rameshrao Kotkunde, BITS Pilani Hyderabad Campus, India",
    "Piyush Chandra Verma, BITS Pilani Hyderabad Campus, India",
    "P. Prabhakar Reddy, CBIT, Hyderabad, India",
    "Pravin T. Nitnaware, D.Y. Patil College of Engineering, India",
    "Pritam Das, VIT Chennai, India",
    "P Srinivas, GITAM School of Technology Hyderabad, India",
    "Punna Eshwaraiah, GITAM School of Technology Hyderabad, India",
    "P Vamsi Krishna, NIT Warangal, India",
    "Ramavath Bheekya Naik, NIT Raipur, India",
    "R. Thirumalai, Hindusthan Institute of Technology, India",
    "Sai Saketha Chandra Athkuri, NIT Calicut, India",
    "Saravana Bavan, Dayananda Sagar University, India",
    "Shital Patil, Bosch Global Software Technologies, India",
    "Shivraman, NIT Warangal, India",
    "Suresh Lakhimsetty, SVNIT, Surat, India",
    "Syam Kumar Chokka, IIITDM Jabalpur, India",
    "Vijay Jadon, Chitkara Univ, Chandigarh, India"
  ];

  return (
 <section className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-conference-purple mb-6"
          data-aos="fade-up"
        >
          International Technical Committee
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-blue-200"
              data-aos="fade-up"
              data-aos-delay={index * 10}
            >
              <p className="text-gray-800 font-medium">{member}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalTechnicalCommittee;

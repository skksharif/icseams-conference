import React from "react";

const InternationalAdvisoryCommittee: React.FC = () => {
  const members = [
    "Alireza Bahrami, University of Gävle, Sweden",
    "Daneti Saradhi Babu, Alliance Concrete Singapore Pte Ltd, Singapore",
    "Deepak T J, Universiti Teknologi MARA (UiTM), Malaysia",
    "Edy Tonnizam Mohamad, Universiti Teknologi Malaysia, Malaysia",
    "K V Suryabhagavan, Addis Ababa University, Ethiopia",
    "Kennedy Onyelowe, Michael Okpara University of Agriculture, Umudike, Nigeria",
    "Komali Kantamaneni, University of Central Lancashire, United Kingdom",
    "Krishna R. Reddy, University of Illinois at Chicago, USA",
    "Nemkumar Banthia, University of British Columbia, Canada",
    "Raj Reddy Kallu, University of Nevada, USA",
    "Ramez M Hajj, Grainger College of Engineering, Illinois, USA",
    "Ravi Yellavajjala, Arizona State University, USA",
    "Sai Vanapalli, University of Ottawa, Canada",
    "Sanjay Kumar Shukla, Edith Cowan University, Australia",
    "Shen-en-Chen, University of North Carolina, USA",
    "Shuichi TORII , Kurume Institute of Technology, Fukuoka, Japan",
    "Srinivas S Pulugurtha, University of North Carolina, USA",
    "Sudharma Yatigammana, PGIS, University of Peradeniya, Sri Lanka",
    "Upaka Rathnayake, Atlantic Technological University, Sligo, Ireland",
    "Venkatesh Kodur, Michigan State University, USA",
  ];

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-conference-purple mb-6"
   
        >
          International Advisory Committee
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-blue-200"

            >
              <p className="text-gray-800 font-medium">{member}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalAdvisoryCommittee;

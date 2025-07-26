import React from 'react';

interface MemberProps {
  name: string;
  role: string;
  type: 'chief' | 'chair' | 'secretary' | 'member';
  delay?: number;
}

const Member: React.FC<MemberProps> = ({ name, role, type, delay = 0 }) => {
  const getTypeClasses = () => {
    switch (type) {
      case 'chief':
        return 'bg-conference-purple/10 border-conference-purple/20 text-conference-purple';
      case 'chair':
        return 'bg-conference-orange/10 border-conference-orange/20 text-conference-orange';
      case 'secretary':
        return 'bg-conference-green/10 border-conference-green/20 text-conference-green';
      default:
        return 'bg-blue-100 border-blue-200 text-blue-700';
    }
  };

  return (
    <div
      className={`p-4 rounded-lg border ${getTypeClasses()} transition-all duration-300 hover:shadow-md`}
    >
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-sm mt-1">{role}</p>
    </div>
  );
};

const OrganizingCommittee: React.FC = () => {
  const chiefPatrons = [
    { name: "K.V. Vishnu Raju", role: "Chairman, Sri Vishnu Educational Society" },
    { name: "Ravichandran Rajagopal", role: "Vice-Chairman, Sri Vishnu Educational Society" },
    { name: "K. Aditya Vissam", role: "Secretary, Sri Vishnu Educational Society" },
  ];

  const coPatrons = [
    { name: "M. Venu", role: "Principal, Vishnu Institute of Technology, Bhimavaram, INDIA" },
    { name: "M. Srilakshmi", role: "Vice-Principal, Vishnu Institute of Technology, Bhimavaram, INDIA" },
  ];

  const chairs = [
    { name: "Trilok Nath Singh", role: "Conference Chair, Director, IIT Patna, INDIA" },
    { name: "Krishna R Reddy", role: "Conference Chair, University of Illinois, Chicago, USA" },
    { name: "Edy Tonnizam Mohamad", role: "Conference Co-Chair, Universiti Teknologi Malaysia, MALAYSIA" },
    { name: "Raju Aedla", role: "Technical Chair, Dean R&D, VEDIC, SVES, INDIA" },
    { name: "Deepak T J", role: "Technical Co-Chair, Universiti Teknologi MARA (UiTM), MALAYSIA" },
    { name: "Kunamineni Vijay", role: "Organizing Chair, Head, Civil Engg., VITB, INDIA" },
  ];

  const secretaries = [
    { name: "V S J Yeswanth Paluri", role: "Organizing Secretary, Assoc. Prof., Dept. of CE, VIT-Bhimavaram" },
    { name: "Sk Subhan Alisha", role: "Organizing Secretary, Asst. Prof., Dept. of CE, VIT-Bhimavaram" },
    { name: "M Teja", role: "Joint Secretary, Assoc. Prof., Dept. of CE, VIT-Bhimavaram" },
    { name: "B D V. Prasad", role: "Joint Secretary, Asst. Prof., Dept. of CE, VIT-Bhimavaram" },
    { name: "B.M Devika", role: "Joint Secretary, Asst. Prof., Dept. of CE, VIT-Bhimavaram" },
  ];

  const coreCommittee = [
    { name: "VVS Sarma", role: "Asst. Prof., Civil Engg., VITB, INDIA" },
    { name: "P. Rohith", role: "Asst. Prof., Civil Engg., VITB, INDIA" },
    { name: "K S. Saikumar", role: "Asst. Prof., Civil Engg., VITB, INDIA" },
    { name: "M. Manikanta", role: "Asst. Prof., Civil Engg., VITB, INDIA" },
    { name: "P. Fayaz", role: "Asst. Prof., Civil Engg., VITB, INDIA" },
    { name: "K. Sree Kumar", role: "Asst. Prof., Civil Engg., VITB, INDIA" },
    { name: "CH Bharat Chandra", role: "Asst. Prof., Civil Engg., VITB, INDIA" },
  ];

  const executiveCommittee = [
    { name: "Sumit Gupta", role: "Dean, Campus Recruitment and Training, VITB, INDIA" },
    { name: "D.J. Nagendra Kumar", role: "Dean - Evaluation, VITB, INDIA" },
    { name: "N. Padmavathy", role: "Dean - Research and Development, VITB, INDIA" },
    { name: "Abhinav Dayal", role: "Dean - Advanced Learning, VITB, INDIA" },
    { name: "V. Rama Devi", role: "HOD-BS, VITB, INDIA" },
    { name: "K. Srinivas", role: "HOD-ECE, VITB, INDIA" },
    { name: "R. Srinivasa Raju", role: "HOD-CSE, VITB, INDIA" },
    { name: "P.S.R. Murty", role: "HOD-AIDS, VITB, INDIA" },
    { name: "N Naga Krishna", role: "HOD-ME, VITB, INDIA" },
    { name: "R V D Ramarao", role: "HOD-EEE, VITB, INDIA" },
    { name: "D G Krishna Mohan", role: "HOD-AI&ML, VITB, INDIA" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Organizing Committee
        </h2>
        <p className="text-gray-600" >
          Meet the team organizing ICMISI-2026 and ensuring a successful conference experience.
        </p>
      </div>

      {[
        { title: "Chief Patrons", list: chiefPatrons, type: 'chief' },
        { title: "Chief Co-Patrons", list: coPatrons, type: 'chief' },
        { title: "Conference Chairs & Technical Committee", list: chairs, type: 'chair' },
        { title: "Secretaries", list: secretaries, type: 'secretary' },
        { title: "Organizing Committee Members", list: coreCommittee, type: 'member' },
        { title: "Internal Advisory Committee", list: executiveCommittee, type: 'member' },
      ].map((section, idx) => (
        <div key={section.title} className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.list.map((member, index) => (
              <Member
                key={member.name}
                name={member.name}
                role={member.role}
                type={section.type as MemberProps['type']}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrganizingCommittee;

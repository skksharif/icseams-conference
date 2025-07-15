import React from "react";

const InternationalTechnicalCommittee: React.FC = () => {
  const members = [
    "A. Muralikrishna, Indian Institute of Technology Tirupathi, India",
    "Abhishek Rajput, Indian Institute of Technology Indore, India",
    "Abhyuday Titiksh, Arbutus Consultants Pvt Ltd, India",
    "Aneetha V, National Institute of Technology Warangal, India",
    "Anuja Charpe, VR Siddhartha Engineering College( Deemed to be University), Vijayawada, India",
    "Anurag Sharma, O.P. Jindal University, Sonipat, India",
    "Arif Ali Baig Moghal, National Institute of Technology Warangal, India",
    "Arun Menon, Indian Institute of Technology Madras, India",
    "Ashwin Raut, Koneru Lakshmaiah Education Foundation (Deemed to be University), Guntur, India",
    "B P Annapurna, University of Visvesvaraya College of Engineering, Bangalore, India",
    "B Raghuram Kadali, National Institute of Technology Warangal, India",
    "B Sudheer Kumar Reddy, NICMAR University, Pune, India",
    "B. Krishna Prapoorna, Indian Institute of Technology Tirupathi, India",
    "B. Murali Krishna, VNR Viganana Jyothi Institute of Engineering and Technology, Hyderabad, India",
    "B. Sudhir Kumar, Shri Vishnu Engineering College for Women, Bhimavaram, India",
    "C S R K Prasad, National Institute of Technology Warangal, India",
    "Ch Naga Satish Kumar, Bapatla Engineering College, Bapatla India",
    "Ch. Tirupathi, Sasi Institute of Technology & Engineering, Tadepalligudem, India",
    "Ch. V. S. Parameswara Rao, Sree Dattha Institute of Engineering and Science, Hyderabad, India",
    "Ch.Maruthi Devi, Bapatla Engineering College, Bapatla India",
    "Chava Venkatesh, CVR College of Engineering, Hyderabad, India",
    "D Nagesh Kumar, Indian Institute of Science Bangalore, India",
    "D R Dodagoudar, Indian Institute of Technology Madras, Chennai, India",
    "D Ravi Prasad, National Institute of Technology Warangal, India",
    "D Syam Babu, Vignan's Foundation for Science, Technology & Research (Deemed to be University), Guntur, India",
    "D. Harinder, VNR Viganana Jyothi Institute of Engineering and Technology, Hyderabad, India",
    "Dwarakish, National Institute of Technology Katnataka, India",
    "Eldho T I, Indian Institute of Technology Bombay, India",
    "G Kalyan Kumar, National Institute of Technology Warangal, India",
    "G. V. Ramana, National Institute of Technology Warangal, India",
    "G. Vinay Kumar, VR Siddhartha Engineering College( Deemed to be University), Vijayawada, India",
    "Gaurav D. Dhadse, Rajendra Gode Institute of Technology and Research Amravati, Maharashtra, India",
    "Gobinath Ravindran, SR University, Warangal, India",
    "Govardhan Bhatt, National Institute of Technology Raipur, India",
    "Gunneswara Rao T D, National Institute of Technology Warangal, India",
    "Hanuma Kasagani, VR Siddhartha Engineering College( Deemed to be University), Vijayawada, India",
    "Hari Krishna P, National Institute of Technology Warangal, India",
    "Hari Prasad Reddy, National Institute of Technology Warangal, India",
    "Heeralal Mudavath, National Institute of Technology Warangal, India",
    "Indrajeet Sahu, Vardhaman College of Engineering, Hyderabad, India",
    "James E J, Water Institute, India",
    "Jayakumar K V, Indian Institute of Technology Dharwad, India",
    "Juluru Pavanu Sai, Srinivasa Institute of Engineering and Technology, Amalapuram, India",
    "K Ganesh Babu, Indian Institute of Technology Madras, India",
    "K Mahaboob Peera, Srinivasa Ramanujan Institute of Technology, Ananthapuramu, India",
    "K Srinivas Raju, Birla Institute of Technology and Science, Pilani- Hyderabad Campus, India",
    "K. Gopikrishna, National Institute of Technology Warangal, India",
    "K. J. Brahma Chari, Koneru Lakshmaiah Education Foundation (Deemed to be University), Guntur, India",
    "K. Prasanna, SRM Institute of Science and Technology, Kattankulathur, Chennai, India",
    "K. Sai Sahitya, VNR Viganana Jyothi Institute of Engineering and Technology, Hyderabad, India",
    "K. V. R. Ravi Shankar, National Institute of Technology Warangal, India",
    "K.Venkateswarlu, RGM College Of Engineering and Technology, Nandyal, India",
    "Karthik Dasari, National Institute of Technology Srinagar, India",
    "Kavitha B, National Institute of Technology Warangal, India",
    "Kolimi Shaiksha Vali, KSRM College of Engineering, Kadapa, India",
    "Korakuti Hanumanthu, BVC Engineering College, Odalarevu, India",
    "Kumar Shubham, National Institute of Technology Jamshedpur, India",
    "Kusuma Sundara Kumar, Ramachandra College of Engineering, Eluru, India",
    "Lekhaz Devulapalli, The Bombay Textile Research Association, Mumbai, India",
    "Lomesh Mahajan, Shreeyash College of Engineering and Technology, Sambhajinagar, India",
    "M. Rama Rao, Sasi Institute of Technology & Engineering, Tadepalligudem, India",
    "M. V. N. Sivakumar, National Institute of Technology Warangal, India",
    "M.L.V. Prasad, National Institute of Technology, Silchar, India",
    "M.Nithya, JSPM University, Pune, India",
    "Manish Kumar Kuchya, UltraTech Cement Limited, India",
    "Manjuladevi Balasundar, Datta Meghe College of Engineering, Airoli, NAVI Mumbai, India",
    "Mogili Sudhakar, PVP Siddhartha Institute of Technology, Vijayawada, India",
    "Mohd Nasim, IPS Academy, Institute of Engineering & Science, Indore, India",
    "N V Ramana Rao, National Institute of Technology Raipur, India",
    "Nagesh Kumar D, Indian Institute of Science Bangalore, India",
    "Nisha Radhakrishnan, National Institute of Technology Trichy, India",
    "Noolu Venkatesh, Sreenidhi Institute of Science & Technology, Hyderabad, India",
    "P Swamy Naga Ratna Giri, SR University, Warangal, India",
    "P. Alagusundaramoorthy, Indian Institute of Technology Madras, India",
    "P. Umamaheswar Rao, Bapatla Engineering College, Bapatla India",
    "P.Bapi Raju, Bapatla Engineering College, Bapatla India",
    "P.Rathish Kumar, National Institute of Technology Warangal, India",
    "P.Sundara Kumar, Bapatla Engineering College, Bapatla India",
    "Panga Narasimha Reddy, Sri Venkateswara College of Engineering and Technology (Autonomous), Chittoor, India",
    "Pijush Samui, National Institute of Technology Patna, India",
    "Pranav R T Peddinti, SRM University-AP, India",
    "Prathik Kulkarni, Bajaj Institute of Technology, Wardha, India",
    "Praveen Oggu, Vardhaman College of Engineering, Hyderabad, India",
    "R Raghunath S T G, Indian Institute of Technology Madras, Chennai, India",
    "R.L.R. Nagendra Prasad, Bapatla Engineering College, Bapatla India",
    "Rajkesh Siempu, VNR Viganana Jyothi Institute of Engineering and Technology, Hyderabad, India",
    "Rajshekhar G. Rathod, School of Engineering & Sciences, MIT Art, Design and Technology University, Pune, India",
    "Ram Mohan Reddy Bellum, Aditya University, Surempalem, India",
    "Rama Vara Prasad Chavali, VR Siddhartha Engineering College( Deemed to be University), Vijayawada, India",
    "Ramana Murthy V, National Institute of Technology Warangal, India",
    "Ramaseshu D, National Institute of Technology Warangal, India",
    "Ravindra Budania, Suresh Gyan Vihar University, Jaipur, Rajasthan, India",
    "S Jayalakshmi, National Institute of Technology Trichy, India",
    "S R R Teja Prathipati, VR Siddhartha Engineering College( Deemed to be University), Vijayawada, India",
    "S Venkateswara Rao, National Institute of Technology Warangal, India",
    "S. Jagan, Sona College of Technology, Salem, Tamilnadu, India",
    "S. Manjula, Shri Vishnu Engineering College for Women, Bhimavaram, India",
    "S. Shankar, National Institute of Technology Warangal, India",
    "Sagar Dattatray Turkane, Sandip Institute of Technology and Research Centre, Nashik, India",
    "Sagar Sarangi, Sarala Birla University Ranchi, Jharkhand, India",
    "Sameer Kumar Devarakonda, QIS College of Engineering and Technology, Ongole, India",
    "Sandeep Chaudhary, Indian Institute of Technology Indore, India",
    "Sandeep Soni, National Institute of Technology Raipur, India",
    "Sanjit Biswas, National Institute of Technology Warangal, India",
    "Sarella Chakravarthi, Srinivasa Institute of Engineering and Technology, Amalapuram, India",
    "Shailendra Kumar Jain, Amity University, Noida, Uttar Pradesh, India",
    "Sonal Thakkar, Nirma University, Ahmedabad, Gujarat, India",
    "Sri Rama Chand Madduru, Sree Chaitanya College of Engineering, Karimnagar, India",
    "Srikanth Koniki, Chaitanya Bharati Institute of Technology, Hyderabad, India",
    "Sudheer Kumar Yamsani, National Institute of Technology Warangal, India",
    "T Chaitanya Srikrishna, Chaitanya Bharati Institute of Technology, Hyderabad, India",
    "T Vamsi Nagaraju, SRKR Engineering College, Bhimavaram, India",
    "T. Chandra Sekhara Rao, Bapatla Engineering College, Bapatla India",
    "T. P. Tezeswi, National Institute of Technology Warangal, India",
    "Taran Jandyal, National Institute of Technology Srinagar, India",
    "TARUN KUMAR RAJAK, Shri Shankaracharya Institute of Professional Management and Technology, Raipur, India",
    "Trilok Nath Singh, Indian Institute of Technology Patna, India",
    "Tushar Bansal, Sharda University, Greater Noida, Uttar Pradesh, India",
    "V Johnpaul, Karpagam Academy of Higher education, Coimbatore, India",
    "V Sathish Kumar, Sri Krishna College of Technology, Kovaipudur, Tamil Nadu, India",
    "V. Guru Prathap Reddy, National Institute of Technology Nagaland, India",
    "V. Kesava Raju, Shri Vishnu Engineering College for Women, Bhimavaram, India",
    "Venkaiah Chowdary, National Institute of Technology Warangal, India",
    "Venkat Praveen Gannavaram, Sreenidhi Institute of Science & Technology, Hyderabad, India",
    "Venkata Dilip Kumar Pasupuleti, Mahindra University, Hyderabad, India",
    "Venkata Koteswara Rao P, Vardhaman College of Engineering, Hyderabad, India",
    "Vikash Singh, Integral University, Lucknow, India",
    "Vishvanath N.Kanthe, Guru Gobind Singh College of Engineering and Research Center, Nashik, India",
    "Y. Amarnath, Ananya Engineers Pvt. Ltd., India",
    "Y. Murali Krishna, Bapatla Engineering College, Bapatla India",
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

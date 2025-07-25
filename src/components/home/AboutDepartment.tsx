import React from "react";
import { Cog, Microscope, BookOpen, Users } from "lucide-react";

const AboutDepartment: React.FC = () => {
  return (
    <section className="py-8" id="about-department">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" data-aos="fade-up">
            About Civil Engineering Department
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Excellence in Civil Engineering Education and Research
          </p>
        </div>

        <div className="mt-1" data-aos="fade-up">
          <p className="text-gray-700 max-w-5xl mx-auto mb-6">
            The Department of Civil Engineering pulls out all stops to create
            outstanding engineers - with advanced teaching techniques and
            learning aids for undergraduate students. CIVIL ENGINEERING
            DEPARTMENT of the institute started functioning right from the
            inception of the institute, in the year 2011. Students are not only
            made experts in technical aspects but also in interpersonal skills,
            a vital ingredient to excel in the fast-paced world. Students gain
            practical experience from field visits to industries, dams and
            irrigation structures, construction sites, etc. <br/>Our
            teaching-learning process, involves industry experts and adjunct
            faculties to enhance the student's knowledge and also targets to
            bridge the gap that exists between academic curriculum and
            industrial demands. Students are motivated to take up research
            projects, to carry out regular industrial and field visits, to
            present papers in academic conferences which will enable them to
            excel in their selected career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;

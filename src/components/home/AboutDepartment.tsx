import React from "react";
import { Cog, Microscope, BookOpen, Users } from "lucide-react";

const AboutDepartment: React.FC = () => {
  return (
    <section className="py-12 bg-white" id="about-department">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-up">
            About Civil Engineering Department
          </h2>
          <p
            className="text-lg text-gray-600 mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Excellence in Civil Engineering Education and Research
          </p>
        </div>

        {/* Description */}
        <div data-aos="fade-up">
          <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed text-justify">
            The Department of Civil Engineering pulls out all stops to create
            outstanding engineers – with advanced teaching techniques and
            learning aids for undergraduate students. The department started
            functioning from the inception of the institute in 2011.
            <br /><br />
            Students are trained not only in technical expertise but also in
            interpersonal skills—vital for excelling in today’s fast-paced
            world. They gain hands-on experience through field visits to
            industries, dams, irrigation structures, construction sites, and
            more.
            <br /><br />
            Our teaching-learning process includes industry experts and adjunct
            faculty to enhance students’ knowledge and bridge the gap between
            academic curriculum and industry demands. Students are encouraged to
            take up research projects, participate in industrial/field visits,
            and present papers at academic conferences—enabling them to excel in
            their careers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;

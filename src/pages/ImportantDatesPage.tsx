import React from 'react';
import SEO from '../components/SEO';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

interface DateItemProps {
  title: string;
  date: string;
  isPast?: boolean;
  isUpcoming?: boolean;
  isCritical?: boolean;
  delay?: number;
}

const DateItem: React.FC<DateItemProps> = ({ 
  title, 
  date, 
  isPast = false, 
  isUpcoming = false,
  isCritical = false,
  delay = 0
}) => {
  return (
    <div 
      className={`flex items-start p-4 rounded-lg transition-all duration-300 ${
        isPast 
          ? 'bg-gray-100' 
          : isUpcoming 
            ? 'bg-orange-50 border border-orange-200' 
            : isCritical
              ? 'bg-red-50 border border-red-200'
              : 'bg-white border border-gray-200 hover:border-conference-orange/30 hover:shadow-md'
      }`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className={`p-2 rounded-full mr-4 ${
        isPast 
          ? 'bg-gray-200 text-gray-600' 
          : isUpcoming 
            ? 'bg-conference-orange/10 text-conference-orange' 
            : isCritical
              ? 'bg-red-100 text-red-500'
              : 'bg-conference-purple/10 text-conference-purple'
      }`}>
        {isPast ? (
          <Clock size={24} />
        ) : isUpcoming ? (
          <Calendar size={24} />
        ) : isCritical ? (
          <AlertCircle size={24} />
        ) : (
          <Calendar size={24} />
        )}
      </div>
      <div className="flex-1">
        <h3 className={`font-semibold mb-1 ${
          isPast ? 'text-gray-500' : isUpcoming ? 'text-conference-orange' : isCritical ? 'text-red-600' : 'text-gray-800'
        }`}>
          {title}
        </h3>
        <p className={`${
          isPast ? 'text-gray-500' : isUpcoming ? 'text-conference-orange' : isCritical ? 'text-red-600' : 'text-gray-700'
        }`}>
          {date}
        </p>
      </div>
    </div>
  );
};

const ImportantDatesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Important Dates" 
        description="Key deadlines and important dates for ICSEAMS-2025, including submission deadlines, notification dates, and conference dates." 
        canonical="/important-dates"
      />
      <div className="bg-gradient-to-r from-conference-green/90 to-conference-purple/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Important Dates
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90" data-aos="fade-up" data-aos-delay="200">
            Key deadlines and milestones for ICSEAMS-2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center" data-aos="fade-up">
            <p className="text-gray-700">
              Please note all the following important dates related to ICSEAMS-2025. Mark your calendars and ensure timely submissions to avoid any last-minute complications.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">Paper Submission Deadlines</h2>
            
            <DateItem 
              title="Abstract Submission Deadline" 
              date="April 30, 2025"
              delay={100}
            />
            
            <DateItem 
              title="Full Paper Submission Deadline" 
              date="May 30, 2025"
              delay={200}
            />
            
            <DateItem 
              title="Extended Paper Submission Deadline" 
              date="June 15, 2025"
              isUpcoming={true}
              delay={300}
            />
            
            <DateItem 
              title="Revised Paper Submission (After Review)" 
              date="July 30, 2025"
              delay={400}
            />
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">Review & Notification Dates</h2>
            
            <DateItem 
              title="Notification of Abstract Acceptance" 
              date="May 15, 2025"
              delay={100}
            />
            
            <DateItem 
              title="First Round Review Completion" 
              date="June 30, 2025"
              delay={200}
            />
            
            <DateItem 
              title="Notification of Paper Acceptance" 
              date="July 15, 2025"
              delay={300}
            />
            
            <DateItem 
              title="Final Acceptance Notification" 
              date="August 15, 2025"
              delay={400}
            />
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">Registration Deadlines</h2>
            
            <DateItem 
              title="Early Bird Registration Deadline" 
              date="August 25, 2025"
              delay={100}
            />
            
            <DateItem 
              title="Regular Registration Deadline" 
              date="September 5, 2025"
              isCritical={true}
              delay={200}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">Conference Dates</h2>
            
            <DateItem 
              title="Conference Inauguration" 
              date="September 11, 2025"
              delay={100}
            />
            
            <DateItem 
              title="Technical Sessions" 
              date="September 11-13, 2025"
              delay={200}
            />
            
            <DateItem 
              title="Conference Valedictory" 
              date="September 13, 2025"
              delay={300}
            />
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <AlertCircle size={20} className="mr-2 text-conference-orange" />
              Important Notes
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                All deadlines end at 11:59 PM Indian Standard Time (IST) on the specified date.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                Authors are encouraged to submit their papers well before the deadline to avoid last-minute technical issues.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                Extensions to these deadlines are unlikely and will only be considered in exceptional circumstances.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                For any queries regarding deadlines, please contact <a href="mailto:icseams@bvrit.ac.in" className="text-conference-orange hover:underline">icseams@bvrit.ac.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantDatesPage;
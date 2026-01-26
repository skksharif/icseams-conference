import React from "react";
import SEO from "../components/SEO";
import { Calendar, Clock, AlertCircle } from "lucide-react";

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
  delay = 0,
}) => {
  return (
    <div
      className={`flex items-start p-4 rounded-lg transition-all duration-300 ${
        isPast
          ? "bg-gray-100"
          : isUpcoming
          ? "bg-orange-50 border border-orange-200"
          : isCritical
          ? "bg-red-50 border border-red-200"
          : "bg-white border border-gray-200 hover:border-conference-orange/30 hover:shadow-md"
      }`}
    >
      <div
        className={`p-2 rounded-full mr-4 ${
          isPast
            ? "bg-gray-200 text-gray-600"
            : isUpcoming
            ? "bg-conference-orange/10 text-conference-orange"
            : isCritical
            ? "bg-red-100 text-red-500"
            : "bg-conference-purple/10 text-conference-purple"
        }`}
      >
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
        <h3
          className={`font-semibold mb-1 ${
            isPast
              ? "text-gray-500"
              : isUpcoming
              ? "text-conference-orange"
              : isCritical
              ? "text-red-600"
              : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <p
          className={`${
            isPast
              ? "text-gray-500"
              : isUpcoming
              ? "text-conference-orange"
              : isCritical
              ? "text-red-600"
              : "text-gray-700"
          }`}
        >
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
        description="Key deadlines and important dates for ICMISI-2026, including submission deadlines, notification dates, and conference dates."
        canonical="/important-dates"
      />
      <div className="bg-gradient-to-r from-conference-green/90 to-conference-purple/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Important Dates
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Key deadlines and milestones for ICMISI-2026
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-gray-700">
              Please note all the following important dates related to
              ICMISI-2026. Mark your calendars and ensure timely submissions to
              avoid any last-minute complications.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            <DateItem
              title="Submission of Abstract"
              date="31 Jan 2026"
            />

            <DateItem
              title="Acceptance of Abstract"
              date="07 Feb 2026"
            />

            <DateItem
              title="Submission of full length paper"
              date="14 Feb 2026"
            />

            <DateItem
              title="Acceptance of full length paper"
              date="09 Mar 2026"
            />

            <DateItem
              title="End of registration"
              date="23 Mar 2026"
              isCritical={true}
            />

            <DateItem
              title="Conference Dates"
              date="April 1-2, 2026"
              isUpcoming={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantDatesPage;

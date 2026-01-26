import React from "react";

const AnnouncementBar: React.FC = () => {
  const url = "https://saga.edpsciences.org/topic/matecconf/1172";
  const text = `Full-Length Paper Submission Link: ${url}`;

  return (
    <div role="region" aria-label="Announcement" className="w-full px-3 sm:px-4">
      <div className="mx-auto w-full sm:max-w-xl md:max-w-2xl">
        <div className="ticker ticker--fade py-2 rounded-md">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ticker__content font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm"
            aria-label={text}
          >
            <span className="ticker__track">
              <span className="ticker__item">{text}</span>
              <span className="ticker__item" aria-hidden="true">
                {text}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

import React from "react";
import { timeStampToDateAndTime } from "../utils";

const EmailList = ({ filterEmail, emails, filterState, setEmailIdForBody, setEmails }) => {
  const handleEmailClick = (emailId) => {
    console.log(emailId);
    console.log(emails[emailId]);
    setEmailIdForBody(emailId);

    setEmails((prevEmails) =>
        prevEmails.map((email) =>
          email.id === emailId ? { ...email, read: true } : email
        )
      );
  };
  return (
    <div className="flex flex-col gap-3  overflow-y-auto h-[100vh] text-[14px]">
      {(filterEmail ? filterEmail : emails).map((email) => (
        <div
          className={`email-box flex items-center gap-4 pl-4 border-slate-400 border-2  border-r-2 rounded-md  ${email.read ? "bg-slate-400" : "bg-white"} `}
          key={email.id}
          onClick={() => handleEmailClick(email.id)}
        >
          <div className="icon-div flex bg-red-500 min-w-[50px] h-[50px] rounded-full justify-center items-center text-[16px] text-white">
            {email.from.name?.charAt(0).toUpperCase()}
          </div>
          <div className="email-contents">
            <div className="from-div">
              <span>
                From : {email.from.name} {email.from.email}
              </span>
            </div>
            <div className="subject-div">
              <span>Subject : {email.subject}</span>
            </div>
            <div className="short-description-div line-clamp-1">
              <p className="line-clamp-1">{email.short_description}</p>
            </div>
            <div className="date-and-time-div flex gap-3">
              <span>{timeStampToDateAndTime(email.date)}</span>
              <span className="flex text-red-500 font-bold ">{email.favorite ? "Favourite" : ""}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;

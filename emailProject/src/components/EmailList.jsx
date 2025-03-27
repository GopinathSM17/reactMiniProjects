import React from "react";

const EmailList = ({ emails }) => {
  return (
    <div className="flex flex-col gap-3  text-[14px]">
      {emails.map((email) => (
        <div className="email-box flex items-center gap-4 pl-4 border-slate-400 border-2 bg-white border-r-2 rounded-md  ">
          <div className="icon-div flex bg-red-500 w-[50px] h-[50px] rounded-full justify-center items-center text-[16px] text-white">F</div>
          <div className="email-contents" key={email.id}>
            <div className="from-div">
              <span>
                From : {email.from.name} {email.from.email}
              </span>
            </div>
            <div className="subject-div">
              <span>Subject : {email.subject}</span>
            </div>
            <div className="short-description-div ">
              <span>{email.short_description}</span>
            </div>
            <div className="date-and-time-div flex gap-3">
              <span>{email.date}</span>
              <span className="flex text-red-500 font-bold ">Favourite</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;

import React from "react";
import { useState, useEffect } from "react";
import { timeStampToDateAndTime } from "../utils";

const EmailBody = ({ emailIdForBody, emails, setEmails }) => {

  const email = emails.find((e) => e.id === emailIdForBody); // Get latest state

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEmail = async (id) => {
      try {
        const res = await fetch(
          `https://flipkart-email-mock.vercel.app/?id=${id}`
        );
        const data = await res.json();

        setEmails((prevEmails) =>
          prevEmails.map((email) =>
            email.id === id ? { ...email, body: data.body } : email
          )
        );
      } catch (error) {
        console.error("Error fetching all email", error);
        setError(error.message)
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchEmail(emailIdForBody);
  }, [emailIdForBody]);

  const handleFavourite = (id) => {
    console.log(`favourite button clicked : ${id}`);

    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, favorite: (!email.favorite) } : email
      )
    );
  };

  return (
    email && (
      <div
        className="flex flex-col email-body w-2/3 bg-white p-4 border-spacing-4 rounded-md border-2 border-gray-400 "
        key={email.id}
      >
        <div className="flex header-div justify-center items-center">
          <div className="left-head flex items-center justify-center rounded-full bg-red-500 w-[50px] h-[50px] ">
            {emails[emailIdForBody - 1]?.from.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col pl-[20px] justify-between h-full  middle-head">
            <div className="subject text-[16px]  text-slate-400 ">
              {emails[emailIdForBody - 1]?.subject}
            </div>
            <div className="date-and-time text-[10px] ">
              {timeStampToDateAndTime(emails[emailIdForBody - 1]?.date)}
            </div>
          </div>
          <div className="space-div pl-[450px]"> </div>
          <div className={`right-head  flex justify-center items-center  text-[10px] rounded-full p-[10px]   ${email.favorite ? "bg-slate-500"  : "bg-red-500" }`}>
            <button
              className="favourite-button"
              onClick={() => handleFavourite(email.id)}
            >
              {email.favorite ? "Cancel favourite" : "Mark as Favorite"}
            </button>
          </div>
        </div>
        <div className="email-content p-6" dangerouslySetInnerHTML={{ __html: email.body }}></div>
      </div>
    )
  );
};

export default EmailBody;

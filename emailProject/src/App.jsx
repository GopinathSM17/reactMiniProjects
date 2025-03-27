import React from "react";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import EmailList from "./components/EmailList";
import ButtonsController from "./components/ButtonsController";
import EmailBody from "./components/EmailBody";

const App = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await fetch("https://flipkart-email-mock.now.sh/ ");
        const data = await res.json();
        console.log(data.list);

        const updatedEmail = data.list.map((email) => ({
          ...email,
          read: false,
          favorite: false,
        }));

        setEmails(updatedEmail);
      } catch (error) {
        console.error("Error fetching all emails", error);
        setLoading(false);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEmails();
  }, []);

  const [filterState, setFilterState] = useState(null);
  const [filterEmail, setFilterEmail] = useState(null);

  const [emailIdForBody, setEmailIdForBody] = useState(null);

  return (
    <div className="flex flex-col bg-slate-300  p-[30px] ">
      {/* below code is for the buttons space */}
      <div className="buttons-space flex pb-6 justify-start gap-4 ">
        <p>Filter By : </p>
        <ButtonsController
          buttonName="Unread"
          setFilterState={setFilterState}
          setFilterEmail={setFilterEmail}
          emails={emails}
          setEmailIdForBody={setEmailIdForBody}
        />
      </div>

      {/* below code is for email list and email body */}
      <div className="main-container flex gap-4 ">
        <div className={emailIdForBody ? "w-1/3" : "w-full"}>
          <EmailList
            setEmailIdForBody={setEmailIdForBody}
            filterEmail={filterEmail}
            emails={emails}
            filterState={filterState}
            setEmails={setEmails}
          />
        </div>
        {emailIdForBody && (
          <EmailBody emailIdForBody={emailIdForBody} emails={emails} setEmails={setEmails} />
        )}
      </div>
    </div>
  );
};

export default App;

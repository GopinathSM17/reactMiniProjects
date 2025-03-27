import React from "react";
import Button from "./components/Button";
import {useState, useEffect} from "react";
import EmailList from "./components/EmailList";

const App = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await fetch('https://flipkart-email-mock.now.sh/ ');
        const data = await res.json();
        console.log(data.list);
        
        const updatedEmail = data.list.map((email) => ({
          ...email,
          read: false,
          favorite: false,
        }));

        setEmails(updatedEmail);
      } catch (error) {
        console.error('Error fetching all emails', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmails();
  }, []);

  return (
    <div className="mainContainer flex flex-col bg-slate-300  p-[30px] ">
      <div className="header flex justify-start gap-4 ">
        <p>Filter By : </p>
        <Button buttonName="Unread" />
        <Button buttonName="Read" />
        <Button buttonName="Favourites" />
      </div>
      <div className="email-list">
       <EmailList emails={emails}/>
      </div>
    </div>
  );
};

export default App;

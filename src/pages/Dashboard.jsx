// Dashboard.js
import React, { useState } from 'react';
import BatchList from '../ui-components/BatchList';
import StudentList from '../ui-components/StudentList';
import ResultUploadForm from '../ui-components/ResultUploadForm';
import EmailForm from '../ui-components/EmailForm';
import '../ui-components/Login.css';

const Dashboard = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [resultLink, setResultLink] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');

  const batches = [
    { id: 1, name: 'Batch A' },
    { id: 2, name: 'Batch B' },
    // Add more batches as needed
  ];

  const students = [
    { id: 1, name: 'Student 1', email: 'student1@example.com' },
    { id: 2, name: 'Student 2', email: 'student2@example.com' },
    // Add more students as needed
  ];

  const handleBatchClick = (batchId) => {
    setSelectedBatch(batchId);
  };

  const handleUploadResult = (link) => {
    // Handle result upload logic here
    setResultLink(link);
  };

  const handleSendEmail = (email) => {
    // Handle email sending logic here
    setRecipientEmail(email);
  };

  return (
    <>
    <h1>Test admin Dashboard</h1>
    <div className='wrapper'>
        
      <BatchList batches={batches} onBatchClick={handleBatchClick} />
      {selectedBatch && (
        <>
          <h2>Student List for {selectedBatch}</h2>
          <StudentList students={students} />
          <ResultUploadForm onUpload={handleUploadResult} />
          <EmailForm onSendEmail={handleSendEmail} />
        </>
      )}
    </div>
    </>
  );
};

export default Dashboard;

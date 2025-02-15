import React from 'react'
import { db } from '../../config/firebase'
import { addDoc, collection } from 'firebase/firestore'

function StudentDataView() {
  const data = [
    { 
      // Personal Details
      name: "John Doe",
      Rollno: "12345",
      email: "john.doe@example.com",
      dob: "2005-01-15",
      gender: "Male"
    },
    { 
      // Address Details
      address: "123 Main Street, Springfield",
      phone: "+1 234-567-890"
    },
    { 
      // Academic Details
      schoolName: "Springfield High School",
      grade: "10th"
    },
    { 
      // Parent/Guardian Details
      parentName: "Jane Doe",
      parentPhone: "+1 234-567-891"
    },
    { 
      // Extracurricular Activities
      extracurriculars: "Football, Science Club"
    },
    { 
      // Emergency Contact Details
      emergencyContact: "+1 234-567-892"
    },
    { 
      // Fee Payment Details
      feePaymentDate: "2023-09-01",
      feeStatus: "Paid"
    }
  ];

  const handleClick = () => {
    alert("Clicked!");
   
  };

  return (
    <div className="text-white">
      {/* Personal Details */}
      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default StudentDataView
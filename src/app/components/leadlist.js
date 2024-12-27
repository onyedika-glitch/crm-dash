// src/components/LeadList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import LeadDetailsModal from './leaddetailsmodal';

const mockLeads = [
  { id: 1, name: 'Jane Reyes', value: '$10,000', decisionMaker: 'Yes' },
  { id: 2, name: 'John Doe', value: '$5,000', decisionMaker: 'No' },
  // Add more mock leads as needed
];

const LeadListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LeadItem = styled.div`
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;


const LeadList = () => {
  const [selectedLead, setSelectedLead] = useState(null);

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
  };

  const handleCloseModal = () => {
    setSelectedLead(null);
  };
  return (
    <LeadListContainer>
      <ul>
        {mockLeads.map((lead) => (
          <LeadItem key={lead.id} onClick={() => handleLeadClick(lead)}>
            {lead.name}
          </LeadItem>
        ))}
      </ul>
      {selectedLead && (
        <LeadDetailsModal lead={selectedLead} onClose={handleCloseModal} />
    )}
  </LeadListContainer>
);
};

  return (
    <div>
      <ul>
        {mockLeads.map((lead) => (
          <li key={lead.id} onClick={() => handleLeadClick(lead)}>
            {lead.name}
          </li>
        ))}
      </ul>
      {selectedLead && (
        <LeadDetailsModal lead={selectedLead} onClose={closeModal} />
      )}
    </div>
  );

export default LeadList;

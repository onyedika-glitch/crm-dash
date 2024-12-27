// src/components/LeadDetailsModal.js
import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;


const LeadDetailsModal = ({ lead, onClose }) => {
  return (
    <Modal>
      <ModalContent>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Engage with {lead.name}</h2>
      <p className="mb-2">Deal Value: {lead.value}</p>
      <p className="mb-4">Decision Maker: {lead.decisionMaker}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>Close</button>
      </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default LeadDetailsModal;

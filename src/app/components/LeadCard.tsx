import React from 'react';
import Image from 'next/image';

interface LeadCardProps {
  name: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const LeadCard: React.FC<LeadCardProps> = ({ name, title, description, buttonText, imageUrl }) => {
  return (
 <div className="flex-1 bg-gray-100 p-4 rounded-lg">
  <div className="flex items-center mb-2">
   <Image alt={name} className="rounded-full mr-2" src={imageUrl} width={50} height={50} />
   <div>
    <p className="font-bold">
     {name}
    </p>
    <p className="text-sm text-gray-600">
     {title}
    </p>
   </div>
  </div>
  <p className="mb-2">
   {description}
  </p>
  <button className="text-blue-600">
   {buttonText}
  </button>
 </div>
 );
};

export default LeadCard;


import React from 'react';
import Image from 'next/image';

interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, imageUrl }) => {
  return (
  <div className="flex items-center bg-gray-100 p-4 rounded-lg">
    <Image alt={title} className="rounded-full mr-2" src={imageUrl} width={50} height={50} />
    <div className="flex items-center bg-gray-100 p-4 rounded-lg">
      <Image alt={title} className="rounded-full mr-2" src={imageUrl} width={50} height={50} />
      <div>
        {title}
        <p className="font-bold"></p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
  );
};

export default ActivityCard;


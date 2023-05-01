import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };
  // const [campaignsData, setCampaignsData] = useState(campaigns);

  // const deleteCampaign = (index) => {
  //   fetch(`http://localhost:5173/campaigns[_id]/${index}`, { // Update endpoint to use campaign ID
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // If deletion is successful, update state to remove deleted campaign
  //         setCampaignsData(campaignsData.filter((campaignData) => campaign.id !== campaignData.id)); // Update filter condition
  //       } else {
  //         console.error('Failed to delete campaign:', response.statusText);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Failed to delete campaign:', error);
  //     });
  // };
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-white text-left">
        {' '}
        {title}({campaigns.length})
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />}
        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
              // handleDelete={() => deleteCampaign(campaign.title)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
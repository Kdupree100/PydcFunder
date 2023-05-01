import React, {useState, useEffect} from 'react'
import {useStateContext} from '../context'
import {DisplayCampaigns} from '../components'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const{address, contract, getCampaigns, deleteCampaign} = useStateContext();

  const fetchCampaigns = async ()=> {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  const handleDeleteCampaign = async (campaignId) => {
    setIsLoading(true);
    await deleteCampaign(campaignId);
    await fetchCampaigns();
    setIsLoading(false);
  }

  useEffect (()=> {
    if(contract) fetchCampaigns();
  },[address,contract]);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
      onDeleteCampaign={handleDeleteCampaign} // Pass the delete function to the child component
    />
  )
}

export default Home
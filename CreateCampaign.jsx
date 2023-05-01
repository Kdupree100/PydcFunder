import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { money } from '../assets';
import { useStateContext } from '../context';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImageOrVideo } from '../utils';
import YouTube from 'react-youtube';
import ModalVideo from 'react-modal-video';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  }

  const handleVideoModalToggle = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImageOrVideo(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
        setIsLoading(false)
        navigate("/");
      } else {
        alert('Provide a valid image or video URL');
        setForm({ ...form, image: '' });
      }
    });
  
      
  
    setIsVideoModalOpen(true); // Add this line to open the video modal
  }

  
  
  
  
  
  


  
  
  return (
    <div className= "bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">{isLoading && <Loader />}    
      <div className= "flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]"> 
        <h1 className="font-epilogue font-bold sm: text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
      </div>
      <form 
        onSubmit= {handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]"> 
        <div className= "flex flex-wrap gap-[40px]">
          <FormField 
          LabelName="Your Name"
          placeholder="John Doe"
          inputType= "text"
          value={form.name}
          handleChange= {(e) => handleFormFieldChange('name',e)}
          />
          
          <FormField
          LabelName="Campaign Title"
          placeholder="Write a Title"
          inputType= "text"
          value={form.title}
          handleChange= {(e) => handleFormFieldChange('title',e)}
           />
           </div>
            <FormField
          LabelName="Story"
          placeholder="Write your Story"
          isTextArea
          value={form.description}
          handleChange= {(e) => handleFormFieldChange('description',e)}
           />
        <div className= "w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]" >
            <img src={money} alt= "money" className=" w-[40px] h-[40px] object-contain"/>
            <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]"> 
            You will get 100% of the raised amount!</h4>
             </div>
             <div className= "flex flex-wrap gap-[40px]">
          <FormField 
          LabelName="Goal *"
          placeholder="ETH 0.50"
          step=".01"
          inputType= "text"
          value={form.target}
          handleChange= {(e) => handleFormFieldChange('target',e)}
          />
          
          <FormField
          LabelName="End Date"
          placeholder="End Date"
          inputType= "date"
          value={form.deadline}
          handleChange= {(e) => handleFormFieldChange('deadline',e)}
           />
            </div>
            <FormField
          LabelName="Campaign image"
          placeholder="Place the image URL of your campaign here"
          inputType= "url"
          value={form.image}
          handleChange= {(e) => handleFormFieldChange('image',e)}
           />
            <div className="flex  justify-center items-center mt-[40px]">
            
            {form.image && (
  <YouTube
    videoId={form.image}
    opts={{ width: '100%', height: '300px' }}
    onReady={() => {}}
    onPlay={() => {}}
    onPause={() => {}}
    onEnd={() => {}}
    onError={() => {
      alert("An error occurred while playing the video.");
    }}
    onStateChange={() => {}}
    onPlaybackRateChange={() => {}}
    onPlaybackQualityChange={() => {}}
    />
  )}
  <ModalVideo
    channel="youtube"
    isOpen={isVideoModalOpen}
    videoId={form.image}
    onClose={handleVideoModalToggle}
  />

           <CustomButton
             btnType="submit"
             title= "Start new Campaign"
             styles= "bg-[#1dc071]" 
          
          />
         </div>
      </form>
    </div>

    
    
  )
}

export default CreateCampaign
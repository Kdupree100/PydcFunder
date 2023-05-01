import React, {useState} from 'react'

const SearchFilter = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Filter logic based on the searchText
    // You can customize this to your specific use case
    
    console.log('Searching for:', searchText);
  }

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div
          className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer"
          onClick={handleSearch}
        >
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
        </div>
      </div>
    </div>
  );
}


export default SearchFilter
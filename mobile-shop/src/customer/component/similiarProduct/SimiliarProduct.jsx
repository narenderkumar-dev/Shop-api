import React from 'react';


const HomeSectionCard = ({product}) => {
  return (
    <div
      className="cursor-pointer shadow-lg flex flex-col items-center bg-white rounded-lg w-[15rem] mx-auto  border space-y-5"
      style={{
        maxWidth: '90%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        className="w-[10rem]  h-[10rem] lg:h-[12rem]"
        style={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          className="object-cover object-top max-w-[100%] max-h-[100%]"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-1 flex flex-col items-center max-h-[3rem]" style={{ display: 'flex',overflow: 'hidden' }}>
        <h3 className="text-xs font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-xs text-gray-500 overflow-hidden  overflow-ellipsis" 
          
        >{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

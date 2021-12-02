import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import APIManager from 'services/Api'

const RealEstate = () => {
  const [realEstate, setRealEstate] = useState("")
  const realEstateID = useParams()

  const HandleRealEstate = async () => {
    const response = await APIManager.showRealEstate(realEstateID)
    console.log("RealEstate response =>", response)
    setRealEstate(response)
  }

  useEffect (() => {
    HandleRealEstate()
  },
  []
  )

  return (
    <div>
      
    </div>
  );
};

export default RealEstate;
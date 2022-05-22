import { useState } from "react";

import UserDetails from "./UserDetails";
import "./StartCampaign.css";
import CampaignDetails from "./CampaignDetails";
import AmountMilestone from "./AmountMilestone";
import Confirm from "./Confirm";
import Success from "./Success";
import { create as ipfsHttpClient } from "ipfs-http-client";

import { CREATE_ENDPOINT } from "./../../../constants/endpoint.json";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const StartCampaign = () => {
  const [step, setStep] = useState(0);
  const [startCampaign, setStartCampaign] = useState({
    fullName: "",
    email: "",
    walletAddress: "",
    campaignTitle: "",
    campaignDetails: "",
    image: "",
    amount: "",
    images: [],
    date: "",
  });
  // Back to the prev step
  const prevStep = (newData) => {
    setStartCampaign((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev - 1);
  };
  // Proceed to the next step
  const nextStep = (newData) => {
    setStartCampaign((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev + 1);
  };

  const submitForm = () => {
    setStep((prev) => prev + 1);

    const uploadToIPFS = async () => {
      const images = startCampaign["images"];

      if (!images) return;

      const imagesCount = images.length;

      const imagesPath = [];

      for (let i = 0; i < imagesCount; i++) {
        try {
          const added = await client.add(images[i], {
            progress: (prog) => console.log(`received: ${prog}`),
          });
          imagesPath.push(`https://ipfs.infura.io/ipfs/${added.path}`);
        } catch (error) {
          console.log("Error uploading file: ", error);
        }
      }

      var timestamp = Date.parse(startCampaign["date"]);

      const data = {
        walletAddress: startCampaign["walletAddress"],
        projectTitle: startCampaign["campaignTitle"],
        description: startCampaign["campaignDetails"],
        images: imagesPath,
        milestone: [
          {
            amount: startCampaign["amount"],
            deadline: timestamp,
          },
        ],
      };

      const added = await client.add(JSON.stringify(data));

      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      await fetch(CREATE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          name: startCampaign["fullName"],
          email: startCampaign["email"],
          metaURI: url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(url);
    };

    try {
      uploadToIPFS();
    } catch (e) {
      console.log(e);
    }
  };

  const formSteps = [
    <UserDetails
      startCampaign={startCampaign}
      setStartCampaign={setStartCampaign}
      nextStep={nextStep}
    />,
    <CampaignDetails
      startCampaign={startCampaign}
      nextStep={nextStep}
      prevStep={prevStep}
      setStartCampaign={setStartCampaign}
    />,
    <AmountMilestone
      startCampaign={startCampaign}
      nextStep={nextStep}
      prevStep={prevStep}
      setStartCampaign={setStartCampaign}
    />,
    <Confirm nextStep={nextStep} prevStep={prevStep} submitForm={submitForm} />,
    <Success />,
  ];
  return <div>{formSteps[step]}</div>;
};

export default StartCampaign;

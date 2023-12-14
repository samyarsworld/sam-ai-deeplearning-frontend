"use client";
import { useState, ChangeEvent } from "react";
import React from "react";
import Card from "./SegmenterCard";

// const apiURL: string = "https://sam-deeplearning-api.com/segmenter/predict";
const apiURL: string = "http://localhost:8080/segment";

const ImageSeg = () => {
  const [inputImage, setInputImage] = useState("");
  const [outputImage, setOutputImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOutputImage("");
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length !== 0) {
      // Initializer input and output
      setOutputImage("");
      setInputImage("");

      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        setInputImage(reader.result);
      };
    }
  };

  const handleSegment = async () => {
    setLoading(true);
    setOutputImage("");

    if (inputImage) {
      const formData = new FormData();
      formData.append("image", inputImage);

      try {
        const response = await fetch(apiURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: inputImage,
          }),
        });

        if (!response.ok) {
          setOutputImage("SORRY! SOMETHING WRONG WITH THE SERVER.");
          setLoading(false);
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          const data = await response.json();

          setTimeout(() => {
            setLoading(false);
            setOutputImage(data.image);
          }, 1000);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };
  return (
    <div className="flex flex-col xl:flex-row  gap-[50px]">
      <Card
        title="Image"
        image={inputImage}
        button="Segment"
        loading={loading}
        handleSubmit={handleSegment}
        handleFileChange={handleFileChange}
        text="Please upload an image file."
      />
      <div className="flex items-center">-----</div>
      <Card
        title="Result"
        image={outputImage}
        loading={loading}
        handleSubmit={handleReset}
        button="Reset"
        handleFileChange=""
        text="Segmented image will appear here.."
      />
    </div>
  );
};

export default ImageSeg;

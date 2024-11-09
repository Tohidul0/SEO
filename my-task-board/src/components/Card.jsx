// src/components/Card.jsx
import React, { useEffect, useState } from "react";
import axios from "axios"; 
import { FaRegComments } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GrDetach } from "react-icons/gr";

const Card = ({ title, content, subCards, ID }) => {
  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentSubCardId, setCurrentSubCardId] = useState(null); 
  const[refresh, setRefresh] = useState()
  // Track current subCard ID for uploading
  const [fetchdata, setFetchdata] = useState([]);
  useEffect(() => {
  
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/cards/${ID}`);
          setFetchdata(response.data.subcard);
          console.log(response.data)
        } catch (err) {
          //console.log('Failed to fetch data');
        } 
      };

      fetchData();
    
  }, [ID, refresh]);

  for(let i=0; i<fetchdata.length; i++){
    if(fetchdata[i]){
      const num = parseInt(fetchdata[i].SubId)
      console.log(num)
      subCards[num-1] ={...subCards[num-1], Atchment: fetchdata[i].Attachment}
      console.log(subCards[num-1])
    }

  }
  //console.log(subCards)
 
  // Toggle modal visibility
  const toggleModal = (subCardId) => {
    setCurrentSubCardId(subCardId); // Set the subCardId when opening modal
    setShowModal(!showModal);
  };

  // Handle file selection
  const handleFileSelection = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  // Handle file upload
  const uploadFiles = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("files", file));

    try {
      const response = await axios.post(
        `http://localhost:5000/api/cards/${ID}/subcards/${currentSubCardId}/files`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setRefresh(response.data)
      setSelectedFiles([]); 
      toggleModal(); // Close modal after upload
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };
   
  return (
    <div className="flex-shrink-0 w-100 mx-4">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <h3 className="text-lg font-medium">{title}</h3>
         
        </div>

        <div className="overflow-y-auto scroll-smooth w-full h-[500px]" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
          <div className="px-4 pb-4">
            {subCards.map((subCard) => (

              <div
                key={subCard.id}
                className="flex-shrink-0 w-full mx-auto my-2"
              >
                <div className="bg-gray-100 rounded-lg p-3">
                  {/* SubCard Content */}
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center">
                      <img
                        src={subCard.img2}
                        alt=""
                        className="w-4 h-4 rounded-full"
                      />
                      <p className="font-bold ml-1">{subCard.ClientName}</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={subCard.img1}
                        alt=""
                        className="w-4 h-4 rounded-full"
                      />
                      <p className="ml-1 font-bold">{subCard.CusName}</p>
                    </div>
                  </div>

                  <div className="flex justify-between my-3 text-xs">
                    <div>{subCard.Lorem}</div>
                    <div>{subCard.weght}</div>
                  </div>

                  <div className="flex justify-around items-center my-3 text-xs">
                    <div className="flex ">
                    <img
                      src={subCard.img1}
                      alt=""
                      className="w-4 h-4 rounded-full"
                    />
                    <img
                      src={subCard.img2}
                      alt=""
                      className="w-4 h-4 rounded-full"
                    />
                    <p className="w-5 h-5 rounded-full">{subCard.plus}</p>
                    </div>
                    <div className="flex mx-2   items-center">
                    <FaRegComments />
                    <p className="w-5 h-5 rounded-full">{subCard.num}</p>
                    </div>
                    <div className="flex px-2   items-center">
                    <button onClick={() => toggleModal(subCard.id)}>
                      <GrDetach />
                    </button>
                    <p>{subCard.Atchment || 0}</p>
                    </div>
                    <FaCalendarDays />
                    <p className="h-5 rounded-full">{subCard.date}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Modal for File Attachments */}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white rounded-lg p-6 w-80">
                  <h3 className="text-lg font-semibold mb-4">
                    Upload Attachments
                  </h3>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileSelection}
                    className="block mb-4"
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={uploadFiles}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Upload
                    </button>
                    <button
                      onClick={toggleModal}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium">Uploaded Files:</h4>
                    <ul className="mt-2 text-sm">
                      {attachments.map((file, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{file.filename}</span>
                          <span className="text-gray-500">
                            .{file.fileType.split("/")[1]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

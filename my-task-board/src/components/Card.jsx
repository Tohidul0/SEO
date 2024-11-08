// src/components/Card.jsx
import React, { useState } from 'react';
import { FaRegComments } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GrDetach } from "react-icons/gr";

const Card = ({ title, content, subCards }) => {
  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);

  // Toggle modal visibility
  const toggleModal = () => setShowModal(!showModal);

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const updatedAttachments = files.map((file) => ({
      name: file.name,
      extension: file.name.split('.').pop(),
    }));
    setAttachments((prev) => [...prev, ...updatedAttachments]);
  };

  return (
    <div className="flex-shrink-0 w-64 mx-4">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-600">{content}</p>
        </div>

        <div className="overflow-y-auto scroll-smooth scrollbar-hide w-full">
          <div className="px-4 pb-4">
            {subCards.map((subCard) => (
              <div key={subCard.id} className="flex-shrink-0 w-full mx-auto my-2">
                <div className="bg-gray-100 rounded-lg p-3">
                  {/* SubCard Content */}
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center">
                      <img src={subCard.img2} alt="" className="w-4 h-4 rounded-full" />
                      <p className="font-bold ml-1">{subCard.ClientName}</p>
                    </div>
                    <div className="flex items-center">
                      <img src={subCard.img1} alt="" className="w-4 h-4 rounded-full" />
                      <p className="ml-1">{subCard.CusName}</p>
                    </div>
                  </div>

                  <div className="flex justify-between my-2 text-xs">
                    <div>{subCard.Lorem}</div>
                    <div>{subCard.weght}</div>
                  </div>

                  <div className="flex justify-around items-center my-2 text-xs">
                    <img src={subCard.img1} alt="" className="w-4 h-4 rounded-full" />
                    <img src={subCard.img2} alt="" className="w-4 h-4 rounded-full" />
                    <p className="w-5 h-5 rounded-full">{subCard.plus}</p>
                    <FaRegComments />
                    <p className="w-5 h-5 rounded-full">{subCard.num}</p>
                    <button onClick={toggleModal}>
                      <GrDetach />
                    </button>
                    <p>25</p>
                    <FaCalendarDays />
                    <p className="h-5 rounded-full">{subCard.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for File Attachments */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-80">
              <h3 className="text-lg font-semibold mb-4">Upload Attachments</h3>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="block mb-4"
              />
              <button
                onClick={toggleModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Close
              </button>

              <div className="mt-4">
                <h4 className="font-medium">Uploaded Files:</h4>
                <ul className="mt-2 text-sm">
                  {attachments.map((file, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{file.name}</span>
                      <span className="text-gray-500">.{file.extension}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

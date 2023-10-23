"use client"
import React, { useState } from 'react';
import './services.css';
import { RiMentalHealthFill } from 'react-icons/ri';
import { AiFillWechat, AiOutlineArrowRight } from 'react-icons/ai';
import { FaPersonCircleCheck } from 'react-icons/fa6';
import { GiUltrasound } from 'react-icons/gi';

function Services() {
  const [isModalOpen, setIsModalOpen] = useState({
    healthConsultation: false,
    medicalCheckup: false,
    ultrasound: false,
  });

  const openModal = (service) => {
    setIsModalOpen({ ...isModalOpen, [service]: true });
  };

  const closeModal = (service) => {
    setIsModalOpen({ ...isModalOpen, [service]: false });
  };

  return (
    <div className='PaddingAll services'>
      <h2 className='MarginTopAndBottom Flex-x-direction services-title'>
        <RiMentalHealthFill className='mental-service' />SERVICES
      </h2>
      <p className='AddOpacity'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna. Proin a ex quis nulla euismod
        bibendum. Integer vel interdum ex. Nulla facilisi. Curabitur nec quam et elit dignissim dapibus. Vivamus ac
        semper tellus, vel viverra est. Sed commodo neque at ipsum ultricies.
      </p>

      <div className='grid-services MarginTopAndBottom'>
        <div className='grid-children'>
          <AiFillWechat className='grid-icon' />
          <h4>Health Consultation</h4>
          <p className='AddOpacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna.</p>
          <button className='grid-btn Flex-x-direction' onClick={() => openModal('healthConsultation')}>
            Learn More <AiOutlineArrowRight />
          </button>
          {isModalOpen.healthConsultation && (
            <div className='modal'>
              <div className='modal-content'>
                <span className='close' onClick={() => closeModal('healthConsultation')}>
                  &times;
                </span>
                <h2 className='title'>Health Consultation</h2>
                <p className='AddOpacity'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna. Proin a ex quis nulla
                  euismod bibendum.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className='grid-children'>
          <FaPersonCircleCheck className='grid-icon' />
          <h4>Medical Checkup</h4>
          <p className='AddOpacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna.</p>
          <button className='grid-btn Flex-x-direction' onClick={() => openModal('medicalCheckup')}>
            Learn More <AiOutlineArrowRight />
          </button>
          {isModalOpen.medicalCheckup && (
            <div className='modal'>
              <div className='modal-content'>
                <span className='close' onClick={() => closeModal('medicalCheckup')}>
                  &times;
                </span>
                <h2 className='title'>Medical Checkup</h2>
                <p className='AddOpacity'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna. Proin a ex quis nulla
                  euismod bibendum.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className='grid-children'>
          <GiUltrasound className='grid-icon' />
          <h4>Ultrasound</h4>
          <p className='AddOpacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna.</p>
          <button className='grid-btn Flex-x-direction' onClick={() => openModal('ultrasound')}>
            Learn More <AiOutlineArrowRight />
          </button>
          {isModalOpen.ultrasound && (
            <div className='modal'>
              <div className='modal-content'>
                <span className='close' onClick={() => closeModal('ultrasound')}>
                  &times;
                </span>
                <h2 className='title'>Ultrasound</h2>
                <p className='AddOpacity'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non venenatis urna. Proin a ex quis nulla
                  euismod bibendum.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface SocialShareModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const SocialShareModal: React.FC<SocialShareModalProps> = ({ videoUrl, isOpen, onClose }) => {
  const shareUrl = encodeURIComponent(videoUrl);

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-80">
        <button onClick={onClose} className="float-right text-gray-500">X</button>
        <h2 className="text-lg font-bold mb-4">Share this Video</h2>
        <div className="flex justify-around">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} className="text-blue-600" />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={32} className="text-blue-400" />
          </a>
          <a href={`https://www.instagram.com/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} className="text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default SocialShareModal;

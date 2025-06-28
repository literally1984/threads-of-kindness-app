
import { X, Heart, MapPin, Palette, Shirt, Eye, MessageCircle } from 'lucide-react';

interface ListingModalProps {
  listing: any;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

const ListingModal = ({ listing, onClose, isBookmarked, onToggleBookmark }: ListingModalProps) => {
  const handleInterest = () => {
    // In a real app, this would send a notification to the seller
    alert('Interest sent! The seller will be notified.');
  };

  const handleVirtualTryOn = () => {
    // Placeholder for virtual try-on feature
    alert('Virtual try-on feature coming soon!');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
          <button
            onClick={onToggleBookmark}
            className="absolute top-4 left-4 p-2 bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <Heart
              size={20}
              className={isBookmarked ? 'fill-red-500 text-red-500' : 'text-gray-600'}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{listing.title}</h2>
          
          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <MapPin size={16} />
            <span className="text-sm">{listing.location} • {listing.distance} miles away</span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-xl">
              <div className="flex items-center space-x-2 mb-1">
                <Shirt size={16} className="text-green-600" />
                <span className="text-xs font-medium text-gray-500">SIZE</span>
              </div>
              <span className="text-sm font-semibold">{listing.size}</span>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-xl">
              <div className="flex items-center space-x-2 mb-1">
                <Palette size={16} className="text-blue-600" />
                <span className="text-xs font-medium text-gray-500">COLOR</span>
              </div>
              <span className="text-sm font-semibold">{listing.color}</span>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-xl">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-medium text-gray-500">STYLE</span>
              </div>
              <span className="text-sm font-semibold">{listing.style}</span>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-xl">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-medium text-gray-500">TYPE</span>
              </div>
              <span className="text-sm font-semibold">{listing.type}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleVirtualTryOn}
              className="w-full flex items-center justify-center space-x-2 bg-purple-100 text-purple-700 py-3 rounded-xl font-medium hover:bg-purple-200 transition-colors"
            >
              <Eye size={20} />
              <span>Virtual Try-On</span>
            </button>
            
            <button
              onClick={handleInterest}
              className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={20} />
              <span>I'm Interested!</span>
            </button>
          </div>

          {/* Condition Note */}
          <div className="mt-4 p-4 bg-green-50 rounded-xl">
            <p className="text-sm text-green-700">
              <strong>Free to Good Home!</strong> This item is being given away for free. 
              Please only express interest if you genuinely need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingModal;

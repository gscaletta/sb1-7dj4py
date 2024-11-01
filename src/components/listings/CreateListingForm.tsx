import React, { useState } from 'react';
import { Upload, Plus, Minus } from 'lucide-react';

export default function CreateListingForm() {
  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    ticketPrice: '',
    reservePrice: '',
    duration: '7', // days
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Images
        </label>
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setImages(images.filter((_, i) => i !== index))}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm"
              >
                <Minus className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
          {images.length < 4 && (
            <label className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition-colors">
              <Upload className="w-6 h-6 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Upload Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Price (€)
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ticket Price (€)
          </label>
          <input
            type="number"
            max="1000"
            value={formData.ticketPrice}
            onChange={(e) => setFormData({ ...formData, ticketPrice: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reserve Price (€)
          </label>
          <input
            type="number"
            value={formData.reservePrice}
            onChange={(e) => setFormData({ ...formData, reservePrice: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duration (days)
        </label>
        <select
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="3">3 days</option>
          <option value="7">7 days</option>
          <option value="14">14 days</option>
          <option value="30">30 days</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
      >
        Create Listing
      </button>
    </form>
  );
}
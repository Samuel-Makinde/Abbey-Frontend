import React, { useState } from 'react';
import { LabelImportant, Label} from '../Label';
import {ButtonLongPurple} from "../Button"
import {Heading} from "../Texts"

const countries = {
  USA: ['California', 'Texas', 'Florida', 'New York'],
  Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
  Nigeria: ['Lagos', 'Abuja', 'Kano', 'Rivers'],
  India: ['Maharashtra', 'Karnataka', 'Delhi', 'Tamil Nadu'],
};

const SearchByLocation: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');

  // Handle country selection change
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    setSelectedState(''); // Reset state when country changes
  };

  // Handle state selection change
  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  // Handle form submission
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform search logic here based on selectedCountry and selectedState
    console.log('Searching for:', selectedCountry, selectedState);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-primary1 text-primary2 rounded-lg shadow-md font-body">
      <Heading level={2} className="text-lg font-semibold mb-4">Search by Country and State</Heading>
      
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Country Select */}
        <div>
          <LabelImportant htmlFor="country" children="Select Country" />
          <select
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="block w-full mt-1 p-2 border  border-ter1 outline-none rounded-lg shadow-sm focus:ring focus:ring-blue-200"
            required
          >
            <option value="" disabled>Select a country</option>
            {Object.keys(countries).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* State Select */}
        {selectedCountry && (
          <div>
            <Label htmlFor="state" children="Select State" />
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              className="block w-full mt-1 p-2 border border-ter1 outline-none rounded-lg shadow-sm focus:ring focus:ring-blue-200"
              required
            >
              <option value="" disabled>Select a state</option>
              {countries[selectedCountry as keyof typeof countries].map((state:  string ) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Search Button */}
        <ButtonLongPurple className="w-full" type="submit">
                Search
            </ButtonLongPurple>
      </form>
    </div>
  );
};

export default SearchByLocation;

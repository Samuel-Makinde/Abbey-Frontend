// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState, useEffect } from 'react';
// import { LabelImportant, Label } from '../Label';
// import { ButtonLongPurple } from '../Button';
// import { Heading } from '../Texts';
// import { Country, State } from 'country-state-city'; 
// import api from "../../api/dashboardApi"


// const SearchByLocation: React.FC = () => {
//   const [countries, setCountries] = useState<any[]>([]);
//   const [states, setStates] = useState<any[]>([]);
//   const [selectedCountry, setSelectedCountry] = useState<string>('');
//   const [selectedState, setSelectedState] = useState<string>('');
//   const [users, setUsers] = useState<any[]>([]); 
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch countries when the component loads
//   useEffect(() => {
//     const fetchedCountries = Country.getAllCountries();
//     setCountries(fetchedCountries);
//   }, []);

//   // Fetch states whenever a country is selected
//   useEffect(() => {
//     if (selectedCountry) {
//       const fetchedStates = State.getStatesOfCountry(selectedCountry);
//       setStates(fetchedStates);
//     } else {
//       setStates([]);
//     }
//   }, [selectedCountry]);

//   // Handle country selection change
//   const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCountry(event.target.value);
//     setSelectedState(''); // Reset state when country changes
//   };

//   // Handle state selection change
//   const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedState(event.target.value);
//   };



//   // Handle form submission
//   const handleSearch = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       const userId = null; // Adjust based on whether you want to search by user ID or not
//       const response = await api.fetchUsers({
//         accessToken,
//         refreshToken,
//         country: selectedCountry,
//         state: selectedState,
//         userId,
//       });

//       setUsers(response.data); // Assume response.data contains user details
//       setIsLoading(false);
//     } catch (error: any) {
//       setError(error.message || 'Error fetching users');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-primary1 text-primary2 rounded-lg shadow-md font-body">
//       <Heading level={2} className="text-lg font-semibold mb-4">
//         Search by Country and State
//       </Heading>

//       <form onSubmit={handleSearch} className="space-y-4">
//         {/* Country Select */}
//         <div>
//           <LabelImportant htmlFor="country" children="Select Country" />
//           <select
//             id="country"
//             value={selectedCountry}
//             onChange={handleCountryChange}
//             className="block w-full mt-1 p-2 border  border-ter1 outline-none rounded-lg shadow-sm focus:ring focus:ring-blue-200"
//             required
//           >
//             <option value="" disabled>
//               Select a country
//             </option>
//             {countries.map((country) => (
//               <option key={country.isoCode} value={country.isoCode}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* State Select */}
//         {selectedCountry && (
//           <div>
//             <Label htmlFor="state" children="Select State" />
//             <select
//               id="state"
//               value={selectedState}
//               onChange={handleStateChange}
//               className="block w-full mt-1 p-2 border border-ter1 outline-none rounded-lg shadow-sm focus:ring focus:ring-blue-200"
//               required
//             >
//               <option value="" disabled>
//                 Select a state
//               </option>
//               {states.length > 0 ? (
//                 states.map((state) => (
//                   <option key={state.isoCode} value={state.isoCode}>
//                     {state.name}
//                   </option>
//                 ))
//               ) : (
//                 <option disabled>No states available</option>
//               )}
//             </select>
//           </div>
//         )}

//         {/* Search Button */}
//         <ButtonLongPurple className="w-full" type="submit">
//           Search
//         </ButtonLongPurple>
//       </form>
//       {error && <div className="text-sec8 mt-4">{error}</div>}
//     </div>
//   );
// };

// export default SearchByLocation;

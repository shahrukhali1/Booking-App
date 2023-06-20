// import React from 'react';

// import hotelMocks from '../../mocks/hotels';

// import * as S from './styles';
// import theme from '../../styles/theme';

// const TopHotelList = () => {

//   return (
//     <S.Container
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       scrollEventThrottle={16}>
//       {hotelMocks.map(hotel => (
//         <S.CardContainer key={hotel.id} source={hotel.image} resizeMode="cover">
//           <S.Rating>
//             <S.RatingIcon color={theme.colors.orange} />
//             <S.RatingNumber>{hotel.rating}</S.RatingNumber>
//           </S.Rating>
//           <S.DetailsSection>
//             <S.Title>{hotel.name}</S.Title>
//             <S.Location>{hotel.location}</S.Location>
//           </S.DetailsSection>
//         </S.CardContainer>
//       ))}
//     </S.Container>
//   );
// };

// export default TopHotelList;

import React, { useEffect, useState } from 'react';

import hotelMocks from '../../mocks/hotels';

import * as S from './styles';
import theme from '../../styles/theme';

const TopHotelList = () => {
  const [hotelData, setHotelData] = useState([]);
  useEffect(() => {
    // Fetch hotel data from the API
    fetch('http://127.0.0.1:8000/api/listings')
      .then(response => response.json())
      .then(data => {
        // Update the hotel data state with the fetched data
        setHotelData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log("hotelData",hotelData)
  return (
    <S.Container
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}>
      {hotelData.map(hotel => (
        <S.CardContainer key={hotel.id} source={{ uri: hotel.image }} resizeMode="cover">
          <S.Rating>
            <S.RatingIcon color={theme.colors.orange} />
            <S.RatingNumber>{hotel.rating}</S.RatingNumber>
          </S.Rating>
          <S.DetailsSection>
            <S.Title>{hotel.name}</S.Title>
            <S.Location>{hotel.location}</S.Location>
          </S.DetailsSection>
        </S.CardContainer>
      ))}
    </S.Container>
  );
};

export default TopHotelList;


import React, { useState } from 'react';

import CategoriesList from '../../components/CategoriesList';
import InputSearch from '../../components/InputSearch';
import HotelCardList from '../../components/HotelCardList';
import TopHotelList from '../../components/TopHotelsList';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Category } from '../../types';
import * as S from './styles';

import hotelMocks from '../../mocks/hotels';
import { Text } from 'react-native';
import { View } from 'react-native';

const CATEGORIES: Category[] = [
  {
    description: 'All Places',
    key: 'ALL',
  },
  {
    description: 'Popular',
    key: 'POPULAR',
  },
  {
    description: 'Top Rated',
    key: 'TOP_RATED',
  },
  {
    description: 'Featured',
    key: 'FEATURED',
  },
  {
    description: 'Luxury',
    key: 'LUXURY',
  },
];

const Home = () => {
  const route = useRoute();
  const userdata = route.params?.userdata.data;
  console.log("userdata:", userdata)
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    CATEGORIES[0],
  );

  const handleCategoryClick = (categoryKey: string) => {
    const categoryClicked = CATEGORIES.find(
      category => category.key === categoryKey,
    ) as Category;

    setSelectedCategory(categoryClicked);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Find your hotel {'\n'}in <S.PlaceTitle>Naran Khagan</S.PlaceTitle>
        </S.Title>
        <S.UpperContainer>
          {userdata && <S.TextTitle>{userdata.name}</S.TextTitle>}
          <S.UserIcon />
        </S.UpperContainer>
      </S.Header>

      <S.InputContainer>
        <InputSearch placeholder="Search" />
      </S.InputContainer>

      <S.CategoriesListContainer>
        <CategoriesList
          horizontal
          showsHorizontalScrollIndicator={false}
          hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
          categories={CATEGORIES}
          onSelect={handleCategoryClick}
          selectedCategory={selectedCategory}
        />
      </S.CategoriesListContainer>

      <S.HotelCardListContainer>
        <HotelCardList
          horizontal
          showsHorizontalScrollIndicator={false}
          hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
          hotelList={hotelMocks}
        />
      </S.HotelCardListContainer>

      <S.TopHotelListContainer>
        <S.TopHotelTitle>Top hotels</S.TopHotelTitle>
        <TopHotelList />
      </S.TopHotelListContainer>
    </S.Container>
  );
};

export default Home;

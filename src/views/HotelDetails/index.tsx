import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';

import {
  HotelDetailsScreeNavigationProp,
  HotelDetailsScreenRouteProp,
} from '../../routes/types';

import * as S from './styles';
import Rating from '../../components/Rating';

const HotelDetails = () => {
  const {
    params: { hotel },
  } = useRoute<HotelDetailsScreenRouteProp>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleBookNow = () => {
    setModalVisible(true);
  };
  const { navigate } = useNavigation<HotelDetailsScreeNavigationProp>();

  const handleNavigateBack = () => {
    navigate('Home');
  };

  const handleMatterport = () => {
    navigate('Matterport', { data: hotel.modelId,hotel });
  };

  const handleBookingConfirmation = () => {
    // Handle the booking logic here

    // Navigate to the LoginScreen
    navigate('Login');
    setModalVisible(false);
  };
  return (
    <S.Container>
      <S.BackgroundImage
        // source={hotel.imageGradient || hotel.image}
        source={{ uri: hotel.image }}
        resizeMode="cover">
        <S.Header>
          <TouchableOpacity testID='backBtn' activeOpacity={0.8} onPress={handleNavigateBack}>
            <S.BackIcon />
          </TouchableOpacity>
          <S.BookmarkIcon />
        </S.Header>
      </S.BackgroundImage>

      <S.LocationIconContainer onPress={handleMatterport}>
        <S.LocationIcon />
      </S.LocationIconContainer>

      <S.ContentContainer>
        <S.Title>{hotel.name}</S.Title>
        <S.LocationName>{hotel.location}</S.LocationName>
        <Rating rating={hotel.rating} reviews={hotel.reviews} />

        <S.Description>{hotel.details}</S.Description>
      </S.ContentContainer>

      <S.PricingContainer>
        <S.PricingTitle>Price per night</S.PricingTitle>
        <S.PricingBackground>
          <S.Pricing>
            ${hotel.price} <S.PricingDetail>+ breakfest</S.PricingDetail>
          </S.Pricing>
        </S.PricingBackground>
      </S.PricingContainer>
      <S.BookButton onPress={handleBookNow}>
        <S.BookButtonText>Book now</S.BookButtonText>
      </S.BookButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <S.BookButtonText style={styles.modalText}>Are you sure you want to book?</S.BookButtonText>
            <View style={styles.modalButtonsContainer}>
              <S.BookButton
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </S.BookButton>
              <S.BookButton
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleBookingConfirmation}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </S.BookButton>
            </View>
          </View>
        </View>
      </Modal>
    </S.Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
  },
  bookButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    height: "40%"
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
  confirmButton: {
    backgroundColor: 'rgb(178,34,34)',
  },
  modalButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HotelDetails;


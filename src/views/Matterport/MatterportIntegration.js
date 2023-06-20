import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as S from './styles';

const MatterportWebView = () => {
  const [data, setData] = useState(null);
  const route = useRoute();
  const navigate = useNavigation();
  const modelId = route.params.data;
  const hotel = route.params.hotel;

  const handleNavigateBack = () => {
    navigate.navigate('HotelDetails', { hotel });
  };

  console.log('data_route', route.params.data);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  const url = `https://my.matterport.com/show/?m=${modelId}`;

  return (
    <View style={{ flex: 1,  }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor:'white', }}>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={handleNavigateBack}
        >
          <S.BackIcon />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color:"rgb(178, 34, 34)", fontSize:20, marginLeft:130 }}>Matterport</Text>
      </View>
      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
        onMessage={(event) => {
          const message = event.nativeEvent.data;
          setData(message);
          // Handle the received message from the web view
        }}
      />
    </View>
  );
};

export default MatterportWebView;

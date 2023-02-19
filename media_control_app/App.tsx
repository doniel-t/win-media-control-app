import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, ImageBackground, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { MediaButton } from './components/MediaButton';
import { withExpoSnack } from 'nativewind';
import { mediaControls } from './utils/mediaControlAttributes';

function App() {
  const [hostname, setHostname] = useState(''); //insert your hostname as default if you want to rebuild the app

  return (
    <ScrollView 
      automaticallyAdjustContentInsets={true}
      className='h-full w-screen'
      >
      <ImageBackground
        source={require('./assets/bg_gif_blured.gif')}
        resizeMode='cover'
        className='h-[110vh]'
      >
        <View className="flex h-full w-full justify-center">
          <Toast />
          <View className='flex justify-center items-center h-40 mt-8 mb-8 p-4'>
            <Image source={require('./assets/hero.png')} style={{ width: 200, height: 200 }} className='rounded-full mb-8' />
            <Text className='font-semibold text-3xl text-white -mt-2'>Media Controls 🤘</Text>
          </View>
          <View className='container flex justify-around flex-row mt-24 h-40 bg-black rounded-3xl w-[95%] self-center opacity-80'>
            {mediaControls.map(mediaControl => {
              return <MediaButton
                key={mediaControl.endpoint}
                title={mediaControl.title} className='min-w-[200px]'
                apiParams={{ hostname: hostname, endpoint: mediaControl.endpoint }}
                imageSrc={mediaControl.imageSrc}
                isLongText={mediaControl.isLongText}
              />
            })}
          </View>
          <View className='flex items-center self-center justify-center bg-indigo-600 mt-4 p-2 rounded-lg w-[80%] opacity-80'>
            <TextInput
              className='-mt24 w-full justify-center text-white text-center'
              placeholder='Hostname'
              onChangeText={(text) => setHostname(text)}
            ></TextInput>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default withExpoSnack(App);
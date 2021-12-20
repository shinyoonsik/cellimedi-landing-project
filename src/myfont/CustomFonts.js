import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      'NotoSansKR-Bold':{
        uri: require('../../assets/fonts/NotoSansKR-Bold.otf'),
      },
      'NotoSansKR-Regular':{
        uri: require('../../assets/fonts/NotoSansKR-Regular.otf'),
      },
      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Montserrat-SemiBold': {
        uri: require('../../assets/fonts/NotoSansKR-Bold.otf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
};

export {loadFonts};
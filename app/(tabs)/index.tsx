import { StyleSheet, Text, View } from 'react-native'
import { useAssets } from 'expo-asset'
import { Video } from 'expo-av'

const Page = () => {
  const [assets,error] = useAssets([require('@/assets/videos/intro.mp4')])
  return (
    <View >
      {assets && <Video source={assets[0]} style={{width:300,height:300}} />}
      {/* vimal */}
      <Text>Page</Text>
      
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
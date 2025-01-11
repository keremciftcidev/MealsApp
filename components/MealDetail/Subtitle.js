import { Text,StyleSheet,View } from "react-native";


function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        fontSize:18,
        fontWeight:"bold",
        margin:4,
        textAlign:"center",
        color:"#5e4646"
      },
      subtitleContainer:{
    
        padding:6,
        marginHorizontal:64,
        marginVertical:4,
        borderBottomColor:"#5e4646",
        borderBottomWidth:2
      }
})

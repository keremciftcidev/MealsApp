import { Text, View, StyleSheet } from "react-native";

function List({data}) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}  key={dataPoint}>
      <Text style={styles.itemText} >{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listItem:{
        paddingHorizontal:8,
        paddingVertical:6,
        borderRadius:6,
        marginVertical:4,
        marginHorizontal:64,
        backgroundColor:"#5e4646"

    },itemText:{
        color:"#f3e5e5",
        textAlign:"center"
    }
});

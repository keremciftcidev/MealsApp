import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed:{
    opacity:0.5,
    color:"white"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius:8,
    justifyContent: "center",
    alignItems: "center",
  },
});

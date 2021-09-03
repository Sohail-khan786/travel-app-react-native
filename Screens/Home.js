import React, { useState } from "react";
import {
  Button,
  Image,
  RecyclerViewBackedScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const image = {
    uri:
      "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };

  const recentImage = {
    uri:
      "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://images.pexels.com/photos/415958/pexels-photo-415958.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      },
      title: "Switzerland",
      key: "1",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/2440079/pexels-photo-2440079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      title: "New Zeland",
      key: "2",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      title: "Rome",
      key: "3",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      title: "Tahiti",
      key: "4",
    },
  ]);

  const goToDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <View>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.darkOverlay}></View>

          <Feather
            name="menu"
            size={24}
            color="#fff"
            style={{ position: "absolute", top: 40, left: 16 }}
          />
          <Feather
            name="bell"
            size={24}
            color="#fff"
            style={{ position: "absolute", top: 40, right: 16 }}
          />

          <View style={styles.searchConatainer}>
            <Text style={styles.userGreet}>Hi Sohail</Text>
            <Text style={styles.userText}>
              Where Would You Like To Go Today
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Search Destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={{ position: "absolute", top: 30, right: 56, opacity: 0.6 }}
            />
          </View>
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={{ padding: 16, paddingLeft: 7 }}>
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 22 }}>
            Top Trending
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={goToDetails}>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        height: 250,
                        marginRight: 7,
                        marginLeft: 7,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <Feather
                    name="map-pin"
                    size={24}
                    style={styles.imageLocationIcon}
                  />
                  <Text style={styles.imageText}>{item.title}</Text>
                </View>
              );
            }}
          ></FlatList>
        </View>
        <View style={{ paddingBottom: 30 }}>
          <View
            style={{
              padding: 20,
              paddingLeft: 7,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 22 }}>
              Recently Viewed
            </Text>
            <Text
              style={{ fontWeight: "bold", color: "#ff6200", fontSize: 14 }}
            >
              View All
            </Text>
          </View>
          <TouchableOpacity onPress={goToDetails}>
            <Image
              source={recentImage}
              style={{
                width: "90%",
                height: 250,
                borderRadius: 20,
                alignSelf: "center",
              }}
            />
            <Feather
              name="map-pin"
              size={24}
              color="black"
              style={{
                ...styles.imageLocationIcon,
                left: 30,
              }}
            />
            <Text
              style={{
                ...styles.imageText,
                left: 60,
                fontSize: 20,
              }}
            >
              Venice
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: "#000",
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  searchConatainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  userGreet: {
    fontSize: 38,
    color: "white",
    fontWeight: "bold",
  },
  userText: {
    fontSize: 16,
    color: "white",
    fontWeight: "normal",
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    width: "90%",
  },
  test: {
    fontWeight: "bold",
    color: "black",
    fontSize: 38,
  },
  imageLocationIcon: {
    position: "absolute",
    bottom: 15,
    left: 15,
    color: "#fff",
  },
  imageText: {
    position: "absolute",
    bottom: 15,
    left: 45,
    color: "#fff",
  },
});

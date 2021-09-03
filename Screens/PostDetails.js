import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PostDetails({ navigation }) {
  const image = {
    uri:
      "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27",
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

  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <ImageBackground
        source={image}
        style={{ width: "100%", height: 270 }}
        imageStyle={{ borderBottomRightRadius: 45, borderBottomLeftRadius: 45 }}
      >
        <View>
          <Feather
            onPress={() => navigation.goBack()}
            name="arrow-left"
            size={24}
            color="#fff"
            style={{
              position: "absolute",
              top: 40,
              left: 20,
              backgroundColor: "#ff6200",
              padding: 10,
              borderRadius: 40,
            }}
          />
        </View>

        <View>
          <Feather
            name="heart"
            size={24}
            color="#fff"
            style={{
              position: "absolute",
              top: 40,
              right: 20,
              backgroundColor: "#ff6200",
              padding: 10,
              borderRadius: 40,
            }}
          />
        </View>

        <Text style={styles.placeName}>Switzerland</Text>
        <Text style={styles.tagLine}>
          A Place where Beauty is Beyond your Imagination
        </Text>
      </ImageBackground>

      <TouchableOpacity style={styles.bookTicketBtn}>
        <View>
          <Text style={styles.bookTicketText}>Book Now</Text>
        </View>
      </TouchableOpacity>

      <ScrollView>
        <Text style={{ padding: 14, fontSize: 20, fontWeight: "bold" }}>
          About the Place
        </Text>
        <Text
          style={{
            padding: 14,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.3,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Switzerland is a small mountainous country located in central Europe.
          This landlocked country is about the size of New Jersey and is between
          France and Italy. It is also bordered by Austria, Germany, and
          Liechtenstein.Switzerland is a small mountainous country located in
          central Europe. This landlocked country is about the size of New
          Jersey and is between France and Italy. It is also bordered by
          Austria, Germany, and Liechtenstein.Switzerland is a small mountainous
          country located in central Europe. This landlocked country is about
          the size of New Jersey and is between France and Italy. It is also
          bordered by Austria, Germany, and Liechtenstein.Switzerland is a small
          mountainous country located in central Europe. This landlocked country
          is about the size of New Jersey and is between France and Italy. It is
          also bordered by Austria, Germany, and Liechtenstein.Switzerland is a
          small mountainous country located in central Europe. This landlocked
          country is about the size of New Jersey and is between France and
          Italy. It is also bordered by Austria, Germany, and
          Liechtenstein.Switzerland is a small mountainous country located in
          central Europe. This landlocked country is about the size of New
          Jersey and is between France and Italy. It is also bordered by
          Austria, Germany, and Liechtenstein.
        </Text>

        <View>
          <Text style={{ padding: 14, fontSize: 20, fontWeight: "bold" }}>
            Suggested Places
          </Text>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        height: 150,
                        marginRight: 7,
                        marginLeft: 7,
                        borderRadius: 10,
                        paddingBottom: 20,
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
  placeName: {
    position: "absolute",
    bottom: 50,
    left: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  tagLine: {
    position: "absolute",
    bottom: 30,
    left: 20,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  bookTicketBtn: {
    position: "absolute",
    right: 12,
    top: 240,
    backgroundColor: "#ff6200",
    padding: 16,
    borderRadius: 40,
  },
  bookTicketText: { color: "#fff", fontSize: 14 },
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

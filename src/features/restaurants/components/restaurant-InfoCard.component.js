import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text,StyleSheet } from "react-native";

const Title = styled.Text`
      padding:16px;
`

export const RestaurantInfoCard = ({restaurant = {}}) =>{
    const{
        name = 'Some Random Restaurant',
        icon,
        photos = [
            "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600",
          ],
        address= "SomeRandomStreet",
        openingHours,
        isOpenNow= true,
        ratings=4.5,
        isClosedTemporarily,
    }=restaurant;
   
    return(
   <Card elevation={5} style={styles.card}>
    <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
    <Text style={styles.title}>Some Restaurant</Text>
   </Card>
    );

}

const styles= StyleSheet.create({
  card:  { backgroundColor:"white",},
  cover: { padding: 12, backgroundColor: "white" },
  title: { padding: 12 },
})
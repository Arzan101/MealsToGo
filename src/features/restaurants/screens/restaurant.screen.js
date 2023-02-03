import React from "react"
import { StatusBar, SafeAreaView,StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-InfoCard.component";

const Title = styled.Text`
      padding:16px;
`

export const RestaurantScreen =()=>
(
<SafeAreaView style={styles.container}>
<View style={styles.search}>
<Searchbar />
</View>

<View style={styles.list}>
 <RestaurantInfoCard/>
</View>
</SafeAreaView>

    )

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: StatusBar.currentHeight,
        },
        search: {
          padding: 16,
           },
        list: {
            flex: 1,
            padding: 16,
            backgroundColor: "blue",
          },
      });
import React from "react"
import { StatusBar, StyleSheet,SafeAreaView, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-InfoCard.component";
import styled from "styled-components/native";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen =()=>
(
  <SafeArea>
    <SearchContainer>
     <Searchbar />
    </SearchContainer>
    
    <RestaurantListContainer>
     <RestaurantInfoCard />
    </RestaurantListContainer>
  
    </SafeArea>
    )

   
   
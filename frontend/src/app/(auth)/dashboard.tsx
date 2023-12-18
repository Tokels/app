import React from 'react';
import Card from '../../components/Card';
import AuthorizedCards from '../../components/AuthorizedCards';
import { View } from 'react-native';

const Dashboard = () => {
  return (
    <View>
      <Card />
      <AuthorizedCards />
    </View>
  );
};

export default Dashboard;

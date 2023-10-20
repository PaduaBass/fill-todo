import { Image, ListRenderItem, Text, View } from "react-native";
import * as S from './Home.styles';
import Logo from '../../../assets/logo.png';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../components/Button/Button";
import { useTheme } from "styled-components";
import Switch from "../../components/Switch/Switch";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp, HomeScreenRouteProp } from "../../routes/types";
import useTodoStore, { TodoType } from "../../store/todoStore";
import Card from "../../components/Card/Card";
import { Feather } from "@expo/vector-icons";
import { useMemo, useState,  } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import useThemeStore from "../../store/themeStore";
import Header from "../../components/Header/Header";
import Schedule from "../../components/Schedule/Schedule";
import { useTranslation } from "react-i18next";



const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { todos, showDone, changeShowDone, changeStatus, showGrid, changeShowGrid } = useTodoStore();
  const { toggleTheme, themeMode } = useThemeStore();
  const { t } = useTranslation();

  const handleNavigateNewTodo = () => {
    navigation.navigate("newTodo");
  }


  const todosFilter = todos.filter(todo => !todo.isDone);


  const renderItem: ListRenderItem<unknown> = ({ item }) => (
    <Card 
      onPress={() => {
        changeStatus(item as TodoType);
      }} 
      showGrid={showGrid} 
      todo={item as TodoType} 
    />
  );

  return <S.Container>
    <Header />
    <S.Content insets={insets}>
      <Schedule 
        key={showGrid ? '_' : '#'} 
        numColumns={showGrid ? 2 : 0} 
        horizontal={false} 
        showsVerticalScrollIndicator={false} 
        data={showDone ? todos : todosFilter} 
        keyExtractor={(_, i) => String(i)} 
        renderItem={renderItem} 
      />
    </S.Content>
    <S.Footer>
      <Switch label={t('labelSwitchButton')} value={showDone} onValueChange={changeShowDone} />
      <Button showIcon title={t('titleButtonNew')} onPress={handleNavigateNewTodo} />
    </S.Footer>
  </S.Container>
}
 
export default Home;
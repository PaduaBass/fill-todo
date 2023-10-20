import { Image, Text, View } from "react-native";
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
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import useThemeStore from "../../store/themeStore";
import Header from "../../components/Header/Header";



const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const store = useTodoStore();
  const [showGrid, setShowGrid] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const { toggleTheme, themeMode } = useThemeStore();


  const handleNavigateNewTodo = () => {
    navigation.navigate("newTodo");
  }

  const todosFilter = store.todos.filter(todo => !todo.isDone);

  const handleChangeGrid = () => {
    setShowGrid(state => !state);
  }
  return <S.Container>
    <Header />
    <S.Content insets={insets}>
      <S.HeaderList>
        <S.VisualizationLabel>Visualizar por </S.VisualizationLabel>
        <TouchableOpacity onPress={handleChangeGrid}>
           <Feather color={themeMode.colors.blueDark} name={showGrid ? 'grid' : 'list'} size={20}/>
        </TouchableOpacity>
      </S.HeaderList>
      <S.List key={showGrid ? '_' : '#'} numColumns={showGrid ? 2 : 0} horizontal={false} showsVerticalScrollIndicator={false} data={showDone ? store.todos : todosFilter} keyExtractor={(_, i) => String(i)} renderItem={({ item }) => (
        <Card onPress={() => {
          store.changeStatus(item as TodoType);
        }} showGrid={showGrid} todo={item as TodoType} />
      )}></S.List>
    </S.Content>
    <S.Footer>
      <Switch label="Show done" value={showDone} onValueChange={() => setShowDone(state => !state)} />
      <Button showIcon title="New" onPress={handleNavigateNewTodo} />
    </S.Footer>
  </S.Container>
}
 
export default Home;
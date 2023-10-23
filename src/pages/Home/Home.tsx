import { type ListRenderItem } from 'react-native';
import * as S from './Home.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import Switch from '../../components/Switch/Switch';
import { useNavigation } from '@react-navigation/native';
import { type HomeScreenNavigationProp } from '../../routes/types';
import useTodoStore, { type TodoType } from '../../store/todoStore';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Schedule from '../../components/Schedule/Schedule';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { todos, showDone, changeShowDone, changeStatus, showGrid } = useTodoStore();
  const { t } = useTranslation();
  const handleNavigateNewTodo = () => {
    navigation.navigate('newTodo');
  };

  const todosFilter = todos.filter((todo) => !todo.isDone);

  const renderItem: ListRenderItem<unknown> = ({ item }) => (
    <Card
      onPress={() => {
        changeStatus(item as TodoType);
      }}
      showGrid={showGrid}
      todo={item as TodoType}
    />
  );

  return (
    <S.Container>
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
  );
};

export default Home;

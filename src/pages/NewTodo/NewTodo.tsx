import * as S from './NewTodo.styles';
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import InputCard from "../../components/InputCard/InputCard";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTodoFormData, useTodoFormSchema } from "./useTodoFormSchema";
import { useEffect, useState } from "react";
import useTodoStore, { TodoType } from "../../store/todoStore";
import Header from "../../components/Header/Header";
import { ListRenderItem, View, ViewBase } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Schedule from '../../components/Schedule/Schedule';
import Card from '../../components/Card/Card';
import useThemeStore from '../../store/themeStore';
import Switch from '../../components/Switch/Switch';
import { useTranslation } from 'react-i18next';
const NewTodo = () => {
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();
  const { themeMode } = useThemeStore();
  const { showDone, addTodo, changeStatus, todos, showGrid, changeShowDone } = useTodoStore();
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreateTodoFormData>({
    resolver: zodResolver(useTodoFormSchema),
  });
  const handleAddTodo = (todo: TodoType) => {
    addTodo(todo);
    goBack();
  }

  useEffect(() => {
    setValue('description', "");
    setValue('createdAt', new Date());
    setValue('isDone', false);
  }, []);
  
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
    <S.InputArea>
      <InputCard autoFocus returnKeyType='done' onSubmitEditing={handleSubmit(handleAddTodo)} isError={errors.description} onChangeText={t => setValue('description', t)} placeholder={t('placeholderInput')} />
      <S.ButtonsArea>
        <Switch label={t('labelSwitchButton')} value={showDone} onValueChange={changeShowDone} />
        <S.ButtonsRow>
          <Button onPress={goBack} showIcon color={themeMode.colors.white} buttonColor={themeMode.colors.danger} name="x" title={t('titleButtonCancel')}  />
          <Button showIcon onPress={handleSubmit(handleAddTodo)} name='check' title={t('titleButtonSave')}  />
        </S.ButtonsRow>
      </S.ButtonsArea>
    </S.InputArea>
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
  </S.Container>
}
 
export default NewTodo;
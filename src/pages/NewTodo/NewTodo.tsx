import * as S from './NewTodo.styles';
import Button from "../../components/Button/Button";
import theme from '../../theme/light';
import { useNavigation } from "@react-navigation/native";
import InputCard from "../../components/InputCard/InputCard";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTodoFormData, useTodoFormSchema } from "./useTodoFormSchema";
import { useEffect } from "react";
import useTodoStore, { TodoType } from "../../store/todoStore";
import Header from "../../components/Header/Header";
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const NewTodo = () => {
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();
  const store = useTodoStore();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreateTodoFormData>({
    resolver: zodResolver(useTodoFormSchema),
  });
  const handleAddTodo = (todo: TodoType) => {
    store.addTodo(todo);
    goBack();
  }

  useEffect(() => {
    setValue('description', "");
    setValue('createdAt', new Date());
    setValue('isDone', false);
  }, []);
  
  return <S.Container>
    <Header />
    <S.Content insents={insets}>
      <InputCard isError={errors.description} onChangeText={t => setValue('description', t)} placeholder='Pay credit card bill...' {...register('description')} />
    </S.Content>
    <S.Footer behavior="padding">
      <View />
      <S.ButtonsArea>
        <Button onPress={goBack} showIcon color={theme.colors.white} buttonColor={theme.colors.danger} name="x" title="Cancel"  />
        <Button showIcon onPress={handleSubmit(handleAddTodo)} name='check' title="Save"  />
      </S.ButtonsArea>
    </S.Footer>
  </S.Container>
}
 
export default NewTodo;
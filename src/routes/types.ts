import { type ParamListBase } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export interface RootStackParamList extends ParamListBase {
  home: undefined;
  newTodo: undefined;
}

type Props = StackScreenProps<RootStackParamList, 'home'>;

export type HomeScreenNavigationProp = Props['navigation'];

export type HomeScreenRouteProp = Props['route'];

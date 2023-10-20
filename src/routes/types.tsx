import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  home: undefined;
  newTodo: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'home'>;

export type HomeScreenNavigationProp = Props['navigation'];

export type HomeScreenRouteProp = Props['route'];
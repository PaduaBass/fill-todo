import styled from 'styled-components/native';

export const List = styled.FlatList.attrs(({ numColumns }) => ({
  columnWrapperStyle: numColumns !== undefined && numColumns > 0 && { justifyContent: 'space-between' },
}))`

`;

export const HeaderList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;


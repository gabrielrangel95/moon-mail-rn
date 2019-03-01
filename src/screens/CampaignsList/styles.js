import styled from 'styled-components/native';
import { colors } from '../../styles';

export const MainView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const LoaderView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderRightBtn = styled.TouchableOpacity`
  display: flex;
  width: 32;
  height: 32;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

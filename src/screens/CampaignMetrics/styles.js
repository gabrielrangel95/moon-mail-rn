import styled from 'styled-components/native';
import { colors } from '../../styles';

export const MainView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.lighter};
  padding-top: 32px;
`;

export const CardBodyContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 12px;
`;

export const BodyTitle = styled.Text`
  font-size: 14px;
  color: ${colors.regular};
`;

export const BodyMetric = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.secondary ? colors.secondaryText : colors.primaryText)}
`;

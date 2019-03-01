import styled from 'styled-components/native';
import { colors } from '../../styles';

export const MainView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.lighter};
  padding-top: 32px;
`;

export const MainScrollView = styled.ScrollView`
  flex: 1;
`;

export const CardBodyContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 12px;
`;

export const TopContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MetricsButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  border-radius: 6px;
  padding: 0px 8px;
  background-color: ${colors.white};
`;

export const MetricsButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
`;

export const CampaignTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  padding-bottom: 24px;
`;

export const CardContentTextBold = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.black};
  padding-bottom: 4px;
`;

export const CardContentTextNormal = styled.Text`
  font-size: 14px;
  color: ${colors.black};
`;

import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// graphQL
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
// UI elements
import { Text, ActivityIndicator, ScrollView } from 'react-native';
import { List } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// redux actions
import { CampaignsActions } from '../../redux/actions';
// graphQL queries
import { listCampaigns } from '../../graphql/queries';
// UI styles
import { MainView, LoaderView, HeaderRightBtn } from './styles';
import { colors } from '../../styles';

const { Item } = List;

class CampaignsList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    if (params && params.loggedOut) {
      return {
        header: null,
      };
    }
    return {
      title: 'Campaigns',
      headerRight: (
        <HeaderRightBtn onPress={() => params.callLogout()}>
          <Icon name="logout" size={20} />
        </HeaderRightBtn>
      )
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      callLogout: this.callLogout,
      loggedOut: false,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { authState, navigation } = nextProps;
    if (authState !== 'signedIn') {
      navigation.setParams({
        callLogout: this.callLogout,
        loggedOut: false
      });
    }
  }

  callLogout = () => {
    const { onStateChange, navigation } = this.props;
    Auth.signOut()
      .then(() => {
        onStateChange('signedOut', null);
        navigation.setParams({
          loggedOut: true
        });
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }

  onClickCampaign = async (campaign) => {
    const { navigation, setCampaignSelected } = this.props;
    await setCampaignSelected(campaign);
    navigation.navigate('CampaignDetail');
  }

  render() {
    const { campaigns } = this.props;
    if (campaigns.loading) {
      return (
        <LoaderView>
          <ActivityIndicator size="large" color={colors.primary} />
        </LoaderView>
      );
    }

    return (
      <MainView>
        {
          campaigns.listCampaigns ? (
            <ScrollView
              style={{ flex: 1, backgroundColor: '#f5f5f9' }}
              automaticallyAdjustContentInsets={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <List style={{ flex: 1 }}>
                {
                  campaigns.listCampaigns.items.map(item => (
                    <Item
                      key={item.id}
                      wrap
                      arrow="horizontal"
                      onPress={() => this.onClickCampaign(item)}
                    >
                      {item.name}
                    </Item>
                  ))
                }
              </List>
            </ScrollView>
          ) : (
            <Text>No campaigns</Text>
          )
        }
      </MainView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setCampaignSelected: CampaignsActions.setCampaignSelected
}, dispatch);

const WithGraphQL = graphql(gql`${listCampaigns}`, {
  name: 'campaigns',
})(CampaignsList);

const Connected = connect(null, mapDispatchToProps)(WithGraphQL);
const WithAuthenticator = withAuthenticator(Connected);
export { WithAuthenticator as CampaignsList };

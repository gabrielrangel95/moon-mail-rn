import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// graphQL
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

// ui components
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native';
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome';

// redux actions
import { CampaignsActions } from '../../redux/actions';

// graphQL queries
import { getSegment as getSegmentQuery } from '../../graphql/queries';

// ui
import {
  MainView,
  MainScrollView,
  CardBodyContent,
  CardContentTextBold,
  CardContentTextNormal,
  CampaignTitle,
  TopContainer,
  MetricsButton,
  MetricsButtonText
} from './styles';

const { Header, Body } = Card;


class CampaignDetail extends Component {
  state = {
    loading: true,
    segment: null
  }

  componentDidMount() {
    this.getSegment();
  }

  getSegment = async () => {
    const { selected, client } = this.props;
    const segmentObject = await client.query({
      query: gql`${getSegmentQuery}`,
      variables: { id: selected.segmentId },
    });
    const { data } = segmentObject;
    const { getSegment } = data;
    this.setState({
      loading: false,
      segment: getSegment
    });
  }

  onPressMetrics = () => {
    const { navigation } = this.props;
    navigation.navigate('CampaignMetrics');
  }

  render() {
    const { selected } = this.props;
    const { messageConfiguration, schedule } = selected;
    const { loading, segment } = this.state;
    const startDate = new Date(schedule.startTime).toDateString();
    return (
      <MainView>
        <MainScrollView>
          <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <TopContainer>
              <CampaignTitle>{selected.name}</CampaignTitle>
              <MetricsButton onPress={this.onPressMetrics}>
                <MetricsButtonText>Campaign Metrics</MetricsButtonText>
                <Icon name="bar-chart" size={20} />
              </MetricsButton>
            </TopContainer>
            <WhiteSpace size="lg" />
            <Card>
              <Header
                title="Campaign Detail"
              />
              <Body>
                <CardBodyContent>
                  <CardContentTextBold>Name:</CardContentTextBold>
                  <CardContentTextNormal>{selected.name}</CardContentTextNormal>
                  <WhiteSpace size="sm" />
                  <CardContentTextBold>Campaign Status:</CardContentTextBold>
                  <CardContentTextNormal>{selected.state.toLowerCase()}</CardContentTextNormal>
                </CardBodyContent>
              </Body>
            </Card>

            <WhiteSpace size="lg" />
            <Card>
              <Header
                title="E-mail details"
              />
              <Body>
                <CardBodyContent>
                  <CardContentTextBold>Sender email address:</CardContentTextBold>
                  <CardContentTextNormal>{messageConfiguration.fromAddress}</CardContentTextNormal>
                  <WhiteSpace size="sm" />
                  <CardContentTextBold>Subject:</CardContentTextBold>
                  <CardContentTextNormal>{messageConfiguration.title}</CardContentTextNormal>
                  <WhiteSpace size="sm" />
                  <CardContentTextBold>Email body:</CardContentTextBold>
                  <ScrollView style={{ flexGrow: 1 }}>
                    <HTML html={messageConfiguration.htmlBody} />
                  </ScrollView>
                </CardBodyContent>
              </Body>
            </Card>

            <WhiteSpace size="lg" />
            <Card>
              <Header
                title="Schedule"
              />
              <Body>
                <CardBodyContent>
                  <CardContentTextBold>Start date:</CardContentTextBold>
                  <CardContentTextNormal>{startDate}</CardContentTextNormal>
                  <WhiteSpace size="sm" />
                  <CardContentTextBold>Time zone:</CardContentTextBold>
                  <CardContentTextNormal>{schedule.timezone}</CardContentTextNormal>
                  <WhiteSpace size="sm" />
                  <CardContentTextBold>Respects local time?</CardContentTextBold>
                  <CardContentTextNormal>{schedule.isLocalTime ? 'Yes' : 'No'}</CardContentTextNormal>
                  <WhiteSpace size="sm" />
                  <CardContentTextBold>Frequency:</CardContentTextBold>
                  <CardContentTextNormal>{schedule.frequency.toLowerCase()}</CardContentTextNormal>
                </CardBodyContent>
              </Body>
            </Card>

            <WhiteSpace size="lg" />
            <Card>
              <Header
                title="Segment details"
              />
              <Body>
                <CardBodyContent>
                  {
                    loading ? (
                      <ActivityIndicator size="small" />
                    ) : (
                      <View>
                        <CardContentTextBold>Segment name:</CardContentTextBold>
                        <CardContentTextNormal>{segment.name}</CardContentTextNormal>
                        <WhiteSpace size="sm" />
                        <CardContentTextBold>Type:</CardContentTextBold>
                        <CardContentTextNormal>{segment.type}</CardContentTextNormal>
                        <WhiteSpace size="sm" />
                        <CardContentTextBold>Number of records</CardContentTextBold>
                        <CardContentTextNormal>{segment.records}</CardContentTextNormal>
                      </View>
                    )
                  }

                </CardBodyContent>
              </Body>
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
        </MainScrollView>
      </MainView>
    );
  }
}

CampaignDetail.navigationOptions = () => ({
  title: 'Campaign Detail'
});

const mapStateToProps = store => ({
  selected: store.campaignState.selected
});

const mapDispatchToProps = dispatch => bindActionCreators({
  clearCampaignSelected: CampaignsActions.clearCampaignSelected
}, dispatch);

const Connected = connect(mapStateToProps, mapDispatchToProps)(CampaignDetail);

const WithApollo = withApollo(Connected);

export { WithApollo as CampaignDetail };

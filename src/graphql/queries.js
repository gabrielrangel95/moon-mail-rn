// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    name
    where
    when
    description
    comments {
      nextToken
    }
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: TableEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      where
      when
      description
    }
    nextToken
  }
}
`;
export const getCampaigns = `query GetCampaigns($id: ID!) {
  getCampaigns(id: $id) {
    id
    creationDate
    holdoutPercent
    isPaused
    isDraft
    lastModifiedDate
    name
    segmentId
    messageConfiguration {
      body
      fromAddress
      htmlBody
      title
    }
    schedule {
      endTime
      startTime
      frequency
      isLocalTime
    }
    state
    metrics {
      sent
      delivered
      emailsOpened
      linksClicked
      complaints
      bounces
      deliveryRate
      openRate
      bounceRate
      complainRate
    }
  }
}
`;
export const listCampaigns = `query ListCampaigns(
  $filter: TableCampaignsFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      creationDate
      holdoutPercent
      isPaused
      isDraft
      lastModifiedDate
      name
      segmentId
      messageConfiguration {
        body
        fromAddress
        htmlBody
        title
      }
      schedule {
        endTime
        startTime
        frequency
        isLocalTime
      }
      state
      metrics {
        sent
        delivered
        emailsOpened
        linksClicked
        complaints
        bounces
        deliveryRate
        openRate
        bounceRate
        complainRate
      }
    }
    nextToken

  }
}
`;
export const getSegment = `query GetSegment($id: ID!) {
  getSegment(id: $id) {
    id
    name
    type
    records
  }
}
`;
export const listSegments = `query ListSegments(
  $filter: TableSegmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listSegments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      type
      records
    }
    nextToken
  }
}
`;

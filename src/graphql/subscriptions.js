// eslint-disable
// this is an auto generated file. This will be overwritten

export const subscribeToEventComments = `subscription SubscribeToEventComments($eventId: String!) {
  subscribeToEventComments(eventId: $eventId) {
    eventId
    commentId
    content
    createdAt
  }
}
`;
export const onCreateCampaigns = `subscription OnCreateCampaigns(
  $id: ID
  $creationDate: AWSDateTime
  $holdoutPercent: Float
  $isPaused: Boolean
  $isDraft: Boolean
) {
  onCreateCampaigns(
    id: $id
    creationDate: $creationDate
    holdoutPercent: $holdoutPercent
    isPaused: $isPaused
    isDraft: $isDraft
  ) {
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
export const onUpdateCampaigns = `subscription OnUpdateCampaigns(
  $id: ID
  $creationDate: AWSDateTime
  $holdoutPercent: Float
  $isPaused: Boolean
  $isDraft: Boolean
) {
  onUpdateCampaigns(
    id: $id
    creationDate: $creationDate
    holdoutPercent: $holdoutPercent
    isPaused: $isPaused
    isDraft: $isDraft
  ) {
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
export const onDeleteCampaigns = `subscription OnDeleteCampaigns(
  $id: ID
  $creationDate: AWSDateTime
  $holdoutPercent: Float
  $isPaused: Boolean
  $isDraft: Boolean
) {
  onDeleteCampaigns(
    id: $id
    creationDate: $creationDate
    holdoutPercent: $holdoutPercent
    isPaused: $isPaused
    isDraft: $isDraft
  ) {
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
export const onCreateSegment = `subscription OnCreateSegment(
  $id: ID
  $name: String
  $type: String
  $records: Int
) {
  onCreateSegment(id: $id, name: $name, type: $type, records: $records) {
    id
    name
    type
    records
  }
}
`;
export const onUpdateSegment = `subscription OnUpdateSegment(
  $id: ID
  $name: String
  $type: String
  $records: Int
) {
  onUpdateSegment(id: $id, name: $name, type: $type, records: $records) {
    id
    name
    type
    records
  }
}
`;
export const onDeleteSegment = `subscription OnDeleteSegment(
  $id: ID
  $name: String
  $type: String
  $records: Int
) {
  onDeleteSegment(id: $id, name: $name, type: $type, records: $records) {
    id
    name
    type
    records
  }
}
`;

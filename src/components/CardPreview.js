import {
  ColumnContainer,
  PreviewContainer,
  PreviewTextBlock,
} from "./StyledComponents";

export default function CardPreview(props) {
  const { recipientName, holidayName, senderName } = props;
  return (
    <ColumnContainer>
      <PreviewContainer>
        <PreviewTextBlock>Hey {recipientName},</PreviewTextBlock>
        <PreviewTextBlock>
          I hope you have a great {holidayName}!
        </PreviewTextBlock>
        <PreviewTextBlock>From {senderName}</PreviewTextBlock>
      </PreviewContainer>
    </ColumnContainer>
  );
}

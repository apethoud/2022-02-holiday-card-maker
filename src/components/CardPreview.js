import { ColumnContainer } from "./StyledComponents";

export default function CardPreview(props) {
  const { recipientName, holidayName, senderName } = props;
  return (
    <ColumnContainer>
      <div className="PreviewContainer">
        <div className="PreviewTextBlock">Hey {recipientName},</div>
        <div className="PreviewTextBlock">
          I hope you have a great {holidayName}!
        </div>
        <div className="PreviewTextBlock">From {senderName}</div>
      </div>
    </ColumnContainer>
  );
}

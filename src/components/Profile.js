import { useParams } from "react-router-dom";
import { Text } from "./StyledComponents";

export default function Profile(props) {
  let params = useParams();

  return <Text>Hello {params.username}!</Text>;
}

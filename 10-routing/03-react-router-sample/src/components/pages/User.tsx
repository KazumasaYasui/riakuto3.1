import { FC } from 'react';
import {useParams, useRouteMatch} from "react-router";

type Props = {
  id: number;
  name: string;
}

const User: FC<Props> = ({ id = 0, name = "sample" }) => {
  const userId = useParams();
  const match = useRouteMatch();

  // for debug
  console.log(userId);
  console.log(match);

  return (
    <>
      <p>ユーザーページですー！</p>
      <p>ID：{id}</p>
      <p>名前：{name}</p>
    </>
  );
};

export default User;

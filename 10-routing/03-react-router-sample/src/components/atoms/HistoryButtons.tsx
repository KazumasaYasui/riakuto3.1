import { FC } from 'react';
import { useHistory } from 'react-router';

const HistoryButtons: FC = () => {
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.goBack()}>
        戻る
      </button>
      <button type="button" onClick={() => history.goForward()}>
        進む
      </button>
      <button type="button" onClick={() => history.push("/")}>
        トップページへ
      </button>
    </>
  );
};

export default HistoryButtons;

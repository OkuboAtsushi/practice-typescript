export const Practice4 = () => {
  const calcTutalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTutalFee(1000);
  return (
    <div>
      <p>練習問題:設定ファイルの型指定</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};

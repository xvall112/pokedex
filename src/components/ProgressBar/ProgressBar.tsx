import style from "./progressBar.module.scss";

interface Props {
  completed: number;
}
const ProgressBar = (props: Props) => {
  const { completed } = props;
  //max point 150
  const completedPer = (100 / 150) * completed;

  return (
    <div className={style.containerStyles}>
      <div className={style.fillerStyles} style={{ width: `${completedPer}%` }}>
        <span className={style.labelStyles}>{`${completed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
